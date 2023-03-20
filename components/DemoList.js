

'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import PRODUCTS from '@data/products.json';

import ThemeSelector from '@components/ThemeSelector'


import "@styles/css.css";
import "@styles/demo_index.css";


function getSuffix(url) {
	let t = url.split('.')
	return t[t.length - 1];
}


function DemoList({ props }) {
	const product = props.product;
	const demos = props.demos;
	const theme = props.theme;
	const demoUrl = '/demo/' + product;
	const isSingleCategory = demos.length === 1;
	const productName = PRODUCTS[product].name

	useEffect(() => {

		let demo = document.querySelectorAll('img.img-thumbnail'),
			demoCount = 0;

		let lazyLoadObserver = new IntersectionObserver(function (entries) {
			entries.forEach(d => {
				if (d.intersectionRatio > 0) {
					d.target.src = d.target.getAttribute('data-original');
					lazyLoadObserver.unobserve(d.target);
					demoCount++;
					if (demoCount === demo.length) {
						lazyLoadObserver.disconnect();
						lazyLoadObserver = null;
					}
				}
			});
		});

		demo.forEach(d => {
			lazyLoadObserver.observe(d);
		});

	}, []);


	return <div id="hs-component" className="container-fluid">
		<div id="header" className="row d-none d-sm-flex m-0">
			<div className="container">
				<div className="page-header-container">
					<h1 className="p-0 mt-2">{productName} 示例</h1>
					<ThemeSelector theme={theme} linkPre={demoUrl}/>
				</div>
			</div>
		</div>
		<div id="demos" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 default">
			<div className="container" id="content">
				<div id="secondary-mobile-menu" className="d-flex d-sm-none row">
					<div className="col">
						<div className="select d-flex justify-content-end align-items-center">
							<label>Select Theme: </label>
							<ThemeSelector theme={theme} linkPre={demoUrl} type="select"></ThemeSelector>
						</div>
					</div>
				</div>
				{
					demos.map(demoGroup => {
						return <div className='row' key={demoGroup.code}>
							{isSingleCategory ? undefined :
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 title">
									<h2 id={demoGroup.code}>{demoGroup.name}</h2>
								</div>
							}
							{demoGroup.children.map(demo =>
								<div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 demo">
									<a href={demoUrl + '/' + demo.code + (theme ? '/' + theme : '')}>
										<div className="demo-container d-flex flex-column">
											<div className="image-container">
												<img className="lazy img-thumbnail"
													data-original={"/images/samples/" + product + '/' + (theme ? theme + '/' : '') + demo.code + '.' + getSuffix(demo.img)}
													alt="" src="/images/lazy-360x250.png" />
											</div>
											<div className="footer-container p-1">
												<p>
													{demo.name}
												</p>
											</div>
										</div>
									</a>
								</div>
							)}
						</div>
					})
				}
			</div>
		</div>
	</div>

};

export default DemoList;