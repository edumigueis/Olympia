
//VARIÁVEIS AUXILIARES
var jaFoi = false;

setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-evento").length && jaFoi == false) {
    jaFoi = true;

    $(function() {
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
