'use strict';

angular.module('pharmEasy')

  .service('Authentication', ['toastr', '$localStorage', function (toastr, $localStorage) {
    this.login = function (data) {
      switch(true) {
        case data.username == 'akshay' && data.password == 'akshay':
          toastr.success('Welcome Dr.Akshay !!');
          $localStorage.loggedInUser = {
            type : 1,
            name : $localStorage.doctors[0].name,
            id : 1,
            pendingAccess : $localStorage.doctors[0].pendingAccess,
            approvedAccess : $localStorage.doctors[0].approvedAccess
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'priyanka' && data.password == 'priyanka':
          toastr.success('Welcome Dr.Priyanka !!');
          $localStorage.loggedInUser = {
            type : 1,
            name : $localStorage.doctors[1].name,
            id : 2,
            pendingAccess : $localStorage.doctors[1].pendingAccess,
            approvedAccess : $localStorage.doctors[1].approvedAccess
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'varun' && data.password == 'varun':
          toastr.success('Welcome Dr.Varun !!');
          $localStorage.loggedInUser = {
            type : 1,
            name : $localStorage.doctors[2].name,
            id : 3,
            pendingAccess : $localStorage.doctors[2].pendingAccess,
            approvedAccess : $localStorage.doctors[2].approvedAccess
          };
          window.scrollTo(0,0);
          return 'doctor';
          break;
        case data.username == 'patient' && data.password == 'patient':
          toastr.success('Welcome Patient !!');
          $localStorage.loggedInUser = {
            type : 2,
            name : $localStorage.patients[0].name,
            id : 1
          };
          window.scrollTo(0,0);
          return 'patient';
          break;
        case data.username == 'pharmacist' && data.password == 'pharmacist':
          toastr.success('Welcome Pharmacist !!');
          $localStorage.loggedInUser = {
            type : 3,
            name : $localStorage.pharmacist.name,
            id : 1,
            pendingAccess : $localStorage.pharmacist.pendingAccess,
            approvedAccess : $localStorage.pharmacist.approvedAccess
          };
          window.scrollTo(0,0);
          return 'pharmacist';
          break;
        default :
          toastr.error('Invalid User');
          $localStorage.loggedInUser = {
            type : 0,
            name : '',
            id : 0
          };
          return false;
          break;
      }
    };

    
  }
  ]);
