/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
		colors: {
			bg1: '#106579',
			bg2: '#FFFFFF',
			brand1: '#393939',
			brand2: '#FCFFE3',
			grey1: '#43454D',
			negro1: '#1A1E23',
			customBorder: '#408494',
			customPurple: '#1E0E62',
			customGray: '#D2D1D9',

		},
		fontFamily: {
			sans: ['sans-serif'],
		},
		fontSize: {
			custom58: '22px',
			custom30: '30px',
			custom38: '38px',
			custom42: '42px',
			custom58: '58px',
		},
		lineHeight: {
			custom22: '22px',
			custom40: '40px',
			custom52: '52px',
			custom70: '70px',
		},
		letterSpacing: {
			tightCustom: '-0.4px',
			wideCustom: '1px',
		},
		gap: {
			10: '10px',
		  },
    },
  },
  plugins: [],
}

