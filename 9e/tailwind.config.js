/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	prefix: 'tw-',
	purge: ["./**/*.html", "./**/*.{js, jsx, css, ts, tsx}"],
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: '#004aad',
				secondary: "#ffe353",
			}
		},
	},
	plugins: [],
}


