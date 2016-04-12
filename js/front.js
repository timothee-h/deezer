$( document ).ready(function() {
  // volume selector
  $(function($) {
    $(".knob").knob({});
  });
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
});
