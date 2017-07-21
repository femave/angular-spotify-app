angular.module('spotyApp')
.controller('listController', function ($scope, $rootScope, spotifyService) {
	$scope.$on('usernameReady', function (e, data) {
		spotifyService.getUserData(data.username)
		.then(function (oResponse) {
			// console.log(oResponse.data.artists.items[0].name)
			$scope.artitsResult = oResponse.data.artists.items
		})
	})
	$scope.selectValue = function(subject){
		var artistName = subject
		console.log(artistName)
		$rootScope.$broadcast('artistReady', { artistName: artistName })
	}
}) 
 