/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .filter()
    .controller("myController", function($scope) {

        var employees = [
            {name: 'Ben', gender: 1, salary: 500.125, city: 'London'},
            {name: 'Alex', gender: 1, salary: 3123.23423, city: 'Vancouver'},
            {name: 'Peter', gender: 1, salary: 34545.2323, city: 'New-York'},
            {name: 'Alan', gender: 1, salary: 4545.5656, city: 'London'},
            {name: 'Grethen', gender: 2, salary: 3234.567, city: 'Vancouver'},
            {name: 'Inga', gender: 2, salary: 355.1, city: 'Tokyo'},
            {name: 'Mary', gender: 2, salary: 500, city: 'Vancouver'},
            {name: 'Brenda', gender: 2, salary: 123456.43, city: 'New-York'},
            {name: 'Vadim', gender: 3, salary: 4343.6565, city: 'London'}
        ];

        $scope.employees = employees;

});
