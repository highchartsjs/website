import THEMES from '@data/themes.json'

/**
 * Highcharts Theme Selector for Demo Pages
 * @param {object} props 
 * 	theme: current Theme
 * 	type: '' or 'select', select for small page 
 * 	linkPre: link Prefix
 * @returns 
 */
function ThemeSelector(props) {

	let theme = props.theme,
		type = props.type,
		linkPre = props.linkPre;

	if (type === 'select') {
		return <select id="switcher-selector" onChange={(e) => {
			let value = e.target.value;
			window.location.href = linkPre + (value ? '/' + value : '');
		}}>
			<option selected={!theme ? true : false} value="">默认</option>
			{THEMES.map(t =>
				<option value={t.code} selected={theme === t.code ? true : false}>{t.name}</option>
			)}
		</select>
	}

	return <div className="btn-group theme">
		<a className={"btn btn-theme" + (!theme ? ' disabled' : '')} href={linkPre}>默认</a>
		{
			THEMES.map(t =>
				<a className={"btn btn-theme" + (t.code === theme ? ' disabled' : '')} href={linkPre + '/' + t.code} key={t.code}>{t.name}</a>
			)
		}
	</div>

};

export default ThemeSelector;