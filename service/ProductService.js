const FS = require('../helper/fs')
const path = require('path')
const matter = require('gray-matter');

const ProductService = {
	getData: async (product) => {
		let features = matter(await FS.readFile(path.join(process.cwd(), `data/products/features.md`)));
		let data = matter(await FS.readFile(path.join(process.cwd(), `data/products/${product}.md`)));
		data.data['core-features'] = features.data.features;
		return data.data;
	}
}

export default ProductService;
