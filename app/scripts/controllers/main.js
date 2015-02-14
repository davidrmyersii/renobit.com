'use strict';

/**
 * @ngdoc function
 * @name renobitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renobitApp
 */
angular.module('renobitApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});