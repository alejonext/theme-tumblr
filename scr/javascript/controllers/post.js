module.exports = function (scope, params, tumblr, location) {
	var tmlbr = tumblr.posts(params.id);
	if(tmlbr.meta.status >= 202)
		return location.path('/error');

	scope.post = scope.tmlbr.response.post[0];

	scope.next = function () {
	};

	scope.prev = function () {
	};
};


module.exports.$inject = [
	'$scope',
	'$routeParams',
	'tumblr',
	'$location'
];