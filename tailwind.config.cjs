/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode : 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			colors: {
			'darkMode-blue': '#e5fffd',
			'darkMode-black': '#0b0c12',
			'darkMode-light-blue': '#66fcf1',
			'darkMode-lighter-blue': '#202833',
			'darkMode-grey': '#c5c6c8',
			'lightMode-background': '#ffffff',
			'lightMode-text': '#000000',
			'lightMode-Button': '#ffb9b3',
			'lightMode-Button-secondary': '#fff6f5',
			'lightMode-Accent': '#d1bdff',
			
		},
	},
	plugins: [],
}
