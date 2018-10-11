$(function() {
  /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  const tweetData = {
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
  };

  function createTweetElement(tweetData) {
    // <article class="tweet-container">
    //   <header class="tweet-container-header">
    //     <img class="image" src="">
    //     <h2 class="name">Bill Fieldz</h2>
    //     <h4 class="twitterhandle">twitterhandle</h4>
    //   </header>
    //   <section>
    //     <p>
    //       tweet
    //     </p>
    //   </section>
    //   <footer>
    //     footer
    //   </footer>
    // </article>
    var $tweet = $('<article>').addClass('tweet-container');
    var $header = $('<header>').addClass('tweet-container-header');
    var $image = $('<img>')
      .addClass('image')
      .attr('src', 'url');
    var $h2 = $('<h2>').addClass('name');
    var $h4 = $('<h4>').addClass('twitterhandle');
    var $section = $('<section>');
    var $p = $('<p>');
    var $footer = $('<footer>');

    $section = $section.append($p);
    $header = $header.append($h4, $h2, $image);
    $tweet.append($footer, $section, $header);

    return $tweet;
  }
  let $tweet = createTweetElement(tweetData);
  console.log($tweet);

  $('.container').append($tweet);
});

// function renderTweets(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
// }
