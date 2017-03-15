/// <reference path="angular.js" />

var app = angular
    .module('demoApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/home.html',
                controller: 'homeController'
            })
            .when('/courses', {
                templateUrl: '/templates/courses.html',
                controller: 'coursesController'
            })
            .when('/students', {
                templateUrl: '/templates/students.html',
                controller: 'studentsController'
            })
    })
    .controller('homeController', function ($scope) {
        $scope.message = 'Home Page';
    })
    .controller('coursesController', function ($scope) {
        $scope.courses = ['Python', 'Flask', 'Angular.js'];
    })
    .controller('studentsController', function ($scope, $http) {
        $http.get('/students/')
            .then(function (response) {
                $scope.students = response.data;
            });
    });