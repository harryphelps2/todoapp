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