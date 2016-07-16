'use-strict';

angular.module('zoominPrivacy', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    function($stateProvider) {
      $stateProvider.state('privacy-policy', {
        url:      '/privacy-policy',
        template: '<zoomin-privacy></zoomin-privacy>',
        onEnter: ['$stateParams', '$state', function($stateParams, $state) {
          console.log('Privacy policy module loaded')
        }]
      });
    }
  ])
;
