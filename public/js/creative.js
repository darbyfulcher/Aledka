(function($) {
  "use strict"; // Start of use strict

  var pageURL = $(location).attr("href");
  // alert("pageURL = " + pageURL);

  if (pageURL.indexOf('galleryViewBySize') !== -1) {
    // console.log("pageURL.indexOf('galleryViewBySize') !== -1");
    filterGallery('24x24', 0)
  } else {
    // console.log("pageURL.indexOf('galleryViewBySize') === -1");
    filterGallery('all', 0)
  }

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
    // items: [
    //   {
    //     src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
    //     title: 'Peter & Paul fortress in SPB'
    //   },
    //   {
    //     src: 'https://vimeo.com/123123',
    //     type: 'iframe' // this overrides default type
    //   },
    //   {
    //     src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
    //     type: 'inline'
    //   },
    //   {
    //     src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
    //     type: 'inline'
    //   },
    //   {
    //     src: '#my-popup', // CSS selector of an element on page that should be used as a popup
    //     type: 'inline'
    //   }
    // ]
    delegate: 'a:visible',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    // items:[{
    //     src: 'img/portfolio/fullsize/24x24/Reflections2201824X24.jpg'
    // }],
    // items: imageArray
    // image: {
    //   titleSrc: 'title',  // this tells the script which attribute has your caption
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    // }
  });
})(jQuery); // End of use strict

// var imageArray = []

// function openImage(index) {
//   console.log("openImage index = " + index);
//   // $.magnificPopup.open({
//   // // $('#portfolio').magnificPopup.open({
//   //   items: imageArray
//   // }, index);
// }

function filterGallery(option, index) {
  // // reset the imageArray
  // imageArray = []
  // get all elements with class portfolio-box-container
  var portfolioBoxContainers = document.getElementsByClassName("portfolio-box-container");
  // console.log("portfolioBoxContainers = " + portfolioBoxContainers);
  // for each portfolio-box-container element...
  // var index = 0
  Array.prototype.forEach.call(portfolioBoxContainers, function(element) {
    // console.log("element = (below)");
    // console.log(element);
    // if option is 'all' or option selected is one of the classes, then remove the class 'hidden'
    if (option === 'all' || $(element).hasClass(option)) {
      // console.log("option === 'all' || element.hasClass(option)");
      $(element).removeClass("hidden");

      // // get the image url
      // console.log("$(element).children('a img') = (below)");
      // console.log($(element).children('img'));
      // console.log("$(element).children('a').children('img') = (below)");
      // console.log($(element).children('a').children('img'));
      const imageURL = $(element).children('a').children('img').attr('src')
      // console.log("imageURL = (below)");
      // console.log(imageURL);

      // // add the image url to the imageArrays
      // imageArray.push({
      //   src: imageURL
      // })

      // openImage(index)

      // $('#portfolio').magnificPopup({
      //   type: 'image',
      //   tLoading: 'Loading image #%curr%...',
      //   // mainClass: 'mfp-img-mobile',
      //   gallery: {
      //     enabled: true,
      //     navigateByImgClick: true,
      //     preload: [0, 1]
      //   },
      //   items: imageArray
      // }, index);

      // $.magnificPopup.open({
      //    items: imageArray
      //  }, index);

     // $('#portfolio').magnificPopup({
     //   delegate: 'a',
     //   type: 'image',
     //   tLoading: 'Loading image #%curr%...',
     //   mainClass: 'mfp-img-mobile',
     //   gallery: {
     //     enabled: true,
     //     navigateByImgClick: true,
     //     preload: [0, 1]
     //   },
     //   // items: imageArray
     // });

      // console.log("imageArray = (below)");
      // console.log(imageArray);

      // increment the index
      // index++

    // else add the class 'hidden'
    } else {
      // console.log("!(option === 'all' || element.hasClass(option))");
      $(element).addClass("hidden");
    }

    // $('#portfolio').magnificPopup({
    //   type: 'image',
    //   tLoading: 'Loading image #%curr%...',
    //   // mainClass: 'mfp-img-mobile',
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0, 1]
    //   },
    //   items: imageArray
    // }, index);

    // .open({
    // // $('#portfolio').magnificPopup.open({
    //   items: imageArray
    // }, index);

    // // get array of image elements within portfolio
    // console.log("$('#portfolio').children('img') = (below)");
    // console.log($('#portfolio'));
    // console.log($('#portfolio').children('img'));
    // console.log($('#portfolio').children('img'));
    // console.log(document.getElementsByClassName("img-fluid"));
    // document.getElementsByClassName("img-fluid").each(function( index ) {
    //   console.log( index + ": " + $( this ).text() );
    //   openImage(index)
    // });
    //
    // for(var i = 0; i < slides.length; i++) {
    //    Distribute(slides.item(i));
    // }
      // set onclick listener for each element

  });

  // get all elements with class portfolio-box-container
  var navItems = $('.sub-navbar').find('.nav-item');
  // console.log("navItems = " + navItems);
  var currentIndex = 0;
  // for each portfolio-box-container element...
  Array.prototype.forEach.call(navItems, function(element) {
    // console.log("element = (below)");
    // console.log(element);
    // console.log("currentIndex = " + currentIndex);
    // if index selected is the current index, then add the class 'active'
    if (index === currentIndex) {
      // console.log("index === currentIndex");
      $(element).addClass("active");
    // else remove the class 'active'
    } else {
      // console.log("index !== currentIndex");
      $(element).removeClass("active");
    }
    // add 1 to the currentIndex
    currentIndex++;
  });
}
