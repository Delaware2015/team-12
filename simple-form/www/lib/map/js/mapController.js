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
			position8 = new google.maps.LatLng(39.796913, -75.468018);
			var contentString8 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>5.5 Miles</b></u>' + '<br />' +
			'<p><u><b>Claymont</b></u>' + 
			'<br />'+ '2701 Philadelphia Pike' +
			'<br />'+ 'Wilmington, DE 19802' +
			'<br />'+ '<u>(302) 798-9047</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow8 = new google.maps.InfoWindow({
				content: contentString8
			});
			var marker9 = new google.maps.Marker({
				position: position8,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker9.addListener('click', function() {
				infowindow8.content = contentString8;
				infowindow8.open(map, marker9);
			});

			position9 = new google.maps.LatLng(39.836233, -75.442214);
			var contentString9 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>8.3 Miles</b></u>' + '<br />' +
			'<p><u><b>Chichester</b></u>' + 
			'<br />'+ '3294 Chichester Ave' +
			'<br />'+ 'Boothwyn, PA 19061' +
			'<br />'+ '<u>(302) 761-4640</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow9 = new google.maps.InfoWindow({
				content: contentString9
			});
			var marker10 = new google.maps.Marker({
				position: position9,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker10.addListener('click', function() {
				infowindow9.content = contentString9;
				infowindow9.open(map, marker10);
			});

			position10 = new google.maps.LatLng(39.856174, -75.538859);
			var contentString10 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>5.2 Miles</b></u>' + '<br />' +
			'<p><u><b>Chadds Ford</b></u>' + 
			'<br />'+ '255 Wilmington West Chester Pike' +
			'<br />'+ 'Chadds Ford, PA 19317' +
			'<br />'+ '<u>(610) 558-3722</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow10 = new google.maps.InfoWindow({
				content: contentString10
			});
			var marker11 = new google.maps.Marker({
				position: position10,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker11.addListener('click', function() {
				infowindow10.content = contentString10;
				infowindow10.open(map, marker11);
			});

			position11 = new google.maps.LatLng(39.894753, -75.354296);
			var contentString11 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><u><b>15.6 Miles</b></u>' + '<br />' +
			'<p><u><b>Swarthmore</b></u>' + 
			'<br />'+ '725 S. Chester road' +
			'<br />'+ 'Swarthmore, PA 19081' +
			'<br />'+ '<u>(610) 543-4399</u>' +
			'<br />'+ '<b> M-F </b> 9:00AM-8:00PM' +
			'<br />'+ '<b> Sat </b> 9:00AM-6:00PM' +
			'<br />'+ '<b> Sun </b> 12:00PM-5:00PM' +
			'</div>'+
			'</div>';

			var infowindow11 = new google.maps.InfoWindow({
				content: contentString11
			});
			var marker12 = new google.maps.Marker({
				position: position11,
				map: map,
				icon: iconBase + 'goodwill.bmp'
			});
			marker12.addListener('click', function() {
				infowindow11.content = contentString11;
				infowindow11.open(map, marker12);
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