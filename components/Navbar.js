

import { useState } from "react";

import navbar from "@/data/navbar";
import { Integrations } from './IntegrationList';

import Icon from "./icons";

/**
 * link or button Nav item 
 * @param {*} props 
 * @returns 
 */
function SimpleNav(props) {
	let nav = props.nav;
	return <li className="nav-item" key={nav.code}>
		<a href={nav.link}
			className={nav.type === 'button' ?
				`btn btn-${nav.class} mr-1 btn-small horisontal-menu-item text-uppercase` :
				"nav-link navbar-item"}
		>
			{nav.title}
		</a>
	</li>;
}


function Dropdown(props) {
	let nav = props.nav;
	return <>
		{
			nav.items.map(item =>
				<li className="li-parent" key={item.code}>
					<a class="dropdown-item" href={item.link}>
						<p class="list-group-heading">{item.title}</p>
						<p class="list-group-desc">{item.desc}</p>
					</a>
				</li>
			)
		}
	</>
}

// function DropdownWithMenu(props) {
// 	let nav = props.nav,
// 		activeMenuIndex = props.menu;
// 	return <ul className="list-menu-level-2 col-md-6  p-0 offset-md-2 col-lg-4 offset-lg-5 col-xl-3 offset-xl-6" aria-labelledby="menu-item-1" role="list">
// 		{
// 			nav.items.map((item, menuIdex) => {
// 				let className = menuIdex === activeMenuIndex ? ' active' : ''
// 				return <li className="menu-item row menu-level-2 border-right-white" key={item.code}>
// 					<button aria-expanded="false" data-toggle="list" className={"list-group-item-action" + className}
// 						onClick={() => {
// 							props.callback(menuIdex)
// 						}}
// 					>
// 						<span dangerouslySetInnerHTML={{
// 							__html: item.title.split(' ').map(i => {
// 								if (i === 'Highcharts') {
// 									i += '<sup>®</sup>'
// 								}
// 								return i;
// 							}).join(' ')
// 						}}></span>
// 						<span className="menu-item-icon">
// 							<Icon></Icon>
// 						</span>
// 						{/* <svg className="svg-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// 							<polyline points="9 18 15 12 9 6"></polyline>
// 						</svg> */}
// 					</button>
// 					<div className={"tab-pane menu-level-3" + className}>
// 						<p aria-hidden="true" id="menu-heading-maps" className="list-heading ml-1">{item.title}</p>
// 						<ul role="list" className="list-inner ml-1" aria-labelledby="menu-heading-maps">
// 							{
// 								item.menus.map(menu =>
// 									<li className="menu-item" key={menu.title.toLocaleString()}>
// 										<a href={menu.link}>{menu.title}</a>
// 									</li>
// 								)
// 							}
// 						</ul>
// 					</div>
// 				</li>
// 			})
// 		}
// 	</ul>
// }


function ProductDropdown() {
	return <>
		<ul role="list" id="products-menu-list">
			<li class="Charting-li products-menu-list-item">
				<h2 id="Charting-desc" class="products-menu-title"> Charting</h2>
				<ul role="list" aria-labelledby="Charting-desc">
					<li class="li-parent"> <a class="dropdown-item list-group-items" href="/products/highcharts">
						<img alt="" src="https://wp-assets.highcharts.com/svg/core-icon.svg" />
						<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Core</p>
						<p class="list-group-desc">我们的核心库，包括所有标准图表类型及其他的多种图表类型</p>
					</a></li>
					<li class="li-parent"> <a class="dropdown-item list-group-items" href="/products/stock">
						<img alt="" src="https://wp-assets.highcharts.com/svg/stock-icon.svg" />
						<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Stock</p>
						<p class="list-group-desc">创建股票或常规的时间线图表。</p>
					</a></li>
					<li class="li-parent"> <a class="dropdown-item list-group-items" href="/products/maps">
						<img alt="" src="https://wp-assets.highcharts.com/svg/maps-icon.svg" />
						<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Maps</p>
						<p class="list-group-desc">创建与地理相关的互动地图</p>
					</a></li>
					<li class="li-parent"> <a class="dropdown-item list-group-items" href="/products/gantt">
						<img alt="" src="https://wp-assets.highcharts.com/svg/gantt-icon.svg" />
						<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Gantt</p>
						<p class="list-group-desc">展示时间相关的任务、事件和资源的甘特图</p>
					</a></li>
				</ul>
			</li>
			<li class="li-parent addons-li products-menu-list-item">
				<h2 id="addons-desc" class="products-menu-title">Add ons</h2> <a class="dropdown-item list-group-items" href="/products/highcharts-editor">
					<img alt="" src="https://wp-assets.highcharts.com/svg/editor-icon.svg" />
					<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Editor</p>
					<p class="list-group-desc">所见即所得的非编程创建图表利器</p>
				</a>
			</li>
			<li class="li-parent supportmaintenance-li products-menu-list-item">
				<h2 id="supportmaintenance-desc" class="products-menu-title">Support &amp;
					maintenance</h2> <a class="dropdown-item list-group-items" href="/products/highcharts-advantage">
					<img alt="" src="https://wp-assets.highcharts.com/svg/support-icon.svg" />
					<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Advantage</p>
					<p class="list-group-desc">我们一流的服务与支持方案</p>
				</a>
			</li>
			<li id="integrations-li">
				<div class="li-parent"> <a class="dropdown-item" href="/integrations">
					<p class="list-group-heading"> <span>Highcharts<sup>®</sup></span>Integrations</p>
					<p class="list-group-desc">针对不同开平台、语言的扩展包和交互适配</p>
				</a></div>
				<ul role="list" class="products-menu-list-item" id="integrations-list">
					{
						Integrations.map((integration) =>
							<li key={'integration-' + integration.code}> <a href={"/integrations/" + integration.code}>
								<img class="bg-darkblue" alt="" src={"/svg/" + integration.img} />
								{integration.name}
								{integration.isNew && <span class="new-tag">New</span>}
							</a>
							</li>
						)}
					<li id="see-more-integrations"> <a class="dash-link" href="/integrations/community/">查看更多</a></li>
				</ul>
			</li>
		</ul>
		<div id="whats-new" class="bkgPurplePunch">
			<h2>最新动态</h2>
			<p>Highcharts Python 扩展包，<a class="dash-link" href="/integrations/python/">查看详情</a></p> 
		</div>
	</>
}

/**
 * Navbar
 * @param {*} props 
 * @returns 
 */
function Nav(props) {

	// const [states, setStates] = useState({
	// 	nav: null,
	// 	menu: 0
	// });

	// const _setStates = function (navIndex, menuIdex) {
	// 	setStates(menuIdex === undefined ? {
	// 		nav: navIndex,
	// 		menu: 0
	// 	} :
	// 		{
	// 			...states,
	// 			menu: menuIdex,
	// 		})
	// };

	let buttons = navbar.filter(n => n.type === 'button');
	console.log(buttons)
	return <div id="navbar-collapse" className="collapse navbar-collapse">
		<ul className="navbar-nav" role="list">
			{navbar.map((nav, index) => {
				if(nav.show === false || nav.type === 'button') {
					return null;
				}
				// let isAcitve = nav.items && index === states.nav;
				return nav.items ?
					<li className={"nav-item dropdown"} key={nav.code}>
						<button
							title={nav.title} data-toggle="dropdown"
							aria-controls={nav.title}
							// onClick={() => { _setStates(isAcitve ? null : index) }}
							className="btn nav-link navbar-item dropdown-toggle"
						>
							{nav.title}
							<span className="menu-icon">
								<Icon name="narrow" />
							</span>
						</button>
						{
							nav.code === 'products' ?
								<div className={"container-md dropdown-menu"} id="products-menu-container">
									<ProductDropdown />
								</div> :
								<ul className={"dropdown-menu" }>
									<Dropdown nav={nav}></Dropdown>
								</ul>
						}
					</li>
					:
					<SimpleNav nav={nav} />
			})}

		</ul>
		<div class="try-buy-buttons">
			{/* <button type="button" class="open-search-modal navbar-item d-none d-md-block" data-toggle="modal" data-target="#searchModal">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line> </svg> <span>Search</span> </button> */}
			
			{
				buttons.map(btn => 
					<a href={btn.link} class={"btn navbar-item btn-small btn-" + btn.class} key={btn.code}>{btn.title}</a>
				)
			}
		</div>
	</div>
}

export default Nav;