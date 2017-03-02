/// <reference path="angular.js" />

angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var employee = {
            name: 'David',
            age: 100,
            gender: 'Male'
        };
        $scope.employee = employee;
});
