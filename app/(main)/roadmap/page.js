import FS from "@helper/fs";
const path = require('path');
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
const matter = require('gray-matter');

import getTitle from '@components/Title';
import Breadcrumb from '@components/Breadcrumb';
export const metadata = getTitle('发展规划');

const DataPath = path.join(process.cwd(), 'data/docs/roadmap/');

export async function getData() {

	let roadmap = matter(await FS.readFile(DataPath + 'index.md')).data;
	let content = null;
	let code = null;

	roadmap.items = [];
	for (let i = 0; i < roadmap.products.length; i++) {
		code = Object.keys(roadmap.products[i])[0];

		roadmap.items.push({
			code: code,
			img: roadmap.products[i][code]
		})

		content = await FS.readFile(DataPath + code + '.md');
		if (content) {
			content = (await unified()
				.use(remarkParse)
				.use(remarkHtml)
				.process(content)).value
		}
		roadmap.items[i].content = content;
	}

	return roadmap
}

import "@styles/autoptimize.css";

const Roadmap = async function (props) {

	let data = await getData();

	return <div id="full-width-page-wrapper">
		<Breadcrumb paths='roadmap'></Breadcrumb>
		<div id="content">
			<main className="site-main" id="main" role="main">
				<div className="content-fluid">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="pb-1">{data.title}</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="content-fluid">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-8">
								<p className="small-text">{data.date}</p>
								<p>{data.description}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="content-fluid">
					<div className="container">
						{
							data.items.map(item =>
								<div className="row mb-3" key={item.code}>
									<div className="col-12 col-md-8 bkgWhiteCorners p-2"
										dangerouslySetInnerHTML={{ __html: item.content }}
									>
									</div>
									<div className="col-12 col-md-4 text-center notVisibleTablet">
										<img decoding="async" className="fiftyImg"
											src={"/images/" + item.img} alt="" /></div>
								</div>
							)
						}

					</div>
				</div>
			</main>
		</div>
	</div>
};

export default Roadmap;