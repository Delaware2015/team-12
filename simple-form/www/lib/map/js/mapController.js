angular.module('map', ['ionic'])
	.controller('MapController', function($scope, $ionicLoading, $compile) {
		console.log("asdf");

	function initialize() {


		var myposition;
		var position1;
		navigator.geolocation.getCurrentPosition(function(position, myposition) {
			map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
			myposition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			position1 = new google.maps.LatLng(39.685861, -75.743550);
			var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>17.9 Miles</b></u>' + '<br />' +
			'<p><u><b>Newark</b></u>' + 
			'<br />'+ '311 Newark Shopping Center' +
			'<br />'+ 'Newark, DE 19711' +
			'<br />'+ '<u>(302) 453-1430</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var iconBase = 'http://www.poi-factory.com/files/img/';
			var marker2 = new google.maps.Marker({
				position: position1,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker2.addListener('click', function() {
				infowindow.open(map, marker2);
			});

			position2 = new google.maps.LatLng(39.756687, -75.518224);
			var contentString2 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>3.5 Miles</b></u>' + '<br />' +
			'<p><u><b>The Goodwill Center</b></u>' + 
			'<br />'+ '300 E Lea Blvd' +
			'<br />'+ 'Wilmington, DE 19802' +
			'<br />'+ '<u>(302) 761-4640</u>' +
			'<br />'+ '<b> M-F </b> 8:00AM-4:30PM' +
			'<br />'+ '<b> Sat </b> CLOSED' +
			'<br />'+ '<b> Sun </b> CLOSED' +
			'</div>'+
			'</div>';

			var infowindow2 = new google.maps.InfoWindow({
				content: contentString2
			});
			var marker3 = new google.maps.Marker({
				position: position2,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker3.addListener('click', function() {
				infowindow2.content = contentString2;
				infowindow2.open(map, marker3);
			});

position3 = new google.maps.LatLng(39.734983, -75.652505);
			var contentString3 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>7.4 Miles</b></u>' + '<br />' +
			'<p><u><b>Wilmington</b></u>' + 
			'<br />'+ '4315 Kirkwood Highway'+
			'<br />'+ 'Wilmington, DE 19802' +
			'<br />'+ '<u>(302) 993-0413</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow3 = new google.maps.InfoWindow({
				content: contentString3
			});
			var marker4 = new google.maps.Marker({
				position: position3,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker4.addListener('click', function() {
				infowindow3.open(map, marker4);
			});

position4 = new google.maps.LatLng(39.667206, -75.591055);
			var contentString4 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>11.5 Miles</b></u>' + '<br />' +
			'<p><u><b>New Castle</b></u>' + 
			'<br />'+ '400 Centerpoint Blvd'+
			'<br />'+ 'New Castle, DE 19720' +
			'<br />'+ '<u>(302) 322-4716</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sun </b> 9:00AM-8:00PM' +
			'</div>'+
			'</div>';

			var infowindow4 = new google.maps.InfoWindow({
				content: contentString4
			});
			var marker5 = new google.maps.Marker({
				position: position4,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker5.addListener('click', function() {
				infowindow4.open(map, marker5);
			});

			position6 = new google.maps.LatLng(39.792601, -75.692808);
			var contentString6 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>9.2 Miles</b></u>' + '<br />' +
			'<p><u><b>Hockessin</b></u>' + 
			'<br />'+ '7270 Lancaster Pike'+
			'<br />'+ 'Hockessin, DE 19707' +
			'<br />'+ '<u>Number Unavailable</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sun </b> 10:00AM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow6 = new google.maps.InfoWindow({
				content: contentString6
			});
			var marker7 = new google.maps.Marker({
				position: position6,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker7.addListener('click', function() {
				infowindow6.open(map, marker7);
			});

			position7 = new google.maps.LatLng(39.620311, -75.712045);
			var contentString7 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>17.5 Miles</b></u>' + '<br />' +
			'<p><u><b>Bear</b></u>' + 
			'<br />'+ '334 Fox Hunt Dr'+
			'<br />'+ 'Bear, DE 19701' +
			'<br />'+ '<u>(302) 834-6780</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow7 = new google.maps.InfoWindow({
				content: contentString7
			});
			var marker8 = new google.maps.Marker({
				position: position7,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker8.addListener('click', function() {
				infowindow7.open(map, marker8);
			});

			var iconBase2 = 'http://i.stack.imgur.com/';
			var marker = new google.maps.Marker({
				position: myposition,
				map: map,
				icon: iconBase2 + 'orZ4x.png',
				title: 'Your Location'

			});

		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
        //window.alert(position.coords.latitude);
        var mapOptions = {
        	center: myposition,
        	zoom: 10,
        };
        myposition = new google.maps.LatLng(39.685861, -75.743550);
        position1 = new google.maps.LatLng(20.685861, -30.743550);
        var map = new google.maps.Map(document.getElementById("map"),
        	mapOptions);
       //window.alert(service);
       $scope.map = map;
     }
     //google.maps.event.addDomListener(window, 'load', initialize);

     $scope.clickTest = function() {
     	alert('Example of infowindow with ng-click')
     };

     $scope.onLoad = initialize;

   })
	.directive('ngMap', function() {
	  return {
	  	restrict: 'E',
	    template: '<div id="map"></div>',
	    link: function(scope) { scope.onLoad(); }
	  };
	});