'use strict';

/**
 * @ngdoc overview
 * @name renobitApp
 * @description
 * # renobitApp
 *
 * Main module of the application.
 */
angular
  .module('renobitApp', [
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smoothScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
