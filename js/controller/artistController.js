angular.module('spotyApp')
.controller('artistController', function ($scope, $rootScope) {
  $scope.showResult = function () {
    var username = $scope.nameArtist
    $rootScope.$broadcast('usernameReady', { username: username })
  }
})
