var jaFoi = false;

setInterval(() => {

  if ($('#container-obra').css('display') == 'block' && jaFoi == false) {
    $(function () {
      jaFoi = true;

      var altura = $(document).height()

      $('#bg').css('height', altura);

      $(window).resize(function () {
        var altura2 = $(document).height()

        $('#bg').css('height', altura2);
        altura2 = 0;
      });

      $(document.body).on('click', '.img-col', function () {
        var src = $(this).attr("src");
        $('#myModal').css('display', 'block');
        $("#img01").attr("src", src);
        $(window).scrollTop(0);
        $('#mouse').css('display', 'block');
      });

      $(document.body).on('click', '.close-mod', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');
      })

      $(document.body).on('click', '#myModal', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');
      })

      
    })
  }
  else if (!$('#container-obra').length) {
    jaFoi = false;
  }
}, 100);

