module.exports = function (am, api) {
	am.changeLocale(api.lang);
};

module.exports.$inject = [
	'amMoment',
	'API'
];