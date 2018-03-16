'use strict';
angular.module('pharmEasy')

.controller('LoginController', ['$scope', 'Authentication', function ($scope, Authentication) {
  $scope.user = {
    username : '',
    password : ''
  };

  $scope.submit = function () {
    Authentication.login($scope.user);    
  };
  
}]);
