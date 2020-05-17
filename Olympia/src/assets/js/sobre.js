function boxTop(idBox) {
    var boxOffset = $(idBox).offset();
    return boxOffset.top;
}

var colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);

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

setInterval(updateGradient(), 10);

var jaFoi = false;

setInterval(() => {

    if ($('#container-sobre').css('display') == 'block' && jaFoi == false) {

        $(function () {
            jaFoi = true;            
            var scroll =
                window.requestAnimationFrame ||
                // IE Fallback
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
            var elementsToShow = document.querySelectorAll(".show-on-scroll");

            function loop() {
                Array.prototype.forEach.call(elementsToShow, function (element) {
                    if (isElementInViewport(element)) {
                        element.classList.add("is-visible");
                    } else {
                        element.classList.remove("is-visible");
                    }
                });

                scroll(loop);
            }

            // Call the loop for the first time
            loop();

            function isElementInViewport(el) {
                // special bonus for those using jQuery
                if (typeof jQuery === "function" && el instanceof jQuery) {
                    el = el[0];
                }
                var rect = el.getBoundingClientRect();
                return (
                    (rect.top <= 0 && rect.bottom >= 0) ||
                    (rect.bottom >=
                        (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.top <=
                        (window.innerHeight || document.documentElement.clientHeight)) ||
                    (rect.top >= 0 &&
                        rect.bottom <=
                        (window.innerHeight || document.documentElement.clientHeight))
                );
            }

            var body = document.getElementsByTagName("body")[0];

            body.addEventListener("mousewheel", detectarDirecaoRolagem, false);
            body.addEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);

            function detectarDirecaoRolagem(e) {
                var delta = null,
                    direction = false
                    ;
                if (!e) {
                    e = window.event;
                }
                if (e.wheelDelta) { // funciona na maioria dos casos
                    delta = e.wheelDelta / 60;
                } else if (e.detail) { // funciona no Firefox
                    delta = -e.detail / 2;
                }
                if (delta !== null) {
                    direction = delta > 0 ? 'cima' : 'baixo';
                }
        
                if (direction == 'baixo') {
                    $('.bg').css('transform', 'translateY(-240px)');
                    $('.gradient-sobre').css('transform', 'translateY(-240px)');
                    $('.title').css('transform', 'translateY(-240px)');
                }
                else {
                    $('.bg').css('transform', 'none');
                    $('.gradient').css('transform', 'none');
                    $('.title').css('transform', 'none');
                }
            }
        })
    }
    else if (!$('#container-sobre').length) {
        jaFoi = false;
    }
}, 100);

var jaFoiBorda = false;

setInterval(() => {

    if ($('#container-sobre').css('display') == 'block' && jaFoiBorda == false) {

        $('.gradient').css('border-bottom-left-radius','0');
            $('.gradient').css('border-bottom-right-radius','0');
    }
    else if (!$('#container-sobre').length) {
        jaFoiBorda = false;
    }
}, 300);