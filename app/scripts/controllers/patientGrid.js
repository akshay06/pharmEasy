'use strict';
angular.module('pharmEasy')

  .controller('PatientGridController', [
    '$scope',
    '$rootScope',
    '$state',
    '$localStorage',
    'toastr',
    function ($scope, $rootScope, $state, $localStorage, toastr) {
      $scope.patientId = null;
      $scope.showpatientReport = false;
      $scope.showUserReport = function (index) {
        $scope.patientId = index;
        $scope.showpatientReport = true;
      };
      $scope.hideUserReport = function () {
        $scope.patientId = null;
        $scope.showpatientReport = false;
      };

      $scope.getAccess = function (id) {
        if($scope.storage.loggedInUser.type == 1) {
          $scope.storage.doctors[$scope.storage.loggedInUser.id].pendingAccess.push(id);
        } else if($scope.storage.loggedInUser.type == 3) {
          $scope.storage.pharmacist.pendingAccess.push(id);
        }
        toastr.success('Your request is on the way !');
      };
    }
  ]);