var jaFoi = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-obra").length && jaFoi == false) {

    jaFoi = true;

    $(function () {

      $(document.body).on('click', '.img-col', function () {
        var src = $(this).attr("src");
        $('#myModal').css('display', 'block');
        $("#img01").attr("src", src);
        $(window).scrollTop(0);
        $('#mouse').css('display', 'block');
        $('#footer').css('display', 'none');
      });
      $(document.body).on('click', '#arrows-pag-det', function () {
        $('#img-col-d').fadeOut(200);
        $('#info-col-d').fadeIn(1200);
        $('#arrows-pag-det').css('display', 'none');
        $('#arrows-pag-det-2').css('display', 'block');
        $('.bg-det').css('display', 'block');
        $('.bg-det-gray').css('display', 'none');
        $('#mouse').css('display', 'none');
      });
      $(document.body).on('click', '#arrows-pag-det-2', function () {
        $('#img-col-d').fadeIn(1200);
        $('#info-col-d').fadeOut(200);
        $('#arrows-pag-det').css('display', 'block');
        $('#arrows-pag-det-2').css('display', 'none');
        $('.bg-det').css('display', 'none');
        $('.bg-det-gray').css('display', 'block');
        $('#mouse').css('display', 'block');
      });

      $(document.body).on('click', '.close-mod', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');
        $('#footer').css('display', 'block');
      })

      $(document.body).on('click', '#myModal', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');
        $('#footer').css('display', 'block');
      })

      
    })
  }
  else if (!$("#container-obra").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoi = false;
  }
}, 100);

