
import PRODUCTS from '@/data/products.json';

import { AddOnsProductCodes, AddOnsProductNameMap } from '@/data/addons';

import ProductService from '@/service/ProductService';

import Breadcrumb from '@/components/Breadcrumb';
import Accordion from '@/components/Accordion';
import AddOnBoxes from '@/components/AddOnBoxes';
import AdvantageTable from '@/components/AdvantageTable';
import getTitle from '@/components/Title';


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



const AdvantageFAQ = [{
	title: 'What kind of support is included in a license?',
	content: ` We have you covered. All new Perpetual licenses include a full year of Highcharts 
	Advantage at no extra cost. Highcharts Advantage is included in the Annual license fee.
	See our <a href="https://www.highcharts.com/blog/support/">support page</a> for a detailed overview of support features.`
}, {
	title: 'What are the features of Highcharts Advantage?',
	content: ` Highcharts Advantage gives you access to all new software Releases (minor 
		and major) and our extended support offerings for the duration of your term.`
},{
	title: 'I have an older license. Can I purchase a Highcharts Advantage Renewal?',
	content: `Yes, if you have an older license and want to renew your support or access new 
	versions, you can purchase a Highcharts Advantage Renewal for your existing license. When 
	purchasing a Highcharts Advantage Renewal, you accept our <a href="https://www.highcharts.com/license">current terms and conditions</a> and will be 
	transferred to our current license model. For customers who have custom terms with Highsoft, those 
	terms will govern your renewal.
	Have questions? Please refer to your License ID and <a href="https://shop.highsoft.com/contact">contact us</a>.`
},{
	title: 'Where can I find my Highcharts Advantage ID?',
	content: ` Your Highcharts Advantage ID can be found on your License Statement. The 
License Statement is issued upon completion of the purchase. The Advantage ID is used to identify 
your license and support level upon contacting our Support Team.`
}];


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
										<div class="col-12 col-sm-6 col-md-3 pb-2" key={'feature' + i}>
											<div class="card highlight-feature border-0">
												<h5 class="card-title">{feature.title}</h5>
												<div class="card-body p-md-0">
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
					product === 'highcharts-advantage' ?

						<>
							<AdvantageTable />
							<div className='content-fluid bkgWhite product-features features'>
								<div className='container'>
									<div class="row">
										<div class="col-12 col-md-3 pt-3 pt-md-3">
											<div class="row">
												<div class="col-8 col-md-12 pb-md-3">
													<h2>常见问题</h2>
												</div>
												<div class="col-4 col-md-12"> <img src="/svg/icon_support_light.svg" alt="" /></div>
											</div>
										</div>
										<div class="col-12 col-md-9 pt-md-3">
											<Accordion items={AdvantageFAQ} options={{
												code: 'adv-faq',
												active: 0
											}}></Accordion>
										</div>
									</div>
								</div>
							</div>
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


						</>
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
										<p class="p-md-1 card-body">
											The most significant developer community of any premium charting tool on <a href="">GitHub</a>, <a href="">StackOverflow</a> and <a href="">Highcharts' Forums</a>, is eager to offer additional assistance, platform-specific implementation advice and inspiration when you need it.</p>
										<div class="text-center card-footer"> <a href="/support" class="col-12 btn mb-1 btn-third text-decoration-none">加入社区</a></div>
									</div>
								</div>
								<div class="col-12 col-md-6 documentation mb-3 card bkgPurple40">
									<div class="p-lg-1">
										<div class="text-center card-header">
											<h3>查阅文档教程</h3>
										</div>
										<p class="p-lg-1 card-body">
											我们的客户称赞我们的文档易于遵循，内容广泛，组织良好。我们的 API 文档中包含了丰富实用的例子，将使你在短时间内定制你的数据可视化，并使维护它们变得轻而易举。
										</p>
										<div class="text-center card-footer"> <a href="/docs/index" class="col-12 btn mb-1 btn-third text-decoration-none">查阅文档</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<AddOnBoxes current={product} />
			</main>
		</div>
	</>
};