const express = require('express')
const router = express.Router()


const CodeRequestHandler = require('../service/CodeRequestHandler');
const files = require('../../data/files.json');

router.get('/data.json', (req, res) => {
	res.status(200).json({
		version: [
			'11.0.0',
			'10.3.3',
			'10.3.2',
			'10.3.0',
			'10.2.1',
			'10.2.0',
			'10.1.0',
			'10.0.0',
		],
		domain: {
			'cdn': process.env.CDN_DOMAIN,
			'assets': process.env.IMG_DOMAIN
		},
		files: files
	})
});

router.get('/*', (req, res) => {
	let redirect = CodeRequestHandler(req.url, process.env);
	if(redirect) {
		res.redirect(req.protocol + '://' + redirect);
	} else {
		res.status(404).end();
	}
});

module.exports = router;