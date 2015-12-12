
// window.onload = function(){
    SC.initialize({
    clientid: '3a76cf73e430887c16e9897fcf630bcc'
    });
//     SC.get(function() {
//     SC.get('/tracks/173067990', function(track) {
//     SC.oEmbed(track.permalink_url, document.getElementById('player'));
//     });
//     });

// };

// var url = 'https://soundcloud.com/calyxteebee/sawn-off';

// var searchUrl = 'http://api.soundcloud.com/resolve?url='+url+'&client_id=YOUR_CLIENT_ID';

// var id = 0;

// $.ajax({
//   url: searchUrl,
//   type: 'GET',
//   data: {client_id:'3a76cf73e430887c16e9897fcf630bcc'},
//   dataType:'jsonp',
//   success : function(data){
//     var output = data.data;
//     console.log(data);
//     id = data.id;
//     debugger;
//   }
// });

window.onload = function(){

  SC.initialize({
    client_id: '3a76cf73e430887c16e9897fcf630bcc'
  });

  var track_url = 'https://soundcloud.com/calyxteebee/sawn-off';
    SC.oEmbed(track_url, { auto_play: true }, document.getElementById('player'));

  };
