var api =  require('./api.json');
module.exports = function (resource) {
	return resource( api.url, {
		callback: 'JSON_CALLBACK',
		key : api.key,
		name : api.blog,
		type : 'info',
		is : ''
	}, {
		info : {
			method : 'JSONP',
		},
		likes : {
			method : 'JSONP',
			params : {
				type : 'likes'
			}
		},
		followers :{
			method : 'JSONP',
			params : {
				type : 'followers'
			}	
		},
		posts : { // Todos los posts, sin distincion
			method : 'JSONP',
			params : {
				type : 'posts',
			}
		}
	});
};

module.exports.$inject = [
	'$resource'
];