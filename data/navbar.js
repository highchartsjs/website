import AddOns, {integrations} from './addons';

const navbar = [{
	title: '产品',
	code: 'products',
	isMenu: true,
	items: [{
		title: 'Highcharts JS',
		code: 'highcharts',
		menus: [{
			title: '功能特性',
			link: '/products/highcharts'
		}, {
			title: '示例',
			link: '/demo'
		}, {
			title: '案例',
			link: '/blog/posts/highcharts-use-cases'
		}, {
			title: '教程',
			link: '/blog/posts/highcharts'
		}, {
			title: '使用文档',
			link: '/docs'
		}]
	}, {
		title: 'Highcharts Stock',
		code: 'stock',
		menus: [{
			title: '功能特性',
			link: '/products/stock'
		}, {
			title: '示例',
			link: '/demo/stock'
		}, {
			title: '案例',
			link: '/blog/posts/highcharts-stock-use-cases'
		}, {
			title: '教程',
			link: '/blog/posts/highcharts-stock'
		}, {
			title: '使用文档',
			link: '/docs/stock'
		}]
	}, {
		title: 'Highcharts Maps',
		code: 'maps',
		menus: [{
			title: '功能特性',
			link: '/products/maps'
		}, {
			title: '示例',
			link: '/demo/maps'
		}, {
			title: '案例',
			link: '/blog/posts/highcharts-maps-use-cases'
		}, {
			title: '教程',
			link: '/blog/posts/highcharts-maps'
		}, {
			title: '使用文档',
			link: '/docs/maps'
		}]
	}, {
		title: 'Highcharts Gantt',
		code: 'gantt',
		menus: [{
			title: '功能特性',
			link: '/products/gantt'
		}, {
			title: '示例',
			link: '/demo/gantt'
		}, {
			title: '案例',
			link: '/blog/posts/highcharts-gantt-use-cases'
		}, {
			title: '教程',
			link: '/blog/posts/highcharts-gantt'
		}, {
			title: '使用文档',
			link: '/docs/gantt'
		}]
	}, {
		title: 'Highcharts Editor',
		code: 'editor',
		menus: [{
			title: '功能特性',
			link: '/products/highcharts-editor'
		}, {
			title: '示例',
			link: 'https://editor.highcharts.com'
		}, {
			title: '使用文档',
			link: 'https://github.com/highcharts/highcharts-editor'
		}]
	}, {
		title: '高级技术支持服务',
		code: 'highcharts-advantage',
		menus: [{
			title: '服务详情',
			link: '/products/highcharts-advantage'
		}]
	}, {
		title: '扩展及集成',
		code: 'integrations',
		menus: integrations
	}]
}, {
	title: '在线示例',
	code: 'demo',
	items: [{
		title: 'Highcharts JS 示例',
		code: ''
	}, {
		title: 'Highcharts Stock 示例',
		code: 'stock'
	}, {
		title: 'Highcharts Maps 示例',
		code: 'maps'
	}, {
		title: 'Highcharts Gantt 示例',
		code: 'gantt'
	}, {
		title: 'Accessibility 示例',
		code: 'accessibility',
		link: '/accessibility/#exploreFeatures'
	} /*, {
		title: '客户案例',
		code: '/blog/posts/use-cases/'
	}*/]
}, {
	title: '开发者资源',
	code: 'developer',
	ignorePrefix: true,
	items: [{
		title: "使用教程",
		code: 'docs'
	}, {
		title: 'API 文档',
		link: 'https://api.highcharts.com/highcharts'
	}, {
		title: '无障碍访问',
		code: 'accessibility'
	}, /*{
		title: '图表选择器',
		link: 'chartchooser'
	}, */{
		title: '更新日志',
		code: 'changelog'
	}, {
		title: "发展规划",
		code: 'roadmap'
	}]
}, {
	title: '服务与支持',
	code: 'support'
}, {
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
			title: nav.title
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