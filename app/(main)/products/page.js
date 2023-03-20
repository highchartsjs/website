


import Breadcurmb from '@components/Breadcrumb';
import "@styles/autoptimize.css"

export default function Product() {
	return <>
		<Breadcurmb paths='products'></Breadcurmb>
		<div id="full-width-page-wrapper">
			<div id="content">
				<main class="site-main" id="main" role="main">
					<div class="product-pages">
						<div class="content-fluid pt-1">
							<div class="container">
								<div class="row pb-2 pb-md-2">
									<div class="col-md-12">
										<h1>Highcharts Products</h1>
									</div>
									<div class="col-md-6">
										<p>The Highcharts suite of products is a pure Javascript charting library based on SVG that makes it easy for developers to create responsive, interactive and accessible data visualizations.</p>
										<p>Download the source code, inspect it, and make edits as you wish. No trial license is required. When you’re ready to use the software for commercial projects, please <a href="https://shop.highsoft.com">see our shop</a> for more information.</p>
										<p>Our <a href="/support">Developer community</a> (the largest of any premium charting tool) is eager to answer your platform-specific questions, and offer advice and inspiration when you need it. Our dedicated support engineers also monitor our forums on StackOverflow, Github and support emails.</p>
									</div>
									<div class="col-md-6">
										<h2 class="h3 mt-0">Highcharts Suite Features</h2>
										<ul>
											<li>Accessible, interactive, responsive with touch support.</li>
											<li>Works with any back-end database or server stack.</li>
											<li>Data can be given in any form, including CSV, JSON or loaded and updated live.</li>
											<li>Deep customization through a simple options structure.</li>
											<li>Styling via JavaScript or CSS.</li>
											<li>Wrappers for .NET, R, iOS, and Android (and more), and frameworks like Angular, Vue and React.</li>
											<li>Export charts to PNG, JPG, PDF or SVG.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="content-fluid mb-3">
							<div class="container">
								<div class="row bkgWhite mt-2 mt-md-3" id="highcharts">
									<div class="col-12 col-lg-6 px-md-0 my-auto">
										<div class="px-md-3">
											<h2>Highcharts<sup>®</sup> JS</h2>
											<p> The core library of our product suite.</p>
											<p></p>
											<h3 class="h5">Features</h3>
											<ul>
												<li>All the standard chart types plus more.</li>
												<li>Integrated typescript declarations.</li>
												<li>Sonification support.</li>
												<li>Free editor app.</li>
												<li>Debugger mode.</li>
												<li>Extendable and pluggable for advanced animations and functionality.</li>
											</ul>
											<p></p>
											<p><a href="/demo">See Highcharts demos</a> <i class="fa fa-bar-chart" aria-hidden="true"></i></p>
											<p> <a class="btn btn-small btn-primary" href="/download">Try for free</a> <a class="btn btn-small btn-secondary" href="https://shop.highsoft.com">See pricing</a></p>
										</div>
									</div>
									<div class="col-12 col-lg-6 px-0 text-center"> <img decoding="async" alt="" class="product-page-image" src="/svg/illo_highchart.svg" /></div>
								</div>
								<div class="row bkgWhite" id="highcharts-stock">
									<div class="col-12 col-lg-6 my-auto px-md-0 order-1 order-lg-12">
										<div class="px-md-3">
											<h2>Highcharts<sup>®</sup> Stock</h2>
											<p> Create stock or general timeline charts for your web and mobile apps.</p>
											<p></p>
											<h3 class="h5">Features</h3>
											<ul>
												<li>High-volume data navigation with range selectors, date pickers, adjustable panes and small navigator series.</li>
												<li>Super-fast intelligent data grouping.</li>
												<li>40+ built-in Technical Indicators.</li>
												<li>Advanced end-user annotations.</li>
												<li>Includes Highcharts JS.</li>
											</ul>
											<p></p>
											<p><a href="/demo/stock">See Highcharts Stock demos</a> <i class="fa fa-line-chart" aria-hidden="true"></i></p>
											<p> <a class="btn btn-small btn-primary" href="/download">Try for free</a> <a class="btn btn-small btn-secondary" href="https://shop.highsoft.com">See pricing</a></p>
										</div>
									</div>
									<div class="col-12 col-lg-6 px-0 order-12 order-lg-1 text-center"> <img decoding="async" alt="" class="product-page-image" src="/svg/illo_stock_v2.svg" /></div>
								</div>
								<div class="row bkgWhite" id="highcharts-maps">
									<div class="col-12 col-lg-6 bkgWhite px-md-0 my-auto">
										<div class="px-md-3">
											<h2>Highcharts<sup>®</sup> Maps</h2>
											<p> Build interactive maps that link data to geography.</p>
											<p></p>
											<h3 class="h5">Features</h3>
											<ul>
												<li>Hundreds of maps are available in <a href="/demo/maps">our collection</a>, in SVG, GeoJSON and TopoJSON formats.</li>
												<li>Supports map area, map line and map point series, as well as heatmaps and tilemaps.</li>
												<li>Projections can be custom built and plugged in.</li>
												<li>Draw custom maps or combine maps with charts.</li>
												<li>Supports double-click to zoom, mouse-wheel zooming, multitouch and panning.</li>
											</ul>
											<p></p>
											<p><a href="/demo/maps">See Highcharts Maps demos</a> <i class="fa fa-map-marker" aria-hidden="true"></i></p>
											<p> <a class="btn btn-small btn-primary" href="/download">Try for free</a> <a class="btn btn-small btn-secondary" href="https://shop.highsoft.com">See pricing</a></p>
										</div>
									</div>
									<div class="col-12 col-lg-6 px-0 text-center"> <img decoding="async" alt="" class="product-page-image" src="/svg/illo_maps.svg" /></div>
								</div>
								<div class="row bkgWhite" id="highcharts-gantt">
									<div class="col-12 col-lg-6 my-auto px-md-0 order-1 order-lg-12">
										<div class="px-md-3">
											<h2>Highcharts<sup>®</sup> Gantt</h2>
											<p> Build interactive charts for allocating and coordinating resources along a timeline.</p>
											<p></p>
											<h3 class="h5">Features</h3>
											<ul>
												<li>Milestones, Percent-complete, Current day indication and Dependency visualization.</li>
												<li>Create custom markers for tasks and resources.</li>
												<li>Hierarchical grouping.</li>
												<li>Dependency visualization.</li>
												<li>Drag and drop interactivity.</li>
												<li>Integrated navigator and range selector.</li>
											</ul>
											<p></p>
											<p><a href="/demo/gantt">See Highcharts Gantt demos</a> <i class="fa fa-bar-chart" aria-hidden="true"></i></p>
											<p> <a class="btn btn-small btn-primary" href="/download">Try for free</a> <a class="btn btn-small btn-secondary" href="https://shop.highsoft.com">See pricing</a></p>
										</div>
									</div>
									<div class="col-12 col-lg-6 px-0 order-12 order-lg-1 text-center"> <img decoding="async" alt="" class="product-page-image" src="/svg/illo_gantt.svg" /></div>
								</div>
								<div class="row bkgWhite" id="highcharts-editor">
									<div class="col-12 col-lg-6 bkgWhite px-md-0 my-auto">
										<div class="px-md-3">
											<h2>Highcharts<sup>®</sup> Editor</h2>
											<p> Enable less techy developers to create interactive charts.</p>
											<p></p>
											<h3 class="h5">Features</h3>
											<ul>
												<li>Wizard-style UI that walks through making a chart, from start to finish.</li>
												<li>Licensed under MIT license, so you’re free to make any changes to it.</li>
												<li>Easy and hassle-free to embed in any 3rd party system.</li>
												<li>Shops with a rich <a href="http://editor.highcharts.com/">template library</a>, and supports a vast collection of charts right out of the box.</li>
											</ul>
											<p></p>
											<p> <a class="btn btn-small btn-primary" href="http://editor.highcharts.com/">Try for free</a> <a class="btn btn-small btn-secondary" href="https://github.com/highcharts/highcharts-editor">Get the code</a></p>
										</div>
									</div>
									<div class="col-12 col-lg-6 px-0 text-center"> <img decoding="async" alt="" class="product-page-image" src="/svg/illo_highchart.svg" /></div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</>
};