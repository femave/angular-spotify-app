angular.module('spotyApp')
.controller('listController', function ($scope, spotifyService) {
  $scope.$on('usernameReady', function (e, data) {
    spotifyService.getUserData(data.username)
		.then(function (oResponse) {
  console.log(oResponse.data.artists.items[0].name)
  // $scope.artistList = oResponse.data.artist.name
})
  })
})
