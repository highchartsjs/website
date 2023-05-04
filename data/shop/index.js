import PRODUCTS from '@/data/products.json';

const ProductOrder = ['highcharts', 'stock', 'maps', 'gantt'];
const Price = [
	// Annual
	[
		[160, 316, 788], // highcharts core
		[160, 216, 788], // highcharts stock
		[57, 111, 276],  // highcharts maps
		[33, 64, 158],    // highcharts gantt

	],
	// Perpetual
	[
		[368, 725, 1811],
		[368, 725, 1811],
		[129, 254, 634],
		[74, 145, 363]
	]
];

const Python = [
	[
		[48, 94.8, 236.4],  // core
		[48, 94.8, 236.4],   // stock
		[17.1, 33.3, 82.8],  // maps
		[9.9, 19.2, 47.4],  // gantt
	],
	[
		[110.4, 217.5, 543.3],
		[110.4, 217.5, 543.3],
		[38.7, 76.2, 190.2],
		[22.2, 43.5, 108.9]
	]
]

const format = function (price) {
	return price.toFixed(2) + ' USD';
}

/**
 * 所有的额外软件包都选择后，这部分的价格 10% 优惠
 * @param {Array[string]} selectedProducts 
 * @returns 
 */
function getDiscount(selectedProducts) {
	for (let i = 0; i < ProductOrder.length; i++) {
		if (!selectedProducts.includes(ProductOrder[i])) {
			return 1;
		}
	}
	return 0.9;
}

/**
 * 计算四合一包的折扣总额
 * 计算方式为除去 Core 的折扣总额
 * @param {*} peroid 
 * @param {*} type 
 * @param {*} selectedProducts 
 * @param {*} seat 
 * @returns 
 */
function getDiscountAmount(peroid, type, selectedProducts, seat) {
	let discount = getDiscount(selectedProducts);
	if (discount !== 1) {
		discount = 1 - discount;
		let amout = 0;
		Price[peroid].forEach((price, productIndex) => {
			if (productIndex !== 0) {
				amout += price[type] * discount
			}
		});
		return amout * seat;
	}
	return 0;
}
/**
 * 
 * @param {0 | 1} period 
 * @param {0 | 1 | 2} type 
 * @param {0 | 1 | 2 | 3 | 4} product 
 */
function getPrice(period, type, product, discount = 1, isPython) {
	if (typeof product === 'string') {
		product = ProductOrder.indexOf(product);
	}
	// python calcl
	return product === -1 ? 0 : (isPython ? Python : Price)[period][product][type] * (product ? discount : 1);

};


function calcPrice(period, type, products, discount, isPython) {
	let total = 0;
	products.forEach(p => {
		total += getPrice(period, type, p, discount, isPython);
	});
	return total;
}


function calcPythonPrice(period, type, products, seats) {
	let discount = getDiscount(products);
	return calcPrice(period, type, products, discount, true) * seats;
}
function getProductDetail(code) {
	return code === 'python' ? {
		code: code,
		name: 'Python',
		desc: 'Easily integrate visualizations into your Python projects using our powerful Python libraries for Highcharts.',
	} : {
		code: code,
		name: PRODUCTS[code].name,
		desc: PRODUCTS[code].description,
	}
}

const Usage = [{
	code: 'internal',
	name: '内部使用',
	desc: 'Solution or application which is used for internal purposes and not available to your customers. Public or private websites, including subdomains and intranet sites, that does not include individually tailored content, like SaaS- or Web applications.'
}, {
	code: 'saas',
	name: 'SaaS 和 Web 应用程序',
	desc: 'Applications running on web server(s) hosted by you, and which can be distributed as a SaaS, web application, desktop application or mobile application.',
}, {
	code: 'oem',
	name: '客户私有部署（OEM）',
	desc: 'Customer Installation is a distribution of your product to your customers hosted servers.'
}];

const LicenseType = [{
	name: 'Internal',
	code: 'internal',
	internal: true,
	saas: false,
	oem: false
}, {
	name: 'SaaS',
	code: 'saas',
	internal: true,
	saas: 1,
	oem: false
}, {
	name: 'SaaS+',
	code: 'saas+',
	internal: true,
	saas: 5,
	oem: false
}, {
	name: 'OEM',
	code: 'oem',
	internal: true,
	saas: true,
	oem: true
}];

const LicensePeroid = [{
	title: '年度订阅授权',
	sTitle: '年度订阅',
	code: 'annual',
	content: 'The Annual License offers a yearly subscription for use of all Releases and Technical Support through Highcharts Advantage. Upon expiration, your permission to use, or distribute the Software expires (including all Releases).'
}, {
	title: '终身授权',
	sTitle: '终身',
	code: 'perpetual',
	content: 'The Perpetual License offers current Releases of the library for a one-time fee. All new releases and Technical Support are included for the duration of your subscription term.'
}];

function isOEM(licenseType) {
	return licenseType.code === 'oem';
}


const Langs = {
	'Usage': '使用范围',
	'Libraries': '软件包',
	'Releases': '新版本更新',
	'Technical support': '技术支持',
	'Buy': '购买',
	'Get a Quote': '获取报价单',
	'seat': '席位',
	'per seat': '每席位',
	'annually': '每年'
};

function getTranslate(key) {
	return Langs[key] || '';
}




export { 
	Price, 
	LicenseType, LicensePeroid, Usage, isOEM, getTranslate, getProductDetail,   format};