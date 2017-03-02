/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope) {
    $scope.message = "AngularJS tutorial";
});