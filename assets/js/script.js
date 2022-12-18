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
    console.log('a')
    window.scroll(0, 0);
}

// Time bar
window.onscroll = function() {
    unscrollStart();
    unscrollEnd();
    scrollFunction();
};

// The time-bar is a div that is 100% width of the screen
// Becomes red when scroling down by percentage
function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop - document.documentElement.clientHeight;
    var height = document.documentElement.scrollHeight - 2 * document.documentElement.clientHeight;
    var scrolled = Math.max(0, (winScroll / height) * 100);
    console.log(scrolled)
    n_px_dot = 20 - 40 * scrolled / 100;
    n_px_bar = 40 * scrolled / 100;
    document.getElementById("time-bar-full").style.width = "calc(" + scrolled + "% - " + n_px_bar + "px)";
    document.getElementById("time-dot").style.left = "calc(" + scrolled + "% + " + n_px_dot + "px)";
}

function unscrollStart() {
    var height = window.innerHeight;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll < height && !started_video) {
        window.scroll(0, 0);
    }

    if(winScroll < height && started_video) {
        window.scroll(0, height);
    }
}

function unscrollEnd() {
    var total_height = document.documentElement.scrollHeight
    var height = total_height - 1.1 * document.documentElement.clientHeight;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll > height && !ended_video) {
        window.scroll(0, total_height);
    }
}