var jaFoi = false;
var left;

setInterval(() => {

  if ($('#container-welcome').length && jaFoi == false) {
    jaFoi = true;

    $(function () {

      left = $('.close-sobre').css('left');

      $('.close-sobre').css('left', '-10%');
      $('.usuario').css('display', 'block');

      $('.start').click(function () {
        $('.title').text('Quem é você?');
        $('.sobre').css('opacity', 0);
        $('.login').css('opacity', 0);
        $('.start').removeClass('start').addClass('artista');
        $('.artista').text('Artista');
        $('.artista').css('margin-left', '10em');
        $('.usuario').css('opacity', 1);
        $('.usuario').css('margin-left', '2em');
        $('#more-arrows').css('transition', '1s all');
        $('#more-arrows').css('opacity', 1);
        $('#animation').css('animation', 'none');
        $('#animation').css('animation', 'swing 1s ease')
        $('.usuario').css('z-index', '999');
        $('.artista').addClass('media');
        $('.artista').css('margin-top','100px');
        $('#more-arrows').css('height','fit-content');
      })

      setTimeout(function () {
        if ($('.title').text() == 'Quem é você?') {
          $('.artista').attr('href', '/#/cadastro/artist');
        }
        else {
          $('.start').removeAttr('href');
        }
      }, 100);

      $('#more-arrows-click').click(function () {
        $('.artista').css('transform','none');
        $('.title').text('Bem vindo!');
        $('.sobre').css('opacity', .8);
        $('.login').css('opacity', .8);
        $('.artista').removeClass('artista').addClass('start');
        $('.start').text('Começar!');
        $('.start').css('margin-left', '0');
        $('.artista').attr('href', '');
        $('.usuario').css('margin-left', '6em');
        $('#more-arrows').css('opacity', 0);
        $('.usuario').css('opacity', 0);
        $('.usuario').css('z-index', '-50');
        $('#animation').css('animation', 'none');
        $('#animation').css('animation', 'swing 1s ease');
        $('.start').removeClass('media');
        $('#more-arrows').css('height','0');
      })

      $('.sobre').click(function () {
        $('#bola-sobre').css('opacity', 1);
        $('#bola-sobre').css('top', '-5%');
        $('.info').css('opacity', 0)
      })
      if (parseInt($('#bola-sobre').css('top').substring(0, 3)) != "NaN") {
        $('#bola-sobre').click(function (event) {
          if (event.target.id != '#bola-sobre') {
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
