angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome To Todo!"
	})
	.controller('RegisterController',function($scope, UserAPIService, store) {

		$scope.registrationUser = {};
		var URL = "https://morning-castle-91468.herokuapp.com/";

		$scope.login = function() {
			UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results){
				$scope.token = results.data.token;
				store.set('username', $scope.registrationUser.username);
				store.set('authToken', $scope.token);
			}).catch(function(err){
				console.log(err.data);
			});
		}

		$scope.submitForm = function() {
		if($scope.registrationForm.$valid) {
			$scope.registrationUser.username = $scope.user.username;
			$scope.registrationUser.password = $scope.user.password;
			//called this one call API so we can use it for other forms if we want
			UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results){
				$scope.data = results.data;
				alert("You have sucessfully registered to Angular Todo");
				$scope.login();
			}).catch(function(err){
				alert("Oops! Something went wrong!")
				console.log(err);
				});
			}
		}
	})
	.controller("TodoController", function($scope, $location, TodoAPIService, store) {
		var URL = "https://morning-castle-91468.herokuapp.com/";

		//the get method gets the information we stored in local storage earlier
		$scope.authToken = store.get('authToken');
		$scope.username = store.get('username');

		$scope.todos = [];

		TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken).then(function(results){
			$scope.todos = results.data || [];
			console.log($scope.todos);
		}).catch(function(err){
			console.log(err);
		});

		$scope.submitForm = function() {
			if ($scope.todoForm.$valid) {
				//add the username property to the todo object
				$scope.todo.username = $scope.username;
				//push the todo object into the todoS object
				$scope.todos.push($scope.todo);


				//pass in the URL, the todo object ($scope.todo) and the authentication token
				//to the create todo method which posts them to the API
				TodoAPIService.createTodo(URL + "todo/", $scope.todo, $scope.authToken).then(function(results) {
					console.log(results)
				}).catch(function(err){
					console.log(err)
				});
			}
		}

		$scope.editTodo = function(id) {
			$location.path("/todo/edit/" + id);
		};

		$scope.deleteTodo = function(id) {
			TodoAPIService.deleteTodo(URL + "todo/" + id, $scope.username, $scope.authToken).then(function(results){
				console.log(results);
			}).catch(function(err){
				console.log(err);
			});
		};
	})
	.controller('EditTodoController', function($scope, $location, $routeParams, TodoAPIService, store){
		var id = $routeParams.id;
		var URL = "https://morning-castle-91468.herokuapp.com/";

		TodoAPIService.getTodos(URL + "todo/" + id, $scope.username, store.get('authToken')).then(function(results){
			$scope.todo = results.data;
		}).catch(function(err){
			console.log(err);
		});

		$scope.submitForm = function() {
			if ($scope.todoForm.$valid) {
				$scope.todo.username = $scope.username;

				TodoAPIService.editTodo(URL + "todo/" + id, $scope.todo, store.get('authToken')).then(function(results){
					$location.path("/todo");
				}).catch(function(err){
					console.log(err);
				})
			}
		}
	});


















