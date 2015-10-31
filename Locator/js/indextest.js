angular.module('ionic.example', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var mylocation;
        navigator.geolocation.getCurrentPosition(function(position) {
          map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          mylocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
        //window.alert(position.coords.latitude);
        //test = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
          center: mylocation,
          zoom: 14,
        };
         
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        var marker = new google.maps.Marker({
              position: mylocation,
              map: map,
              title: 'Hello World!'
         });
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        

        google.maps.event.addListener('click', function() {
          infowindow.open(map);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.Searchgoodwill() = function() {
        window.alert("HELLO");
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });