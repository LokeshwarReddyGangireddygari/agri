// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('agri.maninModule', ['ionic', 'agri.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.videos', {
    url: '/videos',
    views: {
      'menuContent': {
        templateUrl: 'templates/videos.html',
        controller: 'VideosCtrl'
      }
    }
  })

  .state('app.addressbook', {
    url: '/addressbook',
    views: {
      'menuContent': {
        templateUrl: 'templates/addressbook.html',
        controller: 'AddressbookCtrl'
      }
    }
  })

  .state('app.callcenter', {
    url: '/callcenter',
    views: {
      'menuContent': {
        templateUrl: 'templates/callcenter.html',
        controller: 'CallcenterCtrl'
      }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

  .state('app.pretext', {
      url: '/pretext',
      views: {
        'menuContent': {
          templateUrl: 'templates/pretext.html'
        }
      }
    })

   .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('app.founder', {
      url: '/founder',
      views: {
        'menuContent': {
          templateUrl: 'templates/founder.html'
        }
      }
    })

    .state('app.gratitude', {
      url: '/gratitude',
      views: {
        'menuContent': {
          templateUrl: 'templates/gratitude.html'
        }
      }
    })

    .state('app.rating', {
      url: '/rating',
      views: {
        'menuContent': {
          templateUrl: 'templates/rating.html'
        }
      }
    })

    .state('app.share', {
      url: '/share',
      views: {
        'menuContent': {
          templateUrl: 'templates/share.html'
        }
      }
    })
     
    .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'templates/feedback.html'
        }
      }
    })

    .state('app.address', {
      url: '/address',
      views: {
        'menuContent': {
          templateUrl: 'templates/address.html'
        }
      }
    })
     
     
    

  
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
