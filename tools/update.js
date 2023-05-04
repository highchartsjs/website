
/**
 * 
 * 更新 Highcharts 版本，主要步骤：
 * 
 * 1. 下载
 * 
 */
const path = require('path');
const BuildDemos = require('./build-demos');
const CopyCode = require('./copy-code');

const config = require('dotenv').config({
	path: path.join(__dirname, '../.env')
});

const _env = config.parsed;

const HighchartsPackage = require(_env.HIGHCHARTS_PATH + '/package.json');

const fs = require('../helper/fs');
const CWD = process.cwd();

(async () => {

	// 1. 更新版本号
	const version = HighchartsPackage.version;

	// // 2. 更新例子
	await BuildDemos(version, _env);

	// // 3. 复制 CDN 文件及 zip 资源包
	await CopyCode(version, _env);

	let content = await fs.readFile(CWD + '/.env');
	content = content.replace(/HIGHCHARTS_VERSION=(\d|\.)+\n/g, 'HIGHCHARTS_VERSION=' + version + '\n');
	

	await fs.writeFile(CWD + '/.env', content);

})();