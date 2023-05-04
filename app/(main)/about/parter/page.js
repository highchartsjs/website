import Accordion from '@/components/Accordion.js';
import Breadcrumb from '@/components/Breadcrumb';



async function Contact() {
	return <div id="full-width-page-wrapper">
		<div id="content">
		<Breadcrumb paths={['about', 'parter']}></Breadcrumb>
			<main class="site-main" id="main" role="main">
				<div class="content-fluid">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-6 pb-3 pt-2">
								<h1>中国经销商</h1>
								<p>正在寻找与我们联系的方式？我们很愿意帮助您，您可以通过如下的方式与我们取得联系</p>
							</div>
						</div>
					</div>
				</div>
				<div class="content-fluid mb-4">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-8 px-0-mobile pb-3">
								<iframe src="https://jshare.com.cn/html/public/gpnpajlk" width="600px" height="600px"></iframe>
							</div>
							<div class="col-12 col-md-4 pb-3 d-flex flex-column justify-content-center justify-content-md-start">
								<img decoding="async" class="bot-icon align-self-md-start pl-md-2" src="/svg/icon_bot_purple.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div id="empty-container desktop-version" class="bkgnone"></div>
			</main>
		</div>
	</div>
};

export default Contact;