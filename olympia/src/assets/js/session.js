/* VARIAVEIS DA SESSÃO */

var reaplicarAoLogar = 0; /*receberá um select da tabela com a pré definição*/
var rolarMenu;
var desligarMenu;
var reaplicarAoLogar;
var darkMode;

/* VARIAVEIS AUXILIARES*/

var jaFoiFooterSessao = false;
var jaFoiDarkSessao = false;
var enderecoAntigo;

$(document).ready(function () {

    setInterval(() => {

        if ($('#footer-container').length && !jaFoiFooterSessao) {

            if (reaplicarAoLogar === 0) {
                rolarMenu = 0;
                desligarMenu = 0;
                reaplicarAoLogar = 1;
            }


            jaFoiFooterSessao = true;
            enderecoAntigo = window.location.href;

            if (rolarMenu === 1){
                var auxRolar = false;
                setInterval(() => {
                    if ($('#container-perfil').length && !auxRolar){
                        auxRolar = true;
                        $("#control_01-2").trigger("click");
                    }
                    else if (!$('#container-perfil').length) {
                        auxRolar = false;
                    }
                }, 100);
            }
            if (desligarMenu === 1){
                var auxDesligar = false;
                setInterval(() => {
                    if ($('#container-perfil').length && !auxDesligar){
                        auxDesligar = true;
                        $("#control_02-2").trigger("click");
                    }
                    else if (!$('#container-perfil').length) {
                        auxDesligar = false;
                    }
                }, 100);
            }
            if (reaplicarAoLogar === 1){
    
                var auxReaplicar = false;
                setInterval(() => {
                    if ($('#container-perfil').length && !auxReaplicar){
                        auxReaplicar = true;
                        $("#control_03-2").trigger("click");
                    }
                    else if (!$('#container-perfil').length) {
                        auxReaplicar = false;
                    }
                }, 100);
            }

            if ($(document.body).hasClass('sumir-menu-bar')) {
                $('.sumir').removeClass('config-link-hover').addClass('config-link-clicked');
                $('.desligar').css('visibility', 'hidden');
            }

            if ($(document.body).hasClass('desligar-menu-bar')) {
                $('.desligar').removeClass('config-link-hover').addClass('config-link-clicked');
                $('#menu-bar').css('transform', 'translateY(-70px)');
                $('.sumir').css('visibility', 'hidden');
            }

            if ($(document.body).hasClass('reaplicar-no-login'))
                $('.reaplicar').removeClass('config-link-hover').addClass('config-link-clicked');
        }
        else if (enderecoAntigo != window.location.href) {
            jaFoiFooterSessao = false;
        }
    }, 100);

    setInterval(() => {

        if ($('.dark-mode-activators').length && !jaFoiDarkSessao) {

            jaFoiDarkSessao = true;
            enderecoAntigo = window.location.href;

            if ($(document.body).hasClass('dark-mode-page'))
                darkMode();

        }
        else if (enderecoAntigo != window.location.href) {
            jaFoiDarkSessao = false;
        }
    }, 100);

})

function darkMode() {
    $("#menu-bar").addClass("dark-mode");
    $("#fullpage").addClass("night");
    $("#footer").addClass("dark-mode");
    $(".arrow").addClass("dark-mode");
    $("body").addClass("dark-mode-page");
    $(".error-modal").addClass("dark-mode");
    $("#small-footer").addClass("dark-mode");
    $(".dark-slideshow").addClass("dark-mode");
    $(".dark-register-div").addClass("dark-mode");
    $(".dark-register-input").addClass("dark-mode");
    $(".dark-register-ico").addClass("dark-mode");
    $(".black-to-white").addClass("dark-mode");
    $(".black-to-white-pol").addClass("dark-mode");
    $(".text-sobre").addClass("dark-mode");
    $(".linha-sobre").addClass("dark-mode");
    $(".gray").addClass("dark-mode");
    $(".gray-n-imp").addClass("dark-mode");
    $(".white-3").addClass("dark-mode");
    $(".white-2").addClass("dark-mode");
    $(".white-7").addClass("dark-mode");
    $(".text-gray").addClass("dark-mode");
    $(".white").addClass("dark-mode");
    $(".transparent").addClass("dark-mode");
    $(".bg-det-gray").addClass("dark-mode");
    $(".feed-item").addClass("dark-mode");
    $(".white-icon").addClass("dark-mode");
    $(".img-wrap").addClass("dark-mode");
    $(".white-4").addClass("dark-mode");
    $(".white-6").addClass("dark-mode");
    $(".white-6-special").addClass("dark-mode");
    $(".border-black").addClass("dark-mode");
    $(".dark-img-wrap").addClass("dark-mode");
    $(".background-white-to-darkgray").addClass("dark-mode");
    $('.dark-mode-activators').text('MODO CLARO');
}




