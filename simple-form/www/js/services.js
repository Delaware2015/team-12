angular.module('starter.services', [])

.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [{
    id: 0,
    store: 'Greenwood',
    description: 'Sale',
    image: 'https://www.goodwillde.org/wp-content/uploads/2014/10/logo.png'
  }, {
    id: 1,
    store: 'Dover',
    description: 'Golf Outing',
    image: 'https://www.goodwillde.org/wp-content/themes/goodwill/images/logo-2.png'
  }, {
    id: 2,
    store: 'Wilmington',
    description: 'Bulk sale',
    image: 'https://www.goodwillde.org/wp-content/themes/goodwill/images/logo-2.png'
  }, {
    id: 3,
    store: 'Newark',
    description: 'Sale on men\'s clothing',
    image: 'http://s3-media1.fl.yelpcdn.com/bphoto/d_pMq3RqZw0fOuAJ_t8Aig/ls.jpg'
  } ];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
})
.service('FeedbackService', function($q) {
    return {
        feedbackUser: function(name, donate) {
            /*var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' ) {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }*/
			
			var deferred = $q.defer();
            var promise = deferred.promise;
			deferred.resolve('Thank you!');
			promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});
