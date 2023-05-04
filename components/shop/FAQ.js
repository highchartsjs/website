'use client'
import { useState } from "react";
import Accordion from "./Accordion";

function FAQ({ data }) {
	let [cate, setCate] = useState(0);
	return <div className='Faq full-bleed' id="faq">
		<div className='container'>
			<h2 class="Faq-heading-desktop">常见问题</h2>
			<div className='row'>
				<div className='col-md-4 col-12'>
					<nav class="Tabs Tabs-vertical Faq-categories nav nav-tabs" aria-label="FAQ menu" role="tablist">
						{
							data.map((category, i) =>
								<button
									key={"faq-category-" + category.code}
									id={"tab-faq-" + category.code}
									role="tab" type="button" aria-selected="false"
									class={"nav-link" + (i === cate ? ' active' : '')}
									onClick={() => setCate(i)}
								>
									{category.title}
								</button>
							)
						}
					</nav>
				</div>
				<div className="col-md-8 col-12">
					<Accordion items={data[cate].items} options={{
						code: cate.code
					}} className="accordion"></Accordion>
				</div>
			</div>
		</div>
	</div>
}

export default FAQ;