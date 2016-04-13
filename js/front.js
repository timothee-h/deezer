$( document ).ready(function() {
  //music player
  $(function($) {
    //play pause
    var play = false;
    $("#play").click(function() {
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
      $("#music1").prop("currentTime",$("#music1").prop("currentTime")+10);
    });
    //previous
    $("#previous").click(function() {
      $("#music1").prop("currentTime",$("#music1").prop("currentTime")-10);
    });
    // replay
    $("#replay").click(function() {
      $("#music1").prop("currentTime",0);
    });
    // progresion bar & counter
    var player = document.getElementById('music1');
    player.addEventListener("timeupdate", function() {
      var currentTime = player.currentTime;
      var duration = player.duration;
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
  });
  //side bar
  var visible = true;
  $(".leftnav--btn").click(function() {
    if (visible === true) {
      $(".leftnav").animate({left: '-210px'});
      visible = false;
    }
    else {
      $(".leftnav").animate({left: '0px'});
      visible = true;
    }
  });
  //night shift
  var light = false;
  $(".leftnav--night").click(function() {
    if (light === false) {
      $(".leftnav").css({backgroundColor: '#ececec'});
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
      light = true;
    }
    else {
      $(".leftnav").css({backgroundColor: '#23232c'});
      $(".footer").css({backgroundColor: '#23232c'});
      $(".leftnav--btn").css({backgroundColor: '#1d1d20'});
      $("#current").css({backgroundColor: '#23232c'});
      $("a").css({color: '#ececec'});
      $("span").css({color: '#ececec'});
      $(".footer--player--progress").css({backgroundColor: 'rgb(24, 104, 205)'});
      $(".footer--player").css({backgroundColor: 'lightgray'});
      $(".leftnav--profil--abonne").css({backgroundColor: 'rgb(24, 104, 205)'});
      $(".leftnav--profil--tag--active").addClass('leftnav--profil--tag');
      $(".leftnav--profil--tag").removeClass('leftnav--profil--tag--active');
      light = false;
    }
  });
});
