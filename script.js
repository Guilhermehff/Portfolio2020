$(document).ready(function() {


  $(".isuna").click(function(e) {

    $(".overlay").css("pointer-events", "all");
    $(".project-isuna").css("pointer-events", "all");
    $(".overlay").animate({
      "opacity": "0.24"
    }, 500);
    $(".project-isuna").animate({
      "margin-top": "0%",
      "opacity": "1"
    }, 500);

    e.preventDefault();


  });


  $(".overlay").click(function(e) {

    $(".project").css("pointer-events", "none");
    $(".overlay").css("pointer-events", "none");
    $(".project").animate({
      "margin-top": "60%",
      "opacity": "0"
    }, 500);
    $(".overlay").animate({
      "opacity": "0"
    }, 500);


    e.preventDefault();


  });


  $(".exit-project").click(function(e) {

    $(this).parent().css("pointer-events", "none");
    $(".overlay").css("pointer-events", "none");
    $(this).parent().animate({
      "margin-top": "60%",
      "opacity": "0"
    }, 500);
    $(".overlay").animate({
      "opacity": "0"
    }, 500);

    e.preventDefault();


  });



  $('.isuna').mouseover(function(){
      $('.rotate-1').css('stroke','#F9467C');
      $('.rotate-2').css('stroke','#F9467C');
  });


  $('.btwa').mouseover(function(){
      $('.rotate-1').css('stroke','#F59D21');
      $('.rotate-2').css('stroke','#F59D21');
  });

  $('.paper-arg').mouseover(function(){
      $('.rotate-1').css('stroke','#04D304');
      $('.rotate-2').css('stroke','#04D304');
  });




});
