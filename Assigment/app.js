(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.checkItems = function () {
    if ($scope.lunch === "") {
		$scope.message = "Please enter data first" ;
	}
	else {
		var items = $scope.lunch.split(',');
		if (items.length <= 3) {
			$scope.message = "Enjoy!" ;
		} 
		else {
			$scope.message = "Too much!" ;
		}
	}
  };
};
})();
