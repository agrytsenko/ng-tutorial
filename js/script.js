/// <reference path="angular.js" />

angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var countries = [
            {
                name: 'UK',
                cities: [
                    {name: 'London'},
                    {name: 'Birmingham'},
                    {name: 'Manchester'}
                ]
            },
            {
                name: 'USA',
                cities: [
                    {name: 'New-York'},
                    {name: 'Los Angeles'},
                    {name: 'Chicago'}
                ]
            },
            {
                name: 'Canada',
                cities: [
                    {name: 'Vancouver'},
                    {name: 'Toronto'},
                    {name: 'Ontario'}
                ]
            }
        ];
        $scope.countries = countries;
});
