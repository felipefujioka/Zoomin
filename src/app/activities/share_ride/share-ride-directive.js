'use-strict';

angular.module('zoominShareRide')
  .directive('zoominShareRide', [
    '$state',
    '$cookies',
    function($state, $cookies) {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/share_ride/share-ride.html',
      replace: true,
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominShareRide',
      controller: 'zoominShareRide',
      require: [
        'zoominShareRide'
      ],
      link: function(scope, iElement, iAttrs, controllers) {
        var self = this;
        self.zoominShareRide = controllers[0];
        if(self.zoominShareRide.fbId == undefined) {
          $state.go('login')
        }
      }
    };
  }]);
