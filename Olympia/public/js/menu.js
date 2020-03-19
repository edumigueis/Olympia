$(document).ready(function () {

    setInterval(updateGradient, 10);
    setInterval(function () {
        if ($('#menu-list').css('font-size') == '12px' && $('#menu-list').css('transform') == 'matrix(1, 0, 0, 1, 0, -400)') {
            $('#menu-list').css('transform', 'translateY(140px)')
            $('#left').css({
                'transform': 'translateX(-100px)'
            });
            $('#right').css({
                'transform': 'translateX(-10px)'
            });
        }
       
    }, 10)

    $('#nav-bars').click(function () {
        $("#menu-items").fadeIn("slow");
        $('#footer').fadeOut();
    })
    $('.close').click(function () {
        if ($('#container-contatos').css('display') == 'none') {
            $("#menu-items").fadeOut("slow");
            $('#footer').fadeIn();
        }
        else {
            $('#container-contatos').fadeOut('slow');
            $('#container-menu').css({
                "-webkit-filter": "blur(" + 0 + "px)",
                "filter": "blur(" + 0 + "px)",
                "-moz-filter": "blur(" + 0 + "px)",
                "-o-filter": "blur(" + 0 + "px)",
                "-ms-filter": "blur(" + 0 + "px)",
            });
        }
    })
    $('#rightClick').click(function () {


        $('#menu-list').css({
            'transform': 'translateY(-400px)'
        })
        $('#right').css({
            'transform': 'translateX(100px)'
        })
        $('#left').css({
            'transform': 'translateX(10px)'
        });

    })
    $('#leftClick').click(function () {
        if ($('#menu-list').css('background-color') != '#1a1a1a') {
            $('#menu-list').css({
                'transform': 'translateY(100px)'
            })
            $('#left').css({
                'transform': 'translateX(-100px)'
            });
            $('#right').css({
                'transform': 'translateX(-10px)'
            });
        }
    })

    $('.a-contact').click(function () {

        $('#container-contatos').fadeIn("slow");
        $('#container-menu').css({
            "-webkit-filter": "blur(" + 10 + "px)",
            "filter": "blur(" + 10 + "px)",
            "-moz-filter": "blur(" + 10 + "px)",
            "-o-filter": "blur(" + 10 + "px)",
            "-ms-filter": "blur(" + 10 + "px)",
        });
    })
})
function boxTop(idBox) {
    var boxOffset = $(idBox).offset();
    return boxOffset.top;
}

var colors = new Array(
    [92, 75, 255],
    [100, 255, 100],
    [255, 75, 138],
    [85, 215, 255],
    [255, 40, 255],
    [255, 168, 40]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('.gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}
