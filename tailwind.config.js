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
		extend: {
			animation: {
				marquee: "marquee 25s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-101%)" },
				},
			},
		},
	},
	plugins: [require("daisyui")],
};
