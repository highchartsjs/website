const path = require('path');
require('dotenv').config({
	path: path.join(__dirname, process.env.DEBUG ? './.env' : './.env.production')
});
const express = require('express');


const app = express();
const port = process.env.SERVER_PORT || 3000;

const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxzy', 10)


const CodeRoute = require('./server/route/code');
const APIRoute = require('./server/route/api');

app.use('/code', CodeRoute);
app.use('/api', APIRoute);

app.use((err, req, res, next) => {
	let errMessage = err.stack.split('\n');
	errMessage.length = 2;

	let id = nanoid(10);

	console.log(`-------------------- ${id} ----------------------------->
${new Date().toLocaleString()} : ${req.url} 
	${errMessage.join('\n')}
\n`)
	res.status(500).send('server error, id #' + id)
});

app.listen(port, () => {
	console.log(`\nHighcharts API Server Start on port ${port}\n`)
});