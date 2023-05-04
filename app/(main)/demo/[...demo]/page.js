
import THEMES from '@/data/themes.json';
import PRODUCTS from '@/data/products.json';

import DemoService from "@/service/DemoSerive"

import DemoPage from '../_demo.js';

export async function generateStaticParams() {

	let paths = [],
		product = null,
		products = Object.keys(PRODUCTS);


	for (let i = 0; i < products.length; i++) {
		product = products[i];

		// 1. product
		paths.push({
			demo: [product]
		});

		// 2. product/theme
		THEMES.forEach(t => {
			paths.push({
				demo: [product, t.code]
			});
		});

		let demos = await DemoService.getDemoByProduct(product, true);

		demos.forEach(demo => {
			demo.children.forEach(d => {
				// 3. product/demo
				paths.push({
					demo: [product, d.code]

				})

				// 4. product/demo/theme
				THEMES.forEach(t => {
					paths.push({
						demo: [product, d.code, t.code]
					});
				});
			})
		});
	}

	return paths;
}


// export async function generateMetadata(props) {

// 	return {
// 		title: '...',
// 	}
// }

async function DemoListOrDemo(props) {
	return DemoPage(props);
	// let data = await getData(props.params.demo);
	// return data.demo ? <Demo props={data} /> : <DemoList props={data} />;

}
export default DemoListOrDemo;