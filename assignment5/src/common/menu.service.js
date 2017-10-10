(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems2 = function () {
    return {"menu_items":[{"id":877,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"},{"id":878,"short_name":"A2","name":"Egg Drop Soup","description":"chicken broth with egg drop","price_small":2.25,"price_large":4.5,"small_portion_name":"pint","large_portion_name":"quart"},{"id":879,"short_name":"A3","name":"Chicken Corn Soup","description":"clear chicken broth with creamy corn and egg drop with white meat chicken pieces","price_small":2.75,"price_large":5.5,"small_portion_name":"pint","large_portion_name":"quart"},{"id":880,"short_name":"A4","name":"Hot and Sour Soup","description":"tofu, chicken, mushroom, bamboo shoot, and egg","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"},{"id":881,"short_name":"A5","name":"Egg Drop with Won Ton Soup","description":"chicken soup with egg drop and won tons","price_small":3.0,"price_large":6.0,"small_portion_name":"pint","large_portion_name":"quart"},{"id":882,"short_name":"A6","name":"Chicken Noodle (or Rice) Soup","description":"clear broth and lo mein noodles or white rice, chicken piMenuItemeces","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"},{"id":883,"short_name":"A7","name":"Garden Vegetable Soup","description":"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"}]}
  };
}



})();
