
$(document).ready(function () {

    $('body').on('click', '.back-to-top', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('#menu-bar').css('transform', 'none');
    })
    const style = 'color: #333; font-size:22px; font-family: "Montserrat", sans-serif; font-weight: bold;'
    const style2 = 'color: #444; font-size:15px; font-family: "Montserrat", sans-serif; font-weight: 600;'
    console.log("%c Bem vindo ao Olympia!", style);
    console.log("%c   Feito com VueJS, CSS, TweenMax, SCSS, Stylus, jQuery e muito amor!", style2);
    var body = document.getElementsByTagName("body")[0];

    function detectarDirecaoRolagem(e) {
        var delta = null,
            direction = false
            ;
        if (!e) {
            e = window.event;
        }
        if (e.wheelDelta) { // funciona na maioria dos casos
            delta = e.wheelDelta / 60;
        } else if (e.detail) { // funciona no Firefox
            delta = -e.detail / 2;
        }
        if (delta !== null) {
            direction = delta > 0 ? 'cima' : 'baixo';
        }

        if (direction == 'baixo') {
            $('#menu-bar').css('transform', 'translateY(-70px)');
        }
        else {
            $('#menu-bar').css('transform', 'none');
        }
    }

    setInterval(updateGradient, 10);

    $('body').on('click', '#nav-bars', function () {
        $("#menu-items").fadeIn("slow");
        $('html').css('overflow-y', 'hidden');
        $('body').css('overflow-y', 'hidden');
        $('#footer').fadeOut();
    })

    $(document.body).on('click', '.close-image', function () {
        if ($('.table-contato').css('display') == 'none') {
            $("#menu-items").fadeOut("slow");
            $('#footer').fadeIn();
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
        else {
            $('.table-contato').fadeOut('slow');
            $('#menu-items').css({
                "filter": "brightness(100%)",
            });
        }
    })

    $(document.body).on('click', '.a-contact', function () {

        $('.table-contato').fadeIn("slow");
        $('#menu-items').css({
            "filter": "brightness(40%)",
        });
    })


    $(document.body).on('click', '.footer-config', function () {

        if ($('.config').css("display") == 'none') {
            $('.config').css("display", "block");
            $('.config-img').css("transform", "rotate(70deg)");
        }
        else {
            $('.config').css("display", "none");
            $('.config-img').css("transform", "none");
        }
    })

    $(document.body).on('click', '.config-link', function () {

        if ($(this).hasClass('config-link-hover')) {
            $(this).removeClass("config-link-hover");
            $(this).addClass("config-link-clicked");
        }
        else {
            $(this).addClass("config-link-hover");
            $(this).removeClass("config-link-clicked");
        }
    })

    $(document.body).on('click', '.sumir', function () {

        if ($(document.body).hasClass('sumir-menu-bar')) {
            $('#menu-bar').css('transform', 'none');
            body.removeEventListener("mousewheel", detectarDirecaoRolagem, false);
            body.removeEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);
            $(document.body).removeClass('sumir-menu-bar');
            $('.desligar').css('visibility', 'visible');
            vindoSumir = true;
        }
        else {
            body.addEventListener("mousewheel", detectarDirecaoRolagem, false);
            body.addEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);
            $(document.body).addClass('sumir-menu-bar');
            $('.desligar').css('visibility', 'hidden');
            vindoSumir = true;
        }
    })

    $(document.body).on('click', '.desligar', function () {
        if ($(document.body).hasClass('desligar-menu-bar')) {
            $('#menu-bar').css('transform', 'none');
            $(document.body).removeClass('desligar-menu-bar');
            $('.sumir').css('visibility', 'visible');
        }
        else {
            $('#menu-bar').css('transform', 'translateY(-70px)');
            $(document.body).addClass('desligar-menu-bar');
            $('.sumir').css('visibility', 'hidden');
        }

    })

    $(document.body).on('click', '#bordao', function () {
        if ($('#palaces-container').css('display') == 'none') {
            $('#palaces-container').fadeIn("slow");
            $('.intro').addClass('go');
            $("#bordao").text('FECHAR');
            $(".intro").css('transform', 'translateY(-125px)');
        }
        else {
            $('#palaces-container').fadeOut("slow");
            $('.intro').removeClass('go');
            $("#bordao").text('CLICK!');
            $(".intro").css('transform', 'translateY(-200px)');
        }
    })

    $(document.body).on('click', '.img-artes-link', function () {
        if ($('#container-artes').length)
            $('#menu-items').fadeOut('slow');
        else {
            document.location.href = '/#/artes'
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
    })

    $(document.body).on('click', '.img-home-link', function () {
        if ($('#container-home').length)
            $('#menu-items').fadeOut('slow');
        else {
            document.location.href = '/#/home'
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
    })

    $(document.body).on('click', '.img-sobre-link', function () {
        if ($('#container-sobre').length)
            $('#menu-items').fadeOut('slow');
        else {
            document.location.href = '/#/sobre'
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
    })

    $(document.body).on('click', '.img-eventos-link', function () {
        if ($('#container-eventos').length)
            $('#menu-items').fadeOut('slow');
        else {
            document.location.href = '/#/eventos'
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
    })

    $(document.body).on('click', '.img-perfil-link', function () {
        if ($('#container-perfil').length)
            $('#menu-items').fadeOut('slow');
        else {
            document.location.href = '/#/perfil'
            $('body').css('overflow-y', 'auto');
            $('html').css('overflow-y', 'auto');
        }
    })

    $(document.body).on('click', '.artes-link', function () {
        if ($('#container-artes').length) {
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click', '.menu-link', function () {
        $('body').css('overflow-y', 'auto');
        $('html').css('overflow-y', 'auto');
    })

    $(document.body).on('click', '.home-link', function () {
        if ($('#container-home').length) {
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click', '.eventos-link', function () {
        if ($('#container-eventos').length) {
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click', '.perfil-link', function () {
        if ($('#container-perfil').length) {
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click', '.sobre-link', function () {
        if ($('#container-sobre').length) {
            $('#menu-items').fadeOut('slow');
        }
    })
})



