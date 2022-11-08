$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keyup', function () {
    let val = this.value.length;
    if ($('output').text() < 0) {
      $('output')
      .text(140 - val)
      .css('color', 'red');
    } else {
      $('output')
      .text(140 - val)
      .css('color', '#545149');
    }
  })
});