(function () {
'use strict';

angular.module('ShoppingCheckOff', [])
.controller('ShoppingListControllerB', ShoppingListControllerB)
.controller('ShoppingListControllerBB', ShoppingListControllerBB)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShoppingListControllerB.$inject = ['ShoppingListCheckOffService'];
function ShoppingListControllerB(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

ShoppingListControllerBB.$inject = ['ShoppingListCheckOffService'];
function ShoppingListControllerBB(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getRemovedItems();
}

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var pn = ["apples", "bananas", "oranges", "kiwi", "melon"];
  var pq = [1, 3, 4, 2, 1];
  var items = [];
  var bItems = [];

  service.addItem = function (index, itemName, quantity) {
    var item = {
      index: index,
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    bItems.push(items[itemIdex])
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getRemovedItems = function () {
    return bItems;
  };

  var initItems = function (pn, pq) {
    var items = [];
    for (var i = 0; i < pn.length; i++) {
      items.push({
          name: pn[i],
          quantity: pq[i]
      });
    }
    return items;
  };
  items = initItems(pn, pq);

}


})();
