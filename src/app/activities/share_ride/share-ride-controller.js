'use-strict';

angular.module('zoominShareRide')
  .controller('zoominShareRide',[
    '$scope',
    '$stateParams',
    '$cookies',
    'zoominHTTP',
    '_',
    function($scope,$stateParams, $cookies,zoominHTTP,_){

      var self = this;
      self.geocoder = new google.maps.Geocoder();

      var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
      };

      self.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      $scope.selectRow = function(address) {
        self.map.setCenter(address.geometry.location);
        var marker = new google.maps.Marker({
            map: self.map,
            position: address.geometry.location
        });
        self.map
      }

      $scope.$watch('from', function(newValue, oldValue){
        var result = self.geocoder.geocode({address:newValue}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

            $scope.addresses = results;
          } else {
            // alert("Geocode was not successful for the following reason: " + status);
          }
        });
      });

    }]);
