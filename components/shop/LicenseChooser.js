
'use client'
import { useState } from 'react';
import PRODUCTS from '@/data/products.json';
import {
	Row, Columns, HeaderRow,
	HeaderColumn, ColumnWrapper
} from '@/components/shop/Table';
import Icon from '@/components/shop/Icon';
import { Price, LicenseType, LicensePeroid, Usage, isOEM, getTranslate } from '@/data/shop/index';
import Accordion from './Accordion';


function LicenseTypeChooser({ callback }) {
	const [peroid, setPeroid] = useState(0);
	const [showPeroid, setShowPeriod] = useState(peroid);

	function _setPeroid(p) {
		setPeroid(p);
		setShowPeriod(p);
	};

	function buy(type, isQuote) {
		callback({ peroid, type, isQuote });
	}

	return <div>
		{/* <div class="Product-list-type-mobile">
			<p>Your license period</p>
			<div class="Radio-group Product-list-type">
				<input type="radio" id="annual" class="Toggle-button visually-hidden" checked="" value="annual" name="type" />
				<label for="annual" class="Toggle-button-label">Annual</label>
				<input type="radio" id="perpetual" class="Toggle-button visually-hidden" value="perpetual" name="type" />
				<label for="perpetual" class="Toggle-button-label">Perpetual</label></div>
		</div> */}
		<div class="Product-list-mobile-scroll-outer">
			<div class="Product-list-mobile-scroll-inner">
				<div class="Product-list-top-row">
					<div class="Product-list container">
						<div class="Product-list-column-header-outer-row row">
							<div class="Product-list-mobile-sticky-column gx-0 col-3">
								<p class="Product-list-mobile-instructions">Swipe to see which plan fits your organization<br /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg></p>

								{/* <div class="Small-accordion Product-list-license-info accordion">
									{
										LicensePeroid.map((p, i) => {
											let isActive = i === showPeroid;
											return <div key={p.code} className={'accordion-item' + (isActive ? ' active' : '')}>
												<button type="button" className={"Small-accordion-button" + (isActive ? ' active' : '')} onClick={() => setShowPeriod(i)}>
													<svg xmlns="http://www.w3.org/2000/svg"
														width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
														{isActive ? <polyline points="6 9 12 15 18 9"></polyline> : <polyline points="9 18 15 12 9 6"></polyline>}
													</svg>{p.title}</button>
												<div class={"accordion-collapse collapse" + (isActive ? ' show' : '')}>
													<div class="Small-accordion-content">{p.content}</div>
												</div>
												{i === 0 && <hr />}
											</div>
										})
									}
								</div> */}
								<Accordion className="Small-accordion Product-list-license-info accordion" items={LicensePeroid} options={{
									code: 'license-period',
									active: showPeroid
								}}></Accordion>
							</div>
							{/* License Type Columns */}
							<div class="Product-list-header gx-0 col-lg-9 col-sm-12 col-9">
								{
									LicenseType.map((lt, i) => {
										let _isOME = isOEM(lt);
										return <>
											<div class={"Product-list-header-row-1" + (_isOME ? ' Product-list-header-oem' : '')} >
												{lt.code === 'saas' && <div class="Best-seller-ribbon-container"><div class="Best-seller-ribbon"><div class="Best-seller-ribbon-text">Best seller</div></div></div>}
												<h3>{lt.name}</h3>
											</div>
											{
												_isOME ? <>
													<div class="Product-list-header-row-2 Product-list-header-oem">
														<div class="Product-list-description small">Install your product on third-party platforms</div>
														<div class="Product-list-type-static">Perpetual</div>
													</div>
													<div class="Product-list-header-row-3 Product-list-header-oem"></div>
													<div class="Product-list-header-row-4 Product-list-header-oem"><a class="Product-list-buy-button Button Button-outline Button-small" href="/contact/oem">
														<div class="Button-content" onClick={() => buy(i, true)}>{getTranslate('Get a Quote')}</div>
													</a></div>
												</> : <>
													<div class="Product-list-header-row-2">
														<div class="Product-list-price">
															<div class="Product-list-price-content">${Price[peroid][0][i]}</div>
															<div class="Product-list-price-description small">{getTranslate('per seat')}&nbsp;
																{peroid === 0 && <a href="/#faq">{getTranslate('annually')}</a>}
															</div>
														</div>
														<div class="Radio-group Product-list-type">
															{
																LicensePeroid.map((p, j) => {
																	let isActive = j === peroid;
																	return <>
																		<input type="radio"
																			class="Toggle-button visually-hidden"
																			readOnly
																			checked={isActive} value={p.code} />
																		<label class="Toggle-button-label" onClick={() => _setPeroid(j)}>{p.sTitle}</label>
																	</>
																})
															}
														</div>
													</div>
													<div class="Product-list-header-row-3">
														<button class="Product-list-buy-button Button Button-secondary Button-small" type="button" aria-label="Buy Internal license">
															<div class="Button-content" onClick={() => buy(i)}>{getTranslate('Buy')}</div>
														</button>
													</div>
													<div class="Product-list-header-row-4">
														<button class="Product-list-quote-button Button Button-outline Button-small" type="button">
															<div class="Button-content" onClick={() => buy(i, true)}>{getTranslate('Get a Quote')}</div>
														</button>
													</div>
												</>
											}

										</>
									})
								}
							</div >
						</div>
					</div>
				</div>
				{/* Table */}
				<div aria-label="License comparison" class="Product-list" role="table">

					{/* <div role="row" class="Product-list-outer-row Product-list-fill row">
					<div aria-hidden="true" role="columnheader" class="col-3"><span class="visually-hidden">Feature</span></div>
					<div role="presentation" class="gx-0 col-lg-9 col-sm-12 col-9">
						<div role="presentation" class="Product-list-row row">
							<div role="columnheader" class="Product-list-column col-3"><span class="visually-hidden">Internal</span></div>
							<div role="columnheader" class="Product-list-column col-3"><span class="visually-hidden">SaaS</span></div>
							<div role="columnheader" class="Product-list-column col-3"><span class="visually-hidden">SaaS+</span></div>
							<div role="columnheader" class="Product-list-column col-3"><span class="visually-hidden">OEM</span></div>
						</div>
					</div>
				</div> */}
					<HeaderRow title="Feature" hidden={true}></HeaderRow>
					{/* Usage Row */}
					<HeaderRow title={getTranslate('Usage')} />
					{
						Usage.map((usage, i) => {
							return <Row key={usage.code + '-row'}>
								<HeaderColumn title={usage.name} desc={usage.desc}></HeaderColumn>
								<ColumnWrapper>
									{
										LicenseType.map((lt) => {
											let data = lt[usage.code],
												isNum = typeof data === 'number';
											return <div role="cell" class="Product-list-column col-3" key={usage.code + '-' + lt.code + '-column'}>
												<div class="Product-list-feature">
													{isNum ? data : Icon(data)}
												</div>
											</div>
										})
									}
								</ColumnWrapper>
							</Row>
						})
					}
					{/* Libraries Row */}
					<HeaderRow title={getTranslate('Libraries')} />
					{
						Object.keys(PRODUCTS).map((productKey, i) => {
							let product = PRODUCTS[productKey],
								isHighchartsCore = productKey === 'highcharts';
							return <Row key={productKey + '-column'}>
								<HeaderColumn title={product.name} desc={product.description} link={'/products/' + productKey}></HeaderColumn>
								{isHighchartsCore ?
									<Columns /> : <ColumnWrapper>
										{
											LicenseType.map((lt, j) =>
												lt.code !== 'oem' && <div role="cell" class="Product-list-column col-3" key={productKey + '-' + lt.code + '-column'}>
													<div class="Product-list-feature">${Price[peroid][i][j]} / {getTranslate('seat')}</div>
												</div>
											)
										}
										<div role="cell" class="Product-list-column col-3">
											<div class="Product-list-feature">
												<Icon></Icon>
											</div>
										</div>
									</ColumnWrapper>
								}

							</Row>
						})
					}
					{/*  Highcharts Advantage Row */}
					<HeaderRow title="Highcharts Advantage" desc="With the Highcharts Advantage subscription plan, you receive access to all Releases and our extended Technical Support for the duration of your plan. More info" />
					<Row>
						<HeaderColumn title={getTranslate('Releases')} desc="The right to use minor or major improvements to chosen library."></HeaderColumn>
						<Columns />
					</Row>
					<Row>
						<HeaderColumn title={getTranslate('Technical support')} desc="Personalized technical support by email or chat with priority response. Access to core developer support, including suggestions to corrective- or work-around solutions and emergency hot fixes."></HeaderColumn>
						<Columns />
					</Row>
				</div>
			</div>
		</div>
		<div class="Product-list-customize">
			<div class="Product-list-customize-row row">
				<div class="gx-0 col-sm-3 col-12">
					<p class="Product-list-customize-label-mobile">没有适合您的方案？</p>
				</div>
				<div class="Product-list-customize-col gx-0 col-lg-9 col-12"><a class="Product-list-customize-button Button Button-secondary" href="/contact/quote">
					<div class="Button-content">联系我们以获得定制的授权</div>
				</a></div>
			</div>
		</div>
	</div>
}

export default LicenseTypeChooser;