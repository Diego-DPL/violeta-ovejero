/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
			colors: {
				bg1: '#106579',
				bg2: '#FFFFFF',
				brand1: '#393939',
				brand2: '#106579',
				grey1: '#43454D',
				negro1: '#1A1E23',
        customBorder: '#408494'
			},
    },
  },
  plugins: [],
}

