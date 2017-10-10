(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.favItem = null;
  service.user = null;

  service.setMenuItem = function(item) {
    service.favItem = item;
  }

  service.getMenuItem = function() {
    return service.favItem;
  }

  service.setUser = function(user) {
    service.user = user;
  }

  service.getUser = function() {
    return service.user;
  }
}

})();
