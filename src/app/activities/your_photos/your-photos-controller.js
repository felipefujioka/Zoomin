'use-strict';

angular.module('zoominYourPhotos')
  .controller('zoominYourPhotos',[
    '$scope',
    '$stateParams',
    '$cookies',
    'zoominHTTP',
    '_',
    function($scope,$stateParams, $cookies,zoominHTTP,_){
      var token = $cookies.get('zoominFbToken');
      $scope.photos = [];
      $scope.loading = false;
      var http = new zoominHTTP();

      var buildFields = function(){
        return ['photos{images,name}'];
      };

      var requestDataAllPhotos = function(page){
        var self = this;
        return http.get('https://graph.facebook.com/v2.6','/me',{access_token:token, fields:buildFields(), limit:49})
        .then(function(response){
          $scope.photos = response.data.photos.data;
          if(response.data.photos.paging.next) {
            return continuePagination(response.data.photos.paging.next);
          }
        });
      };

      function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

      var continuePagination = function(next) {
        return http.get(next,'',{})
        .then(function(response){
          $scope.photos = _($scope.photos).concat(response.data.data).value();
          if(response.data.paging && response.data.paging.next) {
            sleep(1000);
            return continuePagination(response.data.paging.next);
          }
          return null;
        });
      };

      $scope.getWHForPhoto = function(photo) {
        var w = photo.width;
        var h = photo.height;
        var area = w*h;
        if(area > 65000) {
          var ratio = Math.sqrt(65000/area);
          return {width:w*ratio, height:h*ratio};
        }
        return {width:w, height:h};
      };

      $scope.loading = true;
      requestDataAllPhotos().then(function(){
        $scope.loading = false;
      });
    }]);
