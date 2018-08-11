$(document).ready(function(){
  $(window).resize(_.debounce(function(){
    if ($(window).width() > 736) {
      $('#navigation').slideUp();
    }
  }, 500));
  $('#MenuIcon').on('click', function(){
    $('#navigation').slideToggle();
  });
  $('#navigation > a').on('click', function(){
    $('#navigation').slideUp();
  });
})
