const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
	head: {
		titleTemplate: 'Next Level Running – Träna som eliten',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare.' },
			{ property: 'og:url', content: 'https://nextlevelrunning.se' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:title', content: 'Träna som eliten – Ta din löpning till nästa nivå' },
			{ property: 'og:description', content: 'Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare' },
			{ property: 'og:image', content: 'https://nextlevelrunning.se/og-image.png' }
		],
		link: [
			{ rel: 'icon', type: 'images/png', sizes: '192x192', href: 'favicon.png' }
		],
	},
	css: [
		'normalize.css',
		'flickity/css/flickity.css',
		resolve(__dirname, 'assets/main.css')
	],
	build: {
		vendor: ['flickity'],
		postcss: [
			require('postcss-cssnext'),
			require('lost')
		],
	},
	modules: [
   ['@nuxtjs/google-tag-manager', { id: 'GTM-K99RN2X' }],
  ]
}
