var i = -1;
var y = 10;
var x = 0;
var passou = false;
var tempo = 600; /* TEMPO DE APARIÇÃO DOS CÍRCULOS */
var max = 70; /* NÚMERO TOTAL DE CÍRCULOS */

var jaFoiHome = false;

setInterval(() => {
    if ($('#container-home').length && jaFoiHome == false) {
            jaFoiHome = true;
            $(function() {
                $('.intro').addClass('go');
                
            })
    }
    else if (!$('#container-home').length) {
        jaFoiHome = false;
    }
}, 100);
