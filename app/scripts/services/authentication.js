'use strict';

angular.module('pharmEasy')

  .service('Authentication', ['toastr', '$localStorage', function (toastr, $localStorage) {
    this.login = function (data) {
      switch(true) {
        case data.username == 'doctor' && data.password == 'doctor':
          toastr.success('Welcome Doctor !!');
          $localStorage.loggedInUser = 1;
          window.scrollTo(0,0);
          return true;
          break;
        case data.username == 'patient' && data.password == 'patient':
          toastr.success('Welcome Patient !!');
          $localStorage.loggedInUser = 2;
          window.scrollTo(0,0);
          return true;
          break;
        case data.username == 'pharmacist' && data.password == 'pharmacist':
          toastr.success('Welcome Pharmacist !!');
          $localStorage.loggedInUser = 3;
          window.scrollTo(0,0);
          return true;
          break;
        default :
          toastr.error('Invalid User');
          $localStorage.loggedInUser = 0;
          return false;
          break;
      }
    };

    
  }
  ]);
