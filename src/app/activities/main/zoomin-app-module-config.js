"use strict";

angular.module('zoominApp',[
  'zoominLogin',
  'zoominYourPhotos',
  'zoominStats',
  'zoominShareRide',
  'zoominPrivacy',
  'zoominLayout',
  'testModule',
  'module-templates',
  'ui.router',
  'zoominUtils',
  'ngCookies'
]).config([
    '$urlRouterProvider',
    function($urlRouterProvider) {
      $urlRouterProvider.otherwise('login');
    }
  ])
;
