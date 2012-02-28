if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}

$(function() {
 $('input, textarea').placeholder();
});

// Caroline Schnapp - current nav
$(function() {
  $('nav a').each(function() {
    if ($(this).attr('href')  ===  window.location.pathname) {
      $(this).addClass('current');
    }
  });
});

// Even box heights 
$(window).load(function() {
  $('div.unevenHeights').setAllToMaxHeight();
});

// Initiate jQuery Carousel on index.liquid
$(function() {
	$('.slidewrap').carousel({
		slider: '.slider',
		slide: '.slide',
		nextSlide: '.next',
		prevSlide: '.prev',
		speed: 300 // ms.
	});
});

// Initiate jQuery tabs on product.liquid
$(function() {
	$( "#tabs" ).tabs();
});

// Cloudzoom on product.liquid
$(document).ready(function () {
	$('#zoom1').attr('rel','position: inner')
	$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
});

// Custom checkboxes on product.liquid
$(function(){
	$('input').customInput();
	
	$('.toggle').each(function(){
		$('div:first',this).addClass('first');
		$('div:last',this).addClass('last');	
	}); 
	
});

// Buy Button disable/enable product.liquid (this needs some work)
jQuery(document).ready(function($) {
	$('#buy-button').attr('disabled','disabled').addClass('disabled');
	$('.check').click(function(){
	    if (this.checked) {
	        $('#buy-button').removeAttr('disabled').removeClass('disabled')
	    }
	});
	$('.custom-checkbox > label').hover(
	  function () {
		$(this).siblings('span').appendTo('#variants ol').css("display","block");
	  },
	function () {
		$('ol > span.size-availability').insertAfter(this).css("display","none");
	  }
	);
});