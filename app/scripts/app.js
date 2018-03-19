'use strict';

angular
  .module('pharmEasy', [
    'ui.router',
    'ngStorage',
    'toastr'
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
