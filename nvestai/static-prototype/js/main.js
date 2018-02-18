jQuery(function($) {'use strict';

	// Navigation Scroll
		(function($){
		    $.fn.scrollingTo = function( opts ) {
		        var defaults = {
		            animationTime : 1000,
		            easing : '',
		            callbackBeforeTransition : function(){},
		            callbackAfterTransition : function(){}
		        };

		        var config = $.extend( {}, defaults, opts );

		        $(this).click(function(e){
		            var eventVal = e;
		            e.preventDefault();

		            var $section = $(document).find( $(this).data('section') );
		            if ( $section.length < 1 ) {
		                return false;
		            };

		            if ( $('html, body').is(':animated') ) {
		                $('html, body').stop( true, true );
		            };

		            var scrollPos = $section.offset().top;

		            if ( $(window).scrollTop() == scrollPos ) {
		                return false;
		            };

		            config.callbackBeforeTransition(eventVal, $section);

		            $('html, body').animate({
		                'scrollTop' : (scrollPos+'px' )
		            }, config.animationTime, config.easing, function(){
		                config.callbackAfterTransition(eventVal, $section);
		            });
		        });
		    };
		}(jQuery));


	$('.main-menu ul li a,.smooth-scroll').scrollingTo();



	//Slider
	$(document).ready(function() {
		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar,
	      $elem,
	      isPause,
	      tick,
	      percentTime;

	    //Init the carousel
	    $("#main-slider").find('.owl-carousel').owlCarousel({
	      slideSpeed : 500,
	      paginationSpeed : 500,
	      singleItem : true,
	      navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
	      afterInit : progressBar,
	      afterMove : moved,
	      startDragging : pauseOnDragging,
	      //autoHeight : true,
	      transitionStyle : "fadeUp"
	    });

	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }

	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }

	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };

	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item
	          $elem.trigger('owl.next')
	        }
	      }
	    }

	    //pause while dragging
	    function pauseOnDragging(){
	      isPause = true;
	    }

	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }
	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});

		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});



	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

});

//Popup Signup

var link = document.querySelector(".signup_link");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close_popup");
var form = popup.querySelector("signup");

var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("popup-show");
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
		}
	}
});


//Popup Video

var p = $(".popup__overlay");

$("#popup__toggle").click(function () {
	p.css("display", "block");
});
p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p).css("display", "none");
	}
});
$(".popup__close").click(function () {
	p.css("display", "none");
});

//video popup
function toggleVideo(state) {
	// if state == 'hide', hide. Else: show video
	var div = document.getElementById("popupVid");
	if(div && div.getElementsByTagName("iframe")) {
	var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	//div.style.display = state == 'hide' ? 'none' : '';
	func = state == "hide" ? "pauseVideo" : "playVideo";
	iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', "*");
  }
}

$("#popup__toggle").click(function () {
	p.css("visibility", "visible").css("opacity", "1");
});

p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p).css("visibility", "hidden").css("opacity", ".3");
		toggleVideo("hide");
	}
});

$(".popup__close").click(function () {
	p.css("visibility", "hidden").css("opacity", ".3");
	toggleVideo("hide");
});
