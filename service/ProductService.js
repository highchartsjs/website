const FS = require('../helper/fs')
const path = require('path')
const matter = require('gray-matter');

const DataFileRoot = path.join(process.cwd(), 'data/products/')




const ProductService = {
	getData: async (product, isIntegrations) => {
		let integrationPath = isIntegrations ? 'integrations/' : '';
		let data = matter(await FS.readFile(DataFileRoot + integrationPath + product + '.md'));

		// description \n trans to p
		data.data.description = data.data.description.replace('\\n', '</p><p>')

		if (typeof data.data.features === 'string') {
			data.data.features = await ProductService.getDataByFilename(integrationPath + data.data.features);
		}

		
		let coreFeatures = data.data['core-features'];
		if(typeof coreFeatures === 'string') {
			data.data['core-features'] = await ProductService.getDataByFilename(integrationPath +  coreFeatures);
		}
		return data.data;
	},

	getDataByFilename: async(filename) => {
		let data = matter(await FS.readFile(DataFileRoot +   filename + '.md'));
		return data.data;
	}
}

export default ProductService;
