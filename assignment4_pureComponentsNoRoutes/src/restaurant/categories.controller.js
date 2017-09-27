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

  menu.getMenuItems = function (categoryShortName) {
    console.log("trying to get items...");
    var promise = MenuDataService.getItemsForCategory(categoryShortName);

    promise.then(function (response) {
      console.log(response.data);
      var responseObject = response.data;
      menu.items = response.data.menu_items;
      menu.category = responseObject.category.name;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
}

})();
