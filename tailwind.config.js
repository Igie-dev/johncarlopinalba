/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["winter"],
	},
	plugins: [require("daisyui")],
};
