angular.module('zoominYourPhotos',[
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider.state('your_photos', {
      url:      '/your_photos',
      template: '<zoomin-your-photos></zoomin-your-photos>',
      onEnter: ['$stateParams', '$state', function($stateParams, $state) {
        // console.log('Your Photos module loaded');
      }]
    });
  }
])
;
