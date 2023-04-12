import Accordion from '@components/Accordion.js';

const ContactItems = [{
	title: '技术支持',
	content: `<p>Our technical team is available on several platforms
	and there is a good chance you will find what you are looking for on our
	Support Page.</p><a href="/support" class="btn mb-0 mt-1 btn-small btn-primary"> Go to Support</a></p>`
},{
	title: '销售咨询',
	content: `<p>Would you like to speak to a sales representative? Submit a sales inquiry form to get in touch with our Sales team.</p> <a href="https://shop.highsoft.com/contact" class="btn btn-primary mb-0 mt-1 btn-small"> Submit a sales inquiry</a></p>`
},{
	title: '其他咨询',
	content:  `<p>Are you looking for our company information, pricing, product information, or our terms and conditions information?&nbsp;<a href="https://shop.highcharts.com/customer-service">Please refer to our customer service page</a>&nbsp;or<a href="https://shop.highcharts.com/#faq"> check out our frequently asked questions.</a></p>`
},{
	title: '公司地址',
	content: `<p><strong>Visit us in Vik</strong> <br /> Highsoft AS <br />Sentrumsgata
	44<br /> 6893, Vik i Sogn<br />Norway</p>
<p><strong>Visit us in Bergen</strong> <br /> Highsoft AS <br />Lars Hilles gate 30<br /> 5008, Bergen<br />Norway</p>`
}];


async function Contact() {
	return <div id="full-width-page-wrapper">
		<div id="content">
			<main class="site-main" id="main" role="main">
				<div class="content-fluid">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-6 pb-3 pt-2">
								<h1>联系方式</h1>
								<p>正在寻找与我们联系的方式？我们很愿意帮助您，您可以通过如下的方式与我们取得联系</p>
							</div>
						</div>
					</div>
				</div>
				<div class="content-fluid mb-4">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-8 px-0-mobile pb-3">
								<Accordion items={ContactItems} options={{
									code: 'contact',
									active: 0
								}}></Accordion>
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