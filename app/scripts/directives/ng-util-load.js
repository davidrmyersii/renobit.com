'use strict';

/**
 * @ngdoc function
 * @name renobitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renobitApp
 */
angular.module('renobitApp')
	.directive('utilLoad', function ($window)
	{
		return {
			link: function (scope)
			{
				var localWindow = angular.element($window);
				var welcome = document.getElementById('welcome');
				var ngWelcome = angular.element(welcome);
				var ngMain = angular.element(document.getElementById('main'));

				var height = welcome.clientHeight;
				var width = welcome.clientWidth;

				ngWelcome.css('height', height + 'px');
				ngMain.css('margin-top', height + 'px');

				localWindow.bind('resize', function ()
				{
					var newHeight = this.innerHeight;
					var newWidth = this.innerWidth;
					
					if (width !== newWidth && height !== newHeight)
					{
						ngWelcome.css('height', newHeight + 'px');
						ngMain.css('margin-top', newHeight + 'px');

						height = newHeight;
						width = newWidth;
					}

					scope.$apply();
				});
			}
		};
	});