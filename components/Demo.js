'use client'

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Menu from './Menu';
import PRODUCTS from '@data/products.json';

import ThemeSelector from '@components/ThemeSelector'

import "@styles/css.css";
import "@styles/demo.scss";
import '@styles/menu.scss';

function Demo({ props }) {

	const demos = props.demos;
	const current = props.current;
	const theme = props.theme;
	const product = props.product;
	const productName = PRODUCTS[product].name;
	const themeUrl = theme ? '/' + theme : '';

	let menuOptions = {
		product: props.product,
		key: 'code',
		linkPrefix: '/demo/' +  props.product + '/'
	};

	let codeTypes = [{
		name: 'JAVASCRIPT',
		code: 'js',
		language: 'javascript'
	}, {
		name: 'HTML',
		code: 'html',
		language: 'htmlbars'
	}, {
		name: 'CSS',
		code: 'css',
		language: 'css'
	}, {
		name: 'NPM 依赖',
		code: 'npm',
		language: 'javascript'
	}];

	const [codeType, setCodeType] = useState(undefined)

	let scripts = '';
	if (current.data.scripts && current.data.scripts.length) {
		current.data.scripts.forEach(s => {
			scripts += `<script src="${s}"></scripts>\n`
		})
	}

	codeTypes.forEach(code => {
		code.str = (code.code === 'html' ? scripts : '') + (current.data[code.code] || '');
	});

	return <div id="hs-component">
		<div className='container-fluid'>
			<div className="row d-none d-md-flex m-0">
				<div className="col"></div>
				<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
					<div id="comp-menu" className="page-header-container col-lg-12 col-md-12 col-sm-12 col-xs-12 d-none d-md-block">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-9"></div>
						<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
							<h2 className="demo-name">
								<a href="./">{productName}</a> › {props.current.name}
							</h2>
							<ThemeSelector theme={theme} linkPre={menuOptions.linkPrefix + props.demo}/>
						</div>
					</div>
				</div>
			</div>
			<div id="wrap" class="row m-0">
				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sidebar d-md-block">
					<Menu data={demos} current={current} options={menuOptions}></Menu>
				</div>
				<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 demo" id="content">
					{/* <div id="chart-switcher" class="d-flex d-md-none flex-row justify-content-center align-items-center">
						<a class="previous-example" title="Previous (arrow left)" href="#"><i class="fa fa-angle-left"></i></a>
						<h2 class="demo-name">Basic line</h2>
						<a class="next-example" title="Next (arrow right)" href="./line-ajax"><i class="fa fa-angle-right"></i></a>
					</div> */}
					<div class="chart-container">
						{
							current.pre ? 
							<a href={menuOptions.linkPrefix  + current.pre + themeUrl} title="Previous (arrow left)" class="previous-example d-none d-md-block"><i class="fa fa-angle-left"></i></a> 
							: null
						}
						<ul className="code-type">
								<li className={codeType === undefined ? 'active' : ''} onClick={() => setCodeType(undefined)}>预览</li>
								{
									codeTypes.map((type, i) =>
										type.str ? <li key={type.code} onClick={() => setCodeType(i)} className={codeType === i ? 'active' : ''}>{type.name}</li> : undefined
									)
								}
							</ul>
						<div className="demo-chart-wrapper" >
							<style>{current.data.css}</style>
							<div dangerouslySetInnerHTML={{ __html: current.data.html }}></div>
							{current.data.scripts.map(s =>
							<script src={s}></script>
							)}
							<script defer="" type="text/javascript" dangerouslySetInnerHTML={{__html: current.data.js}}></script>
						</div>
						{
								codeType !== undefined ?
									<div className="code-show">
										<SyntaxHighlighter language={codeTypes[codeType].language}   style={docco}>
											{
												codeTypes[codeType].str
											}
										</SyntaxHighlighter>
									</div> : undefined
							}
							{current.next ? 
							<a class="next-example d-none d-md-block" title="Next (arrow right)" href={menuOptions.linkPrefix  + current.next + themeUrl}><i class="fa fa-angle-right"></i></a>
							: null
							}
						
					</div>
					<div id="demo-buttons" class="col">
						<a class="button" id="jsfiddle" 
							href={`https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/${product}/demo/${props.demo}`} target="_new"
						>Edit in jsFiddle <i class="fa fa-chevron-right"></i></a>

						<a class="button" id="codepen" href="https://www.highcharts.com/samples/highcharts/demo/line-basic?codepen" target="_new">
							Edit in CodePen <i class="fa fa-chevron-right"></i>
						</a>
					</div>
				</div>
			</div>

		</div>
	</div>



	// return <section className="demos">
	// 	<div className="demo-header hidden-xs">
	// 		<div className="container-fluid">
	// 			<div className="row">
	// 				<div className="col-lg-3"></div>
	// 				<div className="col-lg-9">
	// 					<h1><span><Link href={'/demo/' + product}>{productName + ' 演示'}</Link> {'  ›  ' + props.current.name}</span></h1>
	// 					<ul className="demo-themes btn-group">
	// 						<a className={"btn btn-theme" + (!theme ? ' disabled' : '')} href={demoUrl}>默认主题</a>
	// 						{
	// 							themes.map(t =>
	// 								<a key={t.code} className={'btn btn-theme' + (theme === t.code ? ' disabled' : '')} href={demoUrl + '/' + t.code}>{t.name}</a>
	// 							)
	// 						}
	// 					</ul>
	// 				</div>
	// 			</div>

	// 		</div>
	// 	</div>
	// 	<div className="demo-content">
	// 		<div className="container-fluid">
	// 			<div className="row sidebar-wrapper">
	// 				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-9 sidebar">
	// 					<Menu data={demos} current={current} options={menuOptions} />
	// 				</div>
	// 				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-9 sidebar-fill"></div>
	// 				<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 sidebar-eq demo">
	// 					<div className="chart-container">
	// 						<ul className="code-type">
	// 							<li className={codeType === undefined ? 'active' : ''} onClick={() => setCodeType(undefined)}>预览</li>
	// 							{
	// 								codeTypes.map((type, i) =>
	// 									type.str ? <li key={type.code} onClick={() => setCodeType(i)} className={codeType === i ? 'active' : ''}>{type.name}</li> : undefined
	// 								)
	// 							}
	// 						</ul>
	// 						<div className="demo-chart-wrapper" dangerouslySetInnerHTML={{ __html: current.data.html }}>
	// 						</div>
	// 						{
	// 							codeType !== undefined ?
	// 								<div className="code-show">
	// 									<SyntaxHighlighter language={codeTypes[codeType].language} showLineNumbers={true} useInlineStyles={false}>
	// 										{
	// 											codeTypes[codeType].str
	// 										}
	// 									</SyntaxHighlighter>
	// 								</div> : undefined
	// 						}
	// 					</div>
	// 					<div className="demo-buttons">
	// 						<a className="btn btn-theme" target="_blank" href={"https://jshare.com.cn/github/highcharts/highcharts/tree/master/samples/" + props.product + '/demo/' + current.code}>
	// 							<i className="fa fa fa-pencil-square-o"></i> 编辑源代码
	// 						</a>
	// 						<a href={"/samples/" + props.product + '/' + current.code + themeUrl}
	// 							target="_blank"
	// 							title="提供纯净的图表代码运行环境"
	// 							className="btn btn-theme">
	// 							<i className="fa fa fa-internet-explorer"></i> 兼容性测试
	// 						</a>
	// 					</div>
	// 				</div >
	// 				<div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 sidebar-eq-fill">
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section >
};

export default Demo;