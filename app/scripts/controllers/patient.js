'use strict';
angular.module('pharmEasy')

  .controller('PatientController', [
    '$scope',
    '$rootScope',
    '$state',
    '$localStorage',
    'toastr',
    function ($scope, $rootScope, $state, $localStorage, toastr) {
      $scope.storage = $localStorage;
      $scope.requestArr = [];
      $scope.checkbox = [];
      $scope.patientId = 0;
      
      $scope.approveRequest = function (userType, doctorId) {
        if (doctorId) {
          var tempList = angular.copy($scope.storage[userType]);
          tempList[doctorId-1].approvedAccess = angular.copy($scope.requestArr);
          $scope.storage[userType] = tempList;
          toastr.success('Records shared with '+tempList[doctorId-1].name);
          $scope.storage[userType][doctorId-1].pendingAccess = [];
        } else {
          $scope.storage[userType].approvedAccess = angular.copy($scope.requestArr);
          $scope.storage[userType].pendingAccess = [];
          toastr.success('Records shared with Pharmacist');
        }
        $scope.requestArr = [];
        $scope.checkbox = [];
        $('#myModal').modal('toggle');
      };

      $scope.selectAllRecords = function () {
        $scope.storage.patients[$scope.patientId].prescription.forEach(function (record, index) {
          $scope.checkbox[index] = true;
          $scope.requestArr.push(record.id);
        });
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
    }
  ]);