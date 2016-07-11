angular.module('testModule',[])
  .directive('testDirective',[
    function(){
      return {
        restrict: 'E',
        template: '<span>ALOU!</span>',
        replace: true,
      }
    }
  ]);
