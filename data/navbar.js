import AddOns from './addons';
import { Integrations } from '@/components/IntegrationList';
import Products from '@/data/products.json';

const navbar = [{
	title: '产品',
	code: 'products',
	items: Object.keys(Products).reduce((pre, cur) => {
		pre.push({
			title: Products[cur].name,
			desc: Products[cur].description || '',
			code: cur
		});
		return pre;
	}, [])
}, {
	show: false,
	title: '扩展包',
	code: 'integrations',
	items: Integrations.reduce((pre, cur) => {
		pre.push({
			title: cur.name,
			desc: cur.desc,
			code: cur.code
		});
		return pre;
	}, [])
},{
	title: '在线示例',
	code: 'demo',
	items: [{
		title: 'Highcharts Core 示例',
		desc: '探索我们庞大的图表库，从面积图到 X-range，您的需求都能满足',
		code: ''
	}, {
		title: 'Highcharts Stock 示例',
		desc: '探索我们先进的股票图表, 包含技术指标和高级注释功能',
		code: 'stock'
	}, {
		title: 'Highcharts Maps 示例',
		code: 'maps',
		desc: '潜心研究我们广泛的地图集，包括基本投影和多种地图类型'
	}, {
		title: 'Highcharts Gantt 示例',
		code: 'gantt',
		desc: '查看资源分配、任务管理和日程安排的用例'
	}]
}, {
	title: '开发者资源',
	code: 'developer',
	ignorePrefix: true,
	items: [{
		title: "使用教程",
		code: 'docs',
		desc: '简单上手，内容丰富，条理清楚'
	}, {
		title: 'API 文档',
		link: 'https://api.highcharts.com/highcharts',
		desc: '我们的 API 文档包含了丰富有用的例子，您可以在短时间内定制图表'
	}, {
		title: '无障碍访问',
		code: 'accessibility',
		desc: '请访问我们的可访问性门户页面，了解关于创建可访问数据可视化的资源和教程'
	}, /*{
		title: '图表选择器',
		link: 'chartchooser'
	}, */{
		title: '更新日志',
		code: 'changelog',
		desc: '随时了解我们正在进行的改进和版本发布'
	}, {
		title: "发展规划",
		code: 'roadmap',
		desc: '了解我们未来对 Highcharts 的改进和新功能开发计划'
	}]
}, {
	title: '服务与支持',
	code: 'support'
},{
	title: '关于',
	code: 'about',
	items: [{
		title: '关于我们',
		code: '',
		desc: '了解Highcharts是如何从 Torstein 对一个简单的图表工具的卑微追求开始的'
	},{
		title: '经销商',
		code: 'parter',
		desc: '获取中国的经销商信息'
	},{
		title: 'Press',
		code: 'press',
		desc: '下载 Logo 资源或阅读关于我们的新闻报道'
	},{
		title: '联系方式',
		code: 'contact',
		desc: '我们很愿意帮助您，了解如何联系我们'
	}]
},{
	title: '下载试用',
	type: 'button',
	code: 'download',
	class: 'primary'
}, {
	title: '购买授权',
	code: 'shop',
	link: 'https://shop.highsoft.com',
	type: 'button',
	class: 'secondary'
}];


let navbarMap = {};


function addToMap(nav, prefix = '') {
	if (!nav.link.startsWith('http')) {
		navbarMap[prefix + nav.code] = {
			link: nav.link,
			title: nav.title || nav.name
		};
	}
};

// update Link 
navbar.forEach(nav => {
	if (nav.items) {
		nav.items.forEach(item => {
			let prefix = '';
			if (!nav.ignorePrefix) {
				prefix = nav.code + '/';
			}

			if (!item.link) {
				item.link = '/' + prefix + item.code;
			}
			addToMap(item, prefix);
		});
	}
	nav.link = '/' + nav.code;

	addToMap(nav);
});


AddOns.forEach(add => {
	add.link = '/products/' + add.code;
	addToMap(add, 'products/');
});

export { navbarMap };

export default navbar;