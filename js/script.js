/// <reference path="angular.js" />

angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var technologies = [
            {name: 'Python', likes: 0, dislikes: 0},
            {name: 'Flask', likes: 0, dislikes: 0},
            {name: 'SQL', likes: 0, dislikes: 0},
            {name: 'AngularJS', likes: 0, dislikes: 0}
        ];

        $scope.technologies = technologies;

        $scope.likeTechnology = function(tec) {
            tec.likes++;
        };

        $scope.dislikeTechnology = function(tec) {
            tec.dislikes++;
        };
});
