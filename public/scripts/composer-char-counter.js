$(document).ready(function() {
  $('.new-tweet-text').on('keydown', function() {
    let remainingCharacters = 140 - $(this).val().length;
    console.log(remainingCharacters);
    $('#counter').text(remainingCharacters);
    if (remainingCharacters < 0) {
      $('#counter').css('color', 'red');
    } else {
      $('#counter').css('color', 'black');
    }
  });
});
