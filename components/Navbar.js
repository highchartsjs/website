

import { useState } from "react";

import navbar from "@data/navbar";


/**
 * link or button Nav item 
 * @param {*} props 
 * @returns 
 */
function SimpleNav(props) {
	let nav = props.nav;
	return <li className="menu-item-level-1" key={nav.code}>
		<a href={nav.link || ('/' + nav.code)}
			className={nav.type === 'button' ? 
				`btn btn-${nav.class} mr-1 btn-small horisontal-menu-item text-uppercase` : 
				"horisontal-menu-item"}
			>
			{nav.title}
		</a>
	</li>;
}


function Dropdown(props) {
	let nav = props.nav;

	return <div className="row">
		<div className="col-12 col-md-6 p-0 offset-md-1 col-lg-4 offset-lg-5 col-xl-3 offset-xl-7 list-menu-level-2">
			<ul className="menu-level-2" role="list" aria-labelledby="menu-item-2">
				{
					nav.items.map(item => {
						return <li className="menu-item" key={item.code}>
							<a href={item.link} className="dropdown-item">{item.title}</a>
						</li>
					})
				}
			</ul>
		</div>
	</div>
}

function DropdownWithMenu(props) {
	let nav = props.nav,
		activeMenuIndex = props.menu;
	return <ul className="list-menu-level-2 col-md-6  p-0 offset-md-2 col-lg-4 offset-lg-5 col-xl-3 offset-xl-6" aria-labelledby="menu-item-1" role="list">
		{
			nav.items.map((item, menuIdex) => {
				let className = menuIdex === activeMenuIndex ? ' active' : ''
				return <li className="menu-item row menu-level-2 border-right-white" key={item.code}>
					<button aria-expanded="false" data-toggle="list" className={"list-group-item-action" + className}
						onClick={() => {
							props.callback(menuIdex)
						}}
					>
						<span dangerouslySetInnerHTML={{
							__html: item.title.split(' ').map(i => {
								if (i === 'Highcharts') {
									i += '<sup>®</sup>'
								}
								return i;
							}).join(' ')
						}}></span>
						<svg className="svg-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</button>
					<div className={"tab-pane menu-level-3" + className}>
						<p aria-hidden="true" id="menu-heading-maps" className="list-heading ml-1">{item.title}</p>
						<ul role="list" className="list-inner ml-1" aria-labelledby="menu-heading-maps">
							{
								item.menus.map(menu =>
									<li className="menu-item" key={menu.title.toLocaleString()}>
										<a href={menu.link}>{menu.title}</a>
									</li>
								)
							}
						</ul>
					</div>
				</li>
			})
		}
	</ul>
}


/**
 * Navbar
 * @param {*} props 
 * @returns 
 */
function Nav(props) {

	const [states, setStates] = useState({
		nav: null,
		menu: 0
	});

	const _setStates = function (navIndex, menuIdex) {
		setStates(menuIdex === undefined ? {
			nav: navIndex,
			menu: 0
		} :
			{
				...states,
				menu: menuIdex,
			})
	};

	return <ul className="navbar-nav ml-auto" role="list">
		{navbar.map((nav, index) => {
			let isAcitve = nav.items && index === states.nav;
			return nav.items ?
				<li className={"menu-item-level-1 dropdown " + (isAcitve ? ' show' : '')} key={nav.code}>
					<button
						title={nav.title} data-toggle="dropdown"
						aria-controls={nav.title} aria-expanded={isAcitve ? 'true' : "false"}
						className="btn dropdown-toggle  horisontal-menu-item"
						onClick={() => { _setStates(isAcitve ? null : index) }}
					>
						{nav.title}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</button>
					<div className={"dropdown-menu p-0 " + (isAcitve ? 'show' : '')}>
						{
							nav.isMenu ? 
							<DropdownWithMenu nav={nav} menu={states.menu} callback={(menuIdex) => {
								_setStates(undefined, menuIdex)
							}} /> : 
							<Dropdown nav={nav} />
						}
					</div>
				</li>
				:
				<SimpleNav nav={nav} />
		})}

	</ul>
}

export default Nav;