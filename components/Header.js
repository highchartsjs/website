'use client'

import "@styles/components/header.scss";


import Logo from "./Logo";
import Navbar from './Navbar';

function Header(props) {

	return <header id="masthead" className="site-header navbar-static-top bg-mudLogo sticky-top" role="banner">
		<div id="wrapper-navbar">
			<a className="skip-link sr-only sr-only-focusable" href="#content">Skip to content</a>
			<nav id="main-nav" aria-label="Main" className="navbar navbar-size navbar-expand-md mudTheme p-0">
				<Logo />
				<div id="navbarNavDropdown" className="p-3 p-md-0 collapse navbar-collapse desktop-version">
					<div id="main-menu">
						<Navbar />
					</div>
					<button aria-label="Open search field" id="searchDesktop" className="btn search-all d-inline-flex d-md-block my-0 mr-2 ml-p p-0 horisontal-menu-item">
						<svg aria-hidden="true" className="searchIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</button>
				</div>
				{/* <div id="searchfield-container" className="searchbar mx-1">
					<div className="addsearch-searchfield-container">
						<form className="addsearch-searchfield" autoComplete="off" action="?" role="search">
							<div className="search-field-wrapper">
								<input type="search" placeholder="Search everything" aria-label="Search field" className="pl-2 " />
							</div>
						</form>
					</div>
				</div>
				<button aria-label="Hide search field" id="hideSearch" className="btn m-0 mr-1 p-0">
					<svg id="cross" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button> */}
			</nav>
		</div>
	</header>
};

export default Header;