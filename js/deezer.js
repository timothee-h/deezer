DZ.init({
	appId  : 'YOUR_APP_ID',
	channelUrl : 'http://YOUR_DOMAIN/channel.html'
});

DZ.ready(function(sdk_options){
	console.log('DZ SDK is ready', sdk_options);
});

$('.search--input').keyup(function(e){
  e.preventDefault;
  $('.search--content div').html('');
  var search=$(this).val();
  var rechercheTitre='';
  var rechercheArtiste='';

  //requete titre
  rechercheTitre='search/?q=track:'+search;
  rechercheArtiste='search/?q=artist:'+search;
  rechercheAlbum='search/?q=album:'+search;
  DZ.api(rechercheTitre, function(response){
    $('.search--content--titre').html('');
    for (var i=0;i<2;i++){
      $('.search--content--titre').append('<div><img alt="music" src="'+response.data[i].artist.picture_small+'">'+response.data[i].artist.name+'</br>'+response.data[i].title_short+'</div>');
      $('.search--content--titre div').css('margin-top','10px');
      $('.search--content--titre div img').css({
				marginRight: '5px',
				borderRadius: '50%',
			});
    }
  });
  //requete artiste
  DZ.api(rechercheArtiste, function(response){
    $('.search--content--artiste').html('');
    for (var i=0;i<2;i++){
      $('.search--content--artiste').append('<div><img alt="artiste" src="'+response.data[i].artist.picture_small+'">'+response.data[i].artist.name+'</br></div>');
      $('.search--content--artiste div').css('margin-top','10px');
      $('.search--content--artiste div img').css('margin-right','5px');
    }
  });
  //requete album
  DZ.api(rechercheAlbum, function(response){
    $('.search--content--album').html('');
    for (var i=0;i<2;i++){
      $('.search--content--album').append('<div><img alt="album" src="'+response.data[i].album.cover_small+'">'+response.data[i].album.title+'</br></div>');
      $('.search--content--album div').css('margin-top','10px');
      $('.search--content--album div img').css('margin-right','5px');
    }
  });
});
