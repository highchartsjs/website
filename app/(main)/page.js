
import Testimonial from '@components/Testimonial';
import getTitle from '@components/Title';

export const metadata = getTitle('Interactive javascript charts library');

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
						<iframe className="page-animation iframe-animation heroChart mt-2"
							id="heroChart" scrolling="no" tabindex="0" title="Interactive Highcharts Demo"
							src="/homepage-2021.html">
						</iframe>
					</div>
				</div>
				<div className="container-fluid bkgWhite" id="products-homepage-container">
					<div className="container-md pt-2">
						<div className="row mx-2 mx-md-2 mx-lg-5">
							<h2 className="col-12 text-center">您唯一需要的图表库</h2>
							<p className="col-12 px-1 px-md-3 text-center"> Highcharts 系列软件库包含了创建可靠和安全的数据可视化所需的所有工具。构建于 JavaScript 和 Typescript 之上，我们所有的图表库都能与任何后端数据库或服务端技术栈配合使用。
								我们为流行的编程语言（.Net、PHP、Python、R、Java），移动开发平台（<a href="/products/ios">iOS</a> 和 <a href="/products/android">Android</a>），以及流行的前端框架（Angular、Vue、React）等提供了对应的扩展包或开发支持。</p>
						</div>
						<div className="product-bg container-fluid mx-0">
							<div className="row">
								<div className="col-12">
									<div className="logo p-1 p-md-2 mt-2">
										<img alt="" className="d-block mb-0" src="/svg/logo_mark.svg" />
										<h3 className="d-block text-light m-1 productHPTitleDark"><a href="/products/highcharts" className="txtWhite">Highcharts JS</a></h3>
										<div className="px-2 mb-1">
											<p className="logo-text-width p-0">包含所有基础图表：<br />线图、面积图、柱形图、关系图、仪表图、高级图形等其他您所需要的基础图表</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-4">
									<div className="card first shadow">
										<div className="text-center pb-1 pb-md-0">
											<img alt="" src="/svg/maps-dark.svg" />
										</div>
										<div className="card-body text-center pb-2">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine
												With</span><a href="/products/maps">Highcharts Maps</a></h3>
											<p className="card-text">地理、位置数据可视化。</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="card shadow second">
										<div className="text-center pb-1 pb-md-0"><img alt="" src="/svg/stock-dark.svg" /></div>
										<div className="card-body text-center pb-2">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine With</span> <a href="/products/stock">Highcharts Stock</a></h3>
											<p className="card-text">交互式股票及时间序列数据图表。</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="card shadow">
										<div className="text-center pb-1 pb-md-0"><img alt="" src="/svg/gantt-dark.svg" /></div>
										<div className="card-body text-center pb-2 ">
											<h3 className="card-title mt-0 productHPTitle"><span className="card-subtitle mb-1 newline txt-uppercase">Combine With</span> <a href="/products/gantt">Highcharts Gantt</a></h3>
											<p className="card-text">交互性甘特图可视化</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-4 offset-lg-4">
									<div className="card shadow">
										<div className="text-center pb-1 pb-md-0">
											<img alt="" src="/svg/support-dark.svg" />
										</div>
										<div className="card-body text-center pb-3">
											<h3 className="card-title mt-0 row productHPTitle"> <span className="col-12 order-2">
												<a href="/products/highcharts-advantage/">
													高级技术支持服务</a></span> <span className="col-12 card-subtitle newline order-1">版本更新及技术支持服务</span></h3>
											<p className="card-text">一对一的技术支持服务及新版本更新服务。</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container mt-2">
							<div className="row mx-0">
								<div className="col-1 col-lg-2 px-0"></div>
								<div className="col-10 col-lg-8 px-0">
									<h2 className="text-center"> 80 个世界 100 强企业的共同信任</h2>
									<p className="text-center" style={{ color: '#46465C' }}>我们在为大型和小型组织建立图表解决方案方面拥有十年以上的第一手经验，这有助于我们识别和解决实际问题，从而使您能够完成更多的工作。</p>
								</div>
								<div className="col-1 col-lg-2 px-0"></div>
							</div>
						</div>

						<div className="container-md mt-1 pt-3 pb-3 text-center">
							<div className="row">
								<div className="client-logos col-12">
									<div className="text-center">
										<img alt="Company logos: BBC, Samsung, Sony, Thomson Reuters, American Express, Twitter, HSPC, VISA, Mastercard"
											className="client-logos-img" src="/svg/client-logos-homepage.svg" />
									</div>
									<Testimonial />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid"><div className="bkgWhite">
					<img src="/svg/lighthouse-footer.svg" className="w-100 negative-margin-bottom" alt="" />
				</div>
				</div>
				<div className="container-fluid bkgDarkestGray">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6">
								<h2 className="txtWhite">How it All Started</h2>
								<p className="txtWhite">It all started with a snowy mountain, measuring cane, a passion for
									geology, and the urge to help the locals. Now, Highcharts is solving charting problems
									for developers all around the world.</p>
								<p><a href="/about" className="btn btn-primary mt-1">Our Story</a></p>
							</div>
							<div className="col-12 col-md-6 mt-0 mt-md-2 txtWhite">
								<button data-title="Our Story" data-url="https://player.vimeo.com/video/643496165"
									type="button" className="button-link-modal p-0 border-0" data-toggle="modal" data-target="#modalVideo-0"
									style={{ 'background-color': 'inherit' }}>
									<img className="" alt="Vimeo video: Our Story" src="/uploads/homepage-video-thumb.png" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div >
	</section>
};

export default HOME;