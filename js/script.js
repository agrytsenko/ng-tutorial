/// <reference path="angular.js" />

var app = angular
    .module("demoApp", [])
    .controller("myController", function($scope, $http, $location, $anchorScroll) {
        $http.get('country/')
             .then(function (response) {
                 $scope.countries = response.data;
             });

        $scope.scrollTo = function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        };
});