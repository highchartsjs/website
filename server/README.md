# Highcharts Website API

## /code

### /code/data.json

CDN 基础数据接口，包含版本，文件列表

### /code/*

CDN 文件路径跳转，包括

	/*.js 					-> /{version}/*.js
	/highcharts/*.js     -> /{version}/*.js
	/highstock/*.js      -> /stock/{version}/*.js
	/stock/*.js          -> /stock/{version}/*.js
	/highmaps/*.js       -> /maps/{version}/*.js
	/maps/*.js           -> /maps/{version}/*.js
	/gantt/*.js          -> /gantt/{version}/*.js

(其中 {version} 为最新版本)

另外还包括 10 以前的版本，跳转到 https://cdn.hcharts.cn

## /api


### /api/download

Highcharts ZIP 文件下载接口

### /api/samples/[...path]

Highcharts Samples 数据接口，用于 JShare 代码运行。