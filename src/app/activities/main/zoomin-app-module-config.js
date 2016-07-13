"use strict";

angular.module('zoominApp',[
  'zoominLogin',
  'zoominYourPhotos',
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
