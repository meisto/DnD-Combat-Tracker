/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				redwood: '#59160A',
				terracotta: '#A02B20',
				tundora: '#4A4041',
				englishwalnut: '#442C26',
				grainbrown: '#DCCEB4',
				sugarcane: '#F4FAEF'
			},
			fontFamily: {
				Rakkas: ['"Rakkas"'],
				Gupter: ['"Gupter"'],
				Tinos: ['"Tinos"'],
				EBGaramond: ['"EBGaramond"'],
				CrimsonText: ['"CrimsonText"'],
				SpectralSC: ['"SpectralSC"']
			},
			animation: {
				'spin-slow': 'spin 30s linear infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
