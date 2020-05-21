var jaFoiSearch = false;
setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-search-result").length && jaFoiSearch == false) {
    jaFoiSearch = true;
    $(document).on("click", "#to-slide-0", function () {
      $("#to-slide-0").addClass("active-tab-p");
      $("#to-slide-1").removeClass("active-tab-p");
      $("#to-slide-2").removeClass("active-tab-p");
      $("#to-slide-3").removeClass("active-tab-p");
      $("#to-slide-4").removeClass("active-tab-p");
      $("#page-name-on-tab").text("Principais");
      goToSlide(1);
    });
    $(document).on("click", "#to-slide-1", function () {
      $("#to-slide-1").addClass("active-tab-p");
      $("#to-slide-0").removeClass("active-tab-p");
      $("#to-slide-2").removeClass("active-tab-p");
      $("#to-slide-3").removeClass("active-tab-p");
      $("#to-slide-4").removeClass("active-tab-p");
      $("#page-name-on-tab").text("Obras");
      goToSlide(2);
    });
    $(document).on("click", "#to-slide-2", function () {
      $("#to-slide-2").addClass("active-tab-p");
      $("#to-slide-1").removeClass("active-tab-p");
      $("#to-slide-0").removeClass("active-tab-p");
      $("#to-slide-3").removeClass("active-tab-p");
      $("#to-slide-4").removeClass("active-tab-p");
      $("#page-name-on-tab").text("Aulas");
      goToSlide(3);
    });
    $(document).on("click", "#to-slide-3", function () {
      $("#to-slide-3").addClass("active-tab-p");
      $("#to-slide-1").removeClass("active-tab-p");
      $("#to-slide-2").removeClass("active-tab-p");
      $("#to-slide-0").removeClass("active-tab-p");
      $("#to-slide-4").removeClass("active-tab-p");
      $("#page-name-on-tab").text("Postagens");
      goToSlide(4);
    });
    $(document).on("click", "#to-slide-4", function () {
      $("#to-slide-3").removeClass("active-tab-p");
      $("#to-slide-1").removeClass("active-tab-p");
      $("#to-slide-2").removeClass("active-tab-p");
      $("#to-slide-0").removeClass("active-tab-p");
      $("#to-slide-4").addClass("active-tab-p");
      $("#page-name-on-tab").text("Users");
      goToSlide(5);
    });
    $(".search-button").click(function () {
      $(this).toggleClass("active");
    });
    for (var i = 1; i <= $(".slider__slide").length; i++) {
      $(".slider__indicators").append(
        '<div class="slider__indicator" data-slide="' + i + '"></div>'
      );
    }
    setTimeout(function () {
      $(".slider__wrap").addClass("slider__wrap--hacked");
    }, 1000);

    function goToSlide(number) {
      $(".slider__slide").removeClass("slider__slide--active");
      $(".slider__slide[data-slide=" + number + "]").addClass(
        "slider__slide--active"
      );
    }
    $(document).on("click", "#list-tab-ut", function () {
      if ($('#app-cover').css('display') == 'block') {
        $('#app-cover').css('display', 'none')

        if ($(window).width() > 1000)
          $('.right-tab-control').css({ 'width': 'calc(45% - ' + 30 + 'px)' })

        if ($(window).width() < 1000 && $(window).width() > 764)
          $('.right-tab-control').css({ 'width': 'calc(45% - ' + 30 + 'px)' })
      }
      else {
        $('#app-cover').css('display', 'block')

        if ($(window).width() > 1000)
          $('.right-tab-control').css({ 'width': 'calc(45% - ' + 330 + 'px)' })

        if ($(window).width() < 1000 && $(window).width() > 764)
          $('.right-tab-control').css({ 'width': 'calc(45% - ' + 300 + 'px)' })
      }

    });
  } else if (!$("#container-search-result").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiSearch = false;
  }
}, 100);