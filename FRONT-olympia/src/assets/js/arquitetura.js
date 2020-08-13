var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var jaFoiArq = false;
setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-arquitetura").length && jaFoiArq == false) {
    jaFoiArq = true;

    $(function() {
      showSlides(slideIndex);
    });
    // Detect request animation frame
    var scroll =
      window.requestAnimationFrame ||
      // IE Fallback
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    var elementsToShow = document.querySelectorAll(".show-on-scroll");

    function loop() {
      Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });

      scroll(loop);
    }

    // Call the loop for the first time
    loop();

    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  } else if (!$("#container-arquitetura").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiArq = false;
  }
}, 100);
