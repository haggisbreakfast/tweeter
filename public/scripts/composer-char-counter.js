$(function() {
  // event handler for new tweet text input
  $('#new-tweet-text').on('input', function() {
    // subtract tweet length from character limit
    let remainingCharacters = 140 - $(this).val().length;
    $('#counter').text(remainingCharacters);
    // change character counter color to red if limit exceeded, otherwise black
    if (remainingCharacters < 0) {
      $('#counter').css('color', 'red');
    } else {
      $('#counter').css('color', 'black');
    }
    // error messages upon invalid tweets input, otherwise
    let tweetLength = $('#new-tweet-text').val().length;
    if (tweetLength <= 0) {
      $('.error-message')
        .text('you gotta write something first!')
        .slideDown();
    } else if (tweetLength > 140) {
      $('.error-message')
        .text("that's a bit too long.")
        .slideDown();
    } else {
      // otherwise hide error message
      $('.error-message').slideUp();
    }
  });
});
