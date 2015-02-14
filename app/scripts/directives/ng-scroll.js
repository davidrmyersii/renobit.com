'use strict';

/**
 * @ngdoc function
 * @name renobitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renobitApp
 */
angular.module('renobitApp')
	.directive('utilScrolling', function ($window)
	{
		return {
			link: function (scope)
			{
				angular.element($window).bind('scroll', function ()
				{
					var offset = this.pageYOffset;
					angular.element(document.getElementById('welcome')).css('top', (-1 * (offset/10)) + 'px');

					scope.$apply();

					// console.log(offset);
				});
			}
		};

		// return function (scope, element, attrs)
		// {
		// 	console.log('scope function');

		// 	angular.element(window).bind('scroll', function ()
		// 	{
		// 		// var offset = this.pageYOffset;
		// 		// var welcome = angular.element('#welcome');

		// 		// welcome.css('height', (-1 * (offset/10)));

		// 		console.log('test');
		// 		console.log(element);
		// 		console.log(attrs);

		// 		scope.$apply(attrs.utilScroll);
		// 	});
		// };
	});