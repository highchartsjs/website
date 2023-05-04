
import changelog from '../_changelog';


import PRODUCTS from '@/data/products.json';

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



export default async function Page(props) {
	return changelog(props);
};