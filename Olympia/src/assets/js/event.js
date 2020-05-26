/*document.addEventListener("DOMContentLoaded", function() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});*/
//VARIÁVEIS AUXILIARES
var vzs = 0;
var jaFoiEvento = false;
setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-evento").length && jaFoiEvento == false) {
    jaFoiEvento = true;

    $(function() {
      $(".dark-mode-activators").on("click", function() {
        if ($("#fullpage").hasClass("night")) {
          $("body").removeClass("dark-mode");
          $("body").removeClass("white-6");
        } else {
          $("body").addClass("dark-mode");
          $("body").addClass("white-6");
        }
      });

      /*    $('#to-top-tb').click(function(ev){
      ev.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  })
  $('#to-info-tb').click(function(ev){
    ev.preventDefault();
    $("html, body").animate({ scrollTop: 500 }, 600);
    return false;
})
$('#to-gal-tb').click(function(ev){
  ev.preventDefault();
  $("html, body").animate({ scrollTop: 2000 }, 600);
  return false;
})
$('#to-loc-tb').click(function(ev){
  ev.preventDefault();
  $("html, body").animate({ scrollTop: 2000 }, 600);
  return false;
})
$('#to-ab-tb').click(function(ev){
  ev.preventDefault();
  $("html, body").animate({ scrollTop: 1500 }, 600);
  return false;
})*/
      $(".view-gallery button").on("click", function() {
        if (!$(".box").hasClass("animated")) {
          $(".box").addClass("animated");
        } else {
          $(".box").removeClass("animated");
        }
        // $('ul').css({
        //   'max-width' : '100%'
        // });
      });
      $.getJSON("https://localhost:5001/api/Eventos/1", function(result){
      $.each(result, function(i, field){
        var latitude = field.localizacaoCoord.substring(1,field.localizacaoCoord.indexOf(','));
        var longitude = field.localizacaoCoord.substring(field.localizacaoCoord.indexOf(',') + 1);

            conteudoDiv1 = '';
            conteudoDiv += '<div class="btn-wrap"><a href="#" class="know-more-btn"><span class="know-more-btn-inner">Saber Mais</span></a></div><li class="card-item-2 white"><div class="event-date-container"><p class="expo-name">'+field.nome+'</p><p class="date">'+field.data.substring(0,10)+'</p></div></li><li class="card-item-last white"><div class="event-location-container">';
            conteudoDiv += '<iframe src="https://maps.google.com/maps?q='+latitude+', '+longitude+'&z=15&output=embed" width="400" height="264" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false" tabindex="0"></iframe></div></li></ul></div>'
          $("#events-container").append(conteudoDiv);
      });
    });
    });
  } else if (!$("#container-evento").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiEvento = false;
  }
}, 100);
