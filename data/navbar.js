export default  [{
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
		title: 'Highcharts Advantage',
		code: 'advantage',
		menus: [{
			title: '功能特性',
			link: '/products/highcharts-advantage'
		}]
	},{
		title: 'Integrations',
		code: 'integrations',
		menus: [{
			title: 'Wrappers',
			link: '/products/wrappers'
		},{
			title: 'Add-ons',
			link: '/products/add-ons'
		},{
			title: 'Frameworks',
			link: '/products/frameworks'
		},{
			title: 'Mobile',
			link: '/products/mobile'
		}]
	}]
}, {
	title: '在线例子',
	code: 'demos',
	items: [{
		title: 'Highcharts JS 示例',
		link: '/demo'
	}, {
		title: 'Highcharts Stock 示例',
		link: '/demo/stock'
	}, {
		title: 'Highcharts Maps 示例',
		link: '/demo/maps'
	}, {
		title: 'Highcharts Gantt 示例',
		link: '/demo/gantt'
	}, {
		title: 'Accessibility 示例',
		link: '/accessibility/#exploreFeatures'
	}, {
		title: '客户案例',
		link: '/blog/posts/use-cases/'
	}]
}, {
	title: '开发者资源',
	code: 'developer',
	items: [{
		title: "使用教程",
		link: '/docs'
	}, {
		title: 'API 文档',
		link: 'https://api.highcharts.com/highcharts'
	}, {
		title: '无障碍访问',
		link: '/accessibility'
	}, {
		title: '图表选择器',
		link: 'chartchooser'
	}, {
		title: '更新日志',
		link: '/changelog'
	}, {
		title: "发展规划",
		link: '/roadmap'
	}]
}, {
	title: '服务与支持',
	code: 'support'
}, {
	title: '下载试用',
	code: 'try',
	type: 'button',
	link: '/download',
	class: 'primary'
}, {
	title: '购买授权',
	code: 'buy',
	link: 'https://shop.highsoft.com',
	type: 'button',
	class: 'secondary'
}];