module.exports = function (route, api) {
	route
		.when('/',{
			contrller : 'home',
			template : api.tpl.home
		})
		.when('/post/:id',{
			contrller : 'post',
			template : api.tpl.post
		})
		.otherwise({
			template : api.tpl.error	
		});
};


module.exports.$inject = [
	'$routeProvider',
	'API'
];