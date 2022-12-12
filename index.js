var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("sImg");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}