$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {

  var lastId;
  var project;
  var menuItems = $(".summary").find("a");
  var isunaColor = '#FF708A';
  var btwaColor = '#FF5D5C';
  var hubsterColor = '#FE844C';
  var accompColor = '#8DEEA2';

  // Cursor variables
  var cursor = $(".cursor");
  var cursorBox = $(".cursor-box");
  var cursorPointer = $(".cursor-pointer");
  var timestamp = 0;
  var mY = 0;
  var mX = 0;

  //Cursor code

  $(window).mousemove(function(e) {
    var now = Date.now();
    currentmY = e.clientY;
    currentmX = e.clientX;

    // getting distance
    var dt = now - timestamp;
    var distanceY = (currentmY - mY);
    var distanceX = (currentmX - mX);

    // getting angle
    var rad = Math.atan2(distanceY, distanceX);

    // getting speed
    var speedY = Math.abs(distanceY / dt * 1000);
    var speedX = Math.abs(distanceX / dt * 1000);

    var deform = speedX / 2500 + speedY / 2500 + 1;

    if (deform > 3.5) {
      deform = 3.5;
    }

    mY = currentmY;
    mX = currentmX;
    timestamp = now;

    cursorBox.css({
      top: e.clientY - cursorBox.height() / 2,
      left: e.clientX - cursorBox.width() / 2
    });

    cursor.css({
      transform: "rotate(" + rad + "rad) scaleX(" + deform + ")"
    });

  });


  $(window)
    .mouseleave(function() {
      cursor.css({
        opacity: "0"
      });
    })
    .mouseenter(function() {
      cursor.css({
        opacity: "1"
      });
    });


  $(".pointer, .exit, .team-member-icon, .other-project, .sub-items, .isuna, .hubster, .btwa")
    .mouseenter(function() {
      cursor.css({
        margin: "14px"
      });
      cursorPointer.css({
        margin: "6px"
      });
    })
    .mouseleave(function() {
      cursor.css({
        margin: "0px"
      });
      cursorPointer.css({
        margin: "22px"
      });
    });

  $(window)
    .mousedown(function(e) {
      if (e.button == 0) {
        cursor.css({
          margin: "18px"
        });
      }
    })
    .mouseup(function(e) {
      if (e.button == 0) {
        cursor.css({
          margin: "0px"
        });
      }
    });



  // Parallax
  var rellax = new Rellax('.rellax');
  var rellaxBtwa = new Rellax('#city-rellax', {
    wrapper: '#city-box',
    relativeToWrapper: true,
    center: true
  });
  var rellaxBtwa = new Rellax('#farm-day-rellax', {
    wrapper: '#farm-day-box',
    relativeToWrapper: true,
    center: true
  });
  var rellaxBtwa = new Rellax('#office-rellax', {
    wrapper: '#office-box',
    relativeToWrapper: true,
    center: true
  });
  var rellaxBtwa = new Rellax('#ritual-rellax', {
    wrapper: '#ritual-box',
    relativeToWrapper: true,
    center: true
  });


  // Disable Scroll
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    }));
  } catch (e) {}

  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  function progressBar(myBar) {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById(myBar).style.width = scrolled + "%";
  }


  // Anchors corresponding to menu items
  function scrollSummary(scrollSection, currentProject) {
    // Get container scroll position
    var fromTop = $(window).scrollTop();
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

    if ($(window).scrollTop() + $(window).innerHeight() >= $(currentProject)[0].scrollHeight) {
      menuItems
        .parent().removeClass("active")
      $(".summary li:last-child").addClass("active");
      lastId = "end";
    }
  }



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

  scrollItemsBtwa = $(".project-btwa .summary").find("a").map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });





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
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", isunaColor);
    } else if ($(this).hasClass('hubster')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", hubsterColor);
    } else if ($(this).hasClass('btwa')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", btwaColor);
    }


    $(project).css("display", "block");
    $(".container-horizontal").css("pointer-events", "none");
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
    $(".container-horizontal").delay(700).animate({
      "opacity": "0"
    }, 0);
    $("body").delay(700).animate({
      "background-color": "white"
    }, 0);

    setTimeout(function() {
      $(".container-horizontal").css("display", "none");
      $("body").css("overflow-y", "overlay");
      disableScroll();

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
      enableScroll();
    }, 1500);


    e.preventDefault();


  });


  $(".other-project").click(function(e) {

    disableScroll()
    project = ".project-" + $(this).attr('class').split(' ').pop()
    var oldproject = $(this)

    if ($(this).hasClass('isuna')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", isunaColor);
    } else if ($(this).hasClass('hubster')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", hubsterColor);
    } else if ($(this).hasClass('btwa')) {
      $(".panel-1, .panel-2, .panel-3, .panel-4, .cursor-pointer").css("background-color", btwaColor);
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

      $(window).scrollTop(0);
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
      enableScroll()
    }, 1500);


    e.preventDefault();

  });


  $(".exit").click(function(e) {

    var project = "." + $(this).parent().parent().attr('class').split(' ').pop();
    $(".cursor-pointer").css("background-color", "#444E56");

    $(project).css("pointer-events", "none");
    disableScroll();

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
    $(".container-horizontal").delay(700).animate({
      "opacity": "1"
    }, 0);
    $("body").delay(700).animate({
      "background-color": "#F4FAFF"
    }, 0);

    setTimeout(function() {
      $(window).scrollTop(0);
      $(".container-horizontal").css("display", "flex");
      $("body").css("overflow-y", "hidden");
      enableScroll();
    }, 700);



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
      $(".container-horizontal").css("pointer-events", "all");
    }, 1200);



    e.preventDefault();


  });






  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {

    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;

    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 850);

    e.preventDefault();

  });


  // Bind to scroll
  $(window).scroll(function() {



    if (project == ".project-isuna") {

      progressBar("isunaBar");
      scrollSummary(scrollItemsIsuna, project);

    } else if (project == ".project-hubster") {

      progressBar("hubsterBar");
      scrollSummary(scrollItemsHubster, project);

    } else if (project == ".project-btwa") {

      progressBar("btwaBar");
      scrollSummary(scrollItemsBtwa, project);

    }

  });


});
