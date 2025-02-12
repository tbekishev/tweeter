/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
//-------------Functions----------------------//

  //preventing the code injection in the textarea
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //new tweet form function
  function createTweetElement(data) {
    const safeHTML = `<p>${escape(data.content.text)}</p>`;
    let $tweet = `
  <form class = "postTweet"> 

    <header>

      <div class="user"><img src="${data.user.avatars}"> <p>${data.user.name}</p></div>  ${data.user.handle}

    </header><br>

    <article>

      <p class="text">${safeHTML}</p>

    </article>

    <footer>

      <p>${timeago.format(data.created_at)}</p>

      <div class="icons">

        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>

      </div>

    </footer>

  </form>`;
    return $tweet;
  }

  //new tweet rendering function
  const renderTweets = function(tweets) {
    tweets.forEach(element => {
      $("#addTweet").prepend(createTweetElement(element));
    });
  };

  //loading old tweets
  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets/",
      data: "data",
      success: function(response) {      
        renderTweets(response);
      }
    });
  }
  function addTweet() {
    $.ajax({
      type: "GET",
      url: "/tweets/",
      data: "data",
      success: function(response) {     
        const data = response[response.length - 1] 
        $("#addTweet").prepend(createTweetElement(data));
      }
    });
  }
  //----------page loading-----------//
  loadTweets();
  $("#error").hide();
  $("#error2").hide();
  $(".new-tweet").hide();

  //----------event listeners----------//

  
  $("span").on('click', () => {
    $(".new-tweet").slideToggle();
  });

  $(".fa-angles-down").on('click', () => {
    $(".new-tweet").slideToggle();
  });

  $("#tweet-text").on('focus', () => {
    $("#error").slideUp();
    $("#error2").slideUp();
  });

  $("#newTweet").on("submit", function(event) {
    event.preventDefault();
    if (!$("#tweet-text").val() || $("#tweet-text").val() === 'null' || $("#tweet-text").val() === '') {
      $("#error2").slideDown();
      return;
    }
    if ($("#tweet-text").val().length > 140) {
      $("#error").slideDown();
      return;
    }
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: function() {
        $("output").text(140);
        addTweet();
        $("#tweet-text").val('');
      }
    });
  });
});