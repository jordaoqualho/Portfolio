$(window).on('load', function () {
	$('#preloader .progress').delay(1000).fadeOut();
	$('#preloader').delay(1000).fadeOut('slow'); 
	$('body').delay(1000).css({'overflow': 'visible'});
  })