

import navbar from "@data/navbar";

/**
 * 
 * @param {*} paths, Path only include one or two element
 * @returns 
 */
export default function Breadcurmb({ paths }) {

	let items = [],
		target = navbar;
	for (let i = 0; i <= paths.length - 1; i++) {
		for (let j = 0; j < target.length - 1; j++) {
			if (target[j].code === paths[i]) {
				items.push({
					title: target[j].title,
					link: target[j].link || '/' + target[j].code
				});
				target = target[j].items;
				break;
			}
		}
	}

	return <div class="desktop-version content-fluid py-1 bkgDarkBreadCrumb text-right" role="region">
		<div class="col-12 txtWhite">
			<div id="crumbs">
				<nav class="breadcrumbhs" aria-label="You are here">
					<ol>
						<li><a class="txtWhite" href="/">首页</a></li>
						{
							items.map((item, i)=> {
								return i === items.length -1 ? 
								<li aria-current="page">{item.title}</li> :
								<li><a class="txtWhite" href={item.link}>{item.title}</a></li>
							})
						}
					</ol>
				</nav>
			</div>
		</div>
	</div>
};