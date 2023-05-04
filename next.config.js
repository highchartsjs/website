/** @type {import('next').NextConfig} */

const path = require('path');


const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: true
	},
	compiler: {
		removeConsole:  true
		// {
		// 	exclude: ['error', 'log'],
		// }
	 },
	images: {
		unoptimized: true
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	output: 'export',
	// async redirects() {
	// 	return [
	// 		// {
	// 		// 	source: '/demo',
	// 		// 	destination: '/demo/highcharts',
	// 		// 	permanent: true,
	// 		// },
	// 	  {
	// 		 source: '/docs',
	// 		 destination: '/docs/index',
	// 		 permanent: true,
	// 	  }
	// 	//   {
	// 	// 	 source: '/changelog',
	// 	// 	 destination: '/changelog/highcharts',
	// 	// 	 permanent: true
	// 	//   }
	// 	]
	//  },
}

module.exports = nextConfig
