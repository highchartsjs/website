const FS = require('../helper/fs')
const path = require('path')
const matter = require('gray-matter');


const File = path.join(process.cwd(), 'data/links/links.md');
const LinkService = {

    getAll: async () => {
        let data = matter(await FS.readFile(File));
        return data.data;
    }
}

export default LinkService;
