$(document).ready(function() {


  $(".isuna").hover(
    function() {
      $('.rotate-1').css('stroke', '#FF708A');
      $('.rotate-2').css('stroke', '#FF708A');
    },
    function() {
      $('.rotate-1').css('stroke', '#A7BFD3');
      $('.rotate-2').css('stroke', '#A7BFD3');
    }
  );

  $(".btwa").hover(
    function() {
      $('.rotate-1').css('stroke', '#FEE27F');
      $('.rotate-2').css('stroke', '#FEE27F');
    },
    function() {
      $('.rotate-1').css('stroke', '#A7BFD3');
      $('.rotate-2').css('stroke', '#A7BFD3');
    }
  );

  $(".hubster").hover(
    function() {
      $('.rotate-1').css('stroke', '#FE844C');
      $('.rotate-2').css('stroke', '#FE844C');
    },
    function() {
      $('.rotate-1').css('stroke', '#A7BFD3');
      $('.rotate-2').css('stroke', '#A7BFD3');
    }
  );

  $(".paper-arg").hover(
    function() {
      $('.rotate-1').css('stroke', '#8DEEA2');
      $('.rotate-2').css('stroke', '#8DEEA2');
    },
    function() {
      $('.rotate-1').css('stroke', '#A7BFD3');
      $('.rotate-2').css('stroke', '#A7BFD3');
    }
  );


  $(".selected-projects-info div").click(function(e) {

    var project = ".project-" + $(this).attr('class');

    if ($(this).attr('class') === "isuna") {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", "#FF708A");
    } else if ($(this).attr('class') === "hubster") {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", "#FE844C");
    }


    $(project).css("display", "block");
    $(project).css("pointer-events", "all");
    $(".container-vertical").css("pointer-events", "none");
    $(".scroll").css("overflow", "auto");
    $(".scroll").scrollTop(0);
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


    $(project).delay(700).animate({
      "opacity": "1"
    }, 0);
    $(".container-vertical").delay(700).animate({
      "opacity": "0"
    }, 0);
    $("body").delay(700).animate({
      "background-color": "white"
    }, 0);


    $(".panel-1").delay(200).animate({
      "right": "100%"
    }, 500);
    $(".panel-2").delay(300).animate({
      "right": "100%"
    }, 500);
    $(".panel-3").delay(400).animate({
      "right": "100%"
    }, 500);
    $(".panel-4").delay(500).animate({
      "right": "100%"
    }, 500);

    e.preventDefault();


  });




  $(".exit").click(function(e) {

    var project = "." + $(this).parent().attr('class').split(' ').pop();;

    $(project).css("pointer-events", "none");
    $(".container-vertical").css("pointer-events", "all");
    $(".scroll").css("overflow", "hidden");

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


    $(project).delay(700).animate({
      "opacity": "0"
    }, 0);
    $(".container-vertical").delay(700).animate({
      "opacity": "1"
    }, 0);
    $("body").delay(700).animate({
      "background-color": "#F4FAFF"
    }, 0);


    $(".panel-1").delay(200).animate({
      "left": "100%"
    }, 500);
    $(".panel-2").delay(300).animate({
      "left": "100%"
    }, 500);
    $(".panel-3").delay(400).animate({
      "left": "100%"
    }, 500);
    $(".panel-4").delay(500).animate({
      "left": "100%"
    }, 500);


    setTimeout(function(){
        $(project).css("display", "none");
    }, 1000);  


    e.preventDefault();


  });


  var lastId,
    topMenu = $(".summary"),
    // All list items
    menuItems = topMenu.find("a"),

    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });


  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {

    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).position().top;

    $('.scroll').stop().animate({
      scrollTop: offsetTop + 10
    }, 850);

    e.preventDefault();

  });


  // Bind to scroll
  $(".scroll").scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop();

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).position().top - $(window).height() / 8 < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    var lastId;

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }

    if ($(".scroll").scrollTop() + $(".scroll").innerHeight() >= $(".project")[0].scrollHeight) {
      menuItems
        .parent().removeClass("active")
      $(".summary li:last-child").addClass("active");
      lastId = "end";
    }





  });


});
