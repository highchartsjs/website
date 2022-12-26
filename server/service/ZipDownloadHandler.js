const fs = require('fs');
const path =require('path');

const FS = require('../../helper/fs');
const Products = require('../../data/products.json');
const Version = require('../../data/versions.json');
const HIGHCHARTS_VERSION = process.env.HIGHCHARTS_VERSION;
const ZIPS_PATH = process.env.ZIPS_PATH;


function checkoutVersion(version) {
	return !version || Version.includes(version);
}

let downloadCount = 0;

const download = function(req, res) {
	let {product, version} = req.params;
	console.log(req.headers);
	let referer = req.header('Referrer');
	let ip = req.ip;
	console.log(referer, ip);

	if(Products[product] && checkoutVersion(version)) {
		version = version || HIGHCHARTS_VERSION;
		let filename = Products[product].zip + '-' + version + '.zip';
		let filepath = path.join(process.cwd(), ZIPS_PATH, filename);
		if(FS.existsSync(filepath)) {
			let stat = fs.statSync(filepath);
			res.set({
				'Connection': 'close', // intention
            'Content-Type': 'application/x-zip-compressed',
            'Content-Length': stat.size,
            "Content-Disposition": "attachment; filename=" + filename
			});
			downloadCount ++;
			let readStream = fs.createReadStream(filepath);
			readStream.pipe(res);
			res.on('finish', function(e) {
				console.log('finish', 'down')
				downloadCount --
			});
			return true;
		}
	}
	res.status(404).end();
}

module.exports = download;