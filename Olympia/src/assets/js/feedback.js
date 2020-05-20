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

    var readURL = function(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $("#img-file").attr("src", e.target.result);

          $(".container").css("height", "500px");
          $(".fa-close").css("opacity", "1");
        };

        reader.readAsDataURL(input.files[0]);
      }
    };

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
    });

    $(".fa-close").on("click", function(){
      $("#img-file").attr("src", "");
      $(".container").css("height", "360px");
      $(".fa-close").css('opacity','0')
    });

    $("#file-input").on("change", function() {
      readURL(this);
    });
  }
  else if (!$("#container-feedback").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiFB = false;
  }
}, 100);