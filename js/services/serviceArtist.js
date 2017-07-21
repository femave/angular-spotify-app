angular.module('spotyApp')



.factory('artistSpotifyService', 'spotifyService', 'trackSpotifyService', function ($http) {
  var token = 'BQAvCM-KdL4MGvIGi73clk1TQqvA36c8GCI6UzOCBSeE14ify1jVYxSHSt-3XpGCpgLRAs4s1Y9i9OKKT4yB3kxswh4iArr5yjkSLDOlzPIuIZsMJMUDz_kYcxDUZrfxpQ9Cw1Q2IEQ'
   function getUserData (username) {
    var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }
  return {getUserData: getUserData}
  
  function getArtistData (artistName) {
    var url = 'https://api.spotify.com/v1/artists/'+artistName+'/albums' 
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }
  return {getArtistData: getArtistData}
  
  function getTrackData (trackName) {
    var url = 'https://api.spotify.com/v1/albums/'+trackName+'/tracks'
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }
  return {getTrackData: getTrackData}
})

// .factory('spotifyService', function ($http, $rootScope) {
//   function getUserData (username) {
//     var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
//     return $http.get(url, {
//       headers: {'Authorization': 'Bearer ' + token}
//     })
//   }
//   return {
//     getUserData: getUserData
//   }
// })

// .factory('trackSpotifyService', function ($http, $rootScope) {
//   function getTrackData (trackName) {
//     var url = 'https://api.spotify.com/v1/albums/'+trackName+'/tracks'
//     return $http.get(url, {
//       headers: {'Authorization': 'Bearer ' + token}
//     })
//   }
//   return {
//     getTrackData: getTrackData
//   }
// })