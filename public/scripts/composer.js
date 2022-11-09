const toTop = $("#scrollTop");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      toTop.addClass('show');
    } else {
      toTop.removeClass('show');
    }
  });

toTop.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop:0}, '400');
});

