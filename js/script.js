/// <reference path="angular.js" />

angular
    .module("myModule", [])
    .controller("myController", function($scope) {

        var employees = [
            {name: 'Ben', dateOfBirth: new Date('October 6, 1984'), gender: 'Male', salary: 500.125},
            {name: 'Alex', dateOfBirth: new Date('November 16, 1980'), gender: 'Male', salary: 123123.23423},
            {name: 'Peter', dateOfBirth: new Date('Jan 24, 1945'), gender: 'Male', salary: 23434545.2323},
            {name: 'Alan', dateOfBirth: new Date('Feb 5, 1987'), gender: 'Male', salary: 4545.5656},
            {name: 'Grethen', dateOfBirth: new Date('March 18, 1978'), gender: 'Female', salary: 123234.567},
            {name: 'Inga', dateOfBirth: new Date('Jun 29, 1934'), gender: 'Female', salary: 12321355.1},
            {name: 'Mary', dateOfBirth: new Date('Sep 23, 1977'), gender: 'Female', salary: 500},
            {name: 'Brenda', dateOfBirth: new Date('Nov 11, 1988'), gender: 'Female', salary: 123456.43},
            {name: 'Vadim', dateOfBirth: new Date('Dec 1, 1998'), gender: 'Male', salary: 4343.6565}
        ];

        $scope.employees = employees;
        $scope.columnOrder = 'name';
});
