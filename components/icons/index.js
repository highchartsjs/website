export * from './ArrowLeft';
export * from './ArrowNarrowRight';
export * from './ArrowRight';
export * from './ChevronDown';
export * from './Clipboard';
export * from './ClipboardCheck';
export * from './Close';
export * from './GitHub';
export * from './Link';
export * from './Menu';
export * from './Pencil';
export * from './Star';

//<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">


const icons = {
	'narrow': `<polyline points="6 9 12 15 18 9" />`,
	'arrow': `<line x1="5" y1="12" x2="19" y2="12"></line>
	<polyline points="12 5 19 12 12 19"></polyline>`,
	'arrow-left': `<line x1="5" y1="12" x2="19" y2="12"></line>
	<polyline points="12 19 5 12 12 5"></polyline>`,
	'angle-left': `<polyline points="12 19 5 12 12 5"></polyline>`,
	'angle-right': `<polyline points="12 5 19 12 12 19"></polyline>`,
	'triangle': '<polyline points="6 9 12 15 18 9" />',
	'star': `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
	<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>`
};

export default function Icon({ name = 'narrow', size = 24, lineWidth = 2, fill = false, color = undefined }) {
	if (color === undefined) {
		color = "currentColor"
	}
	return <svg xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill={fill ? color : 'none'}
		stroke={color}
		strokeWidth={lineWidth}
		strokeLinecap="round"
		strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: icons[name] }}>
	</svg>
}