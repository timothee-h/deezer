DZ.init({
	appId  : 'YOUR_APP_ID',
	channelUrl : 'http://YOUR_DOMAIN/channel.html'
});

DZ.ready(function(sdk_options){
	console.log('DZ SDK is ready', sdk_options);
});

DZ.api('search?q=a', function(response){
  for(var j=0;j<10;j++){
	//console.log("Name of user id 5", response.data[j].title);
  //console.log("Name of user id 5", response.data[j].album.cover);
  //console.log("Name of user id 5", response.data[j].artist.name);
}});
