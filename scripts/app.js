var app = angular.module('InterApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/index', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		})
		.when('/index/:id', {
			controller: 'DisplayController',
			templateUrl: 'views/display.html'
		})
		.otherwise({
			redirectTo: '/index'
		});
})