/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: {
				50: '#f0f8ff',
				100: '#e0f1fe',
				200: '#bae3fd',
				300: '#7dcefc',
				400: '#38b5f8',
				500: '#0e9ce9',
				600: '#027cc7',
				700: '#035e9a',
				800: '#075485',
				900: '#0c466e',
				950: '#082c49'
			},

			surface: {
				50: '#f8f8f2',
				100: '#e9e7d6',
				200: '#d5d1b2',
				300: '#c0b889',
				400: '#b1a46e',
				500: '#a5905b',
				600: '#90784f',
				700: '#796044',
				800: '#654f3b',
				900: '#544233',
				950: '#2e231a'
			}
		}
	},
	plugins: []
};
