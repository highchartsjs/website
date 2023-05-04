'use client'
import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/icons';


// import "@/styles/components/shop/accordion.scss";

const AccordionItem = function ({ states, item, index, onClick, key }) {

	let isActive = states.activeIndex === index;
	let isInitalActive = isActive && states.isInitalActive;
	const contentRef = useRef();

	useEffect(() => {
		if (isInitalActive) {
			contentRef.current.parentNode.style.height = contentRef.current.scrollHeight + 'px';
		}
	}, [isInitalActive]);


	return <div className='accordion-item'>
		<h4>
			<button className={'Faq-button' + (isActive ? ' active' : '')} type='button' onClick={() => {
				onClick(index)
			}}>
				<Icon ></Icon>
				<span>{item.title}</span>
			</button>
		</h4>
		<div className='accordion-collapse collapse' style={isActive ? (isInitalActive ? undefined : { height: contentRef.current.scrollHeight + 'px' }) : { height: '0px' }}>
			<div ref={contentRef} className='Faq-content' dangerouslySetInnerHTML={{ __html: item.content }}></div>
		</div>
		{/* <div className="card-header p-0">
			<div className={"d-flex align-items-center mx-2" + (index === 0 ? "" : ' top-border')}>
				<h3>
					<button className="btn btn-link btn-block text-left acc-btn"
						onClick={() => {
							onClick(index)
						}}
						type="button"
						aria-expanded={isActive}
					>
						<span className='accordion-icon'>
							<Icon name="triangle" fill="#000" lineWidth="0"></Icon>
						</span>
						{item.title}
					</button>
				</h3>
			</div>
		</div>
		<div style={isActive ? (isInitalActive ? undefined : { height: contentRef.current.scrollHeight + 'px' }) : { height: '0px' }} className="mx-1 pl-2 accordion-content">
			<div ref={contentRef} className="card-body ml-1 pl-0" dangerouslySetInnerHTML={{ __html: item.content }}>
			</div>
		</div> */}
	</div>
};

// Accordion component
const Accordion = ({ className, items, options }) => {

	if (!className) {
		className = 'accordion accordion-parent';
	}

	const [states, setStates] = useState({
		isInitalActive: options.active !== undefined,
		activeIndex: options.active
	});

	useEffect(() => {
		if (options.active !== undefined) {
			setStates({
				isInitalActive: false,
				activeIndex: options.active
			})
		}
	}, [options])

	const onTitleClick = (index) => {
		setStates({
			isInitalActive: false,
			activeIndex: index === states.activeIndex ? null : index
		});
	};

	return <div className={className}>
		{items.map((item, index) => {
			return <AccordionItem states={states} item={item} key={options.code + '' + index} index={index} onClick={onTitleClick}>
			</AccordionItem>
		}
		)}
	</div>
};

export default Accordion;