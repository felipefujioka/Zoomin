'use-strict';

angular.module('zoominLogin')
  .controller('zoominLogin',[
    '$scope',
    '$state',
    '$cookies',
    'zoominHTTP',
    function($scope, $state, $cookies, zoominHTTP){

      var self = this;
      self.http = new zoominHTTP();

      $scope.login = function(){
                        var provider = new firebase.auth.FacebookAuthProvider();
                        provider.addScope('user_birthday');
                        provider.addScope('user_photos');
                        provider.addScope('user_friends');
                        provider.addScope('user_posts');
                        firebase.auth().signInWithPopup(provider).then(function(result) {
                          var token = result.credential.accessToken;
                          var user = result.user;
                          $cookies.put('zoominFbToken', result.credential.accessToken);
                          self.http.get('https://graph.facebook.com/v2.6','/me',{access_token:token, fields:['id']})
                            .then(function(res) {
                              $cookies.put('zoominFbId', res.data.id);
                              $state.go('share_ride');
                            });

                        }).catch(function(error) {
                          var errorCode = error.code;
                          var errorMessage = error.message;

                          var email = error.email;

                          var credential = error.credential;
                          console.log(error);
                        });
                      };
    }]);
