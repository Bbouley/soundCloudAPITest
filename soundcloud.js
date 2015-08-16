

// function playsomesound(url){
//  var api = 'http://api.soundcloud.com/resolve?url='+url+'&client_id=3a76cf73e430887c16e9897fcf630bcc';
//  console.log(api);
//   SC.get('/tracks', {
//     id: 173067990,
//   },
//    function(tracks){
//     SC.oEmbed(tracks[0].uri, {auto_play : true}, document.getElementById('target'));
//     console.log(tracks[0].permalink_url);
//   });
// }

window.onload = function(){
    SC.initialize({
    clientid: '3a76cf73e430887c16e9897fcf630bcc'
    });
    SC.get(function() {
    SC.get('/tracks/173067990', function(track) {
    SC.oEmbed(track.permalink_url, document.getElementById('player'));
    });
    });

};
