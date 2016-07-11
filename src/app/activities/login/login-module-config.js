'use-strict';

angular.module('zoominLogin', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    function($stateProvider) {
      $stateProvider.state('login', {
        url:      '/login',
        template: '<zoomin-login></zoomin-login>',
        onEnter: ['$stateParams', '$state', '_', function(TptAppSession, $stateParams, $state, _) {
          console.log('Login module loaded')
        }]
      });
    }
  ])
;
