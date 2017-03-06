/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function($scope, stringService) {

        $scope.transform = function (input) {
            $scope.output = stringService.splitByCapitalLetter(input);
        };
});