$(function () {
  /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
    var $section = $('<section>');
    var $p = $('<p>').text(tweetData.content.text);
    var $footer = $('<footer>').text(tweetData.created_at);

    $section = $section.append($p);
    $header = $header
      .append($h4)
      .append($h2)
      .append($image);
    $article
      .append($footer)
      .append($section)
      .append($header);
    let $tweet = $article;

    // $tweet.append(tweetData);
    return $tweet.append(tweetData);
  }
  //let $tweet = createTweetElement(tweetData);
  //console.log($tweet);

  const data = [
    {
      user: {
        name: 'Newton',
        avatars: {
          small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
          regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
          large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
        },
        handle: '@SirIsaac'
      },
      content: {
        text: 'If I have seen further it is by standing on the shoulders of giants'
      },
      created_at: 1461116232227
    },
    {
      user: {
        name: 'Descartes',
        avatars: {
          small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
          regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
          large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
        },
        handle: '@rd'
      },
      content: {
        text: 'Je pense , donc je suis'
      },
      created_at: 1461113959088
    },
    {
      user: {
        name: 'Johann von Goethe',
        avatars: {
          small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
          regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
          large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
        },
        handle: '@johann49'
      },
      content: {
        text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
      },
      created_at: 1461113796368
    }
  ];

  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function (element) {
      var result = createTweetElement(element);
      $('.alltweetscontainer').prepend(result);
      console.log(element);
    });
  }

  renderTweets(data);

  // <main class="container">
  //   <section class="new-tweet">
  //     <h2 class="new-tweet-header">Compose Tweet</h2>
  //     <form id="new-tweet" method="POST" action="/tweets">
  //       <textarea class="new-tweet-text" name="text"

  var $newTweetForm = $('#new-tweet').on('submit', function (event) {
    // prevent submitting and reloading page
    event.preventDefault();
    let tweetLength = $('#new-tweet-text').val().length;
    $(".error-message").slideUp();
    if (tweetLength <= 0) {
      $(".error-message").text("no tweet bro").slideDown()
    } else if (tweetLength > 140) {
      $(".error-message").text("2 long").slideDown()
    } else {
      console.log('submit successful');
      var data = $newTweetForm.serialize();
      console.log(data);
    }

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: function (result) {
        $('.alltweetscontainer').prepend(data);
        loadTweets();
      },
      error: function (err) { }
    });
  });
  console.log($newTweetForm);

  function loadTweets() {
    $.get('/tweets', function (tweets) {
      renderTweets(tweets);
    });
  }
  loadTweets();
});
