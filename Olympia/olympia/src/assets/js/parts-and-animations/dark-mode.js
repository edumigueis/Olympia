function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

$(document).ready(function () {

    $(document.body).on("click",".dark-mode-activators",function () {
        if ($("#fullpage").hasClass("night")) {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").removeClass("night");
            $("#fullpage").fadeOut(1000)
            $("#menu-bar").removeClass("dark-mode");
            $("#footer").removeClass("dark-mode");
            $(".arrow").removeClass("dark-mode");
            $(".error-modal").removeClass("dark-mode");
            $("#small-footer").removeClass("dark-mode");
            $(".dark-register-div").removeClass("dark-mode");
            $(".dark-register-input").removeClass("dark-mode");
            $(".dark-register-ico").removeClass("dark-mode");
            $(".black-to-white").removeClass("dark-mode");
            $(".black-to-white-pol").removeClass("dark-mode");
            $(".text-sobre").removeClass("dark-mode");
            $(".linha-sobre").removeClass("dark-mode");
            $(".gray").removeClass("dark-mode");
            $(".gray-n-imp").removeClass("dark-mode");
            $(".white").removeClass("dark-mode");
            $(".transparent").removeClass("dark-mode");
            $(".bg-det-gray").removeClass("dark-mode");
            $(".img-wrap").removeClass("dark-mode");
            $(".white-4").removeClass("dark-mode");
            $(".white-6").removeClass("dark-mode");
            $(".border-black").removeClass("dark-mode");
            $(".background-white-to-darkgray").removeClass("dark-mode");
            $('.dark-mode-activators').text('MODO NOTURNO');
        }
        else {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").addClass("night");
            $("#fullpage").fadeOut(1000)
            $("#menu-bar").addClass("dark-mode");
            $("#footer").addClass("dark-mode");
            $(".arrow").addClass("dark-mode");
            $(".error-modal").addClass("dark-mode");
            $("#small-footer").addClass("dark-mode");
            $(".dark-register-div").addClass("dark-mode");
            $(".dark-register-input").addClass("dark-mode");
            $(".dark-register-ico").addClass("dark-mode");
            $(".black-to-white").addClass("dark-mode");
            $(".black-to-white-pol").addClass("dark-mode");
            $(".text-sobre").addClass("dark-mode");
            $(".linha-sobre").addClass("dark-mode");
            $(".gray").addClass("dark-mode");
            $(".gray-n-imp").addClass("dark-mode");
            $(".white").addClass("dark-mode");
            $(".transparent").addClass("dark-mode");
            $(".bg-det-gray").addClass("dark-mode");
            $(".img-wrap").addClass("dark-mode");
            $(".white-4").addClass("dark-mode");
            $(".white-6").addClass("dark-mode");
            $(".border-black").addClass("dark-mode");
            $(".background-white-to-darkgray").addClass("dark-mode");
            $('.dark-mode-activators').text('MODO CLARO');
        }
    });
})