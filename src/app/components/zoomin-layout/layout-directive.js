angular.module('zoominLayout')
  .directive('zoominLayout', [
    function() {
      return {
        restrict: 'E',
        templateUrl: '/app/components/zoomin-layout/zoomin-layout.html',
        replace: false,
        scope: {},
        bindToController: true,
        controller:   function() {
          var self = this;
        },
        controllerAs: 'zoominLayout',
        require: [
          'zoominLayout'
        ],
        link: function(scope, iElement, iAttrs, controllers) {
          var layout = controllers[0];

          layout.element = iElement;
        }
      };
  }])
;
