module.exports = {
	mode: "jit",
	content: [
		"./node_modules/daisyui/dist/**/*.js",
		"./node_modules/react-daisyui/dist/**/*.js",
		"./src/pages/**/*.{js,jsx}",
		"./src/components/**/*.{js,jsx}",
		"./src/features/**/*.{js,jsx}",
		"./src/layout/**/*.{js,jsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
