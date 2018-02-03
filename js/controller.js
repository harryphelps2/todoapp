angular.module('RouteControllers', [])
	//name of controller add function pass in scope
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome To Todo!";
	});