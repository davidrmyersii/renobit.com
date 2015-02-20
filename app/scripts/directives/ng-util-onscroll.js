'use strict';

/**
 * @ngdoc function
 * @name renobitApp.directive:utilOnscroll
 * @description
 * # utilOnscroll
 * Handles window on scroll events
 */
// angular.module('renobitApp')
// 	.directive('utilOnscroll', function ($window)
// 	{
// 		return {
// 			link: function (scope)
// 			{
// 				angular.element($window).bind('scroll', function ()
// 				{
// 					var offset = this.pageYOffset;
// 					angular.element(document.getElementById('welcome')).css('top', (-1 * (offset/10)) + 'px');

// 					scope.$apply();
// 				});
// 			}
// 		};
// 	});