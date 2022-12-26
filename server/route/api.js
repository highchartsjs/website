const express = require('express')
const router = express.Router()
const path =require('path');
const FS = require('../../helper/fs');



const SamplePath = process.env.HIGHCHARTS_SAMPLE_RESULT_PATH;
const ZipDownload = require('../service/ZipDownloadHandler');


router.get('/samples/*', async (req, res) => {
	let url = req.url.replace('/samples', '');
	let file = path.join(SamplePath, url) + '.json';
	if (FS.existsSync(file)) {
      res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader('Content-type', 'application/json')
      res.send(await FS.readFile(file));
   } else {
		res.status(404).end();
   }
});


router.get('/download/:product/:version', (req, res) => {
	if(!ZipDownload(req, res)) {
		res.status(404).end();
	}
});

router.get('/download/:product', (req, res) => {
	if(!ZipDownload(req, res)) {
		res.status(404).end();
	}
});


module.exports = router;