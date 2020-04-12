$(document).ready(function() {
  $(".isuna").click(function(e) {

    $(".project-isuna").css("pointer-events", "all");
    $(".project-isuna").animate({
      "margin-top": "0%",
      "opacity": "1"
    }, 500);

    e.preventDefault();


  });






  $(".exit-project").click(function(e) {

    $(this).parent().css("pointer-events", "none");
    $(this).parent().animate({
      "margin-top": "60%",
      "opacity": "0"
    }, 500);

    e.preventDefault();


  });



});
