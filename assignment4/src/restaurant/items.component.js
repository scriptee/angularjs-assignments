(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/restaurant/templates/itemslist.template.html',
  bindings: {
    items: '<',
    category: '@category'
  }
});

})();
