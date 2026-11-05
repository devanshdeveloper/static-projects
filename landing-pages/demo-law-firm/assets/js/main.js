/*
Author       : Theme-Family
Template Name: Halim - Law Firm Landing Page Template
Version      : 1.0.1
*/
(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.atf-status').fadeOut();
			$('.atf-preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
		
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
        
		//**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('menu-bg');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('menu-bg');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
		 
		  
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}	
//**===================Scroll UP ===================**//

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			})
			/*END PARTNER LOGO*/
			
		/*Start Testimonials LOGO*/
			
			 $("#atf-testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				margin:10,
				pagination:false,
				navigation:true,
				navigationText:["",""],
				autoPlay:true
			});

		/*END Testimonials LOGO*/
			
		
			// Odometer JS
			$('.odometer').appear(function() {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
			
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});

			// ------------------ Magnific Popup ----------------// 

			var magnifPopup = function() {
				$('.atf-popup-img').magnificPopup({
					type: 'image',
					removalDelay: 300,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function

						// The "opener" function should return the element from which popup will be zoomed in
						// and to which popup will be scaled down
						// By defailt it looks for an image tag:
						opener: function(openerElement) {
							// openerElement is the element on which popup was initialized, in this case its <a> tag
							// you don't need to add "opener" option if this code matches your needs, it's defailt one.
							return openerElement.is('img') ? openerElement : openerElement.find('img');
						}
					}
				});
			};

			// Call the functions
			magnifPopup();
			
		
		
		
		/* START PARALLAX JS */
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
		/* END PARALLAX JS  */	
		
			
		// mailchamp
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
		/*--------------------------------------------------------------
		WOW SCROLL SPY
      --------------------------------------------------------------*/	
		 var wow = new WOW({
			  //disabled for mobile
				mobile: false
			});

		wow.init();
		
		
			
     
    
})(jQuery);

$(window).on ('load', function (){ // makes sure the whole site is loaded

		// ---------------- Porfolio isotope -------------------//
				
			var portfolioIsotope = $('.atf-main-portfolio').isotope({
				itemSelector: '.atf-grid'
			});

			$('#atf-portfolio-flters li').on('click', function() {
				$("#atf-portfolio-flters li").removeClass('filter-active');
				$(this).addClass('filter-active');

				portfolioIsotope.isotope({
					filter: $(this).data('filter')
				});
			});
				
	});
