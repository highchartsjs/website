
import "@styles/autoptimize.css";
import Accordion from "@components/Accordion";
import getTitle from '@components/Title';
import Breadcrumb from '@components/Breadcrumb';


const items = [{
	title: '我有个一般的技术问题',
	content: `<div class="card-body ml-1 pl-0"><p>In the <a href="https://www.highcharts.com/forum/"> Highcharts Forum</a> you’ll find questions and answers,
	and can discuss anything with the Highcharts developers directly.
	Our support engineer monitors the forum and attends to
	unanswered questions daily on business days. You can also check out <a href="https://github.com/highcharts/highcharts">Github</a> or <a href="https://stackoverflow.com/tags/highcharts">Stack Overflow.</a></p><div class="row"><div class="col-4 "> <a href="https://www.highcharts.com/forum/"><img class="logo-accordion" src="https://wp-assets.highcharts.com/svg/highcharts-logo.png" alt=""></a></div><div class="col-4 "> <a href="https://stackoverflow.com/tags/highcharts"><img src="https://wp-assets.highcharts.com/svg/stackoverflowlogo.png" alt=""></a></div><div class="col-4 "> <a href="https://github.com/highcharts/highcharts"><img src="https://wp-assets.highcharts.com/svg/githublogo.png" alt=""></a></div></div></div>`
}, {
	title: '我有一个具体的编程问题',
	content: `Go to Stack Overflow to get help on any specific question or issue: use the following tags <a href="https://stackoverflow.com/tags/highcharts">highcharts</a>, <a href="https://stackoverflow.com/questions/tagged/highcharts+stock">highcharts stock</a> , <a href="https://stackoverflow.com/questions/tagged/highcharts+maps">highcharts maps</a>, then&nbsp;<a href="https://stackoverflow.com/users/login?ssrc=anon_ask&amp;returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2fask%3ftags%3dhighcharts">write your question.</a> We monitor these questions and answer them daily. Over&nbsp;25,0000&nbsp;Stack Overflow questions are tagged Highcharts.</p> <a href="https://stackoverflow.com/" class="btn mb-0 mt-1 btn-small btn-primary">Search Stack Overflow</a>`
}, {
	title: '我想提交新的功能需求',
	content: `<p>To request a feature, please submit a request to our <a href="https://github.com/highcharts/highcharts/issues/new?assignees=&amp;labels=Type%3A+Feature+Request&amp;template=feature_request.md&amp;title=">GitHub
	issue tracker</a>, or vote for the ones that are <a href="https://github.com/highcharts/highcharts/labels/Type%3A%20Feature%20Request">already
		registered</a> by adding a thumbsup reaction to them.</p> <a class="btn mb-0 mt-1 btn-small btn-primary" href="https://github.com/highcharts/highcharts/issues/new?assignees=&amp;labels=Type%3A+Feature+Request&amp;template=feature_request.md&amp;title=">Request a feature</a></p>`
}, {
	title: '我发现了一个 Bug，而且我可以重现它',
	content: `<p>Read our&nbsp;<a href="https://github.com/highcharts/highcharts/blob/master/repo-guidelines.md#reporting-issues">rules for issue reporting</a>&nbsp;and report it on&nbsp;<a href="https://github.com/highcharts/highcharts/issues">GitHub Issues.</a> If you’re not sure it’s a bug, please check with us in one of the above channels first.
	The highcharts.com repo is starred by&nbsp;11,003&nbsp;and forked by&nbsp;3,217&nbsp;users.</p> <a class="btn mb-0 mt-1 btn-small btn-primary" href="https://github.com/highcharts/highcharts/issues">Report a bug</a></p>`
}, {
	title: 'Highcharts 如何支持无障碍访问的',
	content: `<p>Our mission is to offer accessible interactive charts to empower people with disabilities. All Highcharts licenses include our powerful Accessibility features that allow you to visualize data as accessible as possible.</p> <a class="btn mb-0 mt-1 btn-small btn-primary" href="/accessibility">Visit our Accessibility Portal</a></p>`
}, {
	title: '我想定制开发 Highcharts 相关的项目或扩展',
	content: `<p>Our partner&nbsp;<a href="https://blacklabel.pl/contact">Black Label</a>, has been providing customizations for Highcharts JS, Highcharts Stock and Highcharts Maps daily since 2010. Black Label offers a range of development services,
	from quick chart design brush-up to working closely with the rest of your development team to implement across systems.</p>
<div class="row">
	<div class="col-4"> <a href="https://blacklabel.pl/contact"><img src="https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/08/16101651/logo-large2x.png" alt=""/></a></div>
</div>`
}];

const advantageItems = [{
	title: 'Highcharts Forun',
	content: `<p>Enter your <button aria-label="Explanation of license ID" aria-expanded="false" id="tooltipbtn-1" data-title="Your License ID can be found on your License Statement received upon purchase." class="tooltip-btn">License ID <i class="fa fa-question-circle-o" aria-hidden="true"></i> </button> number in the subject when opening a ticket in our <a href="https://support.highcharts.com/support/home">Support portal</a></p>`
}, {
	title: 'Chat With Us',
	content: `<p>To chat with our support team; contact us by <a href="https://www.skype.com/en/get-skype/">Skype</a> on HighchartsSupport. Be sure to insert your <button aria-label="Explanation of license ID" aria-expanded="false" id="tooltipbtn-1" data-title="Your License ID can be found on your License Statement received upon purchase." class="tooltip-btn">License ID <i class="fa fa-question-circle-o" aria-hidden="true"></i> </button> number when prompted for a message to send along with the contact request. Our support team is available between 10:00 and 18:00 CET (Central European Time) business days.</p>`
}, {
	title: 'Email Us',
	content: `<p>Enter your&nbsp;<button aria-label="Explanation of license ID" aria-expanded="false" id="tooltipbtn-1" data-title="Your License ID can be found on your License Statement received upon purchase." class="tooltip-btn">License ID <i class="fa fa-question-circle-o" aria-hidden="true"></i> </button> number&nbsp;in the subject when you send an email to&nbsp;support@highcharts.com.</p>`
}]

export const metadata = getTitle('服务与支持');


export default function Support() {
	return <div id="full-width-page-wrapper">
		<Breadcrumb paths="support"></Breadcrumb>
		<div id="content">
			<main class="site-main" id="main" role="main">
				<div class="content-fluid" id="general-support-section">
					<h1 class="h1-text-hidden">Support</h1>
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-4 pb-2 pt0 pt-md-2 d-flex flex-column justify-content-center justify-content-md-start order-2">
								{/* <h2 class="color-mudLogo pl-1 mt-0 mt-md-4 index-heading">目录</h2> */}
								<ol>
									<li><a href="/support/#general-support-section">服务与支持 &amp; 社区</a></li>
									<li><a href="/support/#advantage-support-section">高级技术支持服务</a></li>
								</ol>
							</div>
							<div class="col-12 col-md-8 pb-3 pt-2 order-1">
								<h2> 服务与支持 & 社区</h2>
								<p>一个充满热情的社区和专业的支持工程师随时准备帮助您。</p>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-8 px-0-mobile pb-3">
								<Accordion items={items} options={{
									code: 'support',
									active: 0
								}}></Accordion>
							</div>
							<div class="col-12 col-md-4 pb-2 d-flex flex-column justify-content-center justify-content-md-start"> <img decoding="async" class="bot-icon align-self-md-start pl-md-2" src="/svg/icon_bot_purple.svg" alt="" /></div>
						</div>
					</div>
				</div>
				<div class="content-fluid pt-0 pt-md-2 mb-4" id="advantage-support-section">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-6 pb-2">
								<h2> Highcharts Advantage</h2>
								<p>You need Highcharts Advantage to get access to premium support services.</p> <a href="https://www.highcharts.com/blog/highcharts-advantage/">Get Highcharts Advantage <span aria-hidden="true" class="fas fa-long-arrow-alt-right"></span></a>
								<p class="mb-0 mt-1">When prompted, be sure to input your LicenseID number so that it’s associated with your contact request. Your LicenseID can be found on your License Statement received upon purchase.</p>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-8 px-0-mobile pb-3">
								<Accordion items={advantageItems} options={{
									code: 'advantage',
									active: 0
								}}></Accordion>
							</div>
							<div class="col-12 col-md-4 pb-2 d-flex flex-column justify-content-center justify-content-md-start"> <img decoding="async" class="bot-icon align-self-md-start pl-md-2" src="/svg/icon_support.svg" alt="" /></div>
						</div>
					</div>
				</div>
				<div id="empty-container desktop-version" class="bkgnone"></div>
			</main>
		</div>
	</div>
}