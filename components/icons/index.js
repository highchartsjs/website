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

const icons = {
	'narrow': `<polyline points="6 9 12 15 18 9" />`,
	'arrow': `<line x1="5" y1="12" x2="19" y2="12"></line>
	<polyline points="12 5 19 12 12 19"></polyline>`,
	'arrow-left': `<line x1="5" y1="12" x2="19" y2="12"></line>
	<polyline points="12 19 5 12 12 5"></polyline>`,
	'triangle': '<polyline points="6 9 12 15 18 9" />'
};

export default function Icon({ name = 'narrow', size = 24, lineWidth = 2, fill = false }) {
	return <svg xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox={[0, 0, size, size].join(' ')}
		fill={fill ? "currentColor": 'none'}
		stroke="currentColor"
		strokeWidth={lineWidth}
		strokeLinecap="round"
		strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: icons[name] }}>
	</svg>
}