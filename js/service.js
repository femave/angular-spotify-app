angular.module('spotyApp')
.factory('spotifyService', function ($http) {
  function getUserData (username) {
    var token = 'BQAkpIX2xVVqNlc2S2Yc0X6EtJaDD62PvYH5muGJ3FmGlMEOVHr-XqrYCkdy3bQkJcJtoNp_Olo3AftAUrbWrN_i7IK1oyK-RUnnD4xoms5f9WDj0C7NFvO8eCdsA9-EXK3xyDlfbE8'
    var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }

  return {
    getUserData: getUserData
  }
})
