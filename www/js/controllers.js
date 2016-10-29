angular.module('agri.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('CropsCtrl', function($scope,$state) {

  $scope.navCrop = function(crop){

    switch(crop){
      case "cotton"    :
                  $state.go("app.cotton")  ;
                  break;
      case "groundnut"  :
                  $state.go("app.groundnut")  ;
                  break;

      case "toordal"   :
                  $state.go("app.toordal")  ;
                  break;
      case "paddy"   :
                  $state.go("app.paddy")  ;
                  break;
    }
  }

})


.controller('VideosCtrl', function($scope) {
  $scope.categoryList = [{
    'title': 'గోధుమ',
    videosList: [{
      "title": "V-1",
      "link": "https://www.youtube.com/watch?v=tjAGbNbglqU"
    }, {
      "title": "V-2",
      "link": "https://www.youtube.com/watch?v=tjAGbNbglqU"
    }]
  }, {
    'title': 'కొబ్బరి',
    videosList: [{
      "title": "V-1",
      "link": "https://www.youtube.com/watch?v=tjAGbNbglqU"
    }, {
      "title": "V-2",
      "link": "https://www.youtube.com/watch?v=tjAGbNbglqU"
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

  $scope.showVideo = function(video){
    window.open(video.link, '_system');
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
