'use-strict';

angular.module('zoominLogin')
  .controller('zoominLogin',[
    '$scope',
    'User',
    function($scope, User){

      $scope.login = function(){
                        var provider = new firebase.auth.FacebookAuthProvider();
                        firebase.auth().signInWithPopup(provider).then(function(result) {
                          var user = new User();
                          user.token = result.credential.accessToken;
                          user.user = result.user;
                        }).catch(function(error) {
                          var errorCode = error.code;
                          var errorMessage = error.message;

                          var email = error.email;

                          var credential = error.credential;
                          console.log(error);
                        });
                      };
    }]);
