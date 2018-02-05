//services get data that can be passed to controllers
//we use the api to send over the data the server so 
//we define a module called Userservice that we inject as a 
//dependency in the app.js
angular.module('UserService', [])
//we then use the factory method
	.factory('UserAPIService', function($http){
		//pas in $http
		UserAPIService = {
		//Define UserAPIService object
			callAPI: function(url,data) {
		//add registerUser method that we pass in the url 
		//that we call for our api (the url we send off for that returns the results from our data) 
		//and data that we are sending off which is our inputted name and password (the user object)
				return $http.post(url, data);
		//then returns the api call
			}
		};
		//then returns the object completing the factory
		//now go to controllers module
		return UserAPIService;
	});

angular.module('TodoService', [])
	.factory('TodoAPIService', function($http) {
		//new object
		TodoAPIService = {
			//method that takes  the url, data ans token
			getTodos: function(url, data, token) {
				//create header variable
				var header = "Authorization: JWT " +  token;
				//return the todos, not sure where  the url comes from though
				//for get method we need query params
				//set annonymous object with {params:} Then add key value pairs as {username:data}
				return $http.get(url, {params:{"username": data}}, header);
			},
			createTodo: function(url, data, token) {
				var header = "Authorization: JWT " + token;
				return $http.post(url, data, header);
			},
			editTodo: function(url, data, token) {
				var header = "Authorization: JWT " + token;
				return $http.put(url, data, header);
			},
			deleteTodo: function(url, token) {
				var header = "Authorization: JWT " + token;
				return $http.delete(url, token);
			}
		};
		return TodoAPIService;
	});

