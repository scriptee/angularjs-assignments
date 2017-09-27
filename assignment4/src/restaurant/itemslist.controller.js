(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

// 'item' is injected through state's resolve
//ItemDetailController.$inject = ['$stateParams', 'items'];
ItemsListController.$inject = ['$stateParams', 'MenuDataService'];
function ItemsListController($stateParams, MenuDataService) {
  var itemsList = this;
  itemsList.categoryShortName = $stateParams.shortName
  console.log("ItemsListContoller shortName: "+ $stateParams.shortName);

  console.log("trying to get items...");
  var promise = MenuDataService.getItemsForCategory(itemsList.categoryShortName);

  promise.then(function (response) {
    console.log(response.data);
    var responseObject = response.data;
    itemsList.items = response.data.menu_items;
    itemsList.category = responseObject.category.name;
  })
  .catch(function (error) {
    console.log(error);
  })
}

})();
