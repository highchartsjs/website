'use client'

import "@/styles/components/header.scss";


import Logo from "./Logo";
import Navbar from './Navbar';

function Header(props) {
	return <header className="bg-mudLogo sticky-top" role="banner" {...props}>
		{/* <a className="skip-link sr-only sr-only-focusable" href="#content">Skip to content</a> */}
		<nav id="main-nav" aria-label="Main" className="navbar navbar-size navbar-expand-md mudTheme p-0">
			<Logo />
			<Navbar />
		</nav>
	</header>
};

export default Header;