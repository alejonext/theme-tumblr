modules.exports = function (route, api) {
	route
		.when('/:id',{
			contrller : 'home',
			template : api.tpl.home
		})
		.when('/post/:id',{
			contrller : 'post',
			template : api.tpl.post
		})
		.when('/:id',{
			contrller : 'pages',
			template : api.tpl.pages
		})
		.otherwise({
			template : api.tpl.error	
		});
};


modules.exports.$inject = [
	'$routeProvider',
	'API'
];