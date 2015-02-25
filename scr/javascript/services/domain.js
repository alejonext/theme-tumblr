module.exports = function (win) {
	var body = angular.element( angular.element(win).find('body') );
	return {
		get :function () {
			return body.attr('data-urlencoded-name');
		}
	};
};

module.exports.$inject = [
	'$window'
];