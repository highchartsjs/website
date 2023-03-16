'use client'
import { useState } from "react";

// import { ChevronDownIcon } from '@components/icons';


function getLink(options, item, category) {
	if(options.linkPatter) {
		return options.linkPatter.replace('${category}', category.code).replace('${code}', item.code);
	}
	return options.linkPrefix + item[options.key];
};

const Menu = function ({ data, current, options }) {

	const freeToggle = options.freeToggle;
	const name = options.name || 'name';
	const key = options.key;
	// const currentParent = current.parent

	const [currentParent, setCurrentParent] = useState(current.parent);

	return <ul className={"nav nav-sidebar" + (options.className || '')}>
		{
			data.map(category => {
				let isCurrent = currentParent === category[key];
				return <li
					className={isCurrent ? 'active' : null}
					key={category[key]}
					onClick={() => setCurrentParent(category[key])}
				>
					<button className="sidebar-category">
						<span>{category[name]}</span>
						<icon className="toggle"></icon>
					</button>
					<ul style={
						isCurrent ? null : {display: 'none'}
					}>
						{
							category.children.map(d =>
								<li className={d[key] === current[key] ? 'active' : null} key={d[key]}>
									<a href={getLink(options, d, category)}>{d[name]}</a>
									{/* <a href={options.link ? options.link(d, category) : (options.linkPrefix + d[key])}>{d[name]}</a> */}
								</li>
							)
						}
					</ul>
				</li>
			}
			)
		}
	</ul>
};

export default Menu;