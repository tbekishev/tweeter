//toTop button appear and disappear

$(document).ready(function() {
const toTop = $("#scrollTop");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      toTop.addClass('show');
    } else {
      toTop.removeClass('show');
    }
  });

//toTop button click
toTop.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});
})