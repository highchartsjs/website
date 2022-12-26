import { visit } from 'unist-util-visit'

const version = process.env.HIGHCHARTS_VERSION

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function markToc(options = {}) {
	let result = [];
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === 'heading' && node.depth > 1) {

				let id = null,
					title = null,
					match = node.children[0].value.match(/(.*)\[(.*)\]/);

				if (match) {
					id = match[2].toLowerCase().replace(/ /g, '-')
					title = match[1];
					if (!node.data) {
						node.data = {};
					}

					if (!node.data.hProperties) {
						node.data.hProperties = {};
					}


					node.data.id = id;
					node.data.hProperties.id = id;

					node.children[0].value = title;
					node.children.push({
						type: 'link',
						url: '#' + id,
						// todo: 
						properties: {
							class: 'hash-link'
						},
						data: {
							hProperties: {
								className: 'hash-link'
							}
						}
					});

					result.push({
						depth: node.depth,
						value: title,
						id: options.prefix + id
					});
				}



				// node.data.id = node.children[0].value.toLowerCase().replace(/ /g, '-');

				//

				// node.data.hProperties.id = node.data.id;

				//

				// console.log(node);
			} else if (node.type === 'code') {
				node.value = node.value.replace(/{version}/g, version)
			} else if (node.type === 'link') {
				let url = node.url;
				if (url.startsWith('http') || url.startsWith('/')) {
					node.data = {
						hProperties:  {
							target: '_blank'
						}
					}
				}
			}
		});

		options.callback(result);
	}
}

export default markToc;