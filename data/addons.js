const additional = [
	{
		"code": "highcharts-editor",
		"title": "Highcharts 可视化编辑器"
	},
	{
		"code": "highcharts-advantage",
		"title": "高级技术支持服务"
	}
];

// const integrations = [
// 	{
// 		"code": "wrappers",
// 		"title": "扩展包"
// 	},
// 	{
// 		"code": "add-ons",
// 		"title": "插件"
// 	},
// 	{
// 		"code": "frameworks",
// 		"title": "框架"
// 	},
// 	{
// 		"code": "highcharts-mobile",
// 		"title": "手机端"
// 	}
// ];


let AddOnsProductCodes = [];
let AddOnsProductNameMap = {};

additional.map(p => {
	p.link = '/products/' + p.code;
	AddOnsProductCodes.push(p.code);
	AddOnsProductNameMap[p.code] = p.title;
});

export { AddOnsProductCodes };
export {AddOnsProductNameMap}
// export { integrations }
export default additional;
