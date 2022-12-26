export default function Head({ params }) {
	return (
		<>

			<meta charSet="utf-8"></meta>
			<link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
			{/* <meta name="keywords" content="Highcharts,Highcharts中文网,Charts,stock,stock charts,股票图表,k 线图,Highcharts api文档,Highcharts教程,Highcharts资源下载"><meta name="description" content="Highcharts中文官网，一站式Highcharts学习资源。提供Highcharts中文论坛、Highcharts在线示例、Highcharts中文APi、Highcharts 中文教程、Highcharts资源下载等"></meta> */}
			<meta name="viewport" content="width=device-width,initial-scale=1" ></meta>
			<meta httpEquiv="x-ua-compatible" content="ie=edge" ></meta>
			<title>{params.title || ''}</title>
		</>
	);
}