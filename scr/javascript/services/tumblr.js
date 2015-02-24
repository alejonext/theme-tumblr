modules.exports = function (resource, apikey, url) {
	return resource('http://api.tumblr.com/v2/blog/:url/:type/:is?api_key=:key', {
		key : apikey,
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
				type : 'posts'
			}
		}

	});
};