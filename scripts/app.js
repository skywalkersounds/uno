var app = angular.module('uno', []);

app.controller("headerCtrl", function($scope)
{
    $scope.message = "message header";
});

app.controller("contentCtrl", function($scope)
{
    $scope.message = "message content";
});


var shop = angular.module("shop", []);

shop.controller("billCtrl", function($scope){
    $scope.articles = [{"name" : "iPhone 7", "quantity" : 1, "price" : "799.99"},
    {"name" : "MacBook Pro", "quantity" : 1, "price" : "1899.99"},
    {"name" : "iMac", "quantity" : 1, "price" : "1349.99"}
    ];
    $scope.total = function()
    {
        var total = 0;
        for(var i = 0; i < $scope.articles.length; i++)
        {
            total += $scope.articles[i].price * $scope.articles[i].quantity;
        }
        return total;
    };
    function calculateDiscount(newValue,oldValue,scope)
    {
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    };

    $scope.finalTotal = function(){
        return $scope.total() - $scope.discount;
    };
        $scope.$watch($scope.total, calculateDiscount);

});