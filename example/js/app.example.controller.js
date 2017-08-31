(function () {
	'use strict';

	angular
		.module('appExample')
		.controller('AppExampleController', AppExampleController);

	AppExampleController.$inject = ['AppExampleService', '$scope'];

	/* @ngInject */
	function AppExampleController(AppExampleService, $scope) {
		var vm = this;
		activate();
		////////////////

		function activate() {
		
		}
	}

})();