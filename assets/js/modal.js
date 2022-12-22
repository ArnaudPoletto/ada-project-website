var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modal-caption");
function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    modalImg.style.cursor = "zoom-out";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

var div = document.getElementById("imgModal");
div.onclick = function () {
    modal.style.display = "none";
}
