$( document ).ready(function() {
  var largeurF = $(window).width();
  $(window).resize(function(){
    largeurF = $(window).width();
  });
  //music player
  $(function($) {
    //play pause
    var i = 0;
    var play = false;
    $("#music1").attr("src", music[i]['srcMusic']);
    $(".footer--current--img").attr("src", music[i]['imgMusic']);
    $(".background").css({backgroundImage: 'url('+  music[i]['imgMusic']+  ')'});
    $(".footer--current--title").html(music[i]['musicName']);
    $(".footer--current--artist").html(music[i]['artiste']);
    $("#play, .accueil--flow--playButton").click(function() {
      if (play === true) {
        $('#music1').trigger('pause');
        $('#play').addClass('footer--controller--icons3');
        $('#play').removeClass('footer--controller--icons6');
        play = false;
      }
      else {
        $('#music1').trigger('play');
        $('#play').addClass('footer--controller--icons6');
        $('#play').removeClass('footer--controller--icons3');
        play = true;
      }
    });
    // next
    $("#next").click(function() {
      i = (i + 1)%8;
      $("#music1").attr("src", music[i]['srcMusic']);
      $(".footer--current--img").attr("src", music[i]['imgMusic']);
      $(".background").css({backgroundImage: 'url('+  music[i]['imgMusic']+  ')'});
      $(".footer--current--title").html(music[i]['musicName']);
      $(".footer--current--artist").html(music[i]['artiste']);
      $('#music1').trigger('play');
    });
    //previous
    $("#previous").click(function() {
      if (i === 0) {
        i = 8;
      }
      i = (i - 1)%8;
      $("#music1").attr("src", music[i]['srcMusic']);
      $(".footer--current--img").attr("src", music[i]['imgMusic']);
      $(".background").css({backgroundImage: 'url('+  music[i]['imgMusic']+  ')'});
      $(".footer--current--title").html(music[i]['musicName']);
      $(".footer--current--artist").html(music[i]['artiste']);
      $('#music1').trigger('play');
    });
    // replay
    $("#alea").click(function() {
      i = Math.floor(Math.random()*8);
      $("#music1").attr("src", music[i]['srcMusic']);
      $(".footer--current--img").attr("src", music[i]['imgMusic']);
      $(".background").css({backgroundImage: 'url('+  music[i]['imgMusic']+  ')'});
      $(".footer--current--title").html(music[i]['musicName']);
      $(".footer--current--artist").html(music[i]['artiste']);
      $('#music1').trigger('play');
    });
    // loop
    $('#music1').bind("ended", function(){
      i = (i + 1)%8;
      $("#music1").attr("src", music[i]['srcMusic']);
      $(".footer--current--img").attr("src", music[i]['imgMusic']);
      $(".background").css({backgroundImage: 'url('+  music[i]['imgMusic']+  ')'});
      $(".footer--current--title").html(music[i]['musicName']);
      $(".footer--current--artist").html(music[i]['artiste']);
      $('#music1').trigger('play');
    });
    // progresion bar & counter
    var player = document.getElementById('music1');
    player.addEventListener("timeupdate", function() {
      var currentTime = player.currentTime;
      duration = player.duration;
      var mins  = Math.floor((currentTime % 3600) / 60);
      var secs  = Math.floor(currentTime % 60);
      var minstt  = Math.floor((duration % 3600) / 60);
      var secstt  = Math.floor(duration % 60);
      if (secs < 10) { secs = "0" + secs; }
      if (secstt < 10) { secstt = "0" + secstt; }
      $('.footer--player--progress').animate({'width':(currentTime + 0.25)/duration*100+'%'},250,'linear');
      $('.footer--current--time').text(mins + ":" + secs);
      $('.footer--current--duration').text(minstt + ":" + secstt);
    });
    $(".footer--player").click(function(e){
      posX = e.pageX;
      player.currentTime = (posX/largeurF) * duration;
    });
  });
  //side bar
  $(".leftnav--btn").click(function() {
    if ($(".leftnav").hasClass('visible')) {
      $(".leftnav").animate({left: '0px'});
      $(".leftnav").removeClass('visible');
    }
    else {
      $(".leftnav").animate({left: '-210px'});
      $(".leftnav").addClass('visible');
    }
  });
  //night shift
  var light = false;
  $(".leftnav--night").click(function() {
    if (light === false) {
      $(".leftnav").css({backgroundColor: '#ececec'});
      $(".leftnav--secondary a").css({borderColor: '#d1cdcd'});
      $(".footer").css({backgroundColor: '#ececec'});
      $(".leftnav--btn").css({backgroundColor: '#d1cdcd'});
      $("#current").css({backgroundColor: '#d1cdcd'});
      $("a").css({color: '#23232c'});
      $("span").css({color: '#23232c'});
      $(".footer--player--progress").css({backgroundColor: 'orange'});
      $(".footer--player").css({backgroundColor: '#23232c'});
      $(".leftnav--profil--abonne").css({backgroundColor: 'orange'});
      $(".leftnav--night").addClass('leftnav--night--active');
      $(".leftnav--night--active").removeClass('leftnav--night');
      $(".leftnav--profil--tag").addClass('leftnav--profil--tag--active');
      $(".leftnav--profil--tag--active").removeClass('leftnav--profil--tag');
      $(".footer--search").addClass('footer--search--night');
      $(".footer--search--night").removeClass('footer--search');
      light = true;
    }
    else {
      $(".leftnav").css({backgroundColor: '#23232c'});
      $(".footer").css({backgroundColor: '#23232c'});
      $(".leftnav--btn").css({backgroundColor: '#1d1d20'});
      $(".leftnav--secondary a").css({borderColor: '#1f1f28'});
      $("#current").css({backgroundColor: '#23232c'});
      $("a").css({color: '#ececec'});
      $("span").css({color: '#ececec'});
      $(".footer--player--progress").css({backgroundColor: 'rgb(24, 104, 205)'});
      $(".footer--player").css({backgroundColor: 'lightgray'});
      $(".leftnav--profil--abonne").css({backgroundColor: 'rgb(24, 104, 205)'});
      $(".footer--search--night").addClass('footer--search');
      $(".footer--search").removeClass('footer--search--night');
      light = false;
    }
  });
  //volume controlleur
  $("#music1").prop('volume', 0.8);
  $( "#draggable" ).draggable({
    axis: "x",
    containment: "parent",
    drag: function( event, ui ) {
      var cursorPos = $(this).position().left;
      $(".footer--controller--icons5--volume--progress").css({width: cursorPos+5 + 'px'});
      $("#music1").prop('volume', cursorPos/100);
    }
  });
  var volumevisible = false;
  $("#volume").click(function() {
    if (volumevisible === true) {
      $(".footer--controller--icons5--volume").fadeOut(100);
      volumevisible = false;
    }
    else {
      $(".footer--controller--icons5--volume").fadeIn(100);
      volumevisible = true;
    }
  });
  //reseatch bar
  $(".footer--search").click(function() {
    if ($(".search").hasClass('visible')) {
      $(".search").animate({right: '-270px'});
      $(".search").removeClass('visible');
    }
    else {
      $(".search").animate({right: '0px'});
      $(".search").addClass('visible');
    }
  });
  //loader
  $(".site--container").hide();
  $(".loader").hide();
  $("#log--button").click(function() {
      $(".loader").show();
      $(".log").hide();
      setTimeout(function(){
        $(".site--container").fadeIn();
        $(".loader").delay(1000).fadeOut(600);
      }, 3000);
  });
  //icon app
  $(".leftnav--secondary--1, .leftnav--fav--header--icon").click(function() {
    if ($(".leftnav--fav").hasClass('visible')) {
      $(".leftnav--fav").animate({marginBottom: '400%'});
      $(".leftnav--fav").removeClass('visible');
    }
    else {
      $(".leftnav--fav").animate({marginBottom: '0px'});
      $(".leftnav--fav").addClass('visible');
    }
  });
  //icon app
  $(".leftnav--secondary--2, .leftnav--playlist--header--icon").click(function() {
    if ($(".leftnav--playlist").hasClass('visible')) {
      $(".leftnav--playlist").animate({marginBottom: '400%'});
      $(".leftnav--playlist").removeClass('visible');
    }
    else {
      $(".leftnav--playlist").animate({marginBottom: '0px'});
      $(".leftnav--playlist").addClass('visible');
    }
  });
  //icon app
  $(".leftnav--secondary--3, .leftnav--album--header--icon").click(function() {
    if ($(".leftnav--album").hasClass('visible')) {
      $(".leftnav--album").animate({marginBottom: '400%'});
      $(".leftnav--album").removeClass('visible');
    }
    else {
      $(".leftnav--album").animate({marginBottom: '0px'});
      $(".leftnav--album").addClass('visible');
    }
  });
  //icon app
  $(".leftnav--secondary--4, .leftnav--podcast--header--icon").click(function() {
    if ($(".leftnav--podcast").hasClass('visible')) {
      $(".leftnav--podcast").animate({marginBottom: '400%'});
      $(".leftnav--podcast").removeClass('visible');
    }
    else {
      $(".leftnav--podcast").animate({marginBottom: '0px'});
      $(".leftnav--podcast").addClass('visible');
    }
  });
  //icon app
  $(".leftnav--secondary--5, .leftnav--app--header--icon").click(function() {
    if ($(".leftnav--app").hasClass('visible')) {
      $(".leftnav--app").animate({marginBottom: '400%'});
      $(".leftnav--app").removeClass('visible');
    }
    else {
      $(".leftnav--app").animate({marginBottom: '0px'});
      $(".leftnav--app").addClass('visible');
    }
  });
  //icon app
  $(".leftnav--secondary--6, .leftnav--config--header--icon").click(function() {
    if ($(".leftnav--config").hasClass('visible')) {
      $(".leftnav--config").animate({marginBottom: '400%'});
      $(".leftnav--config").removeClass('visible');
    }
    else {
      $(".leftnav--config").animate({marginBottom: '0px'});
      $(".leftnav--config").addClass('visible');
    }
  });
  //Sub menu
  $("#sub-btn").click(function() {
    if ($(".leftnav--secondary ul").hasClass('visible')) {
      $(".leftnav--secondary ul").animate({marginTop: '0px'});
      $(".leftnav--secondary ul").removeClass('visible');
    }
    else {
      $(".leftnav--secondary ul").animate({marginTop: '140px'});
      $(".leftnav--secondary ul").addClass('visible');
    }
  });
  //current menu
  $(".leftnav--primary--yo:eq(0)").addClass('current');
  $(".leftnav--primary--yo").click(function() {
      $(".current").removeClass('current');
      $(this).addClass('current');
  });
});
