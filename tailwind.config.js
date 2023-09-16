/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				Cyan: 'hsl(180, 66%, 49%)',
				DarkViolet: 'hsl(257, 27%, 26%)',
				Red: 'hsl(0, 87%, 67%)',
				Gray: 'hsl(0, 0%, 75%)',
				GrayishViolet: 'hsl(257, 7%, 63%)',
				VeryDarkBlue: 'hsl(255, 11%, 22%)',
				VeryDarkViolet: 'hsl(260, 8%, 14%)'
			},
			backgroundImage: {
				'boost-mobile': "url('/bg-boost-mobile.svg')",
				'shorten-mobile': "url('/bg-shorten-mobile.svg')",
				'boost-desktop': "url('/bg-boost-desktop.svg')",
				'shorten-desktop': "url('/bg-shorten-desktop.svg')"
			}
		}
	},
	plugins: []
};
