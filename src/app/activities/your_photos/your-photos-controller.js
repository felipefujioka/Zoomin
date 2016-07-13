'use-strict';

angular.module('zoominYourPhotos')
  .controller('zoominYourPhotos',[
    '$scope',
    '$stateParams',
    '$cookies',
    function($scope,$stateParams, $cookies){
      $scope.token = $cookies.get('zoominFbToken');
    }]);
