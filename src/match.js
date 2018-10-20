async function test(){
  //let json1 = [{"name":"test1"}, {"name":"test1"}, {"name":"test1"}, {"name":"test2"}];
  //let json2 = [{"name":"test2"}, {"name":"test3"}, {"name":"test3"}, {"name":"test3"}];
  let json1 = JSON.parse('[{"name":"test1"}, {"name":"test2"}, {"name":"test3"}, {"name":"test4"}, {"name":"test5"}]');
  let json2 = JSON.parse('[{"name":"test2"}, {"name":"test3"}, {"name":"test3"}, {"name":"test3"}, {"name":"test1"}, {"name":"test2"}, {"name":"test2"}, {"name":"test2"}, {"name":"test3"}]');

  let t1 = await parseTracks(json1);
  let t2 = await parseTracks(json2);

  let match = await matchTracks(t1, t2);

  console.log("Match");
  console.log(match);
}

async function parsePlaylists(json) {
  let playlists = [];
  for(let i in json){
    playlists.push(json[i]);
  }

  return playlists;
}

function SortByName(x,y) {
  return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
}

async function parseTracks(tracks) {
  return new Promise(resolve => {
    let clone = tracks.slice(0);
    clone = clone.sort(SortByName);

    //Eliminates repeats
    for (i=1; i < clone.length; ++i) {
      let curr = clone[i];
      let prev = clone[i-1];
      if(curr.name == prev.name){
        let test = clone.splice(i, 1);
        i--;
      }
    }
    resolve(clone);
  });

}

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

test();
