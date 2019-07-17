// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {

	const env = {
		navLogo: process.env.NAV_LOGO
	}

	const data = {
		env: env,
		cdn: process.env.TURBO_CDN,
		greeting: 'Welcome to my restaurant',
		description: 'This is a great place for a business meeting or a date'
	}

	res.render('index', data)
})

var promise = document.querySelector('rs-background-video-layer').play();

// if (promise !== undefined) {
//     promise.catch(error => {
//         // Auto-play was prevented
// 				// Show a UI element to let the user manually start playback
// 				console.log(error.message)
//     }).then(() => {
//         // Auto-play started
//     });
// }


module.exports = router
