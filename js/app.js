angular.module("TodoApp", ['ngRoute', 'RouteControllers', 'UserService']);

angular.module('TodoApp').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register' ,{
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
});
