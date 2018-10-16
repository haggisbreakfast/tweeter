$(function() {
  // building createTweetElement
  function createTweetElement(tweetData) {
    var $article = $('<article>').addClass('tweet-container');
    var $header = $('<header>').addClass('tweet-container-header');
    var $image = $('<img>')
      .addClass('image')
      .attr('src', tweetData.user.avatars.small);
    var $h2 = $('<h2>')
      .addClass('name')
      .text(tweetData.user.name);
    var $h4 = $('<h4>')
      .addClass('twitterhandle')
      .text(tweetData.user.handle);
    var $section = $('<section>').text(tweetData.content.text);
    var $footer = $('<footer>');
    var $icons = $('<div>').addClass('icons');
    var $timestamp = $('<div>').text(moment(tweetData.created_at).fromNow());
    // inserted favicons
    var $heartIcon = $('<i class = "fa fa-heart" >');
    var $retweetIcon = $('<i class = "fa fa-retweet" >');
    var $flagIcon = $('<i class = "fa fa-flag">');
    // appending children to parent elements
    $section = $section;
    $header = $header
      .append($image)
      .append($h2)
      .append($h4);
    $article
      .append($header)
      .append($section)
      .append($footer);
    $icons
      .append($flagIcon)
      .append($retweetIcon)
      .append($heartIcon);
    $footer.append($timestamp).append($icons);

    let $tweet = $article;
    // return result
    return $tweet.append(tweetData);
  }

  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function(element) {
      // attach tweets to top of tweet container
      var result = createTweetElement(element);
      $('.alltweetscontainer').prepend(result);
    });
  }
  //event handler for submission of new tweets
  var $newTweetForm = $('#new-tweet').on('submit', function(event) {
    // prevent submitting and reloading page
    event.preventDefault();
    let tweetLength = $('#new-tweet-text').val().length;
    // default hide error message
    $('.error-message').slideUp();
    // if invalid tweet upon submit show errors
    if (tweetLength <= 0) {
      $('.error-message')
        .text('you gotta write something first!')
        .slideDown();
    } else if (tweetLength > 140) {
      $('.error-message')
        .text('still too long...')
        .slideDown();
    } else {
      console.log('submit successful');
      // show tweet as text string
      var data = $newTweetForm.serialize();
      // resets text box and counter upon submission
      $('#new-tweet-text').val('');
      $('#counter').text('140');
    }

    // POST tweets using ajax
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: function(result) {
        // attach newest tweet to top
        $('.alltweetscontainer').prepend(data);
        loadTweets();
      },
      error: function(err) {}
    });
  });

  function loadTweets() {
    // GET tweets
    $.get('/tweets', function(tweets) {
      renderTweets(tweets);
    });
  }
  loadTweets();
});
