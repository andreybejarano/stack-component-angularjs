(function () {
	'use strict'

	angular
		.module('appExample')
		.service('AppExampleService', AppExampleService);

	AppExampleService.$inject = ['$http'];

	function AppExampleService($http) {

	}
})();