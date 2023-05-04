// import '@/styles/components/footer.scss';
import Link from "next/link";

const Menu = [{
	title: '快捷链接',
	code: 'shortcuts',
	items: [{
		title: '产品',
		code: 'product',
	}, {
		title: '例子',
		code: 'demos'
	}, {
		title: '下载试用',
		code: 'download',
	}, {
		title: '获取授权',
		code: 'get-license',
		link: 'https://shop.highsoft.com'
	}]
}, {
	title: '开发者资源',
	code: 'developer',
	items: [{
		title: '使用文档',
		code: 'docs'
	}, {
		title: 'API 文档',
		code: 'api',
		link: 'https://api.highcharts.com'
	}, {
		title: '更新日志',
		code: 'changelog',
	}, {
		title: '发展规划',
		code: 'roadmap',
	}]
}, {
	title: '服务与支持',
	code: 'support',
	items: [{
		title: '技术社区',
		code: 'forum',
		link: 'https://www.highcharts.com/forum/'
	}, {
		title: 'Stack Overflow',
		code: 'stackoverflow',
		link: 'https://stackoverflow.com/tags/highcharts'
	}, {
		title: 'Github',
		code: 'github',
		link: 'https://github.com/highcharts/highcharts'
	}, {
		title: '服务与支持',
		code: 'support'
	}, {
		title: '图表选择器',
		code: 'chart-chooser'
	}]
}, {
	title: '网站相关',
	code: 'site',
	items: [{
		title: '隐私政策',
		code: 'privacy',
		link: 'http://localhost:3000/privacy'
	}, {
		title: '标准协议文档',
		code: 'argeement',
		link: 'https://shop.highcharts.com/license'
	}, {
		title: 'Sitemap',
		code: 'sitemap',
		link: '/sitemap.xml'
	}, {
		title: 'Accessibility Statement',
		code: 'accessibility',
		link: 'https://www.highcharts.com/blog/article/accessibility-statement/'
	}]
}, {
	title: '关于',
	code: 'about',
	items: [{
		title: '我们的故事',
		code: 'about',
		// link: 'http://localhost:3000/about'
	}, {
		title: '团队',
		code: 'team',
		link: 'hhttps://www.highcharts.com/people'
	}, {
		title: '联系方式',
		code: 'contact',
		link: '/about/contact'
	}, {
		title: '行为准则',
		code: 'conduct',
		link: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2021/08/16115648/Codeofconduct.pdf'
	}]
}];


function FooterLink({item}) {


	let props = {
		href: item.link || ('/' + item.code)
	};

	if (props.href.startsWith('http')) {
		props.target = '_blank';
	}

	return <li className="footer-link">
		<Link {...props}>{item.title}</Link>
	</li>
}


const Footer = function (props) {
	return <footer className="page-footer font-small bkgDarkestGray" role="contentinfo">
		<div id="footer" className="container">
			<div className="row footer-menu">

				{
					Menu.map(menu =>
						<div className="col-6 col-md-4 col-lg mt-2 mb-2" key={menu.key}>
							<h2 className="h4 mb-1 mb-md-2 footer-heading font-weight-light">{menu.title}</h2>
							<ul className="footer-list list-unstyled">
								{
									menu.items.map(item =>
										<FooterLink item={item} key={item.code}></FooterLink>
									)
								}
							</ul>
						</div>
					)
				}
			</div>
			<div className="row pb30 desktop-version">
				<div className="col py-1 pr-0 pb-3 text-left highchartsRights small-text">
					<div> © {new Date().getFullYear()} Highcharts<span className="sep"> 保留所有权利，</span>
					<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备16004892号-1</a>，由 <a href="/about/parter">简数科技</a> 提供服务。</div>
				</div>
				<div className="col py-1 pl-0 pb-3 text-right">
					<h2 className="h2-text-hidden">Social</h2>
					<ul className="footerSocialsList footerSocials">
						<li><a className="socials" href="https://github.com/highcharts/highcharts" aria-label="Highcharts Github"><i className="fa fa-github txtWhite" aria-hidden="true"></i></a></li>
						<li><a className="socials" href="https://stackoverflow.com/questions/tagged/highcharts" aria-label="Highcharts Stack Overflow"><i className="fa fa-stack-overflow txtWhite" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
			{/* <div className="row pb30 mobile-version">
				<div className="col-12 pr-1 text-center">
					<h2 className="h2-text-hidden">Social</h2>
					<p className="footerSocials text-center"></p>
					<ul className="footerSocialsList">
						<li><a className="socials" href="https://github.com/highcharts/highcharts" aria-label="Highcharts Github"><i className="fa fa-github txtWhite" aria-hidden="true"></i></a></li>
						<li><a className="socials" href="https://stackoverflow.com/questions/tagged/highcharts" aria-label="Highcharts Stack Overflow"><i className="fa fa-stack-overflow txtWhite" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="col-12 pb-1 highchartsRights small-text">
					<div className="text-center"> © {new Date().getFullYear()} Highcharts<span className="sep">. All rights reserved. </span> 由简数科技提供服务</div>
				</div>
			</div> */}
		</div>
	</footer>
}

export default Footer;