
//VARIÁVEIS AUXILIARES
var jaFoi = false;

setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-evento").length && jaFoi == false) {
    jaFoi = true;

    $(function() {
      $(".dark-mode-activators").on("click",function () {
        if ($("#fullpage").hasClass("night")) {
          $("body").removeClass('dark-mode');
          $("body").removeClass('white-6');
        }
        else {
            $("body").addClass('dark-mode');
            $("body").addClass('white-6');
        }
    });
      $(".view-gallery button").on("click", function() {
        $(".box").toggleClass("animated");
        // $('ul').css({
        //   'max-width' : '100%'
        // });
      });

     
    });
  } else if (!$("#container-evento").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoi = false;
  }
}, 100);
