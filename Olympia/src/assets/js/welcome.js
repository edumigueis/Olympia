var jaFoi = false;
var left;

setInterval(() => {

  if ($('#container-welcome').length && jaFoi == false) {
    jaFoi = true;

    $(function () {

      left = $('.close-sobre').css('left');

      $('.close-sobre').css('left', '-10%');
      $('.usuario').css('display', 'block');

      $('.sobre').click(function () {
        $('#bola-sobre').css('opacity', 1);
        $('#bola-sobre').css('top', '-5%');
        $('.info').css('opacity', 0)
      })
      if (parseInt($('#bola-sobre').css('top').substring(0, 3)) != "NaN") {
        $('body').click(function (event) {
          if (event.target.id == 'bola-sobre' &&  $('#bola-sobre').css('opacity') == 1) {
            $('#bola-sobre').css('top', '100%');
            $('#bola-sobre').css('opacity', 0);
            $('.info').css('opacity', 1)
          }
        });
      }

    })
  }
  else if (!$('#container-welcome').length) {
    jaFoi = false;
  }
}, 100);
