var app = angular.module('InterApp', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .when('/:id', {
      controller: 'DisplayController',
      templateUrl: 'views/display.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});