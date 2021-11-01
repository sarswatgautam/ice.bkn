$(document).ready(() => {
  // navbar
  $('.navbar-show-btn').click(() => {
    $('.navbar-collapse').addClass('showNavbar');
  });

  $('.navbar-hide-btn').click(() => {
    $('.navbar-collapse').removeClass('showNavbar');
  });


  //* Navbar Fixed
  (function($) {
    "use strict";

    var nav_offset_top = $(".navbar").height() + 50;
    /*-------------------------------------------------------------------------------
    	  Navbar
    	-------------------------------------------------------------------------------*/

    function navbarFixed() {
      if ($(".navbar").length) {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $(".navbar").addClass("navbar_fixed");
          } else {
            $(".navbar").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();
  })(jQuery);

  // slick slider
  $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // stopping transition
  let resizeTimer;
  $(window).on('resize', () => {
    $(document.body).addClass('resize-transition-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      $(document.body).removeClass('resize-transition-stopper');
    }, 400);
  });



});
