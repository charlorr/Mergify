async function getCommonTracks(){

  let playlists = fetch('https://api.spotify.com/v1/me/playlists')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

  playlists = JSON.parse(playlists);
  let ids = await parsePlaylistsTracks (playlists);
  //https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
  //GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks
  let totalTracks = [];
  for(var i in ids){
    let playlistTracks = fetch('https://api.spotify.com/v1/me/playlists')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });

    for(var j in playListTrack.items)
      totalTracks.push(playListTrack.items[j]);
  }

  let ret = await parseTracks(totalTracks);
  return ret;
}
