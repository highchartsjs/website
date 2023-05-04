
import { Question } from '@/components/shop/Icon';
function Tooltip({ title, detail, className }) {
	return <button type="button" class={"Tooltip-icon" + (className ? ' ' + className : '')} aria-label={"More information about " + title} aria-expanded="false">
		<Question />
	</button>
}

export default Tooltip;