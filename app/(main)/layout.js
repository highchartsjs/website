
import "@styles/lib/boostrap.min.css";
import "@styles/autoptimize.css"

import HEAD from 'next/head';
import Header from "@components/Header";
import Footer from '@components/Footer';
export default function RootLayout({ children, params }) {
	return (
		<html lang="en">
			<HEAD>
				<meta charSet="utf-8"></meta>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
				<meta name="keywords" content="Highcharts,Highcharts中文网,Charts,stock,stock charts,股票图表,k 线图,Highcharts api文档,Highcharts教程,Highcharts资源下载" />
				<meta name="description" content="Highcharts中文官网，一站式Highcharts学习资源。提供Highcharts中文论坛、Highcharts在线示例、Highcharts中文APi、Highcharts 中文教程、Highcharts资源下载等" />
				<meta name="viewport" content="width=device-width,initial-scale=1" ></meta>
				<meta httpEquiv="x-ua-compatible" content="ie=edge" ></meta>
			</HEAD>
			<body>
				<Header />
				{children}
				<Footer />
				<script src="/js/common.js"></script>
			</body>
		</html>
	);
}