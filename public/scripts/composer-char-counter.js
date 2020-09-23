$(document).ready(function () {
  const container = $('#counter');
  const tweet_area = $('#tweet-text');
  console.log("Document working!");

  tweetcounter = $("#tweet-text").keyup(function () {


    let max_count = 140;
    let character_count = tweet_area.val().length;
    let character_limit = max_count - character_count;
    if (character_limit < 0) {
      $("#counter").css("color", "red");
    }
    else {
      $("#counter").css("color", "#545149");
    }

    container.html(character_limit);

    console.log(tweet_area.val().length + 1);

    console.log("Output Clicked!");

  });
});