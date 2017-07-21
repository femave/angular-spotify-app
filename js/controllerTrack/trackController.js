angular.module('spotyApp')
.controller('trackControler', function ($scope, $rootScope, trackSpotifyService) {
	$scope.$on('trackReady', function (e, data) {
		trackSpotifyService.getTrackData(data.trackName)
		.then(function (oResponse) {
			console.log(oResponse)
			$scope.trackResult = oResponse.data.items
		})
	})
})