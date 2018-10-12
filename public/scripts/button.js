$(document).ready(function () {
  $(function () {
    $("#compose-button").on('click', function () {
      // select area to slid up
      $(".new-tweet").slideToggle();
      $("#new-tweet-text").focus();
    })
  })

});