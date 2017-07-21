angular.module('spotyApp')
.factory('spotifyService', function ($http) {
  function getUserData (username) {
    var token = 'BQAvCM-KdL4MGvIGi73clk1TQqvA36c8GCI6UzOCBSeE14ify1jVYxSHSt-3XpGCpgLRAs4s1Y9i9OKKT4yB3kxswh4iArr5yjkSLDOlzPIuIZsMJMUDz_kYcxDUZrfxpQ9Cw1Q2IEQ'
    var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }
  return {
    getUserData: getUserData
  }
})

