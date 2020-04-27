var jaFoiMenu = false;

setInterval(() => {
    if ($('.menu-container').length && jaFoiMenu == false) {
        jaFoimenu = true;

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
        jaFoiMenu = false;
    }

}, 1);

$(document).ready(function () {


    var body = document.getElementsByTagName("body")[0];

    if (body.addEventListener) {
        // IE9, Chrome, Safari, Opera
        body.addEventListener("mousewheel", detectarDirecaoRolagem, false);
        // Firefox
        body.addEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);
    }
    
    function detectarDirecaoRolagem( e )
    {
        var delta = null,
            direction = false
        ;
        if ( !e ) {
            e = window.event;
        }
        if ( e.wheelDelta ) { // funciona na maioria dos casos
            delta = e.wheelDelta / 60;
        } else if ( e.detail ) { // funciona no Firefox
            delta = -e.detail / 2;
        }
        if ( delta !== null ) {
            direction = delta > 0 ? 'cima' : 'baixo';
        }
    
        if(direction == 'baixo'){
            $('#menu-bar').css('transform','translateY(-70px)');
        }
        else{
            $('#menu-bar').css('transform','none');
        }
    
        return direction;
    }

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

    
    $(document.body).on('click', '.footer-config', function () {

        if ($('.config').css("display") == 'none'){
            $('.config').css("display","block");
            $('.config-img').css("transform","rotate(70deg)");
        }
        else{
            $('.config').css("display","none");
            $('.config-img').css("transform","none");
        }
    })

    $(document.body).on('click', '.config-link', function () {

        if ($(this).hasClass('config-link-hover')){
            $(this).removeClass("config-link-hover");
            $(this).css('font-weight','bold');
            $(this).addClass("config-link-clicked");
        }
        else{
            $(this).addClass("config-link-hover");
            $(this).css('font-weight','normal');
            $(this).removeClass("config-link-clicked");
        }
    })

    $(document.body).on('click', '#bordao', function () {
        if($('#palaces-container').css('display') == 'none'){
            $('#palaces-container').fadeIn("slow");
            $('.intro').addClass('go');
            $("#bordao").text('FECHAR');
            $("#bordao").css('transform','translateX(1px)');
            $("svg.intro").css('transform','none');
        }
        else{
            $('#palaces-container').fadeOut("slow");
            $('.intro').removeClass('go');
            $("#bordao").text('CLICK!');
            $("#bordao").css('transform','none');
            $(".intro").css('transform','translateY(-150px)');
        }
    })
})


