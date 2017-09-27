(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);
//, MainShoppingListController

MenuCategoriesController.$inject = ['MenuDataService'];
function MenuCategoriesController(MenuDataService) {
  //var $ctrl = this;
  var menu = this;
  var promise = MenuDataService.getAllCategories();

  //$onInit here!
  menu.$onInit = function () {
    promise.then(function (response) {
      menu.categories = response.data;
      console.log("menu.categories: "+menu.categories);
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };
}

})();
