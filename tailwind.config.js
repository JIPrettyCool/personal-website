const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#fbcdf1',
					100: '#fbcdf1',
					200: '#fbcdf1',
					300: '#fbcdf1',
					400: '#fbcdf1',
					500: '#fbcdf1',
					600: '#fbcdf1',
					700: '#fbcdf1',
					800: '#fbcdf1',
					900: '#fbcdf1',
				},
				primary: {
					50: '#fbcdf1',
					100: '#fbcdf1',
					200: '#fbcdf1',
					300: '#fbcdf1',
					400: '#fbcdf1',
					500: '#fbcdf1',
					600: '#fbcdf1',
					700: '#fbcdf1',
					800: '#fbcdf1',
					900: '#fbcdf1',
				},
			},
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
