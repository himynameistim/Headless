// JS LAYER [0.1 EQUAL HEIGHTS]  ======================================================================================

// A. GLOBAL JS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.1. EQUAL HEIGHTS -------------------------------------------------------------------------------------------------

/*
  http://codepen.io/micahgodbolt/pen/FgqLc

  Thanks to CSS Tricks for pointing out this bit of jQuery
  http://css-tricks.com/equal-height-blocks-in-rows/
  It's been modified into a function called at page load and then each time the page is resized.
  One large modification was to remove the set height before each new calculation.
  */

var equalheight;
equalheight = function (container) {
    var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      rowDivs = [],
      $el;

    $(container).each(function () {
        $el = $(this);
        $($el).height('auto');
        topPosition = $el.position().top;

        if ($el.closest(':hidden').length) return true;

        if (currentRowStart != topPosition) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

var equalheightAlt;

$.expr[':'].hiddenByParent = function(a) {
    return $(a).is(':hidden') && $(a).css('display') != 'none';
};

equalheightAlt = function (container) {
    var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      county = 0,
      rowDivs = [],
      $el;

    $(container).each(function () {
        $el = $(this);

        $($el).height('auto');
        topPosition = $el.offset().top;

        if (currentRowStart != topPosition) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

equalheightAlt('.js-equal-height');
equalheightAlt('.o-team .m-team-card p');


$( document ).ready(function() {
  equalheightAlt('.js-equal-height');
  equalheightAlt('.o-team .m-team-card p');
});    

var resizeTimer;

$(window).resize(function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    equalheightAlt('.js-equal-height');
    equalheightAlt('.o-team .m-team-card p');          
  }, 250);
});

window.addEventListener("orientationchange", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    equalheightAlt('.js-equal-height');
    equalheightAlt('.o-team .m-team-card p');          
  }, 250);
}, false);

$(document).ajaxComplete(function () {
  equalheightAlt('.js-equal-height');
  equalheightAlt('.o-team .m-team-card p');
});

$(window).trigger('resize');

/**
  * Fallback for JS taking long to load
  */

for (var i = 1000; i < 5000; i += 1000) {
    setTimeout(function () {
        $(window).trigger('resize');
    }, i);
}

// A.1. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



