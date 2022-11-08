/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
const tweet = `
<form class = "tweet"> 
<header>
<i class="fa-solid fa-user">  John Travolta</i>@jtravolta999
</header><br>
<article>
  <p class="text">If I have seen further it is by standing on the shoulders of giants</p>
  </article>
  <footer>
<p>10 days ago</p>
<div class="icons">
<i class="fa-solid fa-flag"></i>
<i class="fa-solid fa-retweet"></i>
<i class="fa-solid fa-heart"></i>
</div>
</footer>
</form>
<br>`;
$("main").append(tweet);
});