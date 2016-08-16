angular.module('zoominUtils')
.factory('$firebase', ['$window', function($window) {
  return $window.firebase;
}])
;
