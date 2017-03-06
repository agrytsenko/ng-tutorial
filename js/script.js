/// <reference path="angular.js" />

var app = angular
    .module("demoApp", [])
    .controller("myController", function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 50;
            $anchorScroll();
        };
});