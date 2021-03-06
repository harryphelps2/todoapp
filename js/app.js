angular.module("TodoApp", ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService', 'TodoDirective']);

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
	})
	.when('/todo', {
		templateUrl: 'templates/todo.html',
		controller: 'TodoController'
	})
	.when('/todo/edit/:id',{
		templateUrl: 'templates/edit-todo.html',
		controller: 'EditTodoController'
	});
});
