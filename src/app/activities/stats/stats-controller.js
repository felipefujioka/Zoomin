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
      var http = new zoominHTTP();
      var buildFields = function() {
        return ['name,picture,birthday'];
      };

      var requestUserData = function(page){
        var self = this;
        return http.get('https://graph.facebook.com/v2.6','/me',{access_token:token, fields:buildFields(), limit:49})
        .then(function(response){
          var data = response.data;
          $scope.user = {
            name: data.name,
            birthday: data.birthday,
            pictureUrl: data.picture.data.url
          };
        });
      };

      requestUserData();

    }]);
