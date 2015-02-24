modue.exports = function (am, api) {
	am.changeLocale(api.lang);
};

modue.exports.$inject = [
	'amMoment',
	'API'
];