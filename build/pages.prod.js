"use strict";function openburger(){document.getElementById("burger").style.width="250px",document.getElementById("close").classList.add("rotate"),document.body.classList.add("mask")}function closeburger(){document.getElementById("burger").style.width="0",document.getElementById("close").classList.remove("rotate"),document.body.classList.remove("mask")}var screen=$(window).width();650<=screen&&$(document).ready(function(){$(".galery__img").on("click",function(){var e=$(this).prop("src");$("#img").prop("src",e);$("body").css({overflow:"hidden"}),$(".pop-up").fadeIn(300),$(".pop-up").css({display:"flex"}),$(".pop-up").addClass("mask")}),$(".pop-up").on("click",function(){$(".pop-up").fadeOut(300),$(".pop-up").removeClass("mask"),$("body").css({overflow:""})})}),(new WOW).init();