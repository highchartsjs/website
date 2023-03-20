

import styles from "@styles/components/breadcrumb.module.scss"
import { navbarMap } from "@data/navbar";

/**
 * 
 * @param {*} paths, Path only include one or two element
 * @returns 
 */


export default function Breadcurmb({ paths, drakTheme }) {

	let items = [];

	if (typeof paths === 'string') {
		items = [navbarMap[paths]];
	} else {

		let url = null;
		for (let i = 0; i <= paths.length - 1; i++) {
			if (!url) {
				url = paths[i];
			} else {
				url += '/' + paths[i];
			}
			items.push(navbarMap[url]);
		}
	}

	return <div className={styles.breadrumb + (drakTheme ? ' ' + styles.drak : '')}>
		<div className="col-12">
			<nav className="breadcrumbhs" aria-label="You are here">
				<ol>
					<li><a href="/">首页</a></li>
					{
						items.map((item, i) => {
							return i === items.length - 1 ?
								<li aria-current="page">{item.title}</li> :
								<li><a href={item.link}>{item.title}</a></li>
						})
					}
				</ol>
			</nav>
		</div>
	</div>
};