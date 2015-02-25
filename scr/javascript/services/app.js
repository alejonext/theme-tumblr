angular.module(require('./api.json').name, [
	'ng',
	'ngRoutes',
	'ngAnimate',
	'ngTouch',
	'ngSanitize',
	'ngAnimate',
	'confg',
	'angularMoment',
	'akoenig.deckgrid'
])
.constant('API', require('./api.json'))
.service('tumblr', require('./tumblr.js'))
.controller('home', require('../controllers/home.js'))
.controller('post', require('../controllers/post.js'))
.config(require('./config.js'))
.run(require('./run.js'));