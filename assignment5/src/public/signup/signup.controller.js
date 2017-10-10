(function () {

angular.module('public')
.controller('SignupController', SignupController);

//pre-loaded menuItems, and a service to store user data and prefernces
SignupController.$inject = ['menuItems', 'UserService'];
function SignupController(menuItems, UserService) {
  var ctrl = this;
  ctrl.keys = {};
  ctrl.errorFav = false;
  ctrl.itemSaved = false;

  ctrl.$onInit = function() {
    console.log(menuItems);
    for(var k in menuItems["menu_items"]) {
      var obj = menuItems["menu_items"][k];
      //console.log(k);
      ctrl.keys[obj["short_name"].toUpperCase()] = obj;
      //console.log(ctrl.keys[obj["short_name"]]["name"]);
    }
  }

  ctrl.checkFavoriteForError = function() {
    ctrl.user.favorite = ctrl.user.favorite.toUpperCase();
    
    if(ctrl.keys[ctrl.user.favorite] === undefined)
      ctrl.errorFav = true;
    else
      ctrl.errorFav = false;
    return ctrl.errorFav;
  }

  ctrl.submit = function () {
    ctrl.user.favorite = ctrl.user.favorite.toUpperCase();

    console.log("SN "+ctrl.user.favorite+": "+ctrl.keys[ctrl.user.favorite]);
    console.log(ctrl.keys[ctrl.user.favorite]);

    if(ctrl.checkFavoriteForError()) {
      ctrl.itemSaved = false;
    } else {
      UserService.setMenuItem(ctrl.keys[ctrl.user.favorite]);
      //the user object is created in signup.html
      UserService.setUser(ctrl.user);
      ctrl.itemSaved = true;
    }
  };
}

})();
