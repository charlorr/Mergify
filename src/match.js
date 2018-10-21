
/*
  Returns list of hrefs from a list of playlists
*/
async function parsePlaylistsTracks(json) {
  let parsedJson = JSON.parse(json);
  let items = parsedJson.items;
  let trackList = [];
  for(let i in items){
    trackList.push(items[i].tracks);
  }

  return trackList;
}

/*
  Sorting function for parseTracks
*/
function SortByName(x,y) {
  let trackX = x.track;
  let trackY = y.track;
  return ((trackX.name == trackY.name) ? 0 : ((trackX.name > trackY.name) ? 1 : -1 ));
}

/*
  Returns list of tracks without repeats and sorted
*/
async function parseTracks(tracks) {
  return new Promise(resolve => {
    console.log(tracks);
    let clone = tracks.slice(0);
    clone = clone.sort(SortByName);

    //Eliminates repeats
    for (i=1; i < clone.length; ++i) {
      let curr = clone[i].track;
      let prev = clone[i-1].track;
      if(curr.name == prev.name){
        let test = clone.splice(i, 1);
        i--;
      }
    }
    resolve(clone);
  });

}

/*
  Returns list of tracks that exist in both track lists
*/
async function matchTracks(t1, t2) {
  return new Promise(resolve => {
    let match = [];
    t1.forEach(track1 => {
      t2.forEach(track2 => {
        if(track1.name == track2.name)
          match.push(track1);
      });
    });

    resolve(match);
  });
}
