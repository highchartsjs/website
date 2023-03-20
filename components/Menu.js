'use client'
import { useState, useRef, useEffect } from "react";
import Icon from '@components/icons';


function getLink(options, item, category) {
	if (options.linkPatter) {
		return options.linkPatter.replace('${category}', category.code).replace('${code}', item.code);
	}
	return options.linkPrefix + item[options.key];
};


const MenuItem = function ({ category, states, current, options, callback }) {


	const name = options.name || 'name';
	const key = options.key;
	let isCurrent = states.currentParent === category[key];
	let isInitalActive = isCurrent && states.isInitalActive;

	const contentRef = useRef();

	useEffect(() => {
		if (isInitalActive) {
			contentRef.current.parentNode.style.height = contentRef.current.scrollHeight + 'px';
		}
	}, [isInitalActive]);

	return <li
		className={isCurrent ? 'active' : null}
		key={category[key]}
		layout
		onClick={() => {
			callback(category[key])
		}}
	>
		<button className="sidebar-category">
			<span>{category[name]}</span>
			<span className="menu-icon">
				<Icon />
			</span>
		</button>
		<div className="menu-content" style={
			isCurrent ? (isInitalActive ? undefined : {
				height: contentRef.current.scrollHeight + 'px'
			}) : { height: '0px' }
		}>
			<ul ref={contentRef}>
				{
					category.children.map(d =>
						<li className={d[key] === current[key] ? 'active' : null} key={d[key]}>
							<a href={getLink(options, d, category)}>{d[name]}</a>
						</li>
					)
				}
			</ul>
		</div>
	</li>
};



const Menu = function ({ data, current, options }) {

	const freeToggle = options.freeToggle;
	
	const [states, setStates] = useState({
		isInitalActive: current.parent !== undefined,
		currentParent: current.parent
	});

	const setCurrentParent = function (parent) {
		setStates({
			isInitalActive: false,
			currentParent: parent === states.currentParent ? null : parent
		});
	}

	return <ul className={"nav nav-sidebar" + (options.className || '')}>
		{
			data.map(category => {
				return <MenuItem
					category={category}
					states={states}
					current={current}
					options={options}
					callback={setCurrentParent}></MenuItem>
			}
			)
		}
	</ul>
};

export default Menu;