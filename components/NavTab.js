'use client'
import { useState } from "react";

function NavTab({ items }) {
	const [index, setIndex] = useState(0);

	return <><nav className='get-hc'>
		<div className='nav nav-tabs'>
			{
				items.map((gh, i) =>
					<button onClick={() => setIndex(i)} key={gh.code} class={"nav-link mr-1" + (i === index ? ' active' : '')} type="button" role="tab" aria-controls="nav-cdn" aria-selected="false">{gh.name}</button>
				)
			}
		</div>
	</nav>
		<div className='tab-content mb-1'>
			{
				items.map((gh, i) =>
					<div className={'tab-pane' + (i === index ? ' active' : '')} key={'gh-content-' + i}>
						<h3 className='h3 font-weight-normal'>{gh.title}</h3>
						<div dangerouslySetInnerHTML={{ __html: gh.content }}></div>
					</div>
				)
			}
		</div>
	</>
}

export default NavTab;