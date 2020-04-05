var jaFoi = false;
var left;

setInterval(() => {

  if ($('#container-welcome').length && jaFoi == false) {
    jaFoi = true;

    $(function () {

      left = $('.close-sobre').css('left');

      $('.close-sobre').css('left', '-10%');
      $('.usuario').css('display', 'block');

      setTimeout(function () {

        if ($('.start').is(':hover')) {
          $('.svg1').css('transform', 'rotate(60deg)')
          $(".hand-1").css('opacity', 0);
          $(".hand-tapping-1").css('opacity', 0);
          $(".tap-target-1").css('opacity', 0);
        }
        else {
          $(".hand-1").css('opacity', 1);
          $(".hand-tapping-1").css('opacity', 1);
          $(".tap-target-1").css('opacity', 1);
          $('.svg1').css('transform', 'rotate(10deg)')
        }
      }, 100);

      $('.start').click(function () {
        $('.title').text('Quem é você?');
        $('.sobre').css('opacity', 0);
        $('.login').css('opacity', 0);
        $('.start').removeClass('start').addClass('artista');
        $('.artista').text('Artista');
        $('.artista').css('margin-left', '100%');
        $('.usuario').css('opacity', 1);
        $('.usuario').css('margin-left', '-2.8em');
        $('#more-arrows').css('transition', '1s all');
        $('#more-arrows').css('opacity', 1)
        $('#animation').css('animation', 'swing 1s ease')
      })

      setTimeout(function () {
        if ($('.title').text() == 'Quem é você?') {
          $('.artista').attr('href', '/#/cadastro/artist');
        }
        else {
          $('.start').removeAttr('href');
        }
      }, 100);

      $('#more-arrows').click(function () {
        $('.title').text('Bem vindo!');
        $('.sobre').css('opacity', 1);
        $('.login').css('opacity', 1);
        $('.artista').removeClass('artista').addClass('start');
        $('.start').text('Começar');
        $('.start').css('margin-left', '0');
        $('.artista').attr('href', '');
        $('.usuario').css('margin-left', '0');
        $('#more-arrows').css('transition', '1s all');
        $('#more-arrows').css('opacity', 0);
        $('.usuario').css('opacity', 0);
        $('#animation').css('animation', 'swing 1s ease')
        $('#animation').css('animation-iteration-count', '2')
      })

      $('.sobre').click(function () {
        $('.close-sobre-img').css('opacity', 0.7)
        $('#bola-sobre').css('opacity', 1);
        $('#bola-sobre').css('top', '40%');
        $('.close-sobre-img').css(' cursor', 'pointer');
        $('.close-sobre').css('left', "'" + left + "'");
        $('.info').css('opacity', 0)
      })

      $('.close-sobre').click(function () {
        $('.close-sobre').css('cursor', 'default');
        $('.close-sobre').css('left', '-10%');
        $('.close-sobre-img').css('opacity', 0);
      })
    })
  }
  else if (!$('#container-welcome').length) {
    jaFoi = false;
  }
}, 100);
