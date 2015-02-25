angular.module(require('./api.json').name, [
	'ng',
	'ngRoute',
	'ngAnimate',
	'ngTouch',
	'ngSanitize',
	'ngAnimate',
	'angularMoment',
	'akoenig.deckgrid',
	'ngResource'
])
.service('myTumblr', require('./tumblr.js'))
.controller('crtHome', require('../controllers/home.js'))
.controller('crtPost', require('../controllers/post.js'))
.config(require('./config.js'))
.run(require('./run.js'));