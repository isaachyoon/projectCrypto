
var projectCrypto = angular.module("projectCrypto", ['ngRoute']);

projectCrypto.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: "pages/main.html",
        controller: "mainCtrl"
    })

    .when("/second", {
        templateUrl: "pages/second.html",
        controller: "secondCtrl"
    })
}]);

projectCrypto.controller("mainCtrl", ['$scope', '$http', function($scope, $http) {
    $scope.name = 'Main';
    console.log('tix', $scope.ticker)
    /*
    $http({
        method: 'GET',
        url: "http://mockbin.org/bin/ad6cb495-a89c-4b12-b02d-ac2c0f5ba66e"
    }).then(function successCallback(data) {
        console.log('data', data.JSON());
    }, function errorCallback(response) {
        console.log('error', response)
    })
    */
}]);

projectCrypto.controller('secondCtrl', ['$scope', function($scope){
    $scope.name = "Second";
    console.log($scope.name)
}])

