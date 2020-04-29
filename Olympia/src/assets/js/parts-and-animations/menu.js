
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

    $(document.body).on('click', '.close-image', function () {
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
            $(".intro").css('transform','translateY(-125px)');
        }
        else{
            $('#palaces-container').fadeOut("slow");
            $('.intro').removeClass('go');
            $("#bordao").text('CLICK!');
            $(".intro").css('transform','translateY(-200px)');
        }
    })

    $(document.body).on('click','.artes-link',function(){
        if($('#container-artes').length){
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click','.home-link',function(){
        if($('#container-home').length){
            $('#menu-items').fadeOut('slow');
        }
    })

    $(document.body).on('click','.eventos-link',function(){
        if($('#container-eventos').length){
            $('#menu-items').fadeOut('slow');
        }
    })
})


