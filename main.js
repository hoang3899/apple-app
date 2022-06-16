var scrollDuration = 500;
// paddles
var leftPaddle = document.getElementsByClassName('.chapternav-paddle-left');
var rightPaddle = document.getElementsByClassName('.chapternav-paddle-right');
// get items dimensions
var itemsLength = 7;
var itemSize = $('.chapternav-item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 34;

// get wrapper width
var getMenuWrapperSize = function () {
  return $('.chapternav-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
var getMenuSize = function () {
  return itemsLength * itemSize;
};
var menuSize = getMenuSize();

$(window).resize(function () {
  var menuVisibleSize = $(window).width() - 34 * 2;
  if (menuVisibleSize >= menuSize) {
    $('.chapternav-paddle-right').addClass("hidden")
    $('.chapternav-paddle-left').addClass("hidden")
  } else {
    $('.chapternav-paddle-right').removeClass("hidden");
    $('.chapternav-paddle-right').on('click', function () {
      $('.chapternav-items').animate({ scrollLeft: '200' }, scrollDuration);
      setTimeout(() => { $('.chapternav-paddle-right').addClass("hidden") }, 600);
      setTimeout(() => { $('.chapternav-paddle-left').removeClass("hidden") }, 1000);
    });
    $('.chapternav-paddle-left').on('click', function () {
      $('.chapternav-items').animate({ scrollLeft: '0' }, scrollDuration);
      setTimeout(() => { $('.chapternav-paddle-left').addClass("hidden") }, 600);
      setTimeout(() => { $('.chapternav-paddle-right').removeClass("hidden") }, 1000);
    })
  }
});


function reveal() {
  var reveals = document.querySelectorAll(".grid-item");
  var sectionquotes = document.querySelectorAll(".section-quote")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementBottom = sectionquotes[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("appear"); 
    } else {
      reveals[i].classList.remove("appear");
    }
    if (elementBottom < windowHeight - elementVisible) {
      sectionquotes[i].classList.add("engaged"); 
    } else {
      sectionquotes[i].classList.remove("engaged");
    }
  }
}

window.addEventListener("scroll", reveal);


// get how much of menu is invisible



