/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode : 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			colors: {
			blue: '#e5fffd',
			black: '#0b0c12',
			'light-blue': '#66fcf1',
			'lighter-blue': '#202833',
			grey: '#c5c6c8',
		},
	},
	plugins: [],
}
