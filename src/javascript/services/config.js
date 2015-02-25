module.exports = function (route) {
	route
		.when('/',{
			controller : 'crtHome',
			templateUrl : "home"
		})
		.when('/post/:id',{
			controller : 'crtPost',
			templateUrl : "post"
		})
		.otherwise({
			templateUrl : "error"
		});
};

module.exports.$inject = [
	'$routeProvider'
];