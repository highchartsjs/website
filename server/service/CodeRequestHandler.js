const Legacy = {
	'highcharts': '',
	'highstock': 'stock',
	'highmaps': 'maps',
};

module.exports = (pathname, _env) => {

	let redirect = null;

	if (!pathname.includes('.')) {
		return 'jshare.com.cn/' + pathname
	} else if(!/(\.(js|css|svg|png|gif))$/.test(pathname)) {
		return false;
	}

	let paths = pathname.split('/').filter(a => {
		return a;
	}),
		path = pathname;


	// 10 版本之前的文件
	if (/^(highcharts|highstock|highmaps|gantt)\/(\d\.\d{1,2}\.\d{1,2}).*/.test(path)) {
		return _env.LegacyDomain + '/' + path;
	}
	if (!/^(|(stock\/|maps\/|gantt\/))(\d{1,2}\.\d{1,2}\.\d{1,2}\/).*/.test(path)) {
		// 不符合最新的规则的文件
		let version = null,
			product = null;

		if (paths.length > 1) {

			if (['stock', 'maps', 'gantt'].includes(paths[0])) {
				product = paths[0];
				paths.shift();
			}

			if (Legacy[paths[0]] !== undefined) {
				product = Legacy[paths[0]];
				paths.shift();
			}


			if (/^\d(\d|\.)+\d$/.test(paths[0])) {
				version = paths[0];
				paths[0] = version;
				paths.shift();
			}




		}

		if (!version) {
			version = _env.HIGHCHARTS_VERSION;
		}

		let file = (product ? product + '/' : '') + version + '/' + paths.join('/');

		redirect = _env.CDN_DOMAIN + '/' + file;
	}

	return redirect;
};