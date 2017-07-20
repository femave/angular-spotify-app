angular.module('spotyApp')
.controller('listController', function ($scope, spotifyService) {
	$scope.$on('usernameReady', function (e, data) {
		spotifyService.getUserData(data.username)
		.then(function (oResponse) {
			console.log(oResponse.data.artists.items[0].name)
			$scope.results = true
			$scope.artitsResult = oResponse.data.artists.items
  // $scope.artistList = oResponse.data.artists.items[0].name
  // $scope.artistImg = oResponse.data.artists.items[0].images[1].url
  // return ($scope.results = !$scope.results)

})
	})
}) 
