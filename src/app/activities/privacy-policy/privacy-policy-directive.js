'use-strict';

angular.module('zoominPrivacy')
  .directive('zoominPrivacy', [

    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/privacy-policy/privacy-policy.html',
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominPrivacy',
      require: [
        'zoominPrivacy'
      ],
      link: function(scope, iElement, iAttrs, controllers) {
        var layout = controllers[0];

      }
    };
  }])
;
