app.factory('displays', ['$http', function($http) {
	return $http.get('../../assets/displays.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);