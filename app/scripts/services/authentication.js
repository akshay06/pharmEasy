'use strict';

angular.module('pharmEasy')

  .service('Authentication', ['toastr', '$localStorage', function (toastr, $localStorage) {
    this.login = function (data) {
      switch(true) {
        case data.username == 'akshay' && data.password == 'akshay':
          toastr.success('Welcome Dr.Akshay !!');
          $localStorage.loggedInUser = {
            type : 1,
            id : 1
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'priyanka' && data.password == 'priyanka':
          toastr.success('Welcome Dr.Priyanka !!');
          $localStorage.loggedInUser = {
            type : 1,
            id : 2
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'varun' && data.password == 'varun':
          toastr.success('Welcome Dr.Varun !!');
          $localStorage.loggedInUser = {
            type : 1,
            id : 3
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'patient' && data.password == 'patient':
          toastr.success('Welcome Patient !!');
          $localStorage.loggedInUser = {
            type : 2,
            id : 1
          };
          window.scrollTo(0,0);
          return 'patient';
          break;
        case data.username == 'pharmacist' && data.password == 'pharmacist':
          toastr.success('Welcome Pharmacist !!');
          $localStorage.loggedInUser = 3;
          window.scrollTo(0,0);
          return 'pharmacist';
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
