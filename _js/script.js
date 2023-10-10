var modal = document.getElementById("modal");
var images = document.getElementsByClassName("thumbnail");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.filter = "blur(8px)";
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  document.body.style.filter = "none";
}