angular.module('zoominStats',[
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider.state('stats', {
      url:      '/stats',
      template: '<zoomin-stats></zoomin-stats>',
      onEnter: ['$stateParams', '$state', function($stateParams, $state) {
        // console.log('Your Photos module loaded');
      }]
    });
  }
])
;
