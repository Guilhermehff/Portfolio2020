$(document).ready(function() {

  var lastId;
  var project;
  var menuItems = $(".summary").find("a");
  var isunaColor = '#FF708A';
  var btwaColor = '#FF5D5C';
  var hubsterColor = '#FE844C';
  var accompColor = '#8DEEA2';

  function scrollSummary(scrollSection, currentProject) {
    // Get container scroll position
    var fromTop = $(".scroll").scrollTop();
    // Get id of current scroll item
    var cur = scrollSection.map(function() {
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

    if ($(".scroll").scrollTop() + $(".scroll").innerHeight() >= $(currentProject)[0].scrollHeight) {
      menuItems
        .parent().removeClass("active")
      $(".summary li:last-child").addClass("active");
      lastId = "end";
    }
  }


  $(".selected-projects-info div").hover(
    function() {

      if ($(this).attr('class') === "isuna") {
        $('.rotate-1').css('stroke', isunaColor);
        $('.rotate-2').css('stroke', isunaColor);
      } else if ($(this).attr('class') === "hubster") {
        $('.rotate-1').css('stroke', hubsterColor);
        $('.rotate-2').css('stroke', hubsterColor);
      } else if ($(this).attr('class') === "btwa") {
        $('.rotate-1').css('stroke', btwaColor);
        $('.rotate-2').css('stroke', btwaColor);
      } else if ($(this).attr('class') === "btwa") {
        $('.rotate-1').css('stroke', btwaColor);
        $('.rotate-2').css('stroke', btwaColor);
      }
    },

    function() {
      $('.rotate-1').css('stroke', '#A7BFD3');
      $('.rotate-2').css('stroke', '#A7BFD3');
    });


  $(".selected-projects-info div").click(function(e) {

    project = ".project-" + $(this).attr('class');

    if ($(this).hasClass('isuna')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", isunaColor);
    } else if ($(this).hasClass('hubster')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", hubsterColor);
    } else if ($(this).hasClass('btwa')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", btwaColor);
    }


    $(project).css("display", "block");
    $(".container-vertical").css("pointer-events", "none");
    $(".scroll").css("overflow", "overlay");
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

    setTimeout(function() {
      menuItems
        .parent().removeClass("active")
      $(".summary li:first-child").addClass("active");
    }, 700);


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

    setTimeout(function() {
      $(project).css("pointer-events", "all");
    }, 1500);


    e.preventDefault();


  });


  $(".other-project").click(function(e) {

    project = ".project-" + $(this).attr('class').split(' ').pop()
    var oldproject = $(this)

    if ($(this).hasClass('isuna')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", isunaColor);
    } else if ($(this).hasClass('hubster')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", hubsterColor);
    } else if ($(this).hasClass('btwa')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4").css("background-color", btwaColor);
    }

    $(".panel-1").css({
      'right': '0%',
      'left': '100%'
    });

    $(".panel-2").css({
      'right': '0%',
      'left': '100%'
    });

    $(".panel-3").css({
      'right': '0%',
      'left': '100%'
    });

    $(".panel-4").css({
      'right': '0%',
      'left': '100%'
    });

    $(project).css("display", "block");
    $(".project").css("pointer-events", "none");
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

    $(oldproject).parent().parent().delay(700).animate({
      "opacity": "0"
    }, 0);


    setTimeout(function() {
      $(oldproject).parent().parent().css("display", "none");

      menuItems
        .parent().removeClass("active")
      $(".summary li:first-child").addClass("active");
    }, 700);


    $(project).delay(700).animate({
      "opacity": "1"
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

    setTimeout(function() {
      $(project).css("pointer-events", "all");
    }, 1500);


    e.preventDefault();

  });

  // Anchors corresponding to menu items
  scrollItemsIsuna = $(".project-isuna .summary").find("a").map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  scrollItemsHubster = $(".project-hubster .summary").find("a").map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });


  $(".exit").click(function(e) {

    var project = "." + $(this).parent().parent().attr('class').split(' ').pop();

    $(project).css("pointer-events", "none");
    $(".scroll").css("overflow", "overlay");

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


    setTimeout(function() {
      $(project).css("display", "none");
      $(".container-vertical").css("pointer-events", "all");
    }, 1200);


    e.preventDefault();


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

    if (project == ".project-isuna") {

      scrollSummary(scrollItemsIsuna, project);

    } else if (project == ".project-hubster") {

      scrollSummary(scrollItemsHubster, project);

    }

  });


});
