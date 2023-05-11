/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-daisyui"]);

module.exports = withTM({
	reactStrictMode: true,
	images: {
		domains: ["www.spc.noaa.gov"],
	},
	// async rewrites() {
	// 	source: '',
	// 	destination: '',
	// 	has: [
	// 		{
	// 			type: '',
	// 			key: '',
	// 			value: ''
	// 		}
	// 	]
	// }
});
