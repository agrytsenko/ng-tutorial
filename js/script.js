/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http) {

        $http.get('/employee/')
             .then(function (res) {
                 $scope.employees = res.data;
             });

        $scope.employeeView = 'employeeTable.html';

});