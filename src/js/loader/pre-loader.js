$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(600).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
  })