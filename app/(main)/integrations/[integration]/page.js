
import PRODUCTS from '@/data/products.json';

import { AddOnsProductNameMap } from '@/data/addons';
import { Integrations } from '@/components/IntegrationList';

import ProductService from '@/service/ProductService';

import Breadcrumb from '@/components/Breadcrumb';
import Accordion from '@/components/Accordion';
import AddOnBoxes from '@/components/AddOnBoxes';
import AdvantageTable from '@/components/AdvantageTable';
import getTitle from '@/components/Title';



export async function generateStaticParams() {
	return Integrations.reduce((pre, cur) => {
		pre.push({
			integration: cur.code
		});
		return pre;

	}, []);
}

export async function getData(integration) {
	return await ProductService.getData(integration, true);
};

export function generateMetadata({ params }) {
	return getTitle(PRODUCTS[params.product] ? PRODUCTS[params.product].name + ' 功能特性' : AddOnsProductNameMap[params.product]);
}


const HTMLContent = {
	'pythonEcosystem': `<ul><li>Jupyter Labs/Jupyter Notebooks</li><li>Pandas</li><li>PySpark</li><li>GeoPandas</li><li>and more</li></ul>
<p>Using the Python toolkit, you can easily leverage Highcharts in your exploratory data analysis (EDA) workflows, and use popular components of the modern data stack such as Databricks.</p>`
}

export default async function Page(props) {
	let integration = props.params.integration;
	let data = await getData(integration);
	data.code = integration;
	let coreFeature = data['core-features'];
	let isPython = integration === 'python';

	return <>
		<Breadcrumb paths={['integrations', integration]} drakTheme={true}></Breadcrumb>
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
													<div class={data.buttons.length === 1 ? "col-10" : 'col-6'} key={"button" + i}> <a class={"btn " + button.class} href={button.link}>{button.name}</a></div>
												)}
											</div>
										</div>
									</div>
								}

							</div>
							<div class="col-12 col-xl-6 text-center">
								<div class="product-image">
									<img alt="" src={data.cover} />

								</div>
							</div>
						</div>
					</div>
				</div>
				{data.features &&
					<div class="content-fluid bkgWhite product-features features" id="features">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<h3 class="pt-2">Key Features</h3>
								</div>
							</div>
							<div class="row d-flex justify-content-center justify-content-sm-start">
								{
									data.features.map((feature, i) =>
										<div class={"col-12 col-sm-6 pb-2 " + (feature.class || 'col-md-4')} key={'feature' + i}>
											<div class="card highlight-feature border-0">
												<h3 class="card-title">{feature.title}</h3>
												<div class="card-body p-md-0">
													<img src={feature.cover} class="card-img feature-img pb-1" alt="" />
													<p class="card-text" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
													{feature.code && HTMLContent[feature.code] && <div dangerouslySetInnerHTML={{ __html: HTMLContent[feature.code] }}>
													</div>}
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
					coreFeature &&
					<div class="content-fluid bkgWhite product-features features" id="features">
						<div class="container">
							<div class="row">
								<div class="col-12 col-md-3">
									<div class="row">
										<div class="col-8 col-md-12">
											<h3>主要特征</h3>
										</div>
										<div class="col-4 col-md-12"> <img src="https://wp-assets.highcharts.com/svg/accessibility_illo.svg" alt="" /></div>
									</div>
								</div>
								<div class="col-12 col-md-9">
									<Accordion items={coreFeature} options={{
										code: 'features',
										active: 0
									}}></Accordion>
								</div>
							</div>
						</div>
					</div>
				}

				{
					isPython ? <><div class="content-fluid py-3" id="tryforfree">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h2>Try for free</h2>
									<p>As with all Highcharts products, you are welcome to install and experiment with the Highcharts for Python toolkit before you purchase your license. If you wish to use it commercially, you will need to license it (does not apply for students, universities and personal use). But if you just want to give it a try, you can do easily by installing the appropriate Python library directly from PyPi using pip:</p>
									<pre class=" prettyprinted">pip install highcharts-core<br />
										pip install highcharts-stock<br />
										pip install highcharts-maps<br />
										pip install highcharts-gantt</pre>
									<p>When you are ready to adopt the Highcharts for Python toolkit in your data science or application stack, please visit our <a href="https://shop.highcharts.com/">online shop</a>.</p>
								</div>
							</div>
						</div>
					</div>
						<div class="content-fluid" id="add-on-boxes">
							<div class="container my-3">
								<div class="row">
									<div class="col-12">
										<h2>Tools in Highcharts for Python</h2>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="card-deck justify-content-center">
										<div class="card p-2 mb-1">
											<div class="row">
												<div class="col-3"> <img class="prod-img" src="https://wp-assets.highcharts.com/svg/icon-core-light.svg" alt="" /></div>
												<div class="col-9">
													<h3 class="card-title">Highcharts Core for Python</h3>
												</div>
											</div>
											<div class="row pt-1">
												<div class="col-12">
													<p class="card-text">This is the core library. It provides full support for the Highcharts Core JavaScript library, and serves as the foundation for the entire Highcharts for Python toolkit.</p>
													<p class="card-text">Install it using:</p>
													<pre class=" prettyprinted"><span class="pln">pip install highcharts</span><span class="pun">-</span><span class="pln">core</span></pre>
													<p></p>
													<ul>
														<li><a href="https://core-docs.highchartspython.com/">Documentation</a></li>
														<li><a href="https://github.com/highcharts-for-python/highcharts-core">Github Repo</a></li>
														<li><a href="https://pypi.org/project/highcharts-core/">PyPi</a></li>
														<li><a href="https://core-docs.highchartspython.com/en/latest/demos.html">Demos</a></li>
														<li><a href="https://www.highcharts.com/blog/posts/python/">Tutorials</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="card p-2 mb-1">
											<div class="row">
												<div class="col-3"> <img class="prod-img" src="https://wp-assets.highcharts.com/svg/icon_stock_light_v2.svg" alt="" /></div>
												<div class="col-9">
													<h3 class="card-title">Highcharts Stock for Python</h3>
												</div>
											</div>
											<div class="row pt-1">
												<div class="col-12">
													<p class="card-text">The Highcharts Stock for Python library extends the Highcharts Core Python library with full support for the Highcharts Stock JavaScript library. It includes the Highcharts Core Python library, but extends its functionality with over 40 technical indicators, in-chart navigation and timelines, and rich tools for in-chart analysis and annotation of data.</p>
													<p class="card-text">Install it using:</p>
													<pre class=" prettyprinted"><span class="pln">pip install highcharts</span><span class="pun">-</span><span class="pln">stock</span></pre>
													<p></p>
													<ul>
														<li><a href="https://stock-docs.highchartspython.com/">Documentation</a></li>
														<li><a href="https://github.com/highcharts-for-python/highcharts-stock">Github Repo</a></li>
														<li><a href="https://pypi.org/project/highcharts-stock/">PyPi</a></li>
														<li><a href="https://stock-docs.highchartspython.com/en/latest/demos.html">Demos</a></li>
														<li><a href="https://www.highcharts.com/blog/posts/python/">Tutorials</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="card p-2 mb-1">
											<div class="row">
												<div class="col-3"> <img class="prod-img" src="https://wp-assets.highcharts.com/svg/icon_map_light.svg" alt="" /></div>
												<div class="col-9">
													<h3 class="card-title">Highcharts Maps for Python</h3>
												</div>
											</div>
											<div class="row pt-1">
												<div class="col-12">
													<p class="card-text">The Highcharts Maps for Python library extends the Highcharts Core Python library with full support for the Highcharts Maps JavaScript library. It includes the Highcharts Core Python library, but extends its functionality with full TopoJSON and GeoJSON support, rich map projection and visualization capabilities, and native integration with GeoPandas for GIS data analysis.</p>
													<p class="card-text">Install it using:</p>
													<pre class=" prettyprinted">pip install highcharts-core</pre>
													<p></p>
													<ul>
														<li><a href="https://maps-docs.highchartspython.com/">Documentation</a></li>
														<li><a href="https://github.com/highcharts-for-python/highcharts-maps">Github Repo</a></li>
														<li><a href="https://pypi.org/project/highcharts-maps/">PyPi</a></li>
														<li><a href="https://maps-docs.highchartspython.com/en/latest/demos.html">Demos</a></li>
														<li><a href="https://www.highcharts.com/blog/posts/python/">Tutorials</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="card p-2 mb-1">
											<div class="row">
												<div class="col-3"> <img class="prod-img" src="https://wp-assets.highcharts.com/svg/icon_gantt_light.svg" alt="" /></div>
												<div class="col-9">
													<h3 class="card-title">Highcharts Gantt for Python</h3>
												</div>
											</div>
											<div class="row pt-1">
												<div class="col-12">
													<p class="card-text">The Highcharts Gantt for Python library extends the Highcharts Core Python library with full support for the Highcharts Gantt JavaScript library. It includes the Highcharts Stock Python library, and extends its functionality with native integrations with JIRA, Asana, and Monday.com.</p>
													<p class="card-text">Install it using:</p>
													<pre class=" prettyprinted">pip install highcharts-gantt</pre>
													<p></p>
													<ul>
														<li><a href="https://gantt-docs.highchartspython.com/">Documentation</a></li>
														<li><a href="https://github.com/highcharts-for-python/highcharts-gantt">Github Repo</a></li>
														<li><a href="https://pypi.org/project/highcharts-gantt/">PyPi</a></li>
														<li><a href="https://gantt-docs.highchartspython.com/en/latest/demos.html">Demos</a></li>
														<li><a href="https://www.highcharts.com/blog/posts/python/">Tutorials</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
						: <div class="content-fluid bkgWhite" id="vibrant-documentation">
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
				}
			</main>
		</div>
	</>
};