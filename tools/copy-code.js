const { exec } = require('child_process');


const pwd = process.cwd();
const fs = require('fs');

const Products = [
	["highcharts", ""],
	["highstock", "stock"],
	["highmaps", "maps"],
	["gantt", "gantt"]
],
	folders = ['code/', 'gfx', 'graphics'],
	Dist = pwd + '/data/code/',
	
	_exec = function (cmd) {
		return new Promise((resolve, rejects) => {
			exec(cmd, (err, stdout, strerr) => {
				err ? rejects(err) : resolve(err);
			});
		});
	},
	_mkdir = function(path) {
		if(!fs.existsSync(path)) {
			fs.mkdirSync(path);
		}
	};


/**
 * Copy Highcharts build code result 
 * @param {*} HighchartsVersion 
 * @param {*} env 
 */
const main = async (HighchartsVersion, env) => {
	const Src = env.HIGHCHARTS_PATH + '/build/dist/';

	for (let i = 0; i < Products.length; i++) {  
		let product = Products[i];

		let dist = Dist + (product[1] ? product[1] + '/' : '') + HighchartsVersion;

		_mkdir(dist);

		let src = '';
		for (let j = 0; j < folders.length; j++) {
			src = Src + product[0] + '/' + folders[j];
			try {
				await _exec(`cp -rf ${src} ${dist}`);
			} catch (err) {
				console.error(err);
				break;
			}
		}
	}

	await _exec(`cp -rf ${Src}*.zip ${pwd}/data/zips/`);
}

module.exports = main;
// (async() => {
// 	await main('10.2.1');
// })();