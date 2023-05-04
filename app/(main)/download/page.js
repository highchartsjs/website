import getTitle from '@/components/Title';
import Breadcrumb from '@/components/Breadcrumb';
import IntegrationList from '@/components/IntegrationList';
import NavTab from '@/components/NavTab';

const Version = process.env.NEXT_PUBCLI_HIGHCHARTS_VERSION;

export const metadata = getTitle('下载试用');

const GetHC = [{
	name: '使用CDN',
	title: '直接使用 CDN 文件',
	code: 'cdn',
	content: `<p>无需下载，即可随时使用 <a href="https://code.highcharts.com" target="_blank">Highcharts CDN</a> 提供的文件资源。 </p>
	<pre tabindex="0" className=" prettyprinted"><span className="tag">&lt;script</span><span className="pln"></span><span className="atn">src</span><span className="pun">=</span><span className="atv">"https://code.highcharts.com/${Version}/highcharts.js"</span><span className="tag">&gt;&lt;/script&gt;</span></pre>`
}, {
	name: 'NPM 安装',
	title: '通过 NPM 安装',
	code: 'npm',
	content: `<p><a href="https://www.npmjs.com/package/highcharts" target="_blank">Highcharts 官方 NPM 包</a> 提供了对 CommonJS 的支持，包含了 Highcharts Core、Stock、Maps 及 Gantt 所有相关的包。更多详情见 <a href="/docs/getting-started/install-from-npm" target="_blank">文档教程</a>。</p>
	<pre>npm install highcharts --save</pre>`
}, {
	name: '加载模块',
	title: '作为模块加载或创建您自己的构建版本',
	code: 'modules',
	content: `Highcharts 也可以从 CDN 服务中以 ECMAScript模块加载，也支持 AMD、UMD 模块或 TypeScript。您也可以按需求构建打包您自己的功能包。
	<a href="https://github.com/highcharts/highcharts#download-and-install-highcharts" class="btn btn-primary mb-0 mt-1 btn-small" target="_blank">详见 Github 参考中的说明文档</a>`
}, {
	name: '下载资源包',
	title: '下载我们提供的资源包',
	code: 'zip',
	content: `<p>压缩包包含我们提供的基础实例及相关的 JS 文件，下载后解压并打开 index.htm 即可看到我们提供的示例。</p>
	<div id="download-slot">
		<div id="downloadbuttons" class="row card-deck">
			<div class="col-md-12" id="slot-highcharts">
				<a href="https://code.highcharts.com/zips/Highcharts-${Version}.zip" class="btn btn-primary">Highcharts Core ${Version}</a>
			</div>
			<div class="col-md-12" id="slot-highcharts-stock">
				<a href="https://code.highcharts.com/zips/Highcharts-Stock-${Version}.zip" class="btn btn-primary">Highcharts Stock ${Version}</a>
			</div>
			<div class="col-md-12" id="slot-highcharts-maps">
				<a href="https://code.highcharts.com/zips/Highcharts-Maps-${Version}.zip" class="btn btn-primary">Highcharts Maps ${Version}</a>
			</div>
			<div class="col-md-12" id="slot-highcharts-gantt">
				<a href="https://code.highcharts.com/zips/Highcharts-Gantt-${Version}.zip" class="btn btn-primary">Highcharts Gantt ${Version}</a>
			</div>
		</div>
	</div>`
}];

function Download() {

	return <section id="content">
		<Breadcrumb paths='download'></Breadcrumb>
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
								<strong>如果您使用 Highcharts 属于非商业用途（非盈利组织、学校、个人项目）？</strong><br />
								请可以直接下载使用，非商业用途是免费的，无需申请即可使用，唯一需要注意的是 highcharts 图表中的水印必须保留。
							</p>
						</div>
						<div className="col-12 col-md-4 text-center"> <a href="https://shop.highsoft.com/" className="my-1 btn btn-secondary">查看授权价格</a></div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h2>下载 / 安装 Highcharts</h2>

						</div>
					</div>
					<div className="row mb-3">
						<div className="col-12 col-md-8">
							<div className="row">
								<div className='col-12 px-3 py-2 bkgWhiteCorners'>
									<p>您可以通过下面的方式获取及使用 Highcharts </p>
									<NavTab items={GetHC}/>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<h2 className='mt-2'>Highcharts 官方集成包</h2>
								</div>
							</div>
							<div className='row'>
								<div className='col-12 px-3 py-2 bkgWhiteCorners'>
									<p>我们已经为大多数常用的框架开发了官方的 Highcharts 集成包，包括如下：</p>
									<IntegrationList></IntegrationList>
								</div>

							</div>
						</div>
						<div class="col-12 col-md-4 small-forms-blog small-form-downloadpage px-2">
							<div class="row">
								<div class="col-12 bkgPurple40">
									<div class="form text-center pt-1 px-md-1"> <img class="px-2 pt-1 img-responsive" alt="" src="/svg/icon_bot_green.svg" />
										<h2>不要错过任何一个信息</h2>
										<p>不要错过重要的新闻、技巧和窍门，这些将帮助您从 Highcharts产品中获得最大的收益。我们不会向你发送垃圾邮件，出售您的联系信息或做任何其他背叛您的信任的事情。</p>
										<p>通过注册，你确认已经阅读并接受了 <a href="/privacy">隐私政策</a>.</p>
									</div>
									<div class="text-center">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</section>
};

export default Download;