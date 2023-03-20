const fs = require('../helper/fs');
const path = require('path');

const sidebar = require('../data/docs/sidebars');
const FS = require('../helper/fs');

const DocFileSource = path.join(process.cwd(), 'data/docs/');

const DocService = {
	/**
	 * 获取当前文档的导航信息（上一篇、下一篇信息）
	 * @param {*} category 当前文档的分类
	 * @param {*} doc 当前文档
	 * @param {*} result 
	 */
	getDocNav: function (category, doc, result) {
		let docs = null,
			temp = null;

		result.sidebar = sidebar.docs;

		for (let i = 0; i < sidebar.docs.length; i++) {
			docs = sidebar.docs[i];
			if (docs.code === category) {
				if (!doc) {
					result.name = docs.name;
					result.next = docs.children[0];
					if (i > 0) {
						temp = sidebar.docs[i - 1].children;
						result.pre = temp[temp.length - 1]
					} else {
						result.pre = {
							name: 'Highcharts 使用文档',
							code: 'index'
						};
					}
				} else {
					for (let j = 0; j < docs.children.length; j++) {
						if (docs.children[j].code === doc) {
							result.name = docs.children[j].name;
							if (j === 0) {
								if (i > 0) {
									temp = sidebar.docs[i - 1].children;
									result.pre = temp[temp.length - 1];
									result.pre.category = sidebar.docs[i - 1].code;
								} else {
									result.pre = null;
								}
							} else if (j === docs.children.length - 1) {
								if (i === sidebar.docs.length - 1) {
									result.next = null;
								} else {
									result.next = sidebar.docs[i + 1].children[0];
									result.next.category = sidebar.docs[i + 1].code;
								}

							}

							if (result.pre === undefined) {
								result.pre = docs.children[j - 1];
							}
							if (result.next === undefined) {
								result.next = docs.children[j + 1];
							}
							break;
						}
					}
				}
				break;
			}
		}

		if (!result.next) {
			delete result.next
		}
	},

	getChangelog: async function (product) {
		return await FS.readFile(DocFileSource + 'changelog/' + product + '.html');
	},

	getName: async function (paths) {
		let target = sidebar.docs;
		for (let i = 0; i < paths.length; i++) {
			for (let j = 0; j < target.length; j++) {
				if (paths[i] === target[j].code) {
					if (i === paths.length - 1) {
						return target[j].name;
					}
					target = target[j].children;
					break;
				}
			}
		}
		return '';
	},

	getDoc: async function (paths) {

		let category = paths[0],
			doc = paths.length > 1 ? paths[1] : null,
			file = paths.join('/'),
			result = {
				name: null,
				parent: category,
				url: file,
				code: doc || category
			};


		if (!doc && category !== 'index') {
			file += '/index';
		}


		DocService.getDocNav(category, doc, result);


		result.content = await fs.readFile(DocFileSource + 'md/' + file + '.md');

		return result;
	}
};

module.exports = DocService;