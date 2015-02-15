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
					angular.element(document.getElementById('welcome')).css('top', (-1 * (offset/5)) + 'px');

					scope.$apply();
				});
			}
		};
	});