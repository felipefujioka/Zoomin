angular.module('zoominShareRide')
.directive('mapCanvas', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
      };
      new google.maps.Map(element[0], mapOptions);
    }
  };
});
