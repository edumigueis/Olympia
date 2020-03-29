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
        if ($("#fullpage").hasClass("night")) {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").removeClass("night");
            $("#fullpage").fadeOut(1000)
            $("#menu-bar").removeClass("dark-mode");
            $("#footer").removeClass("dark-mode");
            $(".gray").removeClass("dark-mode");
        }
        else {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").addClass("night");
            $("#fullpage").fadeOut(1000)
            $("#menu-bar").addClass("dark-mode");
            $("#footer").addClass("dark-mode");
            $(".gray").removeClass("dark-mode");
        }
    });
})