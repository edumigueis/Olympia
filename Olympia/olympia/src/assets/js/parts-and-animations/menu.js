var jaFoi = false;
setInterval(() => {
    if ($('.menu-container').length && jaFoi == false) {
        jaFoi = true;

        var coordenadas = document.getElementById('menu-item-art').getBoundingClientRect();
        var tamanho = document.getElementsByClassName('ico')[0].getBoundingClientRect();

        $('.c-circle-menu__toggle').css('top', coordenadas.bottom + 50);
        $('.c-circle-menu__toggle').css('left', coordenadas.left);
        $('.c-circle-menu__item').css('top', coordenadas.top + 400);
        $('.c-circle-menu__item').css('right', coordenadas.right);
        $('.js-menu-container-circle').css('top', coordenadas.top - 30);
        $('.js-menu-container-circle').css('right', coordenadas.right - 155);
        $('.js-menu-container-circle').css('width', tamanho.width + 490);
        $('.js-menu-container-circle').css('height', tamanho.height + 290);

    }
    else if (!$('.menu-container').length) {
        jaFoi = false;
    }

}, 1);

$(document).ready(function () {

    setInterval(updateGradient, 10);

    $('body').on('click', '#nav-bars', function () {
        $("#menu-items").fadeIn("slow");
        $('#footer').fadeOut();
    })

    $(document.body).on('click', '.close', function () {
        if ($('.table-contato').css('display') == 'none') {
            $("#menu-items").fadeOut("slow");
            $('#footer').fadeIn();
        }
        else {
            $('.table-contato').fadeOut('slow');
            $('#container-menu').css({
                "-webkit-filter": "blur(" + 0 + "px)",
                "filter": "blur(" + 0 + "px)",
                "-moz-filter": "blur(" + 0 + "px)",
                "-o-filter": "blur(" + 0 + "px)",
                "-ms-filter": "blur(" + 0 + "px)",
            });
        }
    })

    $(document.body).on('click', '.a-contact', function () {

        $('.table-contato').fadeIn("slow");
        $('#container-menu').css({
            "-webkit-filter": "blur(" + 10 + "px)",
            "filter": "blur(" + 10 + "px)",
            "-moz-filter": "blur(" + 10 + "px)",
            "-o-filter": "blur(" + 10 + "px)",
            "-ms-filter": "blur(" + 10 + "px)",
        });
    })

    $(document.body).on('click', '#bordao', function () {
        if($('#palaces-container').css('display') == 'none'){
            $('#palaces-container').fadeIn("slow");
            $('.intro').addClass('go');
            $("#bordao").text('FECHAR');
            $("#bordao").css('transform','translateX(8px)');
        }
        else{
            $('#palaces-container').fadeOut("slow");
            $('.intro').removeClass('go');
            $("#bordao").text('CLICK!');
            $("#bordao").css('transform','none');
        }
    })
})


