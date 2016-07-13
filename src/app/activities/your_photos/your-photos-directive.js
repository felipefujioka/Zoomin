'use-strict';

angular.module('zoominYourPhotos')
  .directive('zoominYourPhotos', [
    function() {
    return {
      restrict: 'E',
      templateUrl: '/app/activities/your_photos/your-photos.html',
      controller:   function() {
        var self = this;

      },
      controllerAs: 'zoominYourPhotos',
      require: [
        'zoominYourPhotos'
      ],
      link: function(scope, iElement, iAttrs, controllers) {
        var layout = controllers[0];

      }
    };
  }]);
