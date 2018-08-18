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

  // $('#navigation').slideUp();

    $(window).resize(function(){
      if($(document).width() > 735) {
        $('#navigation').hide()
      }
    });

    $('#navigation > a').on("click", function(){
      $('#navigation').slideUp();
    });
})
