/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
	"./index.html",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
],
theme: {
	screens: {
		sm: '640px',
		profileSm: '865px',
		md: '768px',
		lg: '915px',
		profileMd: '1108px',
		xl: '1280px',
		'2xl': '1536px'
	},
	extend: {
		fontFamily: {
			poppins: [
				'Poppins',
				'sans-serif'
			],
			satoshi: [
				'Satoshi',
				'sans-serif'
			],
			inter: [
				'Inter',
				'sans-serif'
			],
			cyber: [
				'VT323',
				'sans-serif'
			],
			arial: [
				'Arial',
				'sans-serif'
			]
		},

		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		animation: {
			fadeIn: "fadeIn 0.8s ease-out",
		},
		keyframes: {
			fadeIn: {
				"0%": { opacity: 0, transform: "scale(0.95)" },
				"100%": { opacity: 1, transform: "scale(1)" },
			  },
		}
	}
},
plugins: [require("tailwindcss-animate")],
};
