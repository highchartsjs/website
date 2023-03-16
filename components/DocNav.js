// import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from './icons';

function getLink(nav) {
	return (nav.category ? '/docs/' +nav.category + '/' : '') + nav.code;
}

const DocNav = function ({props}) {
	return <div className='doc-nav'>
		<div>{props.pre ?
			<a href={getLink(props.pre)}>
				<span>
					{/* <ArrowLeftIcon /> */}
					 上一篇<br /></span>
				<h5>{props.pre.name}</h5>
			</a>
			: undefined
		}</div>
		<div className='doc-nav-next'>{props.next ?
			<a href={getLink(props.next)}>
				<span>下一篇<br /></span>
				<h5>{props.next.name}</h5>
			</a>
			: undefined
		}</div>
	</div>
};

export default DocNav;