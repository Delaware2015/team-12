angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('EventsCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  };
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('FeedbackCtrl', function($scope, FeedbackService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.feedback = function() {
        FeedbackService.feedbackUser($scope.data.username, $scope.data.donate).success(function(data) {
            $scope.data.username="";
			$scope.data.donate=false;
			$state.go('tab.events');
			
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Submission failed!',
                template: 'Please check your input!'
            });
        });
    }
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.events');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
});
