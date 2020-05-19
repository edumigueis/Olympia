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
            $("body").removeClass("dark-mode-page");
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
            $(".white-3").removeClass("dark-mode");
            $(".white-2").removeClass("dark-mode");
            $(".white-7").removeClass("dark-mode");
            $(".dark-slideshow").removeClass("dark-mode");
            $(".text-gray").removeClass("dark-mode");
            $(".feed-item").removeClass("dark-mode");
            $(".white-icon").removeClass("dark-mode");
            $(".white-6-special").removeClass("dark-mode");
            $(".dark-img-wrap").removeClass("dark-mode");
            $(".border-black").removeClass("dark-mode");
            $(".fill").removeClass("dark-mode");
            $("input").removeClass("dark");
            $("textarea").removeClass("dark");
            $("select").removeClass("dark");
            $(".border-bottom-7").removeClass("dark-mode");
            $(".dark-search-input").removeClass("dark-mode");
            $(".dark-search-icon").removeClass("dark-mode");
            $(".filter-invert").removeClass("dark-mode");
            $(".masonry-item").removeClass("dark-mode");
            $(".background-white-to-darkgray").removeClass("dark-mode");
            $('.dark-mode-activators').text('MODO NOTURNO');
        }
        else {
            $("#fullpage").fadeIn(1000)
            $("#fullpage").fadeOut(1000)
            $("#fullpage").addClass("night");
            $("#menu-bar").addClass("dark-mode");
            $("#footer").addClass("dark-mode");
            $(".arrow").addClass("dark-mode");
            $("body").addClass("dark-mode-page");
            $(".error-modal").addClass("dark-mode");
            $("#small-footer").addClass("dark-mode");
            $(".fill").addClass("dark-mode");
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
            $("input").addClass("dark");
            $("textarea").addClass("dark");
            $("select").addClass("dark");
            $(".border-bottom-7").addClass("dark-mode");
            $(".dark-search-input").addClass("dark-mode");
            $(".dark-search-icon").addClass("dark-mode");
            $(".filter-invert").addClass("dark-mode");
            $(".masonry-item").addClass("dark-mode");
            $(".background-white-to-darkgray").addClass("dark-mode");
            $('.dark-mode-activators').text('MODO CLARO');
        }
    });
})