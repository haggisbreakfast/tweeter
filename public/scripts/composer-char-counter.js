$(function () {
  $('#new-tweet-text').on('input', function () {
    let remainingCharacters = 140 - $(this).val().length;
    $('#counter').text(remainingCharacters);
    if (remainingCharacters < 0) {
      $('#counter').css('color', 'red');
    } else {
      $('#counter').css('color', 'black');
    }
    let tweetLength = $('#new-tweet-text').val().length;
    if (tweetLength <= 0) {
      $(".error-message").text("you gotta write something first!").slideDown()
    } else if (tweetLength > 140) {
      $(".error-message").text("that's a bit too long.").slideDown()
    } else {
      $(".error-message").slideUp();
    }
  });
});

// $("#counter").addClass("counter-negative");
// $("#counter").removeClass
