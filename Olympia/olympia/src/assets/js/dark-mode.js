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
            $(".dark-register-div").removeClass("dark-mode");
            $(".dark-register-input").removeClass("dark-mode");
            $(".dark-register-ico").removeClass("dark-mode");
            $(".black-to-white").removeClass("dark-mode");
            $(".gray").removeClass("dark-mode");
            $('#dark-mode-link').text('MODO NOTURNO');
        }
        else {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").addClass("night");
            $("#fullpage").fadeOut(1000)
            $("#menu-bar").addClass("dark-mode");
            $("#footer").addClass("dark-mode");
            $(".dark-register-div").addClass("dark-mode");
            $(".dark-register-input").addClass("dark-mode");
            $(".dark-register-ico").addClass("dark-mode");
            $(".black-to-white").addClass("dark-mode");
            $(".gray").addClass("dark-mode");
            $('#dark-mode-link').text('MODO CLARO');
        }
    });
})