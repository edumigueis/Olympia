var TextSlider = function () {
  this.container = $('#home-animation-wrapper');
  this.currentSlide = 1;
  this.slidesLength = this.container.find('.slide').length - 1; // To start at 0
  this.content = { text1: '', text2: '', text3: '' };

  this.allowChange = true;

  this.init();
};

TextSlider.prototype = {

  init: function () {
    console.log('init');

    this.bind();

    this.initSvg();

  },

  bind: function () {
    console.log('bind');

    var self = this;

    // Bind interval
    var timerDuration = 5000,
      timer = setInterval(function () {
        self.resetSlide();
      }, timerDuration);

    // Bind restart on click with next slide
    this.container.on('click', function () {

      // Do not allow to change slide until last transition is complete
      if (!self.allowChange) { return; }
      self.allowChange = false;
      setTimeout(function () {
        self.allowChange = true;
      }, 2000);

      self.resetSlide();

      clearInterval(timer);
      timer = setInterval(function () {
        self.resetSlide();
      }, timerDuration);


    });


  },

  initSvg: function () {
    console.log('initSvg');

    this.bubblesRandomColors();
    this.setTexts();
    this.bubblesMovement();

    // Trigger First slide
    this.triggerSlide();
  },

  setTexts: function () {
    console.log('setTexts');

    var texts = this.container.find('#svg-texts');

    // Get texts
    this.content.text1 = this.container.find('.slide[count="' + this.currentSlide + '"]').attr('data-1');
    this.content.text2 = this.container.find('.slide[count="' + this.currentSlide + '"]').attr('data-2');
    this.content.text3 = this.container.find('.slide[count="' + this.currentSlide + '"]').attr('data-3');

    // UpperCase Texts
    this.content.text1 = this.content.text1.toUpperCase();
    this.content.text2 = this.content.text2.toUpperCase();
    this.content.text3 = this.content.text3.toUpperCase();

    // Append Texts
    texts.find('text:nth-child(1)').html(this.content.text1);
    texts.find('text:nth-child(2)').html(this.content.text2);
    texts.find('text:nth-child(3)').html(this.content.text3);
  },

  bubblesRandomColors: function () {
    console.log('bubblesRandomColors');

    var bubblesGroup = this.container.find('.bubbles'),
      // colors = ['#03ee93','#ff0700','#ffe700','#5306de'];
      colors = ['rgba(220,220,220,0.3)', 'rgba(220,220,220,0.6)', 'rgba(220,220,220,0.15)'];

    bubblesGroup.find('.svg-path').each(function () {
      var rand = getRand(0, colors.length);
      TweenMax.set(this, { fill: colors[rand], scale: 0, transformOrigin: 'center' });
    })
  },

  triggerSlide: function () {
    console.log('triggerSlide');

    // Container loads invisible, needs this to be shown on the first iteration
    TweenMax.set(this.container, { autoAlpha: 1 });

    var bubbles = this.container.find('.svg-path');
    bubbles.each(function () {
      var rotateRand = getRand(-30, 30);
      TweenMax.to(this, 1.5, { scale: 1.2, rotation: rotateRand, ease: Power2.easeInOut });
    })
  },

  resetSlide: function () {
    console.log('hideSlide');

    var self = this;

    this.currentSlide++;
    if (this.currentSlide > this.slidesLength) { this.currentSlide = 0; };

    var bubbles = this.container.find('.svg-path');
    TweenMax.to(bubbles, 1.5, { scale: 0, ease: Power2.easeInOut, onComplete: triggerContinue });

    // Workaround gsap onComplete
    function triggerContinue() {
      self.initSvg();
    }
  },

  // non used function (performance) (remove the 'return' to enable)
  bubblesMovement: function () {

    return; // Yup, this one

    var bubbles = this.container.find('.svg-path'),
      count = 500;

    bubbles.each(function (index) {
      if (index > count) { return; }
      $(this).attr('data-rand', getRand(15, 25));
    });

    this.container.on('mousemove', function (e) {
      bubbles.each(function () {
        if (!$(this).attr('data-rand')) { return; };

        var rand = $(this).attr('data-rand'),
          cy = e.pageY,
          cx = e.pageX,
          py = Math.round($(this).offset().top),
          px = Math.round($(this).offset().left),
          x = Math.round(-(cx + px) / rand),
          y = Math.round(-(cy + py) / rand);

        TweenMax.to($(this), 0.2, { x: x, y: y, transformOrigin: 'center' });
      });
    })
  }
}

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

window.LLOS = window.LLOS || {};
if ($('#home-animation-wrapper').length) {
  window.LLOS.TextSlider = new TextSlider();
}

function fingerTap() {

  var tl_options = {
    delay: 0.5,
    repeat: -1,
    repeatDelay: 1
  }

  var tl = new TimelineMax(tl_options),
    finger_tapped = document.getElementByClassName('hand-tapped'),
    finger_tapped_path = finger_tapped.getAttribute('d'),
    finger_untapped = document.getElementByClassName('hand-untapped'),
    finger_untapped_path = finger_untapped.getAttribute('d'),
    tap_target = document.getElementByClassName('tap-target'),
    finger_timing = 0.15,
    tap_target_timing = 0.325;

  tl.set(tap_target, {
    transformOrigin: '50% 50%',
    scale: 0
  });

  // .to(element, timing, options, timeline position)
  tl.to(finger_untapped, finger_timing, { morphSVG: finger_tapped_path, ease: Ease.easeIn })
    .add('fingerdown')
    .to(finger_untapped, finger_timing, { morphSVG: finger_untapped_path, ease: Ease.easeOut })
    .add('fingerup')
    .to(tap_target, tap_target_timing, { opacity: 1, scale: 1.2, ease: Cubic.easeInOut }, 'fingerup-=0.25')
    .to(tap_target, tap_target_timing, { opacity: 0 });

  return tl;
}

setInterval(() => {

  if ($('#container-welcome').length && jaFoi == false) {
    $(function () {
      $('.usuario').css('display','block')
      setTimeout(function () {
        if ($('.start').is(':hover')) {
          $('.svg1').css('transform','rotate(60deg)')
          $(".hand-1").css('opacity',0);
          $(".hand-tapping-1").css('opacity',0);
          $(".tap-target-1").css('opacity',0);
        } 
        else {
          $(".hand-1").css('opacity',1);
          $(".hand-tapping-1").css('opacity',1);
          $(".tap-target-1").css('opacity',1);
          $('.svg1').css('transform','rotate(10deg)')
        }
      }, 100);

      $('.start').click(function(){
        $('.title').text('Quem é você?');
        $('.sobre').css('opacity',0);
        $('.login').css('opacity',0);
        $('.start').removeClass('start').addClass('artista');
        $('.artista').text('Artista');
        $('.artista').css('margin-left','100%');
        $('.usuario').css('opacity',1);
        $('.usuario').css('margin-left','-2.8em');
        $('#more-arrows').css('transition','1s all');
        $('#more-arrows').css('opacity',1)
        $('#animation').css('animation','swing 1s ease')
        $('#animation').css('animation-iteration-count','2')
      })

      $('#more-arrows').click(function(){
        $('.title').text('Bem vindo!');
        $('.sobre').css('opacity',1);
        $('.login').css('opacity',1);
        $('.artista').removeClass('artista').addClass('start');
        $('.start').text('Começar');
        $('.start').css('margin-left','0');
        $('.usuario').css('margin-left','0');
        $('#more-arrows').css('transition','1s all');
        $('#more-arrows').css('opacity',0);
        $('.usuario').css('opacity',0);
        $('#animation').css('animation','swing 1s ease')
        $('#animation').css('animation-iteration-count','2')
      })
    })
  }
  else if (!$('#container-welcome').length) {
    jaFoi = false;
  }
}, 100);
