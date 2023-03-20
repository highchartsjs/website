"use client";

import { useState } from "react";

import Icon from "@components/icons";


const data = [{
	title: '可能你需要的最好的和唯一的图表库',
	content: '"易用性和定制性使它成为最适合开发者的库。 文档组织得非常好，例子足以让你快速的开始使用，同时提供一个非常好用的在线编辑预览工具。大多数的 UI框架、库都有一个 Highcharts 的包装，所以可以在任何地方使用。"',
	author: {
		name: 'Saurabh M.',
		title: '高级软件工程师，Coditation Systems 公司'
	},
	link: {
		title: 'Read the full review on G2',
		href: 'https://www.g2.com/products/highcharts/reviews/highcharts-review-4588189'
	}
}, {
	title: '使用 Highcharts，一切皆有可能',
	content: '“Highcharts API 是非常灵活的，它基于精心设计的完全可定制的配置选项，可以调整你的图表的细枝末节。它还支持响应式设计，这意味着你可以定义屏幕尺寸的具体配置，Highcharts 会照顾到它在不同设备上的外观。使用官方提供的 Highcharts-angular 包装，可以很方便的与 Angular 集成....”',
	author: {
		name: 'Attila C.',
		title: 'Angular 开发者，Shields Energy Services'
	},
	link: {
		title: 'Read the full review on G2',
		href: 'https://www.g2.com/products/highcharts/reviews/highcharts-review-4660500'
	}
}, {
	title: '伟大的制图软件包! \n我用它来做我所有的图表!',
	content: '“支持广泛的图表类型，包括股票图表，这是在金融公司工作特别需要的。付费支持非常好! 我通常在第二天早上就能得到任何问题的答案！”',
	author: {
		name: 'Keith D.',
		title: '高级 Java / J2EE 软件工程师'
	},
	link: {
		title: 'Read the full review on G2',
		href: 'https://www.g2.com/products/highcharts/reviews/highcharts-review-4594287'
	}
}];


function Testimonial(props) {
	const [index, setIndex] = useState(0);
	const goto = function (isNext) {
		let target = index + (isNext ? 1 : -1);
		if (target > data.length - 1) {
			target = 0;
		} else if (target < 0) {
			target = data.length - 1;
		}
		setIndex(target);
	};

	return <div id="carouselControls" className="carousel slide mt-4 mb-2" data-interval="false" data-ride="carousel">
		<div className="region-live" aria-live="polite" aria-atomic="false"></div>
		<div className="carousel-inner">
			{data.map((d, i) => {
				return <div className={"carousel-item" + (i === index ? ' active' : '')} key={'carousel-inner-' + i}>
					<div className="card p-1 p-sm-2">
						<div className="text-center">
							<img className="medal" alt="Rated best charting library summer 2022 on G2"
								src="/svg/businessIntelligence_leader.svg" />
						</div>
						<div className="card-body pt-1">
							<h3 className="card-title m-0 px-0 px-sm-2">{d.title}</h3>
							<div className="d-flex flex-row justify-content-center pt-1"> <i className="fas fa-star" aria-hidden="true"></i> <i className="fas fa-star" aria-hidden="true"></i> <i className="fas fa-star" aria-hidden="true"></i> <i className="fas fa-star" aria-hidden="true"></i> <i className="fas fa-star" aria-hidden="true"></i></div>
							<p className="card-text py-1 px-0 px-sm-2 m-0">{d.content}</p>
							<p className="font-weight-bold m-0">{d.author.name}</p>
							<p className="font-weight-bold">{d.author.title}</p>
							<a href={d.link.href} className="card-link">
								{d.link.title}
							</a>
						</div>
					</div>
				</div>
			})}
		</div>
		<a onClick={() => goto()} className="carousel-control-prev" aria-label="Previous review" href="javascript: void(0)" role="button" data-slide="prev">
			{/* <i className="arrow-icon fas fa-lg fa-arrow-left" aria-hidden="true"></i> */}
			<span style={{width: '24px', color: '#333'}}><Icon name="arrow-left" ></Icon></span>
			<span className="sr-only">Previous</span>
		</a>
		<a onClick={() => goto(true)} className="carousel-control-next" aria-label="Next review" href="javascript: void(0)" role="button" data-slide="next">
			{/* <i className="arrow-icon fas fa-lg fa-arrow-right" aria-hidden="true"></i>  */}
			<span style={{width: '24px', color: '#333'}}><Icon name="arrow"></Icon></span>
			<span className="sr-only">Next</span>
		</a>
		<ol className="carousel-indicators">
			{data.map((d, i) => {
				return <li className={i === index ? 'active' : undefined} key={i}>
					<button aria-label={"Review " + (i + 1)} aria-selected="true" onClick={() => {
						setIndex(i);
					}}></button>
				</li>
			})}
		</ol>
	</div>
}

export default Testimonial;