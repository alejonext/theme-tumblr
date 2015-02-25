module.exports = function (scope, params, tumblr, location) {
	console.log(scope);
	var tmlbr = tumblr.posts(params.id);
	if(tmlbr.meta.status >= 202)
		return location.path('/error');

	scope.card = scope.tmlbr.response.post[0];

	scope.next = function () {
	};

	scope.prev = function () {
	};
};


module.exports.$inject = [
	'$scope',
	'$routeParams',
	'myTumblr',
	'$location'
];