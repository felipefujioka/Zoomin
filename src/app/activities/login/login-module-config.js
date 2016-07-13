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
        onEnter: ['$stateParams', '$state', function($stateParams, $state) {
          console.log('Login module loaded')
        }]
      });
    }
  ])
;
