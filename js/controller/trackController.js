angular.module('spotyApp')
.controller('trackControler', function ($scope, $rootScope, spotifyService) {
	$scope.$on('trackReady', function (e, data) {
		spotifyService.getTrackData(data.trackName)
		.then(function (oResponse) {
			console.log(oResponse.data.items[0].preview_url)
			$scope.trackResult = oResponse.data.items
		})
	})

	// $scope.trackPlay = function(trackPlay){
	// 	var trackId = trackPlay
	// 	console.log(trackId.preview_url)
	// 	$rootScope.$broadcast('trackReadyPlay', { trackId: trackId })
	// }

	// $scope.$on('trackReadyPlay', function (e, data) {
	// 	spotifyService.trackPlay(data.trackId)
	// 	.then(function (oResponse) {
	// 		console.log(oResponse.data.preview_url)
	// 		$scope.trackPlayGo = oResponse.data.preview_url
	// 	})
	// })
})
