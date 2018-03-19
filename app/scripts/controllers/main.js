'use strict';
angular.module('pharmEasy')

  .controller('MainController', [
    '$scope',
    '$rootScope',
    '$state',
    '$localStorage',
    'toastr',
    function ($scope, $rootScope, $state, $localStorage, toastr) {
      $scope.state = $state;
      $scope.storage = $localStorage;
      $scope.toastr = toastr;
      $scope.allNotification = [];
      $(document).ready(function(){
        $('[data-toggle="popover"]').popover();   
      });
      switch(true) {
        case $scope.storage.loggedInUser.type == 1:
          $state.go('home.doctor');
          break;
        case $scope.storage.loggedInUser.type == 2:
          $scope.storage.doctors.forEach(function(doctor, index) {
            if(doctor.pendingAccess.length) {
              $scope.allNotification.push(doctor.name + ' has requested for record id : ' + doctor.pendingAccess)
            }
          });
          if($scope.storage.pharmacist.pendingAccess.length) {
            $scope.allNotification.push($scope.storage.pharmacist.name + ' has requested for record id : ' + $scope.storage.pharmacist.pendingAccess)
          }
          if($scope.allNotification.length) {
            $scope.notificationHtml = $scope.allNotification.join('</br></br>')
          }
          $state.go('home.patient');
          break;
        case $scope.storage.loggedInUser.type == 3:
          $state.go('home.pharmacist');
          break;
        default :
          $state.go('login');
          break;
      }
      
      $scope.logout = function () {
        $scope.requestArr = [];
        $scope.checkbox = [];
        $scope.storage.loggedInUser = {type:0,id:0};
        $state.go('login');
      };
    }
  ]);