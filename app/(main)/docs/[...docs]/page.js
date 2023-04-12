import DocService from '@service/DocService';
import sidebar from '@data/docs/sidebars';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import markToc from '@helper/markd-toc';

import Menu from '@components/Menu';
import DocNav from '@components/DocNav';

import getTitle from '@components/Title';

import '@styles/menu.scss';
import "@styles/docs.scss";

export async function generateStaticParams() {

	let paths = [{
		docs: ['index']
	}];

	sidebar.docs.forEach(category => {
		category.children.forEach(child => {
			paths.push({
				docs: [category.code, child.code]
			})
		});
	});

	return paths;
}

export async function generateMetadata({ params }) {

	return getTitle(	await DocService.getName(params.docs));
	// let demoParams = getDemoParams(params.demo);

	// if (demoParams.demo) {
	// 	return getTitle(await DemoService.getDemoName(demoParams.product, demoParams.demo))
	// } else {
	// 	return getTitle(PRODUCTS[demoParams.product].name + ' 示例')
	// }
}

export async function getData(paths) {
	return await DocService.getDoc(paths);
};

 async function Page(props) {
	let data = await getData(props.params.docs);

	let toc = null;

	data.content = (await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(markToc, {
			prefix: '',
			callback: (result) => {
				toc = result
			}
		})
		.use(remarkHtml, {
			sanitize: {
				clobberPrefix: ''
			}
		})
		.process(data.content)).value

	data.toc = toc;

	return <>
		<section className="docs main">
			<aside className='sidebar'>
				<Menu data={data.sidebar} current={{
					parent: data.parent,
					code: data.code
				}} options={{
					className: ' white-theme',
					name: 'name',
					key: 'code',
					freeToggle: true,
					linkPatter: '/docs/${category}/${code}'
					// linkPrefix: '/docs/${category}/'
					// link: (doc, category) => {
					// 	return '/docs/' + category.code + '/' + doc.code;
					// }
				}}></Menu>
			</aside>
			<div className="docs-content">
				<div className="container">
					<div className='row'>
						<div className='col-lg-9' >
							<div className="doc" dangerouslySetInnerHTML={{ __html: data.content }}></div>
							<DocNav props={data}></DocNav>
						</div>
						<div className='col-lg-3'>{
							data.toc && data.toc.length ? <div className='toc'>
								<ul>{data.toc.map(toc =>
									<li className={'title-' + toc.depth} key={toc.id}><a href={"#" + toc.id}>{toc.value}</a></li>
								)}</ul>
							</div>
								: undefined
						}</div>
					</div>
				</div>
			</div>
		</section>
	</>
};

export default Page;