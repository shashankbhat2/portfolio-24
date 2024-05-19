/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Clinton', ...defaultTheme.fontFamily.sans],
				serif: ['Krylon', ...defaultTheme.fontFamily.serif]
			},
			container: {
				padding: {
				  DEFAULT: '1rem',
				  sm: '2rem',
				  lg: '4rem',
				  xl: '5rem',
				  '2xl': '6rem',
				},
			}
			
		},
	},
	plugins: [],
}
