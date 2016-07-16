'use-strict';

angular.module('zoominStats')
  .controller('zoominStats',[
    '$scope',
    '$stateParams',
    '$cookies',
    'zoominHTTP',
    '_',
    function($scope,$stateParams, $cookies,zoominHTTP,_){
      var token = $cookies.get('zoominFbToken');
      
    }]);
