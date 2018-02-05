angular.module('TodoDirective',[]).directive('todoTable', function(){
	return {
		restrict: 'EA', //A stands for attribute
		templateUrl: 'templates/directives/todo-table.html'
	};
});