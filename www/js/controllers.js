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
                  $state.go("app.paddymenu")  ;
                  break;
      case "groundnut"   :
                  $state.go("app.groundnut")  ;
                  break;
    }
  }

})


.controller('VideosCtrl', function($scope) {
  $scope.videosList=[
    {
      "title": "శ్రీ వరి లో సాగు పధ్ధతి",
      "link": "https://www.youtube.com/watch?v=vpFHy5jjACE"
    }, {
      "title": "డ్రం సీడర్ పద్ధతిలో విత్తుట",
      "link": "https://www.youtube.com/watch?v=RMa2Qsb1h04"
    },
    {
      "title": "వరిలో సమగ్ర సస్య రక్షణ పద్ధతులు",
      "link": "https://www.youtube.com/watch?v=9BWUhlhZhSs"
    },
    {
      "title": "వరిలో తెగుళ్ళ యాజమాన్యం",
      "link": "https://www.youtube.com/watch?v=eiWBkQKQw0g"
    },

 ];


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
    'title': "కృషి విజ్ఞాన్ కేద్రం",
    "address":{
      "address1":"ఉటుకూరు",
      "address2":"కడప జిల్లా, ఆంధ్ర ప్రదేశ్"
    }
  },
  {
    'title': "ప్రాజెక్ట్ డైరెక్టర్",
    "address":{
      "address1":"ఆత్మ, ఉటుకూరు",
      "address2":"కడప జిల్లా, ఆంధ్ర ప్రదేశ్"
    } 
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
    name: "వ్యవసాయ పంటల సూచనలు",
    number: '18004254440',
    address:"ఆచార్య ఎన్.జి.రంగా వ్యవసాయ విశ్వవిద్యాలయం"
  }, {
    name: "ఉద్యాన పంటల సూచనలు",
    number: '18004252960',
    address:"ఉద్యాన శాఖ, ఆంధ్రప్రదేశ్ ప్రభుత్వం"
  }, {
    name: "చేపల పెంపకం సూచనలు",
    number: '18004251188',
    address:"మత్స్యశాఖ, ఆంధ్రప్రదేశ్ ప్రభుత్వం"
  }, {
    name: "వాతావరణ సూచనలు",
    number: '18001801717',
    address:"భారత ప్రభుత్వం"
  },{
    name:"రైతుల కాల్ సెంటర్ నెంబర్",
    number:"1800 425 0430",
    address:"భారత ప్రభుత్వం"

  },{
    name:"అన్నపూర్ణ కృషి ప్రసారసేవ",
    number:"1800 425 3141",
    address:"భారత ప్రభుత్వం"
  }]

})

.controller('PaddyMenuCtrl', function($scope) {

});

;
