'use-strict';

angular.module('zoominShareRide')
  .controller('zoominShareRide',[
    '$scope',
    '$stateParams',
    '$cookies',
    'zoominHTTP',
    '_',
    '$firebase',
    function($scope, $stateParams, $cookies, zoominHTTP, _,   $firebase){

      var self = this;
      self.geocoder = new google.maps.Geocoder();

      self.fbId = $cookies.get('zoominFbId');

      var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 16
      };

      self.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      self.database = $firebase.database();

      $scope.selectFrom = function(address) {
        self.map.setCenter(address.geometry.location);
        var marker = new google.maps.Marker({
            map: self.map,
            position: address.geometry.location
        });
        self.from = address;
      };

      $scope.selectTo = function(address) {
        self.map.setCenter(address.geometry.location);
        var marker = new google.maps.Marker({
            map: self.map,
            position: address.geometry.location
        });
        self.to = address;
      };

      $scope.$watch('from', function(newValue, oldValue){
        var result = self.geocoder.geocode({address:newValue}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

            $scope.fromAddresses = results;
          } else {
            // alert("Geocode was not successful for the following reason: " + status);
          }
        });
      });

      $scope.$watch('to', function(newValue, oldValue){
        var result = self.geocoder.geocode({address:newValue}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

            $scope.toAddresses = results;
          } else {
            // alert("Geocode was not successful for the following reason: " + status);
          }
        });
      });

      var getLatLng = function(address) {
        return {lat: address.geometry.location.lat(),
                lng: address.geometry.location.lng()};
      }

      $scope.save = function() {
        if(self.from && self.to){
          self.database.ref('rides/' + self.fbId).set({from:getLatLng(self.from), to:getLatLng(self.to)});
        }
      }

    }]);
