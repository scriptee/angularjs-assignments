(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.factory('MenuItemsListFactory', MenuItemsListFactory)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('itemList', ItemListDirective);;

function ItemListDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      search: '<',
      removeItem: '&',
      itemsInList: '&'
    },
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService', 'MenuItemsListFactory'];
function NarrowItDownController(MenuSearchService, MenuItemsListFactory) {

  var search = this;
  var menuItemsList = MenuItemsListFactory();
  search.searchTerm = "";

  search.myMenuItems = function(searchTerm) {
    console.log("myMenuItems: t="+searchTerm);
    var foundPromise = MenuSearchService.getMatchedMenuItems(searchTerm);

    foundPromise.then(function(foundResponse) {

      //var myObject = httpResponse.data.menu_items;
      console.log(foundResponse);
      menuItemsList.setItems(foundResponse);
      search.foundItems = menuItemsList.getItems();
    }, function(error) {    //called in the error case
      console.log("Something went terribly wrong.");
    });
  };
  search.removeItem = function (itemIndexObj) {
    var itemIndex = itemIndexObj.index;
    console.log("About to remove item: "+itemIndex);
    menuItemsList.removeItem(itemIndex);
  };
  search.itemsInList = function () {
    console.log("Items in List?: "+menuItemsList.getItems());
    //objects do not have a .length but you can check of item[0]
    if(menuItemsList.getItems() == undefined || menuItemsList.getItems()[0] != undefined) {
      return true;
    }
    return false;
  };
}

MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
function MenuSearchService($q, $http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    var deferred = $q.defer();
    var foundItemsResponse = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (foundItemsResponse) {
      //console.log(foundItemsResponse);

      var allFoundItems = foundItemsResponse.data.menu_items;
      var matchedItems = [];
      if(searchTerm === "*") { deferred.resolve(allFoundItems);
        } else {
        //console.log("afi: "+allFoundItems);
        for(var index in allFoundItems) {
          var item = allFoundItems[index];
          if(item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0) matchedItems.push(item);
          //console.log("prompName: "+item.name);
        }
      }
      deferred.resolve(matchedItems);
    }).catch(function (foundItemsResponse) {
      console.log("Something went terribly wrong. "+foundItemsResponse);
      deferred.reject(foundItemsResponse)
    });

    //console.log("found items: "+foundItemsResponse);
    //myObject is undefined here
    //console.log("myObject: "+myObject);
    return deferred.promise;
  };
}

function MenuItemsListService() {
  var itemsListService = this;
  var items;

  // List of shopping items
  //var items = [];

  itemsListService.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  itemsListService.getItems = function () {
    return items;
  };

  itemsListService.setItems = function (foundItems) {
    items = foundItems;
  };
}


function MenuItemsListFactory() {
  var factory = function () {
    return new MenuItemsListService();
  };

  return factory;
}

})();
