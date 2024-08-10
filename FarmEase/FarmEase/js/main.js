(function ($) {
    "use strict";


 // meanmenu
jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
});

/*  sticky menu */
$(window).on('scroll',function() {    
  var scroll = $(window).scrollTop();
  if (scroll < 1) {
  $(".sticky").removeClass("scroll-header");
  }else{
$(".sticky").addClass("scroll-header");
  }
});

/* scroll to js */
$(window).scroll(function(){
  if($(this).scrollTop() > 1000){
    $('#scroll').addClass('scroll-show');
    
  }
  else{
    $('#scroll').removeClass('scroll-show');
  }
  
  })
  
  $('#scroll').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 5000)
  });
  /*   preloader js */
  $(window).load(function(){
    $(".preloader").fadeOut(2000);
  });

/*  slider */
function mainSlider() {
  var BasicSlider = $('.slider-active');
  BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
  });
  BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
  });
  BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
      arrows: true,
      responsive: [
          { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
  });

  function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function() {
              $this.removeClass($animationType);
          });
      });
  }
}
mainSlider();

// niceSelect
$('select').niceSelect();

/* Dimon active */
$(".diamond-grid").diamonds({
    size : 200, 
    gap : 5, 
    hideIncompleteRow : false, 
    autoRedraw : true, 
    itemSelector : ".item"
});

/* Service active */

$('.service-active').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/* Testimonial active */
$('.testimonial-active').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angles-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  ]
});


/* Testimonial active */
$('.testimonial-three-active').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angles-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  ]
});

/* testimonial two active */
$('.testimonial-item-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-nav'
});

$('.testimonial-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-item-active',
  dots: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>', 
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
});



/* counter active */
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

/* image poppup active */
$('.image-popup').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
 
});
/* team close button active */
$('.team-profile-view').click(function(e){
	e.preventDefault();
  $('.team-details').addClass('active')
});

$('.team-close').click(function(e){
  $('.team-details').removeClass('active'),
	e.preventDefault();
  
});

/* Isotop active */
var grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
  }
});


// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

 //for menu active class
$('.portfolio-menu').on('click', function (event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});

/* wow js active */
new WOW().init();
/* Google Map  */
function basicmap() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
  };
  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('contact-map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
  });
}
if ($('#contact-map').length != 0) {
  google.maps.event.addDomListener(window, 'load', basicmap);
}



})(jQuery);	    