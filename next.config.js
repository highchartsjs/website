/** @type {import('next').NextConfig} */

const path = require('path');


const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true
	},
	images: {
		unoptimized: true
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	async redirects() {
		return [
			{
				source: '/demo',
				destination: '/demo/highcharts',
				permanent: true,
			},
		  {
			 source: '/docs',
			 destination: '/docs/index',
			 permanent: true,
		  },
		  {
			 source: '/changelog',
			 destination: '/changelog/highcharts',
			 permanent: true
		  }
		]
	 },
}

module.exports = nextConfig
