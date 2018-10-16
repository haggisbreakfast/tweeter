$(document).ready(function() {
  $(function() {
    // event handler for compose button
    $('#compose-button').on('click', function() {
      // select area to slide up
      $('.new-tweet-container').slideToggle();
      // auto focus on text area
      $('#new-tweet-text').focus();
    });
  });
});
