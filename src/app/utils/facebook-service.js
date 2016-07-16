angular.module('zoominUtils')
  .factory('zoominHTTP',['$http','$httpParamSerializer','_',function($http,$httpParamSerializer,_){

    function ZoominHTTP(){

      this.get = function(domain, path, params) {
        return $http({
          method:'GET',
          url:domain+path+'?'+$httpParamSerializer(params),
          headers:{
            'Access-Control-Allow-Origin':'*'
          }
        }).then(function successCallback(response) {
          return response;
        }, function errorCallback(response) {
          return response;
        });
      }
    }

    return (ZoominHTTP);
  }]);
