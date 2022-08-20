module.exports = {
	mode: "jit",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/features/**/*.{js,ts,jsx,tsx}",
		"./src/layout/**/*.{js,ts,jsx,tsx}",
		"./node_modules/daisyui/dist/**/*.js",
		"./node_modules/react-daisyui/dist/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
