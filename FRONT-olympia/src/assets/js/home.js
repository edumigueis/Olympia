var i = -1;
var y = 10;
var x = 0;
var passou = false;

var jaFoiHome = false;
var jaFoiHome2 = false;
var jaFoiHome3 = false;

setInterval(() => {
  if ($('#container-home').length) {
    var altura = $('.activo').css('height').toString();
    var num = altura.substring(0, (altura.length - 2));
    var num = parseInt(num) + 100;
    $('.slider-container').css('height', num + "px");
    resizeAllGridItems();
  }
}, 700);

setInterval(() => {
  if ($('#container-home').length && $('.modal-slider').css('display') == 'none') {
    var classe = $('.m--active-control').attr('class');
    classe = classe.split(" ")[1];

    if (classe === 'fnc-nav__control-1') {
      $('.table-modal-1').css('display', 'block');
      $('.table-modal-2').css('display', 'none');
      $('.table-modal-3').css('display', 'none');
      $('.table-modal-4').css('display', 'none');
    }
    else if (classe === 'fnc-nav__control-2') {
      $('.table-modal-1').css('display', 'none');
      $('.table-modal-2').css('display', 'block');
      $('.table-modal-3').css('display', 'none');
      $('.table-modal-4').css('display', 'none');
    }
    else if (classe === 'fnc-nav__control-3') {
      $('.table-modal-1').css('display', 'none');
      $('.table-modal-2').css('display', 'none');
      $('.table-modal-3').css('display', 'block');
      $('.table-modal-4').css('display', 'none');
    }
    else {
      $('.table-modal-1').css('display', 'none');
      $('.table-modal-2').css('display', 'none');
      $('.table-modal-3').css('display', 'none');
      $('.table-modal-4').css('display', 'block');
    }
  }
  else if (!$('#container-home').length) {
    jaFoiHome3 = false;
  }
}, 500);

setInterval(() => {
  if ($('#container-home').length && jaFoiHome == false) {
    jaFoiHome = true;
    $(function () {
      (function () {
        new Clipboard('#button');
      })();

      $(function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };

        if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
          };
      });


      $(function () {

        var startBtn = document.getElementById('button');
        var requestID;
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var posX = 0;
        var W = 246;
        var H = 60;
        var circles = [];
        canvas.width = 246;
        canvas.height = 60;

        function animate() {
          requestID = requestAnimationFrame(animate);
          ctx.fillStyle = "rgba(0,0,0,0.15)";
          ctx.fillRect(0, 0, W, H);

          for (var j = 0; j < circles.length; j++) {
            var c = circles[j];

            ctx.beginPath();
            ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
            ctx.fill();

            c.x += c.vx;
            c.y += c.vy;
            c.radius -= .02;

            if (c.radius < 0)
              circles[j] = new create();
          }
        }

        function create() {
          this.x = W / 2;
          this.y = H / 2;
          this.radius = 2 + Math.random() * 3;
          this.vx = -5 + Math.random() * 10;
          this.vy = -5 + Math.random() * 10;
          this.r = Math.round(Math.random()) * 255;
          this.g = Math.round(Math.random()) * 255;
          this.b = Math.round(Math.random()) * 255;
        }
        for (var i = 0; i < 500; i++) {
          circles.push(new create());
        }
        startBtn.addEventListener('mouseover', function (e) {
          e.preventDefault();
          requestID = requestAnimationFrame(animate);
        });
        startBtn.addEventListener('mouseout', function (e) {
          e.preventDefault();
          cancelAnimationFrame(requestID);
          e.preventDefault();
          posX = 0;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillRect(posX, 0, boxWidth, canvas.height);

        });

      }());

      $(function () {
        var altura = $('.slide__content').css('height').toString();
        var num = altura.substring(0, (altura.length - 2));
        var num = parseInt(num) + 100;
        $('.slider-container').css('height', num + "px");

        window.onresize = function () {
          setTimeout(() => {
            var altura = $('.activo').css('height').toString();
            var num = altura.substring(0, (altura.length - 2));
            var num = parseInt(num) + 100;
            $('.slider-container').css('height', num + "px");
            resizeAllGridItems();
          }, 300);

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
            if (!$('.modal-slider').hasClass('.modal-slider-active'))
              $('.modal-slider').addClass("modal-slider-active");
            else
              $('.modal-slider').removeClass("modal-slider-active");
          });
        });

        $('.modal-container').on('click', function (event) {
          if (event.target.id != 'content' && event.target.id != 'canvas' && event.target.id != 'text-color') {
            $('.modal-slider').removeClass("modal-slider-active");
          }
        });

        $('#image-modal').on('click', function () {
          window.location.href = "/#/detalhes"
        })

        $('#button').on('click', function () {
          setTimeout(() => {
            $('#button').css("animation", 'clicked 0.4s linear');
          }, 10);
          $('#button').css("animation", 'none');
        });

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

        $(document).on("mousedown touchstart", ".slider", function (e) {
          if (animating) return;
          window.clearTimeout(autoSlideTimeout);
          var startX = e.pageX || e.originalEvent.touches[0].pageX,
            winW = $(window).width();
          diff = 0;

          $(document).on("mousemove touchmove", function (e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = (startX - x) / winW * 70;
            if ((!curSlide && diff < 0) || (curSlide === numOfSlidesFeed && diff > 0)) diff /= 2;
            $sliderFeed.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)");
            $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)");
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0)
              $('#page-name-on-tab').text('Explorar');
            else
              if (curSlide == 1)
                $('#page-name-on-tab').text('Aprender');
              else
                if (curSlide == 2)
                  $('#page-name-on-tab').text('Inpirar-se');

            resizeAllGridItems();

          });
        });

        $(document).on("mouseup touchend", function (e) {
          $(document).off("mousemove touchmove");
          if (animating) return;
          if (!diff) {
            changeSlides(true);
            return;
          }
          if (diff > -8 && diff < 8) {
            changeSlides();
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0)
              $('#page-name-on-tab').text('Explorar');
            else
              if (curSlide == 1)
                $('#page-name-on-tab').text('Aprender');
              else
                if (curSlide == 2)
                  $('#page-name-on-tab').text('Inpirar-se');

            resizeAllGridItems();
            return;
          }
          if (diff <= -8) {
            navigateLeft();
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0)
              $('#page-name-on-tab').text('Explorar');
            else
              if (curSlide == 1)
                $('#page-name-on-tab').text('Aprender');
              else
                if (curSlide == 2)
                  $('#page-name-on-tab').text('Inpirar-se');

            resizeAllGridItems();
          }
          if (diff >= 8) {
            navigateRight();
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0)
              $('#page-name-on-tab').text('Explorar');
            else
              if (curSlide == 1)
                $('#page-name-on-tab').text('Aprender');
              else
                if (curSlide == 2)
                  $('#page-name-on-tab').text('Inpirar-se');

            resizeAllGridItems();
          }
        });

        $(document).on("click", ".slider-control", function () {
          if ($(this).hasClass("left")) {
            navigateLeft();
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0) {
              $('#page-name-on-tab').text('Explorar');
            }
            if (curSlide == 1) {
              $('#page-name-on-tab').text('Aprender');
            }
            if (curSlide == 2) {
              $('#page-name-on-tab').text('Inspirar-se');
            }
            resizeAllGridItems();
          } else {
            navigateRight();
            $('#to-slide-' + curSlide).addClass('active-tab-p');
            $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
            $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
            if (curSlide == 0) {
              $('#page-name-on-tab').text('Explorar');
            }
            if (curSlide == 1) {
              $('#page-name-on-tab').text('Aprender');
            }
            if (curSlide == 2) {
              $('#page-name-on-tab').text('Inspirar-se');
            }
            resizeAllGridItems();
          }
        });

        $(document).on("click", ".slider-pagi__elem", function () {
          curSlide = $(this).data("page");
          changeSlides();
          $('#to-slide-' + curSlide).addClass('active-tab-p');
          $('#to-slide-' + (curSlide + 1)).removeClass('active-tab-p');
          $('#to-slide-' + (curSlide + 2)).removeClass('active-tab-p');
          $('#to-slide-' + (curSlide - 1)).removeClass('active-tab-p');
          $('#to-slide-' + (curSlide - 2)).removeClass('active-tab-p');
          if (curSlide == 0) {
            $('#page-name-on-tab').text('Explorar');
          }
          if (curSlide == 1) {
            $('#page-name-on-tab').text('Aprender');
          }
          if (curSlide == 2) {
            $('#page-name-on-tab').text('Inspirar-se');
          }
          resizeAllGridItems();
        });
        $(document).on("click", "#to-slide-0", function () {
          curSlide = 0;
          changeSlides();
          $('#to-slide-0').addClass('active-tab-p');
          $('#to-slide-1').removeClass('active-tab-p');
          $('#to-slide-2').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Explorar');
          var altura = $('.slide__content').css('height').toString();
          var num = altura.substring(0, (altura.length - 2));
          var num = parseInt(num) + 100;
          $('.slider-container').css('height', num + "px");
          resizeAllGridItems();
        });
        $(document).on("click", "#to-slide-1", function () {
          curSlide = 1;
          changeSlides();
          $('#to-slide-1').addClass('active-tab-p');
          $('#to-slide-0').removeClass('active-tab-p');
          $('#to-slide-2').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Aprender');
          var altura = $('.slide-1').css('height').toString();
          var num = altura.substring(0, (altura.length - 2));
          var num = parseInt(num) + 100;
          $('.slider-container').css('height', num + "px");
          resizeAllGridItems();
        });
        $(document).on("click", "#to-slide-2", function () {
          curSlide = 2;
          changeSlides();
          $('#to-slide-2').addClass('active-tab-p');
          $('#to-slide-1').removeClass('active-tab-p');
          $('#to-slide-0').removeClass('active-tab-p');
          $('#page-name-on-tab').text('Inspirar-se');
          var altura = $('.slide-2').css('height').toString();
          var num = altura.substring(0, (altura.length - 2));
          var num = parseInt(num) + 100;
          $('.slider-container').css('height', num + "px");
          resizeAllGridItems();
        });
        $(document).on("click", "#list-tab-ut", function () {
          if ($('#app-cover').css('display') == 'block') {
            $('#app-cover').css('display', 'none')

            if ($(window).width() > 1000)
              $('.right-tab-control').css({ 'width': '60%' })

            if ($(window).width() < 1000 && $(window).width() > 764)
              $('.right-tab-control').css({ 'width': '60%' })
          }
          else {
            $('#app-cover').css('display', 'block')

            if ($(window).width() > 1000)
              $('.right-tab-control').css({ 'width': 'calc(62% - ' + 330 + 'px)' })

            if ($(window).width() < 1000 && $(window).width() > 764)
              $('.right-tab-control').css({ 'width': 'calc(60% - ' + 300 + 'px)' })
          }

        });
        $(".heart").on("click", function () {
          $(this).toggleClass("is-active");
        });
        $(".magic").on("click", function () {
          $(this).toggleClass("is-star-active");
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

      $(document.body).on('click', '.img-ideias', function () {
        var src = $(this).attr("src");
        $('#myModal').css('display', 'block');
        $("#img01").attr("src", src);
        $(window).scrollTop(0);
        $("#img01").css("width", '40%');
        $('#mouse').css('display', 'block');
        $('#footer').css('display', 'none');
      });

      function resizeInstance(instance) {
        item = instance.elements[0];
        resizeGridItem(item);
      }
      resizeAllGridItems();

      window.addEventListener("resize", resizeAllGridItems);

      allItems = document.getElementsByClassName("masonry-item");
    })

    $(document.body).on('mouseenter', '.snip1321', function () {
      var hifen = $(this).attr('id').toString().indexOf("-");
      var index = parseInt($(this).attr('id').toString().substring(0,hifen));
      var after = $(".after")[index];
      var item = $("figcaption")[index];
      $(this).find(item).css('transform', 'translateY(-50%)');
      $(after).addClass('isAfter');
      $(this).find(item).css('opacity', 1);
      $(this).find(item).css('transition-delay', '0.2s');
    })

    $(document.body).on('mouseleave', '.snip1321', function () {
      var hifen = $(this).attr('id').toString().indexOf("-");
      var index = parseInt($(this).attr('id').toString().substring(0,hifen));
      var after = $(".after")[index];
      var item = $("figcaption")[index];
      $(this).find(item).css('transform', 'none');
      $(this).find(item).css('opacity', 0);
      $(this).find(item).css('transition-delay', '0');
      $(after).removeClass('isAfter');
    })

    $(document.body).on('click', '.trigger', function () {
      var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321");
      var hifen = $(elem).attr('id').toString().indexOf("-");
      var index = parseInt($(elem).attr('id').toString().substring(0,hifen));
      var item = $("figcaption")[index];
      var after = $(".after")[index];
      if ($(elem).find(item).css('opacity') != 1) {
        var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321")
        var item = $("figcaption")[index];
        $(after).addClass('isAfter');

        $(elem).find(item).css('transform', 'translateY(-50%)');
        $(elem).find(item).css('opacity', 1);
        $(elem).find(item).css('transition-delay', '0.2s');
        $(this).parent().parent().parent().find('[class="snip1321"]').addClass('pseudo');
      }
      else {
        var elem = this.parentElement.parentElement.parentElement.getElementsByClassName("snip1321")
        var item = $("figcaption")[index];
        $(after).removeClass('isAfter');
        $(elem).find(item).css('transform', 'none');
        $(elem).find(item).css('opacity', 0);
        $(elem).find(item).css('transition-delay', '0');
        $(this).parent().parent().parent().find('[class="snip1321"]').removeClass('pseudo');
      }
    });
  }
  else if (!$('#container-home').length) {
    jaFoiHome = false;
  }
}, 500);

function resizeAllGridItems() {
  allItems = document.getElementsByClassName("masonry-item");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeGridItem(item) {
  grid = document.getElementsByClassName("slide__content")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}




