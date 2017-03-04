/// <reference path="angular.js" />

angular
    .module("myModule", [])
    .controller("myController", function($scope) {

        var employees = [
            {name: 'Ben', gender: 'Male', salary: 500.125, city: 'London'},
            {name: 'Alex', gender: 'Male', salary: 123123.23423, city: 'Vancouver'},
            {name: 'Peter', gender: 'Male', salary: 23434545.2323, city: 'New-York'},
            {name: 'Alan', gender: 'Male', salary: 4545.5656, city: 'London'},
            {name: 'Grethen', gender: 'Female', salary: 123234.567, city: 'Vancouver'},
            {name: 'Inga', gender: 'Female', salary: 12321355.1, city: 'Tokyo'},
            {name: 'Mary', gender: 'Female', salary: 500, city: 'Vancouver'},
            {name: 'Brenda', gender: 'Female', salary: 123456.43, city: 'New-York'},
            {name: 'Vadim', gender: 'Male', salary: 4343.6565, city: 'London'}
        ];

        $scope.employees = employees;
        $scope.sortColumn = null;
        $scope.reverseSort = false;

        $scope.sortData = function(column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        };

        $scope.getSortClass = function(column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        };

        $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            var l = $scope.searchText.toLowerCase();
            if (item.name.toLowerCase().indexOf(l) != -1 || item.city.toLowerCase().indexOf(l) != -1) {
                return true;
            }
            return false;
        }
});
