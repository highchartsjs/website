
import "@styles/autoptimize.css";
import getTitle from '@components/Title';
import Breadcrumb  from '@components/Breadcrumb';
export const metadata = getTitle('下载试用');

function Download() {
	return <div id="full-width-page-wrapper">
		<Breadcrumb paths='download'></Breadcrumb>
		<div id="content">
			<main className="site-main" id="main" role="main">
				<div className="content-fluid" id="try-before-buy">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="pt-2">下载试用</h1>
							</div>
						</div>
						<div className="row mb-2">
							<div className="col-12 col-md-8">
								<p> 您可以免费下载并试用所有 Highcharts 产品。一旦您的项目/产品准备好了准备发布上线，请购买相应的商业许可</p>
								<p> 
								<strong>如果您使用 Highcharts 属于非商业用途（非盈利组织、学校、个人项目）？</strong><br/> 
								请可以直接下载使用，非商业用途是免费的，无需申请即可使用，唯一需要注意的是 highcharts 图表中的水印必须保留。
								</p>
							</div>
							<div className="col-12 col-md-4 text-center"> <a href="https://shop.highsoft.com/" className="my-1 btn btn-secondary">查看授权价格</a></div>
						</div>
						<div className="row mb-3">
							<div className="col-12 col-md-12 bkgWhiteCorners px-3 py-2">
								<div className="row">
									<div className="col-md-12 border-bottom pb-2">
										<h2 className="h3 font-weight-normal">直接使用 CDN 文件</h2>
										<p>不用下载即可直接使用 Highcharts CDN 提供的所有文件，更多文件详见 <a href="https://code.highcharts.com" target="_blank">Highcharts CDN 服务</a>。 </p>
										<pre tabindex="0" className=" prettyprinted"><span className="tag">&lt;script</span><span className="pln"> </span><span className="atn">src</span><span className="pun">=</span><span className="atv">"https://code.highcharts.com/highcharts.js"</span><span className="tag">&gt;&lt;/script&gt;</span></pre>
									</div>
									<div className="col-md-12 border-bottom py-2">
										<h2 className="h3 font-weight-normal">NPM 安装</h2>
										<p><a href="https://www.npmjs.com/package/highcharts" target="_blank">Highcharts 官方 NPM 包</a> 提供了对 CommonJS 的支持，包含了 Highcharts JS，Highcharts Stock, Highcharts Maps 及 Highcharts Gantt 所有相关的包。更多详情见 <a href="/docs/getting-started/install-from-npm" target="_blank">文档教程</a>。</p>
            <pre>npm install highcharts --save</pre>
									</div>
									<div className="col-md-12 border-bottom py-2">
										<h2 className="h3 font-weight-normal">作为模块加载或自己构建</h2>
										<p>Highcharts 同样支持 ECMAScript（加载本地或 CDN 文件）、AMD、UMD、Typescript 等不同的模块体系或语法。</p>
            <p>您也可以根据需要的功能来定制构建自己的文件。</p>
            <a href="/docs/start" class="btn btn-primary mb-0 mt-1 btn-small" >详情请参考教程</a>
									</div>
									<div className="col-md-12 py-2">
										<h2 className="h3 font-weight-normal">下载资源包</h2>
										<p className="pr-md-0">压缩包包含我们提供的基础实例及相关的 JS 文件，下载后解压并打开 index.htm 即可看到我们提供的示例。</p>
										<div id="download-slot">
											<div id="downloadbuttons" className="row card-deck">
												<div className="col-md-12" id="slot-highcharts"><a href="https://code.highcharts.com/zips/Highcharts-10.3.3.zip" className="btn btn-primary">Highcharts 10.3.3</a></div>
												<div className="col-md-12" id="slot-highcharts-stock"><a href="https://code.highcharts.com/zips/Highcharts-Stock-10.3.3.zip" className="btn btn-primary">Highcharts Stock 10.3.3</a></div>
												<div className="col-md-12" id="slot-highcharts-maps"><a href="https://code.highcharts.com/zips/Highcharts-Maps-10.3.3.zip" className="btn btn-primary">Highcharts Maps 10.3.3</a></div>
												<div className="col-md-12" id="slot-highcharts-gantt"><a href="https://code.highcharts.com/zips/Highcharts-Gantt-10.3.3.zip" className="btn btn-primary">Highcharts Gantt 10.3.3</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
};

export default Download;