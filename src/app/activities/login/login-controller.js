'use-strict';

angular.module('zoominLogin')
  .controller('zoominLogin',[
    '$scope',
    'User',
    '$state',
    '$cookies',
    function($scope, User, $state, $cookies){
      $scope.login = function(){
                        var provider = new firebase.auth.FacebookAuthProvider();
                        firebase.auth().signInWithPopup(provider).then(function(result) {
                          $scope.token = result.credential.accessToken;
                          $scope.user = result.user;
                          $cookies.put('zoominFbToken', result.credential.accessToken);
                          $state.go('your_photos');
                        }).catch(function(error) {
                          var errorCode = error.code;
                          var errorMessage = error.message;

                          var email = error.email;

                          var credential = error.credential;
                          console.log(error);
                        });
                      };
    }]);
