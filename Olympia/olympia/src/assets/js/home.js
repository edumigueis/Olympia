var i = -1;
var y = 10;
var x = 0;
var passou = false;
var tempo = 600; /* TEMPO DE APARIÇÃO DOS CÍRCULOS */
var max = 84; /* NÚMERO TOTAL DE CÍRCULOS */

setInterval(function () {

    if (i < max) {

        if (passou) {
            i--;
            if (i % 14 == 0 && i != 0) {
                passou = false;
                $("." + i).fadeIn(tempo);
                i += 15;
                $("." + (i-1)).fadeIn(tempo);
            }
        }
        else {
            i++;
        }
        if (i % 14 == 0 && i != 0 ) {
            i += 13;
            passou = true;
            
        }

    }
    $("." + i).fadeIn(tempo); 

}, 90); /* INTERVALO ENTRE AS APARIÇÕES */

$(document).ready(function () {

    /* ATRIBUTOS DE ESTILO */
    $('circle').attr("r", '1.5');
    $('circle').attr("fill", 'rgba(255,255,255,0.5)');
    $('circle').attr("stroke", 'black');
    $('circle').attr("stroke-width", '0.1');
    /**/

    for (var i2 = 0; i2 < max; i2++) {

        x++;

        /*       NÚMERO DE CÍRCULOS POR LINHA       */
        /*       |                                  */
        /*      \ /                                 */
        if (i2 % 14 == 0 && i2 != 0) {
            x = 1;
            y += 8; /* DISTÂNCIA ENTRE OS CÍRCULOS (Y) */
        }

        /*         DISTÂNCIA ENTRE OS CÍRCULOS (X)      */
        /*                         |                    */
        /*                        \ /                   */
        $('.' + i2).attr('cx', x * 8);
        $('.' + i2).attr('cy', y);
    }

    $('.' + max).css('display', 'none');
})