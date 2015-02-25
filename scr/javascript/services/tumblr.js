module.exports = function (resource, api, blog) {
	return resource( api.url, {
		key : api.key,
		name : blog.get(),
		type : 'info',
		is : ''
	}, {
		info : {
			method : 'GET'
		},
		likes : {
			method : 'GET',
			params : {
				type : 'likes'
			}
		},
		followers :{
			method : 'GET',
			params : {
				type : 'followers'
			}	
		},
		posts : { // Todos los posts, sin distincion
			method : 'GET',
			params : {
				type : 'posts',
			}
		}
	});
};

module.exports.$inject = [
	'$resource',
	'API',
	'domain'
];