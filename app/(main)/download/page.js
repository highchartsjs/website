
import "@styles/autoptimize.css";
function Download() {
	return <div id="full-width-page-wrapper">
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
								<p> 你可以免费下载并试用所有 Highcharts 产品。一旦您的项目/产品准备好了，请购买相应的商业许可</p>
								<p> <strong>你是否在为一个非营利组织、个人网站或学校项目使用Highcharts?</strong><br/> Then grab the code and start using Highcharts free of charge today. The Highcharts watermark must remain if you do not hold a license.</p>
							</div>
							<div className="col-12 col-md-4 text-center"> <a href="https://shop.highsoft.com/" className="my-1 btn btn-secondary">查看授权价格</a></div>
						</div>
						<div className="row mb-3">
							<div className="col-12 col-md-12 bkgWhiteCorners px-3 py-2">
								<div className="row">
									<div className="col-md-12 border-bottom pb-2">
										<h2 className="h3 font-weight-normal">Use the Highcharts CDN</h2>
										<p>Instead of downloading, feel free to use the <a href="https://code.highcharts.com/">Highcharts CDN</a> to access files directly.</p>
										<pre tabindex="0" className=" prettyprinted"><span className="tag">&lt;script</span><span className="pln"> </span><span className="atn">src</span><span className="pun">=</span><span className="atv">"https://code.highcharts.com/highcharts.js"</span><span className="tag">&gt;&lt;/script&gt;</span></pre>
									</div>
									<div className="col-md-12 border-bottom py-2">
										<h2 className="h3 font-weight-normal">Install Highcharts with NPM</h2>
										<p><a href="https://www.npmjs.com/package/highcharts">The official Highcharts NPM package</a> comes with support
											for CommonJS and contains Highcharts, and its Stock, Maps and Gantt packages.
											Read more about <a href="https://www.highcharts.com/docs/getting-started/install-from-npm">how to install Highcharts with NPM</a>.</p>
										<pre className=" prettyprinted"><span className="pln">npm install highcharts </span><span className="pun">--</span><span className="pln">save</span></pre>
									</div>
									<div className="col-md-12 border-bottom py-2">
										<h2 className="h3 font-weight-normal">Load as modules or create your own build</h2>
										<p>Highcharts can also be loaded as ECMAScript modules from
											our CDN, as AMD modules, as UMD modules or as TypeScript. You can also create
											your own tailored build to include only the features you need.</p> <a href="https://github.com/highcharts/highcharts#download-and-install-highcharts" className="btn btn-primary mb-0 mt-1 btn-small"> Main repo readme</a>
									</div>
									<div className="col-md-12 py-2">
										<h2 className="h3 font-weight-normal">Download Our Libraries</h2>
										<p className="pr-md-0">The zip archive contains Javascript files and examples. Unzip the zip package and open index.html in your browser to see the examples.</p>
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