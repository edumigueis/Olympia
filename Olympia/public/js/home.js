var i = 0;
var y = 10;
var x = 0;
var max = 66; /* NÚMERO TOTAL DE CÍRCULOS */

setInterval(function () {
    $("." + i).fadeIn(150); /* TEMPO DE APARIÇÃO DOS CÍRCULOS */
    if (i < max)
        i++;
}, 100); /* INTERVALO ENTRE AS APARIÇÕES */

$().ready(function () {

    /* ATRIBUTOS DE ESTILO */
    $('circle').attr("r", '0.7');
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

    $('.' + max).css('display','none');
})