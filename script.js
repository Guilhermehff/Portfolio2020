$(document).ready(function() {


  $(".isuna").click(function(e) {

    $(".project-isuna").css("pointer-events", "all");
    $(".container-vertical").css("pointer-events", "none");
    $(".panel-1").animate({
      "left": "0%"
    }, 500);
    $(".panel-2").delay(100).animate({
      "left": "0%"
    }, 500);
    $(".panel-3").delay(200).animate({
      "left": "0%"
    }, 500);
    $(".panel-4").delay(300).animate({
      "left": "0%"
    }, 500);


    $(".project-isuna").delay(500).animate({
      "opacity": "1"
    }, 300);
    $(".container-vertical").delay(500).animate({
      "opacity": "0"
    }, 300);
    $("body").delay(500).animate({
      "background-color": "white"
    }, 100);


    $(".panel-1").animate({
      "right": "100%"
    }, 500);
    $(".panel-2").animate({
      "right": "100%"
    }, 500);
    $(".panel-3").animate({
      "right": "100%"
    }, 500);
    $(".panel-4").animate({
      "right": "100%"
    }, 500);

    e.preventDefault();


  });


  $(".exit-project").click(function(e) {

    $(".project-isuna").css("pointer-events", "none");
    $(".container-vertical").css("pointer-events", "all");

    $(".panel-1").animate({
      "right": "0%"
    }, 500);
    $(".panel-2").delay(100).animate({
      "right": "0%"
    }, 500);
    $(".panel-3").delay(200).animate({
      "right": "0%"
    }, 500);
    $(".panel-4").delay(300).animate({
      "right": "0%"
    }, 500);


    $(".project-isuna").delay(500).animate({
      "opacity": "0"
    }, 300);
    $(".container-vertical").delay(500).animate({
      "opacity": "1"
    }, 300);
    $("body").delay(500).animate({
      "background-color": "#F4FAFF"
    }, 100);


    $(".panel-1").animate({
      "left": "100%"
    }, 500);
    $(".panel-2").animate({
      "left": "100%"
    }, 500);
    $(".panel-3").animate({
      "left": "100%"
    }, 500);
    $(".panel-4").animate({
      "left": "100%"
    }, 500);

    e.preventDefault();


  });



  $('.isuna').mouseover(function() {
    $('.rotate-1').css('stroke', '#F9467C');
    $('.rotate-2').css('stroke', '#F9467C');
  });


  $('.btwa').mouseover(function() {
    $('.rotate-1').css('stroke', '#F59D21');
    $('.rotate-2').css('stroke', '#F59D21');
  });

  $('.paper-arg').mouseover(function() {
    $('.rotate-1').css('stroke', '#04D304');
    $('.rotate-2').css('stroke', '#04D304');
  });




});
