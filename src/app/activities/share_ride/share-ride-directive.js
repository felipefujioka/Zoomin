'use-strict';

angular.module('zoominShareRide')
  .directive('zoominShareRide', [
    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/share_ride/share-ride.html',
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominShareRide',
      require: [
        'zoominShareRide'
      ],
      link: function(scope, element) {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        new google.maps.Map(element[0], mapOptions);
      }
    };
  }]);
