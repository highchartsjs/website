import FS from "@/helper/fs";
const path = require('path')
const matter = require('gray-matter');
const FAQFileSource = path.join(process.cwd(), 'data/shop/faq/');


const ShopService = {

	getFAQ: async function () {
		let files = await FS.readDir(FAQFileSource);
		let result = [];
		for (let i = 0; i < files.length; i++) {
			if (files[i].endsWith('.md')) {
				let data = matter(await FS.readFile(FAQFileSource + files[i]));
				result.push({
					code: files[i],
					title: data.data.title,
					items: data.data.faq
				});
			}
		}
		return result;
	}


};



export default ShopService;