'use strict';
angular.module('pharmEasy')

.controller('LoginController', ['$scope', 'Authentication', '$state', function ($scope, Authentication, $state) {
  $scope.user = {
    username : '',
    password : ''
  };

  $scope.submit = function () {
    var userLoggedIn = Authentication.login($scope.user);
    if (userLoggedIn) {
      $state.go('home');
    }
  };
  
}]);
