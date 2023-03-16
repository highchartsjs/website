const Legacy = {
		'highcharts': '',
		'highstock': 'stock',
		'highmaps': 'maps',
	};


function getRedirect(path) {

	if (!path || path === '/') {
		return CDN_DOMAIN + '/' + HIGHCHARTS_VERSION + '/highcharts.js';
	}

	if (/^(highcharts|highstock|highmaps|gantt)\/(\d\.\d{1,2}\.\d{1,2}).*/.test(path)) {
		return LegacyDomain + '/' + path;
	}

	let redirect = null;
	if (!/^(|(stock\/|maps\/|gantt\/))(\d{1,2}\.\d{1,2}\.\d{1,2}\/).*/.test(path)) {
		// 不符合最新的规则的文件
		let version = null,
			product = null,
			paths = path.split('/').filter(a => {
				return a;
			})

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
			version = HIGHCHARTS_VERSION;
		}

		let file = (product ? product + '/' : '') + version + '/' + (paths.join('/') || 'highcharts.js');

		redirect = CDN_DOMAIN + '/' + file;
	}

	return redirect;
};


addEventListener('fetch', event => {
	event.respondWith(handleRequest(event))
});

const MaxAge = 30 * 24 * 60 * 60; // 1 month
async function handleRequest(event) {
	const request = event.request;
	const url = new URL(request.url);
	const key = url.pathname.slice(1);

	if (request.method === 'GET') {
		if (!key || key === 'index' || key === 'index.html') {
			return new Response('<html><body><h1>code.highcharts.dev</h1></body></html>', {
				headers: {
					'Content-Type': 'text/html'
				}
			});
		}

		// redirect
		let redirect = getRedirect(key);
		if (redirect) {
			return Response.redirect('https://' + redirect);
		}


		// Construct the cache key from the cache URL
		const cacheUrl = new URL(request.url);
		const cacheKey = new Request(cacheUrl.toString(), request);
		const cache = caches.default;
		let response = await cache.match(cacheKey);
		if (!response) {
			// https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#bindings
			const object = await R2_BUCKET.get(key);
			if (!object) {
				return new Response('Not Found', { status: 404 });
			}

			const headers = new Headers();
			object.writeHttpMetadata(headers);
			headers.set('etag', object.httpEtag);
			headers.set('Cache-Control', `s-maxage=${MaxAge},max-age=${MaxAge}`);
			response = new Response(object.body, {
				headers,
			});
			event.waitUntil(cache.put(cacheKey, response.clone()));
		}
		return response;
	}

	return new Response('Not Found', {
		status: 404,
	});
}