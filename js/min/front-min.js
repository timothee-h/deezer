$(document).ready(function(){var a=$(window).width();$(window).resize(function(){a=$(window).width()}),$(function($){var e=0,t=!1;$("#music1").attr("src",music[e].srcMusic),$(".footer--current--img").attr("src",music[e].imgMusic),$(".background").css({backgroundImage:"url("+music[e].imgMusic+")"}),$(".footer--current--title").html(music[e].musicName),$(".footer--current--artist").html(music[e].artiste),$("#play").click(function(){t===!0?($("#music1").trigger("pause"),$("#play").addClass("footer--controller--icons3"),$("#play").removeClass("footer--controller--icons6"),t=!1):($("#music1").trigger("play"),$("#play").addClass("footer--controller--icons6"),$("#play").removeClass("footer--controller--icons3"),t=!0)}),$("#next").click(function(){e=(e+1)%8,$("#music1").attr("src",music[e].srcMusic),$(".footer--current--img").attr("src",music[e].imgMusic),$(".background").css({backgroundImage:"url("+music[e].imgMusic+")"}),$(".footer--current--title").html(music[e].musicName),$(".footer--current--artist").html(music[e].artiste),$("#music1").trigger("play")}),$("#previous").click(function(){0===e&&(e=8),e=(e-1)%8,$("#music1").attr("src",music[e].srcMusic),$(".footer--current--img").attr("src",music[e].imgMusic),$(".background").css({backgroundImage:"url("+music[e].imgMusic+")"}),$(".footer--current--title").html(music[e].musicName),$(".footer--current--artist").html(music[e].artiste),$("#music1").trigger("play")}),$("#alea").click(function(){e=Math.floor(8*Math.random()),$("#music1").attr("src",music[e].srcMusic),$(".footer--current--img").attr("src",music[e].imgMusic),$(".background").css({backgroundImage:"url("+music[e].imgMusic+")"}),$(".footer--current--title").html(music[e].musicName),$(".footer--current--artist").html(music[e].artiste),$("#music1").trigger("play")}),$("#music1").bind("ended",function(){e=(e+1)%8,$("#music1").attr("src",music[e].srcMusic),$(".footer--current--img").attr("src",music[e].imgMusic),$(".background").css({backgroundImage:"url("+music[e].imgMusic+")"}),$(".footer--current--title").html(music[e].musicName),$(".footer--current--artist").html(music[e].artiste),$("#music1").trigger("play")});var r=document.getElementById("music1");r.addEventListener("timeupdate",function(){var a=r.currentTime;duration=r.duration;var e=Math.floor(a%3600/60),t=Math.floor(a%60),o=Math.floor(duration%3600/60),s=Math.floor(duration%60);10>t&&(t="0"+t),10>s&&(s="0"+s),$(".footer--player--progress").animate({width:(a+.25)/duration*100+"%"},250,"linear"),$(".footer--current--time").text(e+":"+t),$(".footer--current--duration").text(o+":"+s)}),$(".footer--player").click(function(e){posX=e.pageX,r.currentTime=posX/a*duration,console.log(e.pageX),console.log(posX/a*duration)})}),$(".leftnav--btn").click(function(){$(".leftnav").hasClass("visible")?($(".leftnav").animate({left:"0px"}),$(".leftnav").removeClass("visible")):($(".leftnav").animate({left:"-210px"}),$(".leftnav").addClass("visible"))});var e=!1;$(".leftnav--night").click(function(){e===!1?($(".leftnav").css({backgroundColor:"#ececec"}),$(".leftnav--secondary a").css({borderColor:"#d1cdcd"}),$(".footer").css({backgroundColor:"#ececec"}),$(".leftnav--btn").css({backgroundColor:"#d1cdcd"}),$("#current").css({backgroundColor:"#d1cdcd"}),$("a").css({color:"#23232c"}),$("span").css({color:"#23232c"}),$(".footer--player--progress").css({backgroundColor:"orange"}),$(".footer--player").css({backgroundColor:"#23232c"}),$(".leftnav--profil--abonne").css({backgroundColor:"orange"}),$(".leftnav--night").addClass("leftnav--night--active"),$(".leftnav--night--active").removeClass("leftnav--night"),$(".leftnav--profil--tag").addClass("leftnav--profil--tag--active"),$(".leftnav--profil--tag--active").removeClass("leftnav--profil--tag"),$(".footer--search").addClass("footer--search--night"),$(".footer--search--night").removeClass("footer--search"),e=!0):($(".leftnav").css({backgroundColor:"#23232c"}),$(".footer").css({backgroundColor:"#23232c"}),$(".leftnav--btn").css({backgroundColor:"#1d1d20"}),$(".leftnav--secondary a").css({borderColor:"#1f1f28"}),$("#current").css({backgroundColor:"#23232c"}),$("a").css({color:"#ececec"}),$("span").css({color:"#ececec"}),$(".footer--player--progress").css({backgroundColor:"rgb(24, 104, 205)"}),$(".footer--player").css({backgroundColor:"lightgray"}),$(".leftnav--profil--abonne").css({backgroundColor:"rgb(24, 104, 205)"}),$(".footer--search--night").addClass("footer--search"),$(".footer--search").removeClass("footer--search--night"),e=!1)}),$("#music1").prop("volume",.8),$("#draggable").draggable({axis:"x",containment:"parent",drag:function(a,e){var t=$(this).position().left;$(".footer--controller--icons5--volume--progress").css({width:t+5+"px"}),$("#music1").prop("volume",t/100)}});var t=!1;$("#volume").click(function(){t===!0?($(".footer--controller--icons5--volume").fadeOut(100),t=!1):($(".footer--controller--icons5--volume").fadeIn(100),t=!0)}),$(".footer--search").click(function(){$(".search").hasClass("visible")?($(".search").animate({right:"-270px"}),$(".search").removeClass("visible")):($(".search").animate({right:"0px"}),$(".search").addClass("visible"))}),$(".site--container").hide(),$(window).load(function(){setTimeout(function(){$(".site--container").fadeIn(),$(".loader").delay(1e3).fadeOut(600)},3e3)}),$(".leftnav--secondary--1, .leftnav--fav--header--icon").click(function(){$(".leftnav--fav").hasClass("visible")?($(".leftnav--fav").animate({marginBottom:"330%"}),$(".leftnav--fav").removeClass("visible")):($(".leftnav--fav").animate({marginBottom:"0px"}),$(".leftnav--fav").addClass("visible"))}),$(".leftnav--secondary--2, .leftnav--playlist--header--icon").click(function(){$(".leftnav--playlist").hasClass("visible")?($(".leftnav--playlist").animate({marginBottom:"330%"}),$(".leftnav--playlist").removeClass("visible")):($(".leftnav--playlist").animate({marginBottom:"0px"}),$(".leftnav--playlist").addClass("visible"))}),$(".leftnav--secondary--3, .leftnav--album--header--icon").click(function(){$(".leftnav--album").hasClass("visible")?($(".leftnav--album").animate({marginBottom:"330%"}),$(".leftnav--album").removeClass("visible")):($(".leftnav--album").animate({marginBottom:"0px"}),$(".leftnav--album").addClass("visible"))}),$(".leftnav--secondary--4, .leftnav--podcast--header--icon").click(function(){$(".leftnav--podcast").hasClass("visible")?($(".leftnav--podcast").animate({marginBottom:"330%"}),$(".leftnav--podcast").removeClass("visible")):($(".leftnav--podcast").animate({marginBottom:"0px"}),$(".leftnav--podcast").addClass("visible"))}),$(".leftnav--secondary--5, .leftnav--app--header--icon").click(function(){$(".leftnav--app").hasClass("visible")?($(".leftnav--app").animate({marginBottom:"330%"}),$(".leftnav--app").removeClass("visible")):($(".leftnav--app").animate({marginBottom:"0px"}),$(".leftnav--app").addClass("visible"))}),$(".leftnav--secondary--6, .leftnav--config--header--icon").click(function(){$(".leftnav--config").hasClass("visible")?($(".leftnav--config").animate({marginBottom:"330%"}),$(".leftnav--config").removeClass("visible")):($(".leftnav--config").animate({marginBottom:"0px"}),$(".leftnav--config").addClass("visible"))}),$("#sub-btn").click(function(){$(".leftnav--secondary ul").hasClass("visible")?($(".leftnav--secondary ul").animate({marginTop:"0px"}),$(".leftnav--secondary ul").removeClass("visible")):($(".leftnav--secondary ul").animate({marginTop:"140px"}),$(".leftnav--secondary ul").addClass("visible"))}),$(".leftnav--primary--yo:eq(0)").addClass("current"),$(".leftnav--primary--yo").click(function(){$(".current").removeClass("current"),$(this).addClass("current")})});