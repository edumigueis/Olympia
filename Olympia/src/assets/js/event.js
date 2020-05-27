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
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

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
      function formatDate(input) {
        var datePart = input.match(/\d+/g),
          year = datePart[0], // get only two digits
          month = datePart[1],
          day = datePart[2];

        return day + "/" + month + "/" + year;
      }
      var codigo = 1;
      $.getJSON("https://localhost:5001/api/Eventos/"+codigo, function(result) 
      {
        $.each(result, function(i, field) {
          $("#event-name").text(field.nome);
          $("#event-info-nome").text(field.nome);
          $("#event-info-local").text("Endereço:" + field.endereco);
          $("#event-info-datas").text(
            "Data:" + formatDate(field.dataEvento.substring(0, 10).replace("-", "/"))
          );
          $("#event-info-horarios").text("Horários:" + field.horarios);
          $("#of-web-link-eve").href = field.linkSiteOficial;
          $(".day").text(field.dataEvento.toString().substring(8, 10));
          $(".month").text(
            monthNames[parseInt(field.dataEvento.substring(5, 7)) - 1]
              .substring(0, 3)
              .toUpperCase()
          );
          $("#event-name").text(field.nome);
          $("#adress-pt-1").text(
            field.endereco.substring(0, field.endereco.indexOf("Cidade:", 3))
          );
          $("#adress-pt-2").text(
            field.endereco.substring(
              field.endereco.indexOf("Cidade:", 3),
              field.endereco.indexOf("País:", 6)
            )
          );
          $("#adress-pt-3").text(
            field.endereco.substring(field.endereco.indexOf("País:", 6))
          );
          $("#desc-ev-wrapper").text(field.descricao);
          $("#event-map").attr("src", field.localizacaoCoord);
        });
      });
    });
  } else if (!$("#container-evento").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiEvento = false;
  }
}, 100);
