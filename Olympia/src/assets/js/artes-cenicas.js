
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var jaFoiAC = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-artes-cenicas").length && jaFoiAC == false) {

    jaFoiAC = true;

    $(function () {
      showSlides(slideIndex);
    })
  }
  else if (!$("#container-artes-cenicas").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiAC = false;
  }
}, 100);