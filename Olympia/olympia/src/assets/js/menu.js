
setInterval(() => {
    var coordenadas = document.getElementById('menu-item-art').getBoundingClientRect();

    $('.c-circle-menu__toggle').css('top', coordenadas.bottom + 50);
    $('.c-circle-menu__toggle').css('left', coordenadas.left + 8);
    $('.c-circle-menu__item').css('top', coordenadas.top + 400);
    $('.c-circle-menu__item').css('right', coordenadas.right);

}, 100);

$(document).ready(function () {

    setInterval(updateGradient, 10);

    $(document.body).on('click', '#forced-click', function () {
        alert('entrei');
        window.location.reload();
    })

    $(document.body).on('click', '#nav-bars', function () {
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
})


