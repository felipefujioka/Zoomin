'use-strict';

angular.module('zoominShareRide')
  .directive('zoominShareRide', [
    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/share_ride/share-ride.html',
      replace: true,
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominShareRide',
      require: [
        'zoominShareRide'
      ],
      link: function(scope, element) {

      }
    };
  }]);
