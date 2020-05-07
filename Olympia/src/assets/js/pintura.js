
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

var jaFoiPintur = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-escultura").length && jaFoiPintura == false) {

    jaFoiPintura = true;

    $(function () {
      showSlides(slideIndex);
    })
  }
  else if (!$("#container-escultura").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiPintura = false;
  }
}, 100);