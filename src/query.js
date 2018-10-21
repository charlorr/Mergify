async function getCommonTracks(){

  let playlists = fetch('https://api.spotify.com/v1/me/playlists')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

  let ids = parsePlaylistsHref(playlists);
  //https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
  //GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks
  let totalTracks = [];
  for(i in ids){
    let playlistTracks = fetch('https://api.spotify.com/v1/me/playlists')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });

    totalTracks.push(playlistTracks.items);
  }

  let ret = await parseTracks(totalTracks);
  return ret;
}
