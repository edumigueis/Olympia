var jaFoiPerfil = false;

setInterval(() => {
    if ($('#container-perfil').length && !jaFoiPerfil) {

        jaFoiPerfil = true;

        $(document.body).on('click', '.img-profile', function () {
            var src = $(this).attr("src");
            $('#myModal').css('display', 'block');
            $("#img01").attr("src", src);
            $("#img01").css("max-width", '55%');
            $(window).scrollTop(0);
            $('#mouse').css('display', 'block');
            $('#footer').css('display', 'none');
        });
        $(document.body).on('click', '.close-mod', function () {
            $('#myModal').css('display', 'none');
            $('#mouse').css('display', 'none');
            $('#footer').css('display', 'block');
        });

        $(document.body).on('click', '#myModal', function () {
            $('#myModal').css('display', 'none');
            $('#mouse').css('display', 'none');
            $('#footer').css('display', 'block');
        });

    }
    else if (!$('#container-perfil').length) {
        jaFoiPerfil = false;
    }
}, 100);
