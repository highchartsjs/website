import { useEffect, useState } from "react";

import { LicenseType, getProductDetail, getTranslate, calcPrice, calcPythonPrice, format } from '@/data/shop/index';
import Tooltip from "./Tooltip";
import { LicensePeroid, getPrice, getDiscountAmount } from "@/data/shop";
import PRODUCTS from '@/data/products.json';
import Caculator from "@/service/Caculator";
import StoreHelper from '@/helper/store';

const ConstProductCode = {
	Core: 'highcharts',
	Python: 'python'
};

const AddonPageCategory = [{
	title: '基础包',
	code: 'core',
	products: [ConstProductCode.Core],
	renderCartItem: function (props, products, callback) {
		return <div class="Cart-category">
			<div class="Cart-category-title">您选购的是<b> {LicenseType[props.type].name} {LicensePeroid[props.peroid].title} </b></div>
			<div class="Cart-item">
				<div class="Cart-item-name">
					<span class="Cart-item-name-content">Highcharts Core</span>

				</div>
			</div>
			<hr />
		</div>
	}
}, {
	title: '额外的软件包',
	code: 'Libraries',
	desc: '同时购买 3 个额外软件包，可以获得 10% 优惠',
	products: [
		'stock',
		'maps',
		'gantt'
	],
	renderCartItem: function (props, data, options, prices, callback) {
		let selected = false;
		for (let i = 0; i < options.products.length; i++) {
			if (data.selected.includes(options.products[i].code)) {
				selected = true;
				break;
			}
		}
		return selected && <div class="Cart-category">
			{
				options.products.map(p => {
					return data.selected.includes(p.code) && <div class="Cart-item-name">
						<span class="Cart-item-name-content">{PRODUCTS[p.code].name}</span>
						<button type="button" aria-label="Delete Highcharts Stock from cart." class="Cart-item-delete-button" onClick={() => callback(p.code)}>Delete</button>
					</div>
				})
			}
			<hr />
		</div>
	}
}, {
	title: '开发者席位',
	number: 1,
	code: 'seats',
	renderCartItem: function (props, data, options, prices, callback) {
		return <div class="Cart-category">
			<div class="Cart-item">
				<div class="Cart-category-name"><span class="Cart-item-name-content">x {data.seat} 开发者席位</span></div>
				<div class="Cart-item-price">{format(prices.seats, 2)} / {getTranslate('per seat')}</div>
			</div>
			<hr />
		</div >
	}
}, {
	title: '扩展包',
	code: '+',
	products: [ConstProductCode.Python],
	renderCartItem: function (props, data, options, prices, callback) {
		let selected = false;

		for (let i = 0; i < options.products.length; i++) {
			if (data.selected.includes(options.products[i].code)) {
				selected = true;
				break;
			}
		}

		return selected && <div class="Cart-category">
			<div class="Cart-category-title">{options.code}</div>
			{
				options.products.map(p => {
					return data.selected.includes(p.code) && <div class="Cart-item">
						<div class="Cart-item-name">
							<span class="Cart-item-name-content">{p.name}</span>
							<button type="button" aria-label="Delete Highcharts Stock from cart." class="Cart-item-delete-button" onClick={() => callback(p.code)}>Delete</button>
						</div>
						<div className="Cart-item-price">
							{format(prices.python, 2)}
						</div>
					</div>
				})
			}
			<hr />
		</div>
	}
}];


function renderDiscounts(props, data, prices) {

	let discount = prices.discount;

	return discount !== 0 && <div class="Cart-category">
		<div class="Cart-category-title">Discounts</div>
		<div class="Cart-item">
			<div class="Cart-item-name"><span class="Cart-item-name-content">Bundle</span></div>
			<div class="Cart-item-price Cart-discount-amount">-{format(discount, 2)}</div>
		</div>
		<hr />
	</div>
}

function getProducts(props) {
	return AddonPageCategory.map(category => {
		category.products?.forEach((product, i) => {
			if (typeof product === 'string') {
				category.products[i] = getProductDetail(product, props.peroid, props.type);
			}
		});
		return category;
	});
};
// 开发者席位下拉框选项
const Seats = [1, 2, 3, 4, 5, 6];

let caculator = null;


function getSelectedFromProps(props) {
	let selected = [ConstProductCode.Core];
	if (props.add && props.add.length) {
		selected = [...selected, ...props.add]
	}
	if (props.python) {
		selected.push(
			ConstProductCode.Python
		);
	}
	return selected;
}

function LicenseConfiguration({ props, callback }) {

	// 根据传入的 Peroid 及 LicenseType 计算产品的价格（后续无更新）
	let products = getProducts(props);
	if (!caculator) {
		caculator = new Caculator(props);
	}


	let [prices, setPrices] = useState({ ...caculator.prices });

	let [data, setData] = useState({
		// 当前选中的产品，产品 code 数组
		selected: getSelectedFromProps(props),
		// 开发者席位
		seat: props.seats || 1
	});

	function _setData(data) {
		StoreHelper.set(caculator.getOptions());
		setData(data);
	}


	function addToCart(product) {
		if (product === ConstProductCode.Core) {
			return false;
		}

		caculator.addOrPlus(product);

		setPrices({ ...caculator.prices });
		_setData({
			...data,
			selected: data.selected.includes(product) ? data.selected.filter(p => p !== product) : [...data.selected, product]
		})
	};

	function setSeat(seat) {
		caculator.setSeats(seat);
		setPrices({ ...caculator.prices });
		_setData({
			...data,
			seat: seat
		});

	}

	useEffect(() => {
		caculator.update(props);
		window.addDropdown(document.querySelector('.Addon-dropdown'))
	}, [props]);


	return <div className="row">
		<div class="col-xl-6 col-lg-7 col-12">
			{
				products.map((category) => {
					return <div className="Addon-page-category">
						<h3>{category.title}</h3>
						{category.desc && <p className="Addon-page-category-info">{category.desc}</p>}
						{
							category.number !== undefined ? <div class="Addon-page-category-row">
								<div class={"Addon-dropdown dropdown"} >
									<button type="button"
										aria-expanded="false" aria-haspopup="listbox" aria-labelledby="seats-selection"
										class="dropdown-toggle Addon-dropdown-toggle Addon-dropdown-toggle-primary">
										<div class="Addon-dropdown-content">
											<div class="Addon-dropdown-title">{data.seat}</div>
											<div class="Addon-dropdown-price"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="6 9 12 15 18 9"></polyline>
											</svg></div>
										</div>
									</button>
									<ul role="listbox" tabindex="-1" x-placement="bottom-start" class={"dropdown-menu"} aria-labelledby="react-aria2198231767-16"
										data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start"
									>
										{
											Seats.map(s =>
												<li className={"dropdown-item" + (s === data.seat ? ' active' : '')} key={'seats-' + s} onClick={(e) => {
													setSeat(s);
												}}>{s}</li>
											)
										}
										<li role="option" tabindex="0" aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item">Need more than 6? Contact us</li>
									</ul>
								</div><button type="button" class="Tooltip-icon Addon-page-help" aria-label="More information about developer seats" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<circle cx="12" cy="12" r="10"></circle>
									<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
									<line x1="12" y1="17" x2="12.01" y2="17"></line>
								</svg></button>
							</div> :
								<>{
									category.products.map((product) => {
										let id = 'addon-checkbox-' + product.code,
											isPython = product.code === ConstProductCode.Python,
											productCode = product.code;
										return <div class="Addon-page-category-row">
											<input type="checkbox" id={id} class="Addon-checkbox-input visually-hidden" disabled="" checked={data.selected.includes(productCode)} />
											<label for={id} class="Addon-checkbox radio" onClick={() => addToCart(productCode)}>
												<div class="Addon-checkbox-icon"></div>
												<span class="Addon-checkbox-content">
													<span class="Addon-checkbox-title">{product.name}</span>
													{
														isPython ? <span>
															<span class="Addon-checkbox-price">{format(prices.python)}</span>
														</span>
															:
															<span>
																<span class="Addon-checkbox-price">{format(caculator.getPrice(product.code))}</span>
																<span class="Addon-checkbox-description">/ {getTranslate('per seat')}</span>
															</span>
													}

												</span>
											</label>
											<Tooltip title="More information about base library" detail={product.desc} className="Addon-page-help" />
										</div>
									})
								}
								</>
						}
					</div>
				})
			}
		</div>
		<div className="col-xl-4 col-lg-5 col-12 offset-xl-2">
			<div class="Cart">
				<div class="Cart-header">
					<h2>购物车</h2>
					<button type="button" class="Cart-empty-button" aria-label="Empty cart">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="3 6 5 6 21 6"></polyline>
							<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
							<line x1="10" y1="11" x2="10" y2="17"></line>
							<line x1="14" y1="11" x2="14" y2="17"></line>
						</svg></button>
				</div>
				{
					products.map(category =>
						category.renderCartItem(props, data, category, prices, (productCode) => {
							addToCart(productCode);
						})
					)
				}
				{
					renderDiscounts(props, data, prices)
				}
				<div class="Cart-category-title">总计</div>
				<div class="Cart-total">
					<span class="Cart-total-content">{format(prices.total, 2)}</span>
				</div>
				<div class="Cart-checkout-button Button Button-secondary" style={{ cursor: 'pointer' }}>
					<div class="Button-content" onClick={() => {
						callback(caculator.getOptions())
					}}>{props.isQuote ? '继续' : '结算'}</div>
				</div>
			</div>
		</div>
	</div>
}

export default LicenseConfiguration;