'use-strict';

angular.module('zoominLogin')
  .directive('zoominLogin', [

    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/login/login.html',
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominLogin',
      require: [
        'zoominLogin'
      ],
      link: function(scope, iElement, iAttrs, controllers) {
        var layout = controllers[0];

        layout.init(iElement);
      }
    };
  }])
;
