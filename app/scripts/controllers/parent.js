'use strict';
angular.module('pharmEasy').controller('ParentController', [
  '$scope',
  '$rootScope',
  '$state',
  '$localStorage',
  function ($scope, $rootScope, $state, $localStorage) {
    $localStorage.$default({
      loggedInUser : {
        type : 0,
        id : 0
      }, // 1: doctor, 2: patient, 3: pharmacist
      doctors: [{
        id : 1,
        name : 'Akshay',
        approvedAccess : []
      }, {
        id : 2,
        name : 'Priyanka',
        approvedAccess : []
      }, {
        id : 3,
        name : 'Varun',
        approvedAccess : []
      }],
      patient : {
        id : 1,
        prescription : [{
          id: 1,
          date: 'February 3 2018',
          medicines : ['Paracetamol Tab (325mg)', 'Aceclofenac (100mg)', 'Acetaminophen'],
          doctor : 'Akshay'
        }, {
          id: 2,
          date: 'February 10 2018',
          medicines : ['amikacin injection (10ml)', 'Aplenzin (100mg)', 'Capoten'],
          doctor : 'Akshay'
        }, {
          id: 3,
          date: 'February 23 2018',
          medicines : ['Cephulac (325mg)', 'Cheracol', 'Citroma'],
          doctor : 'Akshay'
        }, {
          id: 4,
          date: 'March 1 2018',
          medicines : ['Crocin (500mg)', 'Combiflame (250mg)', 'Sinarest'],
          doctor : 'Priyanka'
        }, {
          id: 5,
          date: 'March 4 2018',
          medicines : ['Flexon', 'Combivent', 'Crixivan (500mg)'],
          doctor : 'Priyanka'
        }, {
          id: 6,
          date: 'March 8 2018',
          medicines : ['Saxenda (50mg)', 'Senokot', 'Seroquel Syrup'],
          doctor : 'Priyanka'
        }, {
          id: 7,
          date: 'March 10 2018',
          medicines : ['Statins (10mg)', 'Ponstel (400mg) ', 'Portalac'],
          doctor : 'Priyanka'
        }, {
          id: 8,
          date: 'March 17 2018',
          medicines : ['Thiola (100mg)', 'Thorazine', 'Toradol (675mg)'],
          doctor : 'Priyanka'
        }]
      },
      pharmacist: {
        id : 1,
        pendingAccess : [],
        approvedAccess : []
      }
    });
  }
]);