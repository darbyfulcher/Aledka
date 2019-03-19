(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

function filterGallery(option) {
  // get all elements with class portfolio-box-container
  var portfolioBoxContainers = document.getElementsByClassName("portfolio-box-container");
  console.log("portfolioBoxContainers = " + portfolioBoxContainers);
  // for each portfolio-box-container element...
  // portfolioBoxContainers.forEach(function(element) {
  // portfolioBoxContainers.forEach.call(parent.children, child => {
  Array.prototype.forEach.call(portfolioBoxContainers, function(element) {
      // Do stuff here
      // console.log(el.tagName);
  // });

    console.log("element = " + element);
    // if option is 'all' or option selected is one of the classes, then remove the class 'hidden'
    if (option === 'all' || $(element).hasClass(option)) {
      console.log("option === 'all' || element.hasClass(option)");
      $(element).removeClass("hidden");
    // else add the class 'hidden'
    } else {
      console.log("!(option === 'all' || element.hasClass(option))");
      $(element).addClass("hidden");
    }
  });
}
