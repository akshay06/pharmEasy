'use strict';
angular.module('pharmEasy')

  .controller('MainController', [
    '$scope',
    '$rootScope',
    '$state',
    '$localStorage',
    function ($scope, $rootScope, $state, $localStorage) {
      if (!$localStorage.loggedInUser) {
        $state.go('login');
      }

      $scope.storage = $localStorage;
      $scope.getAccess = function (id) {
        if($scope.storage.loggedInUser == 1) {
          $scope.storage.doctor.pendingAccess.push(id);
        } else if($scope.storage.loggedInUser == 3) {
          $scope.storage.pharmacist.pendingAccess.push(id);
        }
      };
      $scope.approveRequest = function (userType,id) {
        $scope.storage[userType].approvedAccess.push(id);
        $scope.removeFromPending(userType, id);
      };

      $scope.declineRequest = function (userType,id) {
        $scope.storage[userType].deniedAccess.push(id);
        $scope.removeFromPending(userType, id);
      };

      $scope.toggleRecord = function (record) {
        console.log(record);        
      };
      
      $scope.removeFromPending = function (userType, id) {
        $scope.storage[userType].pendingAccess.splice($scope.storage[userType].pendingAccess.indexOf(id), 1);        
      };

      $scope.logout = function () {
        $scope.storage.loggedInUser = 0;
        $state.go('login');
      };
    }
  ]);