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
            $("#img01").css("max-width", '35%');
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

        $('body').on('click', '.img-ico', function () {
            $('.modal-form').css('display', 'block')
            $('.alterar-form').css('display', 'block')
            $('.bio-form').css('display', 'none')
        })

        $('body').on('click', '.alterar', function () {
            $('.modal-form').css('display', 'block')
            $('.bio-form').css('display', 'block')
            $('.alterar-form').css('display', 'none')
        })

        $('body').on('click', '.close-modal', function () {
            $('.modal-form').css('display', 'none')
        })

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

        $(document.body).on('mouseenter', '.snip1321', function () {
            var hifen = $(this).attr('id').toString().indexOf("-");
            var index = parseInt($(this).attr('id').toString().substring(0, hifen));
            var tab = $(this).attr('id').toString().substring(1, 9);
            if (tab == 'post-sal') {
                var item = $('.div-scroll-salvos').find($("figcaption"))[index];
                var after = $('.div-scroll-salvos').find($(".after"))[index];
            }
            else if (tab == 'post-cur') {
                var item = $('.div-scroll-curtidas').find($("figcaption"))[index];
                var after = $('.div-scroll-curtidas').find($(".after"))[index];
            }
            else {
                var item = $('.div-scroll-sobre').find($("figcaption"))[index];
                var after = $('.div-scroll-sobre').find($(".after"))[index];
            }
            $(this).find(item).css('transform', 'translateY(-50%)');
            $(after).addClass('isAfter');
            $(this).find(item).css('opacity', 1);
            $(this).find(item).css('transition-delay', '0.2s');
        })

        $(document.body).on('mouseleave', '.snip1321', function () {
            var hifen = $(this).attr('id').toString().indexOf("-");
            var index = parseInt($(this).attr('id').toString().substring(0, hifen));
            var tab = $(this).attr('id').toString().substring(1, 9);
            if (tab == 'post-sal') {
                var item = $('.div-scroll-salvos').find($("figcaption"))[index];
                var after = $('.div-scroll-salvos').find($(".after"))[index];
            }
            else if (tab == 'post-cur') {
                var item = $('.div-scroll-curtidas').find($("figcaption"))[index];
                var after = $('.div-scroll-curtidas').find($(".after"))[index];
            }
            else {
                var item = $('.div-scroll-sobre').find($("figcaption"))[index];
                var after = $('.div-scroll-sobre').find($(".after"))[index];
            }
            $(this).find(item).css('transform', 'none');
            $(this).find(item).css('opacity', 0);
            $(this).find(item).css('transition-delay', '0');
            $(after).removeClass('isAfter');
        })

        $(document.body).on('click', '.trigger', function () {
            var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321");
            var hifen = $(elem).attr('id').toString().indexOf("-");
            var index = parseInt($(elem).attr('id').toString().substring(0, hifen));
            var tab = $(elem).attr('id').toString().substring(1, 9);
            if (tab == 'post-sal') {
                var item = $('.div-scroll-salvos').find($("figcaption"))[index];
                var after = $('.div-scroll-salvos').find($(".after"))[index];
            }
            else if (tab == 'post-cur') {
                var item = $('.div-scroll-curtidas').find($("figcaption"))[index];
                var after = $('.div-scroll-curtidas').find($(".after"))[index];
            }
            else {
                var item = $('.div-scroll-sobre').find($("figcaption"))[index];
                var after = $('.div-scroll-sobre').find($(".after"))[index];
            }
            if ($(elem).find(item).css('opacity') != 1) {
                var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321")
                if (tab == 'post-sal') {
                    var item = $('.div-scroll-salvos').find($("figcaption"))[index];
                }
                else if (tab == 'post-cur') {
                    var item = $('.div-scroll-curtidas').find($("figcaption"))[index];
                }
                else {
                    var item = $('.div-scroll-sobre').find($("figcaption"))[index];
                }
                $(after).addClass('isAfter');

                $(item).css('transform', 'translateY(-50%)');
                $(item).css('opacity', 1);
                $(item).css('transition-delay', '0.2s');
                $(this).parent().parent().parent().find('[class="snip1321"]').addClass('pseudo');
            }
            else {
                var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321")
                if (tab == 'post-sal') {
                    var item = $('.div-scroll-salvos').find($("figcaption"))[index];
                }
                else if (tab == 'post-cur') {
                    var item = $('.div-scroll-curtidas').find($("figcaption"))[index];
                }
                else {
                    var item = $('.div-scroll-sobre').find($("figcaption"))[index];
                }
                $(after).removeClass('isAfter');
                $(item).css('transform', 'none');
                $(item).css('opacity', 0);
                $(item).css('transition-delay', '0');
                $(this).parent().parent().parent().find('[class="snip1321"]').removeClass('pseudo');
            }
        });
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

        if ($('.curtidas-content').css('display') == 'block' && !clickHeart) {
            $('.div-scroll-curtidas .magic').css('visibility', 'hidden');
            clickHeart = true;
            $('.div-scroll-curtidas .heart').trigger('click');
        }

        if ($('.salvos-content').css('display') == 'block' && !clickStar) {
            $('.div-scroll-salvos .heart-stage').css('display', 'none');           
            $('.div-scroll-salvos .magic').trigger('click');
            clickStar = true;
        }
    }
}, 1000);
