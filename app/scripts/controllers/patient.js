'use strict';
angular.module('pharmEasy')

  .controller('PatientController', [
    '$scope',
    '$rootScope',
    '$state',
    '$localStorage',
    'toastr',
    function ($scope, $rootScope, $state, $localStorage, toastr) {
      if (!$localStorage.loggedInUser.type) {
        $state.go('login');
      }
      $scope.storage = $localStorage;
      $scope.requestArr = [];
      $scope.checkbox = [];

      $scope.getAccess = function (id) {
        if($scope.storage.loggedInUser == 1) {
          $scope.storage.doctor.pendingAccess.push(id);
        } else if($scope.storage.loggedInUser == 3) {
          $scope.storage.pharmacist.pendingAccess.push(id);
        }
      };
      
      $scope.approveRequest = function (userType, doctorId) {
        if (doctorId) {
          var tempList = angular.copy($scope.storage[userType]);
          tempList[doctorId-1].approvedAccess = angular.copy($scope.requestArr);
          $scope.storage[userType] = tempList;
          toastr.success('Records shared with Dr.'+tempList[doctorId-1].name);
        } else {
          $scope.storage[userType].approvedAccess = angular.copy($scope.requestArr);
          toastr.success('Records shared with Pharmacist');
        }
        $scope.requestArr = [];
        $scope.checkbox = [];
      };

      $scope.toggleRecord = function (record, index) {
        if($scope.checkbox[index]) {
          $scope.requestArr.push(record.id)
        } else {
          $scope.requestArr.splice($scope.requestArr.indexOf(record.id, 1))
        }       
      };
      
      $scope.removeFromPending = function (userType, id) {
        $scope.storage[userType].pendingAccess.splice($scope.storage[userType].pendingAccess.indexOf(id), 1);        
      };

      $scope.logout = function () {
        $scope.requestArr = [];
        $scope.checkbox = [];
        $scope.storage.loggedInUser = {type:0,id:0};
        $state.go('login');
      };
    }
  ]);