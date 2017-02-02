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

  .state('app.crops', {
    url: '/crops',
    views: {
      'menuContent': {
        templateUrl: 'templates/crops.html',
        controller: 'CropsCtrl'
      }
    }
  })

  .state('app.cotton', {
    url: '/cotton',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/1.html'
        }
    }

  })

  .state('app.cotton2', {
    url: '/cotton2',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/2.html'
        }
    }

  })

  .state('app.cotton3', {
    url: '/cotton3',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/3.html'
        }
    }

  })

  .state('app.cotton4', {
    url: '/cotton4',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/4.html'
        }
    }

  })

  .state('app.cotton5', {
    url: '/cotton5',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/5.html'
        }
    }

  })

  .state('app.cotton6', {
    url: '/cotton6',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/6.html'
        }
    }

  })

  .state('app.cotton7', {
    url: '/cotton7',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7.html'
        }
    }
  })

  .state('app.cotton7-1', {
    url: '/cotton7-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-1.html'
        }
    }
  })

  .state('app.cotton7-2', {
    url: '/cotton7-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-2.html'
        }
    }
  })

  .state('app.cotton7-3', {
    url: '/cotton7-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-3.html'
        }
    }
  })

  .state('app.cotton7-4', {
    url: '/cotton7-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-4.html'
        }
    }
  })

  .state('app.cotton7-5', {
    url: '/cotton7-5',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-5.html'
        }
    }
  })

  .state('app.cotton7-6', {
    url: '/cotton7-6',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-6.html'
        }
    }
  })

  .state('app.cotton7-7', {
    url: '/cotton7-7',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/7-7.html'
        }
    }
  })

  .state('app.cotton8', {
    url: '/cotton8',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/8.html'
        }
    }
  })

  .state('app.cotton8-1', {
    url: '/cotton8-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/8-1.html'
        }
    }
  })

  .state('app.cotton8-2', {
    url: '/cotton8-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/8-2.html'
        }
    }
  })

  .state('app.cotton8-3', {
    url: '/cotton8-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/8-3.html'
        }
    }
  })

  .state('app.cotton8-4', {
    url: '/cotton8-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/cotton/8-4.html'
        }
    }
  })


  .state('app.groundnut', {
    url: '/groundnut',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/1.html'
        }
    }
  })

  .state('app.groundnut2', {
    url: '/groundnut2',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/2.html'
        }
    }
  })

  .state('app.groundnut3', {
    url: '/groundnut3',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/3.html'
        }
    }
  })

  .state('app.groundnut4', {
    url: '/groundnut4',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/4.html'
        }
    }
  })

  .state('app.groundnut5', {
    url: '/groundnut5',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/5.html'
        }
    }
  })

  .state('app.groundnut6', {
    url: '/groundnut6',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/6.html'
        }
    }
  })

  .state('app.groundnut7', {
    url: '/groundnut7',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/7.html'
        }
    }
  })

  .state('app.groundnut8', {
    url: '/groundnut8',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/8.html'
        }
    }
  })

  .state('app.groundnut9', {
    url: '/groundnut9',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/9.html'
        }
    }
  })

  .state('app.groundnut10', {
    url: '/groundnut10',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/10.html'
        }
    }
  })

  .state('app.groundnut11', {
    url: '/groundnut11',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/11.html'
        }
    }
  })

  .state('app.groundnut12', {
    url: '/groundnut12',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12.html'
        }
    }
  })
  .state('app.groundnut12-1', {
    url: '/groundnut12-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-1.html'
        }
    }
  })
  .state('app.groundnut12-2', {
    url: '/groundnut12-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-2.html'
        }
    }
  })
  .state('app.groundnut12-3', {
    url: '/groundnut12-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-3.html'
        }
    }
  })
  .state('app.groundnut12-4', {
    url: '/groundnut12-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-4.html'
        }
    }
  })
  .state('app.groundnut12-5', {
    url: '/groundnut12-5',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-5.html'
        }
    }
  })
  .state('app.groundnut12-6', {
    url: '/groundnut12-6',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-6.html'
        }
    }
  })
    .state('app.groundnut12-7', {
    url: '/groundnut12-7',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/12-7.html'
        }
    }
  })
    .state('app.groundnut13', {
    url: '/groundnut13',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13.html'
        }
    }
  })
    .state('app.groundnut13-1', {
    url: '/groundnut13-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-1.html'
        }
    }
  })
  .state('app.groundnut13-2', {
    url: '/groundnut13-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-2.html'
        }
    }
  })
  .state('app.groundnut13-3', {
    url: '/groundnut13-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-3.html'
        }
    }
  })
  .state('app.groundnut13-4', {
    url: '/groundnut13-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-4.html'
        }
    }
  })
  .state('app.groundnut13-5', {
    url: '/groundnut13-5',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-5.html'
        }
    }
  })
  .state('app.groundnut13-6', {
    url: '/groundnut13-6',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-6.html'
        }
    }
  })
   .state('app.groundnut13-7', {
    url: '/groundnut13-7',
    views: {
        'menuContent': {
          templateUrl: 'templates/groundnut/13-7.html'
        }
    }
  })
  .state('app.redgram', {
    url: '/redgram',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/1.html'
        }
    }
  })
  .state('app.redgram2', {
    url: '/redgram2',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/2.html'
        }
    }
  })
  .state('app.redgram3', {
    url: '/redgram3',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/3.html'
        }
    }
  })
  .state('app.redgram4', {
    url: '/redgram4',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/4.html'
        }
    }
  })
  .state('app.redgram5', {
    url: '/redgram5',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/5.html'
        }
    }
  })
  .state('app.redgram6', {
    url: '/redgram6',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/6.html'
        }
    }
  })
  .state('app.redgram7', {
    url: '/redgram7',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/7.html'
        }
    }
  })
  .state('app.redgram7-1', {
    url: '/redgram7-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/7-1.html'
        }
    }
  })
  .state('app.redgram7-2', {
    url: '/redgram7-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/7-2.html'
        }
    }
  })
  .state('app.redgram7-3', {
    url: '/redgram7-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/7-3.html'
        }
    }
  })
  .state('app.redgram7-4', {
    url: '/redgram7-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/7-4.html'
        }
    }
  })
  .state('app.redgram8', {
    url: '/redgram8',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/8.html'
        }
    }
  })
  .state('app.redgram9', {
    url: '/redgram9',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/9.html'
        }
    }
  })
  .state('app.redgram10', {
    url: '/redgram10',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/10.html'
        }
    }
  })
    .state('app.redgram10-1', {
    url: '/redgram10-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/10-1.html'
        }
    }
  })

  .state('app.redgram10-2', {
    url: '/redgram10-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/10-2.html'
        }
    }
  })
  .state('app.redgram10-3', {
    url: '/redgram10-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/10-3.html'
        }
    }
  })
  .state('app.redgram10-4', {
    url: '/redgram10-4',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/10-4.html'
        }
    }
  })
  .state('app.redgram11', {
    url: '/redgram11',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/11.html'
        }
    }
  })

  .state('app.redgram11-1', {
    url: '/redgram11-1',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/11-1.html'
        }
    }
  })

  .state('app.redgram11-2', {
    url: '/redgram11-2',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/11-2.html'
        }
    }
  })
  .state('app.redgram11-3', {
    url: '/redgram11-3',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/11-3.html'
        }
    }
  })

  .state('app.redgram12', {
    url: '/redgram12',
    views: {
        'menuContent': {
          templateUrl: 'templates/redgram/12.html'
        }
    }
  })
 

  .state('app.paddymenu', {
    url: '/paddymenu',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/1.html',
        controller: 'PaddyMenuCtrl'
      }
    }
  })

  .state('app.paddy2', {
    url: '/paddy2',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/2.html'
      }
    }
  })

  .state('app.paddy3', {
    url: '/paddy3',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/3.html'
      }
    }
  })

  .state('app.paddy4', {
    url: '/paddy4',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/4.html'
      }
    }
  })

  .state('app.paddy5', {
    url: '/paddy5',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/5.html'
      }
    }
  })

  .state('app.paddy6', {
    url: '/paddy6',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/6.html'
      }
    }
  })

  .state('app.paddy7', {
    url: '/paddy7',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/7.html'
      }
    }
  })

  .state('app.paddy8', {
    url: '/paddy8',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/8.html'
      }
    }
  })

  .state('app.paddy9', {
    url: '/paddy9',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/9.html'
      }
    }
  })

  .state('app.paddy10', {
    url: '/paddy10',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/10.html'
      }
    }
  })

  .state('app.paddy11', {
    url: '/paddy11',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/11.html'
      }
    }
  })

  .state('app.paddy12', {
    url: '/paddy12',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/12.html'
      }
    }
  })

  .state('app.paddy13', {
    url: '/paddy13',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/13.html'
      }
    }
  })
        .state('app.paddy13-1', {
          url: '/paddy13-1',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-1.html'
            }
          }
        })
        .state('app.paddy13-2', {
          url: '/paddy13-2',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-2.html'
            }
          }
        })
        .state('app.paddy13-3', {
          url: '/paddy13-3',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-3.html'
            }
          }
        })
        .state('app.paddy13-4', {
          url: '/paddy13-4',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-4.html'
            }
          }
        })
        .state('app.paddy13-5', {
          url: '/paddy13-5',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-5.html'
            }
          }
        })
        .state('app.paddy13-6', {
          url: '/paddy13-6',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/13-6.html'
            }
          }
        })
  .state('app.paddy14', {
    url: '/paddy14',
     views: {
      'menuContent': {
        templateUrl: 'templates/paddy/14.html'
      }
    }
  })
        .state('app.paddy14-1', {
          url: '/paddy14-1',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/14-1.html'
            }
          }
        })
        .state('app.paddy14-2', {
          url: '/paddy14-2',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/14-2.html'
            }
          }
        })
        .state('app.paddy14-3', {
          url: '/paddy14-3',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/14-3.html'
            }
          }
        })
        .state('app.paddy14-4', {
          url: '/paddy14-4',
           views: {
            'menuContent': {
              templateUrl: 'templates/paddy/14-4.html'
            }
          }
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

    .state('app.thanks', {
      url: '/thanks',
      views: {
        'menuContent': {
          templateUrl: 'templates/thanks.html'
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
