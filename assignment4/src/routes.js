(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // categories list page
  // We are working with (onInit) separate controllers for separate stages
  // Alternatively, we could have used the resolve property and call a
  // function (on a service or controller) that retieves the required data,
  // once a state is reached.
  // there are a number of examples in the course docu on this
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/main-categorieslist.template.html',
    controller: 'MenuCategoriesController as menu',
  })

  //no need to subclass. we do not need any properties of the MenuCategoriesController
  //being injected into the ItemsListController
  //.state('categoriesList.itemList', {
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/restaurant/templates/itemslist.template.html',
    controller: 'ItemsListController as itemsList',
    //required if no url is provided
    //params: {
    //  shortName: null
    //}
  });
}

})();
