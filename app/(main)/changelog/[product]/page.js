import PRODUCTS from '@data/products.json';

import DocService from '@service/DocService';

import "@styles/autoptimize.css";

export async function generateStaticParams() {

	let paths = [{
		product: undefined
	}],
		product = null,
		products = Object.keys(PRODUCTS);
	for (let i = 0; i < products.length; i++) {
		product = products[i];
		paths.push({
			product: product
		});
	}

	return paths;
}

export async function getData(product) {
	return await DocService.getChangelog(product);
};

export default async function Page(props) {
	let data = await getData(props.params.product);
	let productKeys = Object.keys(PRODUCTS);

	return <section id="changelog">
		<div className="container">
			<div className="section-title text-center">
				<h1>更新日志</h1>
			</div>
			<div className="main-content">
				<p className="text-center changelog-nav">
					查看 {

						productKeys.map((key, i) =>
							<span key={key}>
								<a href={"/changelog/" + key}>
									{PRODUCTS[key].name}</a>
								{i === productKeys.length - 1 ? '' : '，'}
							</span>
						)
					} 的更新日志，<a href="/download">下载使用</a> 页面可以下载到最新版资源包。</p>
				<div id="hc-changelog">
					<div className="changelog-header">
						{/* <h2>{products[props.product].name}</h2> */}
					</div>
					<div className="changelog-container" dangerouslySetInnerHTML={{ __html: data }}>
					</div>
				</div>
			</div>
		</div>
	</section>
};