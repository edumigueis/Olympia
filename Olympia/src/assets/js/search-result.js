var jaFoiSearch = false;
setInterval(() => {
    //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
    if ($("#container-post").length && jaFoiSearch == false) {
      jaFoiSearch = true;
$(document).on("click", "#to-slide-0", function () {
    curSlide = 0;
    changeSlides();
    $('#to-slide-0').addClass('active-tab-p');
    $('#to-slide-1').removeClass('active-tab-p');
    $('#to-slide-2').removeClass('active-tab-p');
    $('#page-name-on-tab').text('Explorar');
  });
  $(document).on("click", "#to-slide-1", function () {
    curSlide = 1;
    changeSlides();
    $('#to-slide-1').addClass('active-tab-p');
    $('#to-slide-0').removeClass('active-tab-p');
    $('#to-slide-2').removeClass('active-tab-p');
    $('#page-name-on-tab').text('Aprender');
  });
  $(document).on("click", "#to-slide-2", function () {
    curSlide = 2;
    changeSlides();
    $('#to-slide-2').addClass('active-tab-p');
    $('#to-slide-1').removeClass('active-tab-p');
    $('#to-slide-0').removeClass('active-tab-p');
    $('#page-name-on-tab').text('Inspirar-se');
  });
} else if (!$("#container-post").length) {
  //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
  jaFoiSearch = false;
}
}, 100);