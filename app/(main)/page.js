
import Testimonial from '@components/Testimonial';

const HOME = function (props) {
	return <section id="primary-fullwidth" className="content-area">
		<div id="content" className="site-content">
			<main>
				<div className="container-fluid hero-container-outside px-0 h-100 txtWhite">
					<div className="row">
						<div className="col-12">
							<div className="container px-0 mt-3">
								<div className="row">
									<div className="col-12 text-center">
										<h1>让数据可视化更简单</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-1 col-lg-2 text-center"></div>
									<div className="col-10 col-lg-8 text-center">
										<p className="intro-copy">
											我们为 Javascript、 Angular、React、 VueJS、 iOS、 R、 .NET、 Python 等<br />
											开发者提供方便快捷的创建 Web 和 移动平台图表
										</p>
									</div>
									<div className="col-1 col-lg-2 text-center"></div>
								</div>
								<div className="row justify-content-center">
									<div className="col-12 col-md-6 d-flex justify-content-center">
										<a href="/download" className="btn btn-lg btn-primary btn-small d-flex my-2 mr-1 my-md-0">
											免费试用</a>
										<a href="/demo" className="btn btn-lg btn-secondary btn-small my-2 my-md-0">查看示例</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-page-animation" role="img" aria-label="Illustrative interactive stock chart">
						<iframe className="page-animation iframe-animation heroChart mt-2" id="heroChart" scrolling="no" tabindex="0" title="Interactive Highcharts Demo" src="https://www.highcharts.com/samples/nonav/highcharts/website/homepage-2021"></iframe>
					</div>
				</div>
				<div className="container-fluid bkgWhite" id="products-homepage-container">
					<div className="container-md pt-2">
						<div className="row mx-2 mx-md-2 mx-lg-5">
							<h2 className="col-12 text-center">The Only Charting Library You Need</h2>
							<p className="col-12 px-1 px-md-3 text-center">The Highcharts library comes with all the tools you
								need to create reliable and secure data visualizations. Built on JavaScript and TypeScript,
								all our charting libraries work with any back-end database or server stack. We offer
								wrappers for the most popular programming
								languages (.Net, PHP, Python, R, Java) as well as&nbsp;<a href="https://www.highcharts.com/blog/products/ios/">iOS</a>&nbsp;and&nbsp;<a href="https://www.highcharts.com/blog/products/android/">Android</a>, and frameworks
								like Angular, Vue, and React.</p>
						</div>
						<div className="product-bg container-fluid mx-0">
							<div className="row">
								<div className="col-12">
									<div className="logo p-1 p-md-2 mt-2">
										<img alt="" className="d-block mb-0" src="https://wp-assets.highcharts.com/svg/logo_mark.svg" />
										<h3 className="d-block text-light m-1 productHPTitleDark"><a href="/products/highcharts" className="txtWhite">Highcharts JS</a></h3>
										<div className="px-2 mb-1">
											<p className="logo-text-width p-0">Includes all your essential chart types: line,
												bar, area, column, advanced, and more.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-4">
									<div className="card first shadow">
										<div className="text-center pb-1 pb-md-0">
											<img alt="" src="https://wp-assets.highcharts.com/svg/maps-dark.svg" />
										</div>
										<div className="card-body text-center pb-2">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine
												With</span><a href="/products/maps">Highcharts Maps</a></h3>
											<p className="card-text">Display various information linked to geography.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="card shadow second">
										<div className="text-center pb-1 pb-md-0"><img alt="" src="https://wp-assets.highcharts.com/svg/stock-dark.svg" /></div>
										<div className="card-body text-center pb-2">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine With</span> <a href="/products/stock">Highcharts Stock</a></h3>
											<p className="card-text">Implement interactive stock or general timeline charts to
												any platform.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="card shadow">
										<div className="text-center pb-1 pb-md-0"><img alt="" src="https://wp-assets.highcharts.com/svg/gantt-dark.svg" /></div>
										<div className="card-body text-center pb-2 ">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine With</span> <a href="/products/gantt">Highcharts Gantt</a></h3>
											<p className="card-text">Simply visualize interactive Gantt charts of any kind.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-4 offset-lg-4">
									<div className="card shadow">
										<div className="text-center pb-1 pb-md-0">
											<img alt="" src="https://wp-assets.highcharts.com/svg/support-dark.svg" />
										</div>
										<div className="card-body text-center pb-3">
											<h3 className="card-title mt-0 row productHPTitle"> <span className="col-12 order-2"><a href="/products/highcharts-advantage/">Highcharts
												Advantage</a></span> <span className="col-12 card-subtitle newline order-1">Releases
													and Technical Support</span></h3>
											<p className="card-text">Take advantage of premium support and entitlement to all
												new Highcharts releases.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container mt-2">
							<div className="row mx-0">
								<div className="col-1 col-lg-2 px-0"></div>
								<div className="col-10 col-lg-8 px-0">
									<h2 className="text-center">80 out of the world’s 100 largest companies
										trust us with their charting</h2>
									<p className="text-center" style={{ color: '#46465C' }}>Over a decade of first-hand experience in
										building charting solutions for large to small organizations helps us identify and
										solve real problems so you can get more things done.</p>
								</div>
								<div className="col-1 col-lg-2 px-0"></div>
							</div>
						</div>

						<div className="container-md mt-1 pt-3 pb-3 text-center">
							<div className="row">
								<div className="client-logos col-12">
									<div className="text-center">
										<img alt="Company logos: BBC, Samsung, Sony, Thomson Reuters, American Express, Twitter, HSPC, VISA, Mastercard" className="client-logos-img" src="https://wp-assets.highcharts.com/svg/client-logos-homepage.svg" />
									</div>
									<Testimonial />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid"><div class="bkgWhite">
					<img src="https://wp-assets.highcharts.com/svg/lighthouse-footer.svg" class="w-100 negative-margin-bottom" alt="" />
				</div>
				</div>
				<div class="container-fluid bkgDarkestGray">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-6">
								<h2 class="txtWhite">How it All Started</h2>
								<p class="txtWhite">It all started with a snowy mountain, measuring cane, a passion for
									geology, and the urge to help the locals. Now, Highcharts is solving charting problems
									for developers all around the world.</p>
								<p><a href="/about" class="btn btn-primary mt-1">Our Story</a></p>
							</div>
							<div class="col-12 col-md-6 mt-0 mt-md-2 txtWhite">
								<button data-title="Our Story" data-url="https://player.vimeo.com/video/643496165"
									type="button" class="button-link-modal p-0 border-0" data-toggle="modal" data-target="#modalVideo-0"
									style={{ 'background-color': 'inherit' }}>
									<img class="" alt="Vimeo video: Our Story" src="https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2021/11/04114350/homepage-video-thumb.png" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div >
	</section >
};

export default HOME;