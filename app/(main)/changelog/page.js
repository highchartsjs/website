import changelog from './_changelog';

export default async function Changelog() {

	return changelog({
		params: {
			product: 'highcharts'
		}
	})
};