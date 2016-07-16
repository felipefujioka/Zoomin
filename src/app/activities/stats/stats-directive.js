'use-strict';

angular.module('zoominStats')
  .directive('zoominStats', [
    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/stats/stats.html',
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominStats',
      require: [
        'zoominStats'
      ],
      link: function(scope, iElement, iAttrs, controllers) {
        var layout = controllers[0];

      }
    };
  }]);
