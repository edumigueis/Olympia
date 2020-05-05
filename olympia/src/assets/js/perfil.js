var jaFoiPerfil = false;

setInterval(() => {
    if ($('#container-perfil').length) {
        resizeAllGridItems();
    }
}, 500);

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

        $(document.body).on('click', '.estatisticas', function () {
            $('.sobre-mim-content').fadeOut(300);
            $('.curtidas-content').fadeOut(300);
            $('.salvos-content').fadeOut(300);
            $('.configuracoes-content').fadeOut(300);
            $('.estatisticas-content').fadeIn(300);
        });

        $(document.body).on('click', '.sobre-mim', function () {
            $('.sobre-mim-content').fadeIn(300);
            $('.curtidas-content').fadeOut(300);
            $('.salvos-content').fadeOut(300);
            $('.configuracoes-content').fadeOut(300);
            $('.estatisticas-content').fadeOut(300);
            resizeAllGridItems();
        });

        $(document.body).on('click', '.curtidas', function () {
            $('.sobre-mim-content').fadeOut(300);
            $('.curtidas-content').fadeIn(300);
            $('.salvos-content').fadeOut(300);
            $('.configuracoes-content').fadeOut(300);
            $('.estatisticas-content').fadeOut(300);
            resizeAllGridItems();
        });

        $(document.body).on('click', '.salvos', function () {
            $('.sobre-mim-content').fadeOut(300);
            $('.curtidas-content').fadeOut(300);
            $('.salvos-content').fadeIn(300);
            $('.configuracoes-content').fadeOut(300);
            $('.estatisticas-content').fadeOut(300);
            resizeAllGridItems();
        });

        $(document.body).on('click', '.configuracoes', function () {
            $('.sobre-mim-content').fadeOut(300);
            $('.curtidas-content').fadeOut(300);
            $('.salvos-content').fadeOut(300);
            $('.configuracoes-content').fadeIn(300);
            $('.estatisticas-content').fadeOut(300);
        });

        $(document.body).on('click', '.colorful', function () {
            $('.bg').addClass('colorful-css');
            $('.bg').removeClass('black-and-white-css');
            $('.bg').removeClass('black-css');
        });

        $(document.body).on('click', '.black-and-white-capa', function () {
            $('.bg').addClass('black-and-white-css');
            $('.bg').removeClass('colorful-css');
            $('.bg').removeClass('black-css');
        });

        $(document.body).on('click', '.black', function () {
            $('.bg').addClass('black-css');
            $('.bg').removeClass('colorful-css');
            $('.bg').removeClass('black-and-white-css');
        });
        $(".heart").on("click", function () {
            $(this).toggleClass("is-active");
        });
        $(".magic").on("click", function () {
            $(this).toggleClass("is-star-active");
        });
        function resizeInstance(instance) {
            item = instance.elements[0];
            resizeGridItem(item);
        }
        resizeAllGridItems();

        window.addEventListener("resize", resizeAllGridItems);

        allItems = document.getElementsByClassName("masonry-item");
    }
    else if (!$('#container-perfil').length) {
        jaFoiPerfil = false;
    }
}, 300);

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("masonry-item");
    for (x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeGridItem(item) {
    grid = document.getElementsByClassName("slide__content")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

var clickHeart = false;
var clickStar = false;
setInterval(() => {
    if ($('#container-perfil').length) {

        if (!$('body').hasClass('desligar-menu-bar') && !$('body').hasClass('sumir-menu-bar')) {
            $("#control_03-2").trigger("click");
        }

        if ($('.curtidas-content').css('display') == 'block' && !clickHeart) {
            $('.div-scroll-curtidas i').css('visibility', 'hidden');
            clickHeart = true;
            $('.div-scroll-curtidas .heart').trigger('click');
        }

        if ($('.salvos-content').css('display') == 'block' && !clickStar) {
            $('.div-scroll-salvos .heart-stage').css('display', 'none');
            $('.div-scroll-salvos .magic').trigger('click');
            clickStar = true;
        }
    }
}, 300);
