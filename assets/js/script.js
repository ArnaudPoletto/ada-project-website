var started_video = false;
var ended_video = false;

var TOTAL_GRAPH_STATES = 5;
var GRAPH_STATES = [
    "ss", 
    "bece", 
    "clce", 
    "clco", 
    "mocl"
];
var GRAPHE_STATE_NAMES = [
    "Sponsor categories", 
    "Betweeness centrality", 
    "Closeness centrality", 
    "Clustering coefficient", 
    "Modularity class"
];
var GRAPH_STATE_FILES = [
    "../assets/img/ss_network.gexf",
    "../assets/img/ss_network_betweeness_centrality.gexf",
    "../assets/img/ss_network_closeness_centrality.gexf",
    "../assets/img/ss_network_clustering_coefficient.gexf",
    "../assets/img/ss_network_modularity_class.gexf"
]
var graph_state = 0;

// GRAPHS

for (var i = 0; i < TOTAL_GRAPH_STATES; i++) {
    sigma.parsers.gexf(GRAPH_STATE_FILES[i], {
        container: 'graph-container-' + GRAPH_STATES[i]
    });
}

// EVENTS

window.onload = function() {
    window.scroll(0, 0);

    waitForElement("#graph-container-ss", function() {
        waitForElement("#graph-container-bece", function() {
            waitForElement("#graph-container-clce", function() {
                waitForElement("#graph-container-clco", function() {
                    waitForElement("#graph-container-mocl", function() {
                        setGraphState(graph_state);
                    });
                });
            });
        });
    });
}

window.onscroll = function() {
    scrollFunction();
};

// FUNCTIONS

function waitForElement(elementPath, callBack){
    window.setTimeout(function(){
      if($(elementPath).length){
        callBack(elementPath, $(elementPath));
      }else{
        waitForElement(elementPath, callBack);
      }
    },500)
  }

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

// The time-bar is a div that is 100% width of the screen
// Becomes red when scroling down by percentage
function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    n_px_dot = 20 - 40 * scrolled / 100;
    n_px_bar = 40 * scrolled / 100;
    document.getElementById("time-bar-full").style.width = "calc(" + scrolled + "% - " + n_px_bar + "px)";
    document.getElementById("time-dot").style.left = "calc(" + scrolled + "% + " + n_px_dot + "px)";
}

function nextGraphState() {
    graph_state = (graph_state + 1) % TOTAL_GRAPH_STATES;
    setGraphState(graph_state);
}

function setGraphState(state) {
    // hide all divs, but current state
    for (var i = 0; i < TOTAL_GRAPH_STATES; i++) {
        document.getElementById("graph-container-" + GRAPH_STATES[i]).style.display = "none";
    }
    // LOAD ELEMENT
    document.getElementById("graph-container-" + GRAPH_STATES[state]).style.display = "block";
    document.getElementById("btn-ss").innerHTML = GRAPHE_STATE_NAMES[state];
}