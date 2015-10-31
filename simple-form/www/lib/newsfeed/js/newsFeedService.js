angular.module("newsfeed")
	.factory("newsFeedService", ["$http", function($http) {
		var lastFeed;

		/**
			NewsStory constructor
			@param {Object}	json	json object representing a NewsStory received from the server
		*/
		function NewsStory(json) {
			this.id = json.id;
			this.title = json.title;
			this.message = json.message;
			this.type = json.type;
			this.startDate = new Date(json.startDate);
			this.endDate = new Date(json.endDate);
			this.submitted = new Date(json.submitted);
			this.stores = json.stores;
		}

		/**
			Update the feed by issuing a GET request to the server
		*/
		function updateFeed() {
			$http({
				method: "GET",
				url: "lib/newsfeed/data/newsfeed.json"
			}).then(function(response) {
				lastFeed = response.data.map(function(x) {
					return new NewsStory(x);
				});
			})
		}

		// initialize the news feed
		updateFeed();

		return {
			getLastFeed : function() { return lastFeed; },
			updateFeed : updateFeed
		}
	}])