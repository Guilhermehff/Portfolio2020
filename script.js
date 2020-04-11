$(document).ready(function() {
  $(".isuna").click(function(e) {

    $(".project-isuna").removeClass('inactive');
    $(this).addClass('active');
    e.preventDefault();


  });
});
