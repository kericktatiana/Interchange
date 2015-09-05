app.controller('MainController', ['$scope', 'displays', function($scope, displays) {
	displays.success(function(data) {
		$scope.displays = data;
	});
}]);