app.controller('DisplayController', ['$scope', 'displays', '$routeParams', function($scope, displays, $routeParams) {
	displays.success(function(data) {
		$scope.displays = data[$routeParams.id];
	})
}])