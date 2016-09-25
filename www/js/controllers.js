angular.module('agri.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('VideosCtrl', function($scope) {
  $scope.categoryList = [{
    'title': 'గోధుమ',
    videosList: [{
      "title": "V-1"
    }, {
      "title": "V-2"
    }]
  }, {
    'title': 'కొబ్బరి',
    videosList: [{
      "title": "V-1"
    }, {
      "title": "V-2"
    }]
  }];
  $scope.isOpen = function(item) {
    return $scope.shownItem === item;
  }
  $scope.toggleView = function(item) {
    if ($scope.isOpen(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  }
})

.controller('AddressbookCtrl', function($scope) {
  $scope.categoryList = [{
    'title': 'గోదావరి',
    contactList: [{
      "name": "V-1"
    }, {
      "name": "V-2"
    }]
  }, {
    'title': 'కృష్ణ',
    contactList: [{
      "name": "V-1"
    }, {
      "name": "V-2"
    }]
  }, {
    'title': 'దక్షిణ',
    contactList: [{
      "name": "V-1"
    }, {
      "name": "V-2"
    }]
  }];
  $scope.isOpen = function(item) {
    return $scope.shownItem === item;
  }
  $scope.toggleView = function(item) {
    if ($scope.isOpen(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  }
})

.controller('CallcenterCtrl', function($scope) {
  $scope.contactsList = [{
    name: "Abc",
    number: '123123'
  }, {
    name: "Abc",
    number: '123123'
  }, {
    name: "Abc",
    number: '123123'
  }, {
    name: "Abc",
    number: '123123'
  }]
})


;
