/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http) {

        var successCallBack = function (response) {
            $scope.employees = response.data;
        };

        var errorCallBack = function (reason) {
            $scope.error = reason.data;
        };

        $http.get('/employee/').then(successCallBack, errorCallBack);

        $scope.employeeView = 'employeeTable.html';

});