/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(data) {
  let $tweet = `
  <form class = "tweet"> 
  <header>
  <div class="user"><img src="${data.user.avatars}"> <p>${data.user.name}</p></div>  ${data.user.handle}
  </header><br>
  <article>
  <p class="text">${data.content.text}</p>
  </article>
  <footer>
  <p>${timeago.format(data.created_at)}</p>
  <div class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </form>
  <br>`;
  return $tweet;
}

const renderTweets = function(tweets) {
  tweets.forEach(element => {
    $("main").append(createTweetElement(element));
  });
}

$(document).ready(function() {
  function loadtweets() {
    $.ajax({
      type: "GET",
      url: "/tweets/",
      data: "data",
      success: function (response) {
        renderTweets(response);
      }
    });
  }
  loadtweets();
  //renderTweets(data);
  $("#newTweet").on("submit", function(event) {
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: function() { 
      }
    });
    event.preventDefault();
  })
});