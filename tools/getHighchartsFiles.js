const path = require('path');
const config = require('dotenv').config({
	path: path.join(__dirname, '../.env')
});
const walk = require('walk');
const FS = require('../helper/fs');
const Products = require('../data/products.json');

async function walkDir(dir) {
	return new Promise((resolve, reject) => {
		let walker = walk.walk(dir, {
			followLinks: true,
			filters: [
				'css',
				'es-modules',
				'lib'
			]
		}),
			result = {};

		walker.on('file', (root, stat, next) => {
			let relativePath = root.replace(dir, '');
			if (!result[relativePath]) {
				result[relativePath] = [];
			}

			result[relativePath].push(stat.name);
			next();
		});

		walker.on('end', () => {
			resolve(result);
		});
	});
}



const _env = config.parsed;


const FileGroups = [
	{
		code: 'main',
		name: '主文件',
		s: false
	},
	{
		code: 'more',
		name: '扩展文件',
		s: false
	},
	{
		code: 'modules',
		name: '功能模块'
	}, {

		code: 'themes',
		name: '主题'
	},
	{
		code: 'indicators',
		name: '技术指标                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    '
	}
];


async function main() {


	let products = Object.keys(Products);
	let files = {};
	for (let i = 0; i < products.length; i++) {
		let productCode = Products[products[i]].fullCode || products[i];
		let result = await walkDir(path.join(_env.HIGHCHARTS_PATH, 'build/dist/' + productCode + '/code'));
		console.log(result);

		let productFiles = {
			main: [],
			more: []
		};
		for (let key in result) {
			if (key === '') {
				result[key].forEach(file => {
					if (/\.js\.map$/.test(file) || /\.src\.js/.test(file)) {
						return;
					} else if (/\-3d|\-more/.test(file)) {
						productFiles.more.push(file);
					} else {
						productFiles.main.push(file);
					}
				});
			} else {
				productFiles[key.substr(1)] = result[key].filter(file => {
					return !/\.js\.map$/.test(file) && !/\.src\.js/.test(file);
				})
			}
		}
		files[products[i]] = [];


		FileGroups.forEach(g => {

			if(productFiles[g.code] && productFiles[g.code].length) {
				files[products[i]].push({
					name: g.name,
					files: productFiles[g.code],
					prefix: g.s === false ? undefined : (g.code + '/')
				});
			}

		});

	}

	await FS.writeFile(path.join(__dirname, '../data/files.json'), JSON.stringify(files));
}

main();