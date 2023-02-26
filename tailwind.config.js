const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./styles/**/*.{css, scss, sass}',
		!'./node_modules/**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addUtilities({
				'.elevation-0': {
					'box-shadow': 'none',
				},
				'.elevation-1': {
					'box-shadow':
						'0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24)',
				},
				'.elevation-2': {
					'box-shadow':
						'0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.23)',
				},
				'.elevation-3': {
					'box-shadow':
						'0 10px 20px 0 rgba(0, 0, 0, 0.19), 0 6px 6px 0 rgba(0, 0, 0, 0.23)',
				},
				'.elevation-4': {
					'box-shadow':
						'0 15px 25px 0 rgba(0, 0, 0, 0.24), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
				},
				'.elevation-5': {
					'box-shadow':
						'0 20px 40px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
				},
			})

			addComponents({
				'.label-large': {
					'font-size': '14px',
					'font-weight': '500',
					'line-height': '20px',
					'letter-spacing': '0.1px',
				},
				'.label-medium': {
					'font-size': '12px',
					'font-weight': '500',
					'line-height': '16px',
					'letter-spacing': '0.5px',
				},
				'.label-small': {
					'font-size': '11px',
					'font-weight': '500',
					'line-height': '16px',
					'letter-spacing': '0.5px',
				},
			})
		}),
	],
}