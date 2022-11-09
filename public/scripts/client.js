/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
function createTweetElement(data) {
  const newTimestamp = new Date(Date.now() - data.created_at);
  let $tweet = `
  <form class = "tweet"> 
  <header>
  <div class="user"><img src="${data.user.avatars}"> <p>${data.user.name}</p></div>  ${data.user.handle}
  </header><br>
  <article>
  <p class="text">${data.content.text}</p>
  </article>
  <footer>
  <p>${(newTimestamp.getDate())} days ago</p>
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
  renderTweets(data);
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