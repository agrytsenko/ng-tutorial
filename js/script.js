/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function($scope) {

        // var employees = [
        //     {name: 'Ben', gender: 'Male', salary: 500.125, city: 'London'},
        //     {name: 'Alex', gender: 'Male', salary: 3123.23423, city: 'Vancouver'},
        //     {name: 'Peter', gender: 'Male', salary: 34545.2323, city: 'New-York'},
        //     {name: 'Alan', gender: 'Male', salary: 4545.5656, city: 'London'},
        //     {name: 'Grethen', gender: 'Female', salary: 3234.567, city: 'Vancouver'},
        //     {name: 'Inga', gender: 'Female', salary: 355.1, city: 'Tokyo'},
        //     {name: 'Mary', gender: 'Female', salary: 500, city: 'Vancouver'},
        //     {name: 'Brenda', gender: 'Female', salary: 123456.43, city: 'New-York'},
        //     {name: 'Vadim', gender: 'Male', salary: 4343.6565, city: 'London'}
        // ];

        var countries = [
            {
                name: 'Canada',
                cities: [
                    {name: 'Vancouver'},
                    {name: 'Toronto'}
                ]
            },
            {
                name: 'USA',
                cities: [
                    {name: 'Chicago'},
                    {name: 'New York'}
                ]
            }
        ];

        $scope.countries = countries;

});
