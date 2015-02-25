module.exports = function (scope, tumblr, location) {
	scope.pages =  {
		page : 1
	};
	scope.resp = tumblr.posts(scope.pages);
	scope.reload = function () {
		scope.pages++;
		var tmlbr =  tumblr.posts(scope.pages);
		for (var i = tmblr.response.posts.length - 1; i >= 0; i--)
			scope.resp.post.push(tmblr.response.posts[i]);	
	};
};


module.exports.$inject = [
	'$scope',
	'myTumblr',
	'$location'
];