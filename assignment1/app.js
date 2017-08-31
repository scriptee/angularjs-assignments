(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter', '$injector'];

function LunchCheckController ($scope, $filter, $injector) {

  $scope.dishes = "";
  $scope.message = "";

  $scope.updateMessage = function () {
    //var upCase = $filter('uppercase');
    //$scope.message = upCase($scope.message);
    if($scope.dishes) {
      var count = CheckLunch($scope.dishes);
      if(count > 3) $scope.message = "Too much!";
      else $scope.message = "Enjoy!";
    } else $scope.message = "Please enter data first"
  };

  console.log($injector.annotate(LunchCheckController));
}

function CheckLunch(dishes) {
  var count = dishes.split(",").length
  console.log("input: "+dishes+" length: "+count);
  return count;
}

//console.log(LunchCheckController.toString());

})();
