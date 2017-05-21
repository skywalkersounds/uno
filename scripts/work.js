var app = angular.module("app", []);

app.controller("SomeController", function($scope){
    $scope.titler = "Titre";
    $scope.text = "Contenu";
});

app.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div class="titler" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});
app.controller("ContentController", function($scope){
    $scope.line = "TITRE";
    $scope.content = "CONTENU";
});


app.directive("customtag", function()
{
    return{
        restrict:'EA',
        replace:true,
        transclude:true,
         scope: {line: '=customtagLine'},
        template: '<div>' +
        '<div class="line" ng-click="toggle()">{{line}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});