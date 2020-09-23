/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(function() {
//   const $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]


$(document).ready(function()
{
  $("#forum").on("#tweet_it", tweeting);
  //const data = createTweetElement();
  loadTweets();
  //renderTweets(data);
  

});


const tweeting = $(function() {

  const $button = $('#tweet_it');
  $button.on('click', function() {
    console.log('Button clicked, performing ajax call...');
    $("#forum").submit(function(event) {
      
      //alert("Handler for .submit called.");
      
      //const url = form.attr("action");
      //const method = form.attr("method");
      event.preventDefault();
      var formData = $(this).serialize();
      console.log(formData);
      $.post("/tweets", formData,
      {
        
      });
      console.log(formData);

      
      //createTweetElement(formData);
      loadTweets();
    });
    
  });
  
});

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweet) {

  const userText = `<div>${escape(tweet.content.text)}</div>`;

  //`<article class="tweet">Hello world</article>`
  const $tweet = $('<article class="tweet"><header class="name"><div class="display_name"><img src="' + tweet.user.avatars + '" class="profile"></img>' + tweet.user.name + '</div><div class="user_name">' + tweet.user.handle + '</div></header><div class="tweet_area">' + userText + '<hr></div><footer class="misc_tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="flag_retweet_like"><img src="/images/flag.png"></img><img src="/images/retweet.png"></img><img src="/images/heart.png"></img></div></footer></article><br>');
  console.log($tweet);
  return $tweet;
}
  


const renderTweets = function (tweets) {
  
  const container = $('#tweets-container');
  container.html('');

  for(tweet of tweets) {
    const tweetElement = createTweetElement(tweet);
    container.prepend(tweetElement);
  }

}

// $.ajax('/tweets', { method: 'GET', dataType: "json" })
// .then(function (result) {
//   renderTweets(result);
// });

// const tweets = [];
//       $.getJSON("/tweets", function(data) {
//           tweets.push(data);     
//   })
//   renderTweets(tweets);

const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET', dataType: "json" })
    .then(function (result) {
      renderTweets(result);
});
}