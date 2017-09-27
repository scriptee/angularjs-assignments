(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/restaurant/templates/categorieslist.template.html',
  //controller: MenuCategoriesComponentController,
  bindings: {
    categories: '<',
    //getMenuItems: '&'
  }
});

//not in use, as we use pull in data from external controller
//and do not add functionality to it
//data/funtionality is always on isolate scope called $ctrl (inside the template)
//a scpecific ComponentController has access to all properties pulled in from the outer controller
//-->the functionality can be extended then
/*
MenuCategoriesComponentController.$inject = ['MenuDataService'];
function MenuCategoriesComponentController(MenuDataService) {
  var $ctrl = this;
  ...
*/

})();
