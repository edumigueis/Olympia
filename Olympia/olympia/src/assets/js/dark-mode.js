function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

$(document).ready(function () {
    $(document.body).on("click","#dark-mode-link",function () {
        if ($("#app-corpo").hasClass("night")) {
            $("#app-corpo").removeClass("night");
            $("#fullpage").fadeIn(100);
            $("#fullpage").fadeOut(100);
        }
        else {
            $("#app-corpo").addClass("night");
            $("#fullpage").fadeIn(500);
            $("#fullpage").fadeOut(500);
        }
    });
})