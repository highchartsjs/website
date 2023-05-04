
import DemoService from "@/service/DemoSerive"
import DemoList from "@/components/DemoList";
import Demo from '@/components/Demo';

import THEMES from '@/data/themes.json';
import PRODUCTS from '@/data/products.json';

import getTitle from '@/components/Title';


export async function generateMetadata({ params }) {

	let demoParams = getDemoParams(params.demo);

	if (demoParams.demo) {
		return getTitle(await DemoService.getDemoName(demoParams.product, demoParams.demo))
	} else {
		return getTitle(PRODUCTS[demoParams.product].name + ' 示例')
	}
}


function getDemoParams(params) {
	let product = params[0],
		demo = null,
		theme = null;


	if (params.length === 3) {
		demo = params[1];
		theme = params[2]
	} else if (params.length === 2) {
		if (THEMES.filter(t => {
			return t.code === params[1]
		}).length) {
			theme = params[1]
		} else {
			demo = params[1];
		}
	}

	return {
		product: product,
		demo: demo,
		theme: theme
	}
}

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



async function getData(params) {

	let demoParams = getDemoParams(params);

	let demos = await DemoService.getDemoByProduct(demoParams.product, false, demoParams.demo, demoParams.theme);

	Object.keys(demoParams).map(key => {
		demos[key] = demoParams[key];
	});

	if (demos.demo) {
		demos._global = {
			scripts: demos.current.data.scripts || null,
			css: demos.current.data.css,
			script: demos.current.data.js
		};

		demos.hidePageCover = true;
	}

	return demos;

};


async function DemoListOrDemo(props) {
	let data = await getData(props.params.demo);
	return data.demo ? <Demo props={data} /> : <DemoList props={data} />;
}
export default DemoListOrDemo;