angular.module('spotyApp')
.controller('artistGetController', function ($scope, $rootScope, spotifyService) {
	$scope.$on('artistReady', function (e, data) {
		spotifyService.getArtistData(data.artistName)
		.then(function (oResponse) {
			console.log(oResponse.data.items[0].name)
			$scope.artitsResult = oResponse.data.items
		})
	})
	$scope.trackList = function(trackList){
		var trackName = trackList
		console.log(trackName)
		$rootScope.$broadcast('trackReady', { trackName: trackName })
	}
})
