angular.module('theme', [
	'ng',
	'ngRoutes',
	'ngAnimate',
	'ngTouch',
	'ngSanitize',
	'ngAnimate',
	'confg'
])
.constant('API', require('./api.json'))
.service('tumblr', require('./tumblr.js'))
.controller();//?
.config(require('./config.js'))