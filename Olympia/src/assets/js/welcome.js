var jaFoi = false;
var left;

setInterval(() => {

  if ($('#container-welcome').length && jaFoi == false) {
    jaFoi = true;

    $(function () {
      $('.sobre').on("click", function () {
        if(!$('.modal-sobre').hasClass('.modal-sobre-active'))
          $('.modal-sobre').addClass("modal-sobre-active");
        else
          $('.modal-sobre').removeClass("modal-sobre-active");
      });

    $('.modal-container').on('click',function (event) {
      if(event.target.id!='content'){
          $('.modal-sobre').removeClass("modal-sobre-active");
        }
      });

      left = $('.close-sobre').css('left');

      $('.close-sobre').css('left', '-10%');
      $('.usuario').css('display', 'block');
    })
  }
  else if (!$('#container-welcome').length) {
    jaFoi = false;
  }
}, 100);
