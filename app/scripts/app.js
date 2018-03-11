'use strict';

angular
  .module('pharmEasy', [
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ngStorage',
    'ui.bootstrap',
    'ngWebSocket'
  ])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}])

.config(['$stateProvider', function($stateProvider) {
  
  // Use $stateProvider to configure your states.
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .state('login', {
      url: '^/login',
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    });
}]);
