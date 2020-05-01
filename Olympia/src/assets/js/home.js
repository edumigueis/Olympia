var i = -1;
var y = 10;
var x = 0;
var passou = false;

var jaFoiHome = false;

setInterval(() => {
  if ($('#container-home').length && jaFoiHome == false) {
    jaFoiHome = true;
    $(function () {

      $(function () {
        var altura = $('.slide__content').css('height').toString();
          var num = altura.substring(0, (altura.length-2));
          var num = parseInt(num) +100;
          $('.slider-container').css('height',num + "px");

          setInterval(() => {
            var altura = $('.activo').css('height').toString();
            var num = altura.substring(0, (altura.length-2));
            var num = parseInt(num) +100;
            $('.slider-container').css('height',num + "px");
          }, 500);

          window.onresize = function(){
            setTimeout(() => {
              var altura = $('.activo').css('height').toString();
              var num = altura.substring(0, (altura.length-2));
              var num = parseInt(num) +100;
              $('.slider-container').css('height',num + "px");
            }, 500);

          }
        var $$ = function (selector, context) {
          var context = context || document;
          var elements = context.querySelectorAll(selector);
          return [].slice.call(elements);
        };

        function _fncSliderInit($slider, options) {
          var prefix = ".fnc-";

          var $slider = $slider;
          var $slidesCont = $slider.querySelector(prefix + "slider__slides");
          var $slides = $$(prefix + "slide", $slider);
          var $controls = $$(prefix + "nav__control", $slider);
          var $controlsBgs = $$(prefix + "nav__bg", $slider);
          var $progressAS = $$(prefix + "nav__control-progress", $slider);

          var numOfSlides = $slides.length;
          var curSlide = 1;
          var sliding = false;
          var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
          var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

          var autoSlidingActive = false;
          var autoSlidingTO;
          var autoSlidingDelay = 5000; // default autosliding delay value
          var autoSlidingBlocked = false;

          var $activeSlide;
          var $activeControlsBg;
          var $prevControl;

          function setIDs() {
            $slides.forEach(function ($slide, index) {
              $slide.classList.add("fnc-slide-" + (index + 1));
            });

            $controls.forEach(function ($control, index) {
              $control.setAttribute("data-slide", index + 1);
              $control.classList.add("fnc-nav__control-" + (index + 1));
            });

            $controlsBgs.forEach(function ($bg, index) {
              $bg.classList.add("fnc-nav__bg-" + (index + 1));
            });
          };

          setIDs();

          function afterSlidingHandler() {
            $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
            $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

            $activeSlide.classList.remove("m--before-sliding");
            $activeControlsBg.classList.remove("m--nav-bg-before");
            $prevControl.classList.remove("m--prev-control");
            $prevControl.classList.add("m--reset-progress");
            var triggerLayout = $prevControl.offsetTop;
            $prevControl.classList.remove("m--reset-progress");

            sliding = false;
            var layoutTrigger = $slider.offsetTop;

            if (autoSlidingActive && !autoSlidingBlocked) {
              setAutoslidingTO();
            }
          };

          function performSliding(slideID) {
            if (sliding) return;
            sliding = true;
            window.clearTimeout(autoSlidingTO);
            curSlide = slideID;

            $prevControl = $slider.querySelector(".m--active-control");
            $prevControl.classList.remove("m--active-control");
            $prevControl.classList.add("m--prev-control");
            $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

            $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
            $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

            $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
            $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

            $activeSlide.classList.add("m--before-sliding");
            $activeControlsBg.classList.add("m--nav-bg-before");

            var layoutTrigger = $activeSlide.offsetTop;

            $activeSlide.classList.add("m--active-slide");
            $activeControlsBg.classList.add("m--active-nav-bg");

            setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
          };



          function controlClickHandler() {
            if (sliding) return;
            if (this.classList.contains("m--active-control")) return;
            if (options.blockASafterClick) {
              autoSlidingBlocked = true;
              $slider.classList.add("m--autosliding-blocked");
            }

            var slideID = +this.getAttribute("data-slide");

            performSliding(slideID);
          };

          $controls.forEach(function ($control) {
            $control.addEventListener("click", controlClickHandler);
          });

          function setAutoslidingTO() {
            window.clearTimeout(autoSlidingTO);
            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 1;

            autoSlidingTO = setTimeout(function () {
              performSliding(curSlide);
            }, delay);
          };

          if (options.autoSliding || +options.autoSlidingDelay > 0) {
            if (options.autoSliding === false) return;

            autoSlidingActive = true;
            setAutoslidingTO();

            $slider.classList.add("m--with-autosliding");
            var triggerLayout = $slider.offsetTop;

            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            delay += slidingDelay + slidingAT;

            $progressAS.forEach(function ($progress) {
              $progress.style.transition = "transform " + (delay / 1000) + "s";
            });
          }

          $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

        };

        var fncSlider = function (sliderSelector, options) {
          var $sliders = $$(sliderSelector);

          $sliders.forEach(function ($slider) {
            _fncSliderInit($slider, options);
          });
        };

        window.fncSlider = fncSlider;


        fncSlider(".example-slider", { autoSlidingDelay: 4000 });

        var $demoCont = document.querySelector(".demo-cont");

        [].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function ($btn) {
          $btn.addEventListener("click", function () {
            if(!$('.modal-slider').hasClass('.modal-slider-active'))
              $('.modal-slider').addClass("modal-slider-active");
            else
              $('.modal-slider').removeClass("modal-slider-active");
          });
        });

        $('.modal-container').on('click',function (event) {
          if(event.target.id!='content'){
              $('.modal-slider').removeClass("modal-slider-active");
            }
          });

          $('#image-modal').on('click',function(){
            window.location.href = "/#/detalhes"
          })

        /*FEED---------------------------------------------- */
        var $sliderFeed = $(".slider"),
          $slideBGs = $(".slide__bg"),
          diff = 0,
          curSlide = 0,
          numOfSlidesFeed = $(".slide").length - 1,
          animating = false,
          animTime = 500,
          autoSlideTimeout,
          autoSlideDelay = 19000,
          $pagination = $(".slider-pagi");

        function createBullets() {
          for (var i = 0; i < numOfSlidesFeed + 1; i++) {
            var $li = $("<li class='slider-pagi__elem'></li>");
            $li.addClass("slider-pagi__elem-" + i).data("page", i);
            if (!i) $li.addClass("active");
            $pagination.append($li);
          }
        }

        createBullets();

        function manageControls() {
          $(".slider-control").removeClass("inactive");
          if (!curSlide) $(".slider-control.left").addClass("inactive");
          if (curSlide === numOfSlidesFeed)
            $(".slider-control.right").addClass("inactive");
        }

        function autoSlide() {
          autoSlideTimeout = setTimeout(function () {
            curSlide++;
            if (curSlide > numOfSlidesFeed) curSlide = 0;
            changeSlides();
          }, autoSlideDelay);
        }

        /*autoSlide();*/

        function changeSlides(instant) {
          if (!instant) {
            animating = true;
            manageControls();
            $sliderFeed.addClass("animating");
            $sliderFeed.css("top");
            $(".slide").removeClass("active");
            $(".slide-" + curSlide).addClass("active");
            $(".slide").removeClass("activo");
            $(".slide-" + curSlide).addClass("activo");
            setTimeout(function () {
              $sliderFeed.removeClass("animating");
              animating = false;
            }, animTime);
          }
          window.clearTimeout(autoSlideTimeout);
          $(".slider-pagi__elem").removeClass("active");
          $(".slider-pagi__elem-" + curSlide).addClass("active");
          $sliderFeed.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
          $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
          diff = 0;
          
        }

        function navigateLeft() {
          if (animating) return;
          if (curSlide > 0) curSlide--;
          changeSlides();
        }

        function navigateRight() {
          if (animating) return;
          if (curSlide < numOfSlidesFeed) curSlide++;
          changeSlides();
        }

        $(document).on("mousedown touchstart", ".slider", function(e) {
          if (animating) return;
          window.clearTimeout(autoSlideTimeout);
          var startX = e.pageX || e.originalEvent.touches[0].pageX,
              winW = $(window).width();
          diff = 0;
          
          $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = (startX - x) / winW * 70;
            if ((!curSlide && diff < 0) || (curSlide === numOfSlidesFeed && diff > 0)) diff /= 2;
            $sliderFeed.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
            $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
            $('#to-slide-'+curSlide).addClass('active-tab-p');
            $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
            if(curSlide == 0)
            $('#page-name-on-tab').text('Explorar');
            else
            if(curSlide == 1)
            $('#page-name-on-tab').text('Aprender');
            else
            if(curSlide == 2)
            $('#page-name-on-tab').text('Inpirar-se');

          });
        });
        
        $(document).on("mouseup touchend", function(e) {
          $(document).off("mousemove touchmove");
          if (animating) return;
          if (!diff) {
            changeSlides(true);
            return;
          }
          if (diff > -8 && diff < 8) {
            changeSlides();
            $('#to-slide-'+curSlide).addClass('active-tab-p');
            $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
            if(curSlide == 0)
            $('#page-name-on-tab').text('Explorar');
            else
            if(curSlide == 1)
            $('#page-name-on-tab').text('Aprender');
            else
            if(curSlide == 2)
            $('#page-name-on-tab').text('Inpirar-se');
            return;
          }
          if (diff <= -8) {
            navigateLeft();
            $('#to-slide-'+curSlide).addClass('active-tab-p');
            $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
            if(curSlide == 0)
            $('#page-name-on-tab').text('Explorar');
            else
            if(curSlide == 1)
            $('#page-name-on-tab').text('Aprender');
            else
            if(curSlide == 2)
            $('#page-name-on-tab').text('Inpirar-se');
          }
          if (diff >= 8) {
            navigateRight();
            $('#to-slide-'+curSlide).addClass('active-tab-p');
            $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
            $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
            if(curSlide == 0)
            $('#page-name-on-tab').text('Explorar');
            else
            if(curSlide == 1)
            $('#page-name-on-tab').text('Aprender');
            else
            if(curSlide == 2)
            $('#page-name-on-tab').text('Inpirar-se');
          }
        });

        $(document).on("click", ".slider-control", function () {
          if ($(this).hasClass("left")) {
            navigateLeft();
            $('#to-slide-'+curSlide).addClass('active-tab-p');
          $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
          if(curSlide == 0){
            $('#page-name-on-tab').text('Explorar');
          }
          if(curSlide == 1){
            $('#page-name-on-tab').text('Aprender');
          }
          if(curSlide == 2){
            $('#page-name-on-tab').text('Inspirar-se');
          }
          } else {
            navigateRight();
            $('#to-slide-'+curSlide).addClass('active-tab-p');
          $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
          if(curSlide == 0){
            $('#page-name-on-tab').text('Explorar');
          }
          if(curSlide == 1){
            $('#page-name-on-tab').text('Aprender');
          }
          if(curSlide == 2){
            $('#page-name-on-tab').text('Inspirar-se');
          }
          }
        });

        $(document).on("click", ".slider-pagi__elem", function () {
          curSlide = $(this).data("page");
          changeSlides();
          $('#to-slide-'+curSlide).addClass('active-tab-p');
          $('#to-slide-'+ (curSlide+1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide+2)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-1)).removeClass('active-tab-p');
          $('#to-slide-'+ (curSlide-2)).removeClass('active-tab-p');
          if(curSlide == 0){
            $('#page-name-on-tab').text('Explorar');
          }
          if(curSlide == 1){
            $('#page-name-on-tab').text('Aprender');
          }
          if(curSlide == 2){
            $('#page-name-on-tab').text('Inspirar-se');
          }
        });
        $(document).on("click", "#to-slide-0", function () {
          curSlide = 0;
          changeSlides();
          $('#to-slide-0').addClass('active-tab-p');
          $('#to-slide-1').removeClass('active-tab-p');
          $('#to-slide-2').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Explorar');
          var altura = $('.slide__content').css('height').toString();
          var num = altura.substring(0, (altura.length-2));
          var num = parseInt(num) +100;
          $('.slider-container').css('height',num + "px");
        });
        $(document).on("click", "#to-slide-1", function () {
          curSlide = 1;
          changeSlides();
          $('#to-slide-1').addClass('active-tab-p');
          $('#to-slide-0').removeClass('active-tab-p');
          $('#to-slide-2').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Aprender');
          var altura = $('.slide-1').css('height').toString();
          var num = altura.substring(0, (altura.length-2));
          var num = parseInt(num) + 100;
          $('.slider-container').css('height',num + "px");
        });
        $(document).on("click", "#to-slide-2", function () {
          curSlide = 2;
          changeSlides();
          $('#to-slide-2').addClass('active-tab-p');
          $('#to-slide-1').removeClass('active-tab-p');
          $('#to-slide-0').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Inspirar-se');
          var altura = $('.slide-2').css('height').toString();
          var num = altura.substring(0, (altura.length-2));
          var num = parseInt(num) + 100;
          $('.slider-container').css('height',num + "px");
        });
        $(document).on("click", "#list-tab-ut", function () {
          if($('#app-cover').css('display') == 'block'){
          $('#app-cover').css('display','none')

          if($(window).width() > 1000)
          $('.right-tab-control').css({ 'width': '60%' })

          if($(window).width() < 1000 && $(window).width() > 764)
          $('.right-tab-control').css({ 'width': '60%' })
          }
          else{
            $('#app-cover').css('display','block')

            if($(window).width() > 1000)
            $('.right-tab-control').css({ 'width': 'calc(62% - ' + 330+ 'px)' })

            if($(window).width() < 1000 && $(window).width() > 764)
            $('.right-tab-control').css({ 'width': 'calc(60% - ' + 300+ 'px)' })
          }

        });
          $(".heart").on("click", function() {
            $(this).toggleClass("is-active");
          });
          $(document.body).on('click', '.img-insp', function () {
            var src = $(this).attr("src");
            $('#myModal').css('display', 'block');
            $("#img01").attr("src", src);
            $(window).scrollTop(0);
            $('#mouse').css('display', 'block');
            $('#footer').css('display', 'none');
          });
          $(document.body).on('click', '.close-mod', function () {
            $('#myModal').css('display', 'none');
            $('#mouse').css('display', 'none');
            $('#footer').css('display', 'block');
          })
    
          $(document.body).on('click', '#myModal', function () {
            $('#myModal').css('display', 'none');
            $('#mouse').css('display', 'none');
            $('#footer').css('display', 'block');
          })
      })

    })
  }
  else if (!$('#container-home').length) {
    jaFoiHome = false;
  }
}, 100);





