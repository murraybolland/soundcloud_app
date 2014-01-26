//var trackList = [
//    '/tracks/23445579',
//    '/tracks/55141652'
//];
//
//function init(){
//    SC
//}

SC.initialize({
  client_id: '3a426c57135b968be2dacd27418f725'
});

SC.get('/playlists/1234323', function(playlist) {
  for (var i = 0; i < playlist.tracks.length; i++) {
    console.log(playlist.tracks[i].length);
  }
});