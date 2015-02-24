modules.exports = function (resource, api, url) {
	return resource( api.url, {
		key : api.key,
		url : url,
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

modules.exports.$inject = [
	'$resource',
	'API',
	'URL'
];