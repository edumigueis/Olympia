// The scroll-down function
function scrollDown() {
    var vheight = $(window).height();
    $("html, body").animate(
      {
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
      },
      700
    );
  }
  function scrollDownPlus() {
    var vheight = $(window).height();
    $("html, body").animate(
      {
        scrollTop:
          (Math.floor($(window).scrollTop() / vheight) + 1) * vheight + 300
      },
      700
    );
  }
var jaFoiFB = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-feedback").length && jaFoiFB == false) {

    jaFoiFB = true;
    $('.module').on('click', function(){
        $(".wrapper-form").css("display", "block");
        
        var width = $(window).width();
        if (width < 901) {
          scrollDownPlus();
        } else {
          scrollDown();
        }
        event.preventDefault();
        setTimeout(function() {
          $(".choose-wrapper").css("display", "none");
          $("svg").css("display", "block");
        }, 840);
    })
  }
  else if (!$("#container-feedback").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiFB = false;
  }
}, 100);