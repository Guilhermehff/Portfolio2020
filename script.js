$(document).ready(function() {
  $(".isuna").click(function(e) {

    $(".project-isuna").removeClass('inactive');
    $(".project-isuna").addClass('active');
    e.preventDefault();


  });

  $(".exit-project").click(function(e) {

    $(".project").removeClass('active');
    $(".project").addClass('inactive');
    e.preventDefault();


  });



});
