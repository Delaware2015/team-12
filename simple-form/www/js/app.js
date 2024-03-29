// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'newsfeed', 'calculator', 'map'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.calculator', {
      url: '/calculator',
    views: {
      'calculator': {
      templateUrl: 'lib/calculator/views/calculator.html',
      controller: 'calculatorController'
      }
    }
  })
  .state('tab.newsfeed', {
      url: '/newsfeed',
    views: {
      'newsfeed': {
      templateUrl: 'lib/newsfeed/views/newsfeed.html',
      controller: 'newsFeedController'
      }
    }
  })
  .state('tab.mission', {
    url: '/mission',
    views: {
      'tab-mission': {
        templateUrl: 'templates/tab-mission.html',
        controller: 'MissionCtrl'
      }
    }
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-events.html',
          controller: 'EventsCtrl'
        }
      }
    })

  .state('tab.event-detail', {
    url: '/events/:eventId',
    views: {
      'tab-events': {
        templateUrl: 'templates/event-detail.html',
        controller: 'EventDetailCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('tab.feedback', {
      url: '/feedback',
	  views: {
		  'feedback': {
			templateUrl: 'templates/feedback.html',
			controller: 'FeedbackCtrl'
		  }
	  }
  })
  .state('tab.map', {
      url: '/map',
    views: {
      'map': {
      templateUrl: 'lib/map/views/map.html',
      controller: 'MapController'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
