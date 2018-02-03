angular.module('TodoApp', ['ngRoute', 'RouteControllers']);

//define routes
angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);

//when click on home pickup the home.html and bind to the the HomeController
	$routeProvider.when('/', {
		templateURL: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register' ,{
		templateURL: 'templates/register.html',
		controller: 'RegisterController'
	});
});
