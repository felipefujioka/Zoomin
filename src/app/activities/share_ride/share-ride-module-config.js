angular.module('zoominShareRide',[
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider.state('share_ride', {
      url:      '/share_ride',
      template: '<zoomin-share-ride></zoomin-share-ride>',
      onEnter: ['$stateParams', '$state', function($stateParams, $state) {
        // console.log('Your Photos module loaded');
      }]
    });
  }
])
;
