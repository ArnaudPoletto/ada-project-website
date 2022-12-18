var started_video = false;
var ended_video = false;

function playVideo() {
    var height = window.innerHeight;
    window.scrollBy(0, height);
    started_video = true;
    ended_video = false;
}

function replayVideo() {
    // go to start of document, without scroll animation
    window.scroll(0, 0);
    ended_video = true;
    started_video = false;
}

// At the beginning
window.onload = function() {
    window.scroll(0, 0);
}

// Time bar
window.onscroll = function() {
    scrollFunction();
};

// The time-bar is a div that is 100% width of the screen
// Becomes red when scroling down by percentage
function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled)
    n_px_dot = 20 - 40 * scrolled / 100;
    n_px_bar = 40 * scrolled / 100;
    document.getElementById("time-bar-full").style.width = "calc(" + scrolled + "% - " + n_px_bar + "px)";
    document.getElementById("time-dot").style.left = "calc(" + scrolled + "% + " + n_px_dot + "px)";
}