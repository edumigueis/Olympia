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
  function scrollUp() {
    var vheight = $(window).height();
    $("html, body").animate(
      {
        scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
      },
      800
    );
  }
var jaFoiSugest = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-sugestoes").length && jaFoiSugest == false) {

    jaFoiSugest = true;

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
        $('.return-btn').css('display','block')
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
    $('.return-btn').on('click', function(){
        $(".choose-wrapper").css("display", "block");
        $('.return-btn').css('display','none')
          scrollUp();
        setTimeout(function() {
          $(".wrapper-form").css("display", "none");
          $("svg").css("display", "none");
        }, 50);
    });

    $(".fa-close").on("click", function(){
      $("#img-file").attr("src", "");
      $(".container").css("height", "380px");
      $(".fa-close").css('opacity','0')
    });

    $("#file-input").on("change", function() {
      readURL(this);
    });
    /*-----------------------------------------------------Final Verifications*/
    setInterval(function () {
        if ($("#det").val().length < 50) {
          document.getElementById("registrar").disabled = true;
          $("#registrar").css("opacity", "0.7");
          $("#registrar").css("cursor", "unset");
        } else{
          document.getElementById("registrar").disabled = false;
          $("#registrar").css("opacity", "1");
          $("#registrar").css("cursor", "pointer");
        }
    }, 100);
    /*-----------------------------------------------------/Final Verifications*/
  }
  else if (!$("#container-sugestoes").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiSugest = false;
  }
}, 100);

