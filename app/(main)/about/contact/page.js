import Accordion from '@/components/Accordion.js';
import Breadcrumb from '@/components/Breadcrumb';

const ContactItems = [{
	title: '技术支持',
	content: `<p>我们的技术团队在多个平台上提供服务，您可以在我们的支持页面上找到您正在寻找的东西。</p><a href="/support" class="btn mb-0 mt-1 btn-small btn-primary"> 服务与支持</a></p>`
},{
	title: '销售咨询',
	content: `<p>您想与销售代表交谈吗？提交一份销售咨询表，与我们的销售团队取得联系。</p>
	<a href="https://shop.highsoft.com/contact" class="btn btn-primary mb-0 mt-1 btn-small" target="_blank">提交销售咨询</a></p>`
},{
	title: '其他咨询',
	content:  `<p>您是否在寻找我们的公司信息、价格、产品信息，或我们的条款和条件信息？
	<a href="https://shop.highcharts.com/customer-service">请参阅我们的客户服务页面</a>&nbsp;或
	<a href="https://shop.highcharts.com/#faq"> 请查看我们的常见问题页面。</a></p>`
},{
	title: '公司地址',
	content: `<p><strong>Visit us in Vik</strong> <br /> Highsoft AS <br />Sentrumsgata
	44<br /> 6893, Vik i Sogn<br />Norway</p>
<p><strong>Visit us in Bergen</strong> <br /> Highsoft AS <br />Lars Hilles gate 30<br /> 5008, Bergen<br />Norway</p>`
}];


async function Contact() {
	return <div id="full-width-page-wrapper">
		<div id="content">
		<Breadcrumb paths={['about', 'contact']}></Breadcrumb>
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