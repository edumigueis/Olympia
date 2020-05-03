var jaFoiFooterSessao = false;
var enderecoAntigo;

$(document).ready(function () {

    setInterval(() => {

        if ($('#footer-container').length && !jaFoiFooterSessao) {

            /* VARIAVEIS DA SESSÃO */

            var reaplicarAoLogar = 0; /*receberá um select da tabela com a pré definição*/
            var rolarMenu;
            var desligarMenu;
            var reaplicarAoLogar;

            if (reaplicarAoLogar === 0) {
                rolarMenu = 0;
                desligarMenu = 0;
                reaplicarAoLogar = 0;
            }

            /**/

            jaFoiFooterSessao = true;
            enderecoAntigo = window.location.href;

            if (rolarMenu === 1)
                $(".sumir").trigger("click");
            if (desligarMenu === 1)
                $(".desligar").trigger("click");
            if (reaplicarAoLogar === 1)
                $(".reaplicar").trigger("click");

            if($(document.body).hasClass('sumir-menu-bar')){
                $('.sumir').removeClass('config-link-hover').addClass('config-link-clicked');
                $('.desligar').css('visibility', 'hidden');
            }
            
            if($(document.body).hasClass('desligar-menu-bar')){
                $('.desligar').removeClass('config-link-hover').addClass('config-link-clicked');
                $('#menu-bar').css('transform', 'translateY(-70px)');
                $('.sumir').css('visibility', 'hidden');
            }

            if($(document.body).hasClass('reaplicar-no-login'))
                $('.reaplicar').removeClass('config-link-hover').addClass('config-link-clicked');
        }
        else if (enderecoAntigo != window.location.href) {
            jaFoiFooterSessao = false;
        }
    }, 100);
    
})





