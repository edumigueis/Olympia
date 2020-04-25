var auxiliar = false;
var $menu = document.getElementsByClassName('js-menu');
var $menuToggle = document.getElementsByClassName('menu-item-art-hover');
var $menuMask = document.getElementsByClassName('js-menu-mask');
var $menuContainer = document.getElementsByClassName('js-menu-container-circle');
var $menuClose = document.getElementsByClassName('close-img');


setInterval(() => {
  if ($('.menu-container').length) {

    auxiliar = true;

    $(function () {
      init();
    })

  }
}, 100);

function init() {
  $menuToggle[0].addEventListener('mouseenter', function (e) {
    e.preventDefault();
    openMenu();
    $('.blur').css('filter', 'blur(10px)');
    $('.blur').css('filter', 'blur(10px)');
    $('.js-menu-container-circle').css('display', 'block');

    $menuContainer[0].addEventListener('mouseout', function (e) {
      if (!$(".c-circle-menu__items").is(':hover')){
        closeMenu();
        $('.blur').css('filter', 'none');
        $('.menu-link-art').css('font-size', '1.2em');
        $('.js-menu-container-circle').css('display', 'none');
      }

      $menuClose[0].addEventListener('mouseenter', function (e) {
        if (!$(".c-circle-menu__items").is(':hover')){
          closeMenu();
          $('.blur').css('filter', 'none');
          $('.menu-link-art').css('font-size', '1.2em');
          $('.js-menu-container-circle').css('display', 'none');
        }
      })
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

