/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				'primary': '#EFEAD8',
				'secondary': '#5F7161',
				'ternary': '#6D8B74'
			}
		},
	},
	plugins: [],
}