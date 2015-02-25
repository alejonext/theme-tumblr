var api =  require('./api.json');
module.exports = function (am) {
	am.changeLocale(api.lang);
};

module.exports.$inject = [
	'amMoment'
];