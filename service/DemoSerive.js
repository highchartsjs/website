const fs = require('../helper/fs');
const path = require('path');

// const HighchartsPATH = process.env.HIGHCHARTS_PATH;
let HighchartsVersion = process.env.HIGHCHARTS_VERSION;

const ProductCDNReplacement = [
	'stock/',
	'maps/',
	'gantt/'
];

const CDNDomain = process.env.CDN_DOMAIN.replace(/http(s)?:\/\//, '');// 'code.highcharts.com.cn/';

const ScriptAppend = [
	//'https://code.hcharts.cn/plugins/zh_cn.js'
];

const IEScripts = {
	prefix: [
		'/modules/oldie-polyfills.js'
	],
	suffix: [
		'/modules/oldie.js'
	]
};

const wordCapitalize = function (word) {
	let chars = word.split('');
	chars[0] = chars[0].toUpperCase();
	return chars.join('');
}


const mainFiles = [
	'highcharts',
	'highstock',
	'highmaps',
	'highcharts-gantt'
]


const Products = require('../data/products.json');
const FS = require('../helper/fs');

const DemoService = {
	getVersion: function () {
		return HighchartsVersion;
	},

	getCDNSample: function () {
		let str = '',
			keys = Object.keys(Products);
		keys.forEach((product, i) => {
			str += '// ' + Products[product].name + '\n&lt;script src="https://' +
				CDNDomain + (product === 'highcharts' ? '' : product + '/') + HighchartsVersion + '/' +
				Products[product].main + '"&gt;&lt;/script&gt;' + (i === keys.length - 1 ? '' : '\n\n');
		});
		return str;
	},

	scriptReplacement: function (script) {

		let isMapsOrStock = false;

		script = script.replace('code.highcharts.com/', CDNDomain);

		ProductCDNReplacement.forEach(product => {

			if (script.includes(product)) {
				script = script.replace(product, product + HighchartsVersion + '/');
				isMapsOrStock = true;
			}
		});

		if (!isMapsOrStock) {
			script = script.replace(CDNDomain, CDNDomain + HighchartsVersion + '/')
		}

		return script;
	},

	updateScripts: function (result, theme, needIEScripts) {
		if (result.html) {
			let it = result.html.matchAll(/<script(.*)?src=\"(.*)\"(.*)?><\/script>/g),
				match = it.next(),
				scripts = [],
				offset = 0,
				start,
				end;
			while (!match.done) {

				scripts.push(DemoService.scriptReplacement(match.value[2]));

				start = offset + match.value.index;
				end = start + match.value[0].length + 1; // +1 是因为回车符

				result.html = (start ? result.html.substr(0, start) : '') + result.html.substr(end);

				offset -= match.value[0].length + 1;
				match = it.next();
			}


			if (theme) {
				scripts.push('https://' + CDNDomain + HighchartsVersion + '/themes/' + theme + '.js');
			}

			scripts = scripts.concat(ScriptAppend);

			if (needIEScripts) {



				IEScripts.prefix.forEach(prefix => {
					scripts.unshift('https://' + CDNDomain + HighchartsVersion + prefix);
				});

				IEScripts.suffix.forEach(subffix => {
					scripts.push('https://' + CDNDomain + HighchartsVersion + subffix);
				});
			} else {
				result.npm = DemoService.getNPMImport(scripts);
			}

			result.scripts = scripts;
		}
	},

	getNPMImport: script => {

		let
			filename = null,
			temp,
			module = null,
			filepath = null,
			moduleInit = '',
			isMain = false,
			modules = [],
			maxModuleName = 0;

		script.forEach(s => {
			if (!s.includes('plugins/') && s.includes(CDNDomain)) {
				filepath = 'highcharts/' + s.replace('https://' + CDNDomain, '').replace(/stock\/|maps\/|gantt\//, '').replace(HighchartsVersion + '/', '').replace('.js', '');
			} else {
				filepath = s;
			}
			temp = filepath.split('/');
			filename = temp[temp.length - 1];

			if (mainFiles.includes(filename)) {
				isMain = true;
				if (filename !== 'highcharts') {
					filepath = 'highcharts/' + filename;
					filename = 'highcharts';
				} else {
					filepath = filepath.replace('highcharts/', '')
				}
			} else {
				isMain = false;
			}

			module = filename.split('-').map(w => wordCapitalize(w)).join('').replace('.js', '');
			modules.push([module, filepath]);
			if (module.length > maxModuleName) {
				maxModuleName = module.length;
			}

			// npm += `import ${module} from '${filepath}';\n`;
			if (!isMain) {
				moduleInit += `${module}(Highcharts);\n`
			}
		});

		return modules.reduce((pre, cur) => {
			return pre + 'import ' + cur[0] + ' '.repeat(maxModuleName - cur[0].length) + ' from \'' + cur[1] + '\';\n'
		}, '// 安装\nnpm install highcharts@' + HighchartsVersion + ' --save\n\n// import 模块 \n') + '\n// 初始化模块\n' + moduleInit;
	},

	getHTML: result => {
		let scripts = '';
		if (result.scripts) {
			result.scripts.forEach(s => {
				scripts += `<script src="${s}"></script>\n`
			});
		}
		return `<html>
<head>${result.css || ''}
</head>
<body>
${reuslt.html}
${scripts}
${result.script}
</body>
</html>
`
	},

	getDetail: async (demoPath, theme, needIEScripts, version) => {

		// tools/update-highcharts.js 里需要（代码里会变更 version）
		if (version) {
			HighchartsVersion = version;
		}


		let files = await fs.readDir(demoPath);
		let result = {
			js: '',
			css: '',
			html: ''
		};

		let filename, subffix = null;
		for (let i = 0; i < files.length; i++) {
			[filename, subffix] = files[i].split('.');

			if (subffix === 'details') {

			} else if (subffix === 'md') {

			} else {
				result[subffix] = await fs.readFile(demoPath + '/' + files[i]);
				if (subffix === 'html') {
					DemoService.updateScripts(result, theme, needIEScripts);
				}
			}
		}

		return result;
	},

	getJSON: async (product, code, theme) => {
		let filename = path.join(process.cwd(), 'data/samples/' + product) + '/demo/' + code + '.json';
		if (FS.existsSync(filename)) {
			let result = JSON.parse(await FS.readFile(filename));

			if (theme) {
				result.scripts.push('https://' + CDNDomain + HighchartsVersion + '/themes/' + theme + '.js');
				result.npm = DemoService.getNPMImport(result.scripts);
			}
			return result;
		}
		return null;
	},

	getDemoName: async(product, demoCode) => {
		let result = JSON.parse(await fs.readFile(path.join(process.cwd(), './data/demos/') + product + '.json'));
		for(let i =0; i< result.length; i++) {
			for(let j = 0; j < result[i].children.length; j++) {
				if(result[i].children[j].code === demoCode) {
					return result[i].children[j].name;
				}
			}
		}
		return null;
	},

	/**
	 * 
	 * @param {string} product 
	 * @param {boolean} returnPureObj 
	 * @param {string} currentDemo 
	 * @param {boolean} needIEScripts
	 * @returns 
	 */
	getDemoByProduct: async (product, returnPureObj, currentDemo, theme, needIEScripts) => {

		let result = JSON.parse(await fs.readFile(path.join(process.cwd(), './data/demos/') + product + '.json'));

		if (returnPureObj) {
			return result;
		}

		function getNextPre(curren, i, j) {
			let group = null;
			if (j === 0) {
				if (i === 0) {
					curren.pre = null;
				} else {
					group = result[i - 1].children;
					curren.pre = group[group.length - 1].code;
				}

			} else if (j === result[i].children.length - 1) {
				if (i === result.length - 1) {
					curren.next = null;
				} else {
					group = result[i + 1].children;
					curren.next = group[0].code;
				}
			}
			if (curren.pre === undefined) {
				curren.pre = result[i].children[j - 1].code;
			}
			if (curren.next === undefined) {
				curren.next = result[i].children[j + 1].code;
			}
		};

		let current = null;
		if (currentDemo) {
			let parent = null;
			for (let i = 0; i < result.length; i++) {
				parent = result[i];
				for (let j = 0; j < parent.children.length; j++) {
					if (parent.children[j].code === currentDemo) {
						current = parent.children[j];
						current.parent = parent.code;
						current.data = await DemoService.getJSON(product, parent.children[j].code, theme)

						// await DemoService.getDetail(
						// 	path.join(HighchartsPATH, './samples/', product, '/demo/', parent.children[j].code),
						// 	theme, needIEScripts);


						getNextPre(current, i, j);
					}
				}
			}
		}



		return {
			demos: result,
			demo: currentDemo,
			current: current
		}
	}
};

module.exports = DemoService;