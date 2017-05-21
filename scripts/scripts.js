angular.module("uno",[])
    .controller("index",["$scope", function($scope)
    {
        $scope.message = "Data from js";
    }]);