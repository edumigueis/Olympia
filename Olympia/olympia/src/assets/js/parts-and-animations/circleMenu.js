var jaFoi2 = false;
var $menu = document.getElementsByClassName('js-menu');
var $menuToggle = document.getElementsByClassName('js-menu-toggle');
var $menuMask = document.getElementsByClassName('js-menu-mask');
var $menuContainer = document.getElementsByClassName('js-menu-container-circle');


setInterval(() => {

  if ($('.menu-container').length && jaFoi2 == false) {

    jaFoi2 = true;

    $(function () {
      init();
    })

  }
  else if (!$('.menu-container').length) {
    jaFoi2 = false;
  }
}, 100);

function init() {
  $menuToggle[0].addEventListener('mouseenter', function (e) {
    e.preventDefault();
    openMenu();
    $('.blur').css('filter', 'blur(10px)');
    $('.menu-link-art').css('font-size', '1.8em');

    $menuContainer[0].addEventListener('mouseout', function (e) {
      if (!$(".c-circle-menu__items").is(':hover')){
        closeMenu();
        $('.blur').css('filter', 'none');
        $('.menu-link-art').css('font-size', '1.2em');
      }
    });

  });


}

function openMenu() {
  $menu[0].classList.add('is-active');
  $menuToggle[0].classList.add('is-active');
  $menuMask[0].classList.add('is-active');
}

function closeMenu() {
  $menu[0].classList.remove('is-active');
  $menuToggle[0].classList.remove('is-active');
  $menuMask[0].classList.remove('is-active');
}

