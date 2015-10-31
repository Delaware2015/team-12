angular.module("newsfeed", [])
	.controller("newsFeedController", ["$scope", "newsFeedService", function($scope, newsFeedService) {
		$scope.newsfeed = newsFeedService.getLastFeed();

		/*
			Watch getLastFeed so that we can update the newsfeed when it is initialized
		*/
		$scope.$watch(function() {
			return newsFeedService.getLastFeed();
		}, function(newVal, oldVal) {
			$scope.newsfeed = newVal;
		});
	}])