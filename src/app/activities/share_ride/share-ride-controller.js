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

      $scope.$watch('from', function(newValue, oldValue){
        var result = self.geocoder.geocode({address:newValue}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            // map.setCenter(results[0].geometry.location);
            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: results[0].geometry.location
            // });
            console.log(results[0]);
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
        console.log(result);
      });

    }]);
