
import PRODUCTS from '@data/products.json';

import { AddOnsProductCodes, AddOnsProductNameMap } from '@data/addons';

import ProductService from '@service/ProductService';

import "@styles/autoptimize.css";
import Breadcrumb from '@components/Breadcrumb';
import Accordion from '@components/Accordion';
import AddOnBoxes from '@components/AddOnBoxes';
import AdvantageTable from '@components/AdvantageTable';
import getTitle from '@components/Title';



export async function generateStaticParams() {

	return Object.keys(PRODUCTS).concat(
		AddOnsProductCodes

	).reduce((pre, cur) => {
		pre.push({
			product: cur
		});
		return pre;
	}, []);
}

export async function getData(product) {
	return await ProductService.getData(product);
};

export function generateMetadata({ params }) {
	return getTitle(PRODUCTS[params.product] ? PRODUCTS[params.product].name + ' 功能特性' : AddOnsProductNameMap[params.product]);
}

export default async function Page(props) {
	let product = props.params.product;
	let data = await getData(product);
	data.code = product;
	let coreFeature = data['core-features'];
	return <>
		<Breadcrumb paths={['products', product]} drakTheme={true}></Breadcrumb>
		<div class="product-pages" id="content">
			<main class="site-main" id="main" role="main">
				<div class="pb-2 content-fluid bkgHeroBackground desktop-ver txtWhite">
					<div class="container">
						<div class="row">
							<div class="col-12 col-xl-6">
								<h1>
									<span class="add-on">{data.type || ''}</span>
									<span dangerouslySetInnerHTML={{
										__html: data.title.split(' ').map(t => {
											if (t === 'Highcharts') {
												t += '<sup>®</sup>'
											}
											return t;
										}).join(' ')
									}}></span></h1>
								<p dangerouslySetInnerHTML={{ __html: data.description }}></p>
								{
									data.buttons &&
									<div class="row">
										<div class="col-12">
											<div class="row button-rows">
												{data.buttons.map((button, i) =>
													<div class="col-6" key={"button" + i}> <a class={"btn " + button.class} href={button.link}>{button.name}</a></div>
												)}
											</div>
										</div>
									</div>
								}

							</div>
							<div class="col-12 col-xl-6 text-center">
								<div class="product-demo container-page-animation"><iframe title="Interactive Highcharts Demo" allowfullscreen="" class="page-animation iframe-animation mt-2 highcharts-demo" scrolling="no" tabindex="0" src="https://www.highcharts.com/samples/nonav/highcharts/website/static-chart"></iframe></div>
								<div class="text-center"> <button id="skip-highcharts" class="txtWhite page-animation-button" aria-hidden="true" style={{ visibility: "hidden" }}>Stop animation</button></div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class="pb-2 content-fluid bkgHeroBackground product-pages tablet-ver txtWhite">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-6">
								<h1 class="mt-2"> <span class="add-on"></span> Highcharts<sup>®</sup> JS</h1>
								<p>Highcharts, the core library of our product suite, is a pure JavaScript charting library based on SVG that makes it easy for developers to create responsive, interactive and accessible charts. Our library includes all the standard chart types and more. From area to x-range, we've got you covered. Our simple options-structure allows for deep customization, and styling can be done via JavaScript or CSS.</p>
							</div>
							<div class="col-12 col-md-6">
								<div class="product-demo container-page-animation"> <iframe title="Interactive Highcharts Demo" allowfullscreen="" scrolling="no" class="page-animation iframe-animation mt-2 highcharts-demo" tabindex="0" src="https://www.highcharts.com/samples/nonav/highcharts/website/static-chart"></iframe></div>
								<div class="text-center"> <button id="skip-highcharts" class="txtWhite page-animation-button" aria-hidden="true" style={{ visibility: "hidden" }}>Stop animation</button></div>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-center">
								<div class="row button-rows">
									<div class="col-6"> <a class="btn btn-primary" href="/download">Try for Free</a></div>
									<div class="col-6"> <a class="btn btn-secondary" href="https://shop.highcharts.com/">Buy Now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-2 content-fluid bkgHeroBackground product-pages mobile-ver text-center txtWhite">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-6">
								<h1 class="mt-2"> <span class="add-on"></span> Highcharts<sup>®</sup> JS</h1>
								<p>Highcharts, the core library of our product suite, is a pure JavaScript charting library based on SVG that makes it easy for developers to create responsive, interactive and accessible charts. Our library includes all the standard chart types and more. From area to x-range, we've got you covered. Our simple options-structure allows for deep customization, and styling can be done via JavaScript or CSS.</p>
							</div>
							<div class="col-12 col-md-6">
								<div class="product-demo container-page-animation"> <iframe title="Interactive Highcharts Demo" class="page-animation iframe-animation mt-2 highcharts-demo" allowfullscreen="" scrolling="no" tabindex="0" src="https://www.highcharts.com/samples/nonav/highcharts/website/static-chart"></iframe></div>
								<div class="text-center"> <button id="skip-highcharts" class="txtWhite page-animation-button" aria-hidden="true" style={{ visibility: "hidden" }}>Stop animation</button></div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div class="row button-rows">
									<div class="col-6"> <a class="btn btn-primary" href="/download">Try for Free</a></div>
									<div class="col-6"> <a class="btn btn-secondary" href="https://shop.highcharts.com/">Buy Now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				{
					data.demos &&
					<div class="content-fluid bkgMudLogo txtWhite">
						<div class="container">
							<div class="row">
								<div class="col-12 mb-3">
									<div class="row justify-content-between">
										<div class="col-12 col-md-9">
											<h2>{data.title} 热门示例</h2>
										</div>
										<div class="col-12 col-md-3 text-left text-md-right mt-0 mt-md-2">
											<p><a href={"/demo/" + data.code} class="txtWhite">探索所有示例<i style={{ "margin-left": "5px" }} class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
										</div>
									</div>
									<div class="card-deck card-demo">
										{
											data.demos.map((demo, i) =>
												<div class="card txtWhite border-0 mb-sm-1 mb-xl-0" key={"demos" + i}>
													<iframe scrolling="no" class="card-img-top iframe-img single-post-grid" src={demo.iframe} alt=""></iframe>
													<div class="card-body p-1"> <a class="h3 txtWhite underline-hover-only" href={demo.link}>{demo.name}</a></div>
												</div>
											)
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				}

				{data.features &&
					<div class="content-fluid bkgWhite product-features features" id="features">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<h3 class="pt-2">{data.title} 功能特性</h3>
								</div>
							</div>
							<div class="row d-flex justify-content-center justify-content-sm-start">

								{
									data.features.map((feature, i) =>
										<div class="col-auto pb-2" key={'feature' + i}>
											<div class="card highlight-feature">
												<h5 class="card-title">{feature.title}</h5>
												<div class="card-body">
													<img src={feature.cover} class="card-img feature-img pb-1" alt="" />
													<p class="card-text" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
												</div>
											</div>
										</div>
									)
								}
							</div>
						</div>
					</div>
				}

				{
					data.pageLayout ?
						// Integrations Pages
						<>
							{
								product === 'highcharts-advantage' ? <AdvantageTable /> : null
							}
						</>

						:
						<>
							{
								coreFeature &&
								<div class="content-fluid bkgWhite product-features features" id="features">
									<div class="container">
										<div class="row">
											<div class="col-12 col-md-3">
												<div class="row">
													<div class="col-8 col-md-12">
														<h3>Highcharts 基础功能特性</h3>
													</div>
													<div class="col-4 col-md-12"> <img src="https://wp-assets.highcharts.com/svg/accessibility_illo.svg" alt="" /></div>
												</div>
											</div>
											<div class="col-12 col-md-9">
												<Accordion items={coreFeature} options={{
													code: 'features'
												}}></Accordion>
												{/* <div class="accordion accordion-parent" id="accordion-parent-"> */}

												{/* {
															data['core-features'].map((feature, i) =>
																<div class="card" key={'core-feature' + i}>
																	<div class="card-header p-0">
																		<div class={"d-flex align-items-center mx-1" + (i === 0 ? '' : ' top-border')}>
																			<h3>
																				<button class="btn btn-link btn-block text-left acc-btn" type="button" aria-expanded="false" aria-controls="collapse1-">
																					<i class="fa arrow mx-1 fa-caret-right" aria-hidden="true"></i>
																					{feature.title}
																				</button>
																			</h3>
																		</div>
																	</div>
																	<div class="mx-1 pl-2 collapse">
																		<div class="card-body ml-1 pl-0">
																			<p dangerouslySetInnerHTML={{ __html: feature.content }}>
																			</p>
																		</div>
																	</div>
																</div>
															)
														} */}

												{/* </div> */}
											</div>
										</div>
									</div>
								</div>
							}

							<div class="content-fluid bkgWhite" id="vibrant-documentation">
								<div class="container">
									<div class="row">
										<div class="card-deck">
											<div class="col-12 col-md-6 vibrant mb-3 card bkgGreenLight35">
												<div class="p-md-1">
													<div class="text-center card-header">
														<h3>加入我们充满活力的社区</h3>
													</div>
													<p class="p-md-1 card-body">The most significant developer community of any premium charting tool on <a href="">GitHub</a>, <a href="">StackOverflow</a> and <a href="">Highcharts' Forums</a>, is eager to offer additional assistance, platform-specific implementation advice and inspiration when you need it.</p>
													<div class="text-center card-footer"> <a href="/support" class="col-12 btn mb-1 btn-third text-decoration-none">j加入社区</a></div>
												</div>
											</div>
											<div class="col-12 col-md-6 documentation mb-3 card bkgPurple40">
												<div class="p-lg-1">
													<div class="text-center card-header">
														<h3>查阅文档教程</h3>
													</div>
													<p class="p-lg-1 card-body">Our customers praise our documentation as easy to follow, extensive and well organized. Filled with helpful examples, our API reference will have you customizing your data visualizations in no time and make maintaining them a breeze.</p>
													<div class="text-center card-footer"> <a href="/docs/index" class="col-12 btn mb-1 btn-third text-decoration-none">查阅文档</a></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
				}

				<AddOnBoxes current={product} />
			</main>
		</div>
	</>
};