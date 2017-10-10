(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

//injecting user data and perverences
//alternatively, we could also just inject the UserService
//however, let's use the resolve way, to ensure the data is resloved
//e.g. from a very slow db before the new view is shown
//also, inject the API Path for the image
MyInfoController.$inject = ['user','menuItem','ApiPath'];
function MyInfoController(user, menuItem, ApiPath) {
  var ctrl = this;
  ctrl.menuItem = menuItem;
  ctrl.user = user;
  ctrl.basePath = ApiPath;

  ctrl.$onInit = function() {
    console.log("InfoCtrl:");
    console.log(ctrl.menuItem);
    console.log(ctrl.user);
  }

}

})();
