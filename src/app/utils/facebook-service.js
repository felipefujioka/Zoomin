angular.module('zoominUtils')
  .factory('User',function(){

    function User(){

      this.initialize = function(){
        this.token = null;
        this.user = null;
      };

      this.initialize();
    }

    return (User);
  });
