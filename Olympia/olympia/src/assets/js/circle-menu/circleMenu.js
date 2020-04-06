var jaFoi = false;

setInterval(() => {

  if ($('.menu-container').length && jaFoi == false) {
    jaFoi = true;

    $(function () {

      window.cssCircleMenu = function(el) {
        var $menu = document.querySelector(el);
        var $menuToggle = $menu ? $menu.querySelector('.js-menu-toggle') : undefined;
        var $menuMask = $menu ? $menu.querySelector('.js-menu-mask') : undefined;
    
        if (!$menu || !$menuToggle || !$menuMask) {
          throw new Error('Invalid elements, check the structure.');
        } else {
          init();
        }
    
        return {
          openMenu: openMenu,
          closeMenu: closeMenu
        };
    
        function init() {
          $menuToggle.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            toggleMenu();
            if ($('.blur').css('filter') == 'none'){          
              $('.blur').css('filter','blur(10px) !important');
            }
            else {
              $('.blur').css('filter','none !important');
              $('.menu-link-art').css('font-size','1.2em !important');
            }
          });
        }
    
        function toggleMenu() {
          $menuToggle.classList.contains('is-active')
            ? closeMenu()
            : openMenu();
        }
    
        function openMenu() {
          $menu.classList.add('is-active');
          $menuToggle.classList.add('is-active');
          $menuMask.classList.add('is-active');
        }
    
        function closeMenu() {
          $menu.classList.remove('is-active');
          $menuToggle.classList.remove('is-active');
          $menuMask.classList.remove('is-active');
        }
      };
    })
  }
  else if (!$('.menu-container').length) {
    jaFoi = false;
  }
}, 100);

window.cssCircleMenu = function(el) {
    var $menu = document.querySelector(el);
    var $menuToggle = $menu ? $menu.querySelector('.js-menu-toggle') : undefined;
    var $menuMask = $menu ? $menu.querySelector('.js-menu-mask') : undefined;

    if (!$menu || !$menuToggle || !$menuMask) {
      throw new Error('Invalid elements, check the structure.');
    } else {
      init();
    }

    return {
      openMenu: openMenu,
      closeMenu: closeMenu
    };

    function init() {
      $menuToggle.addEventListener('mouseenter', function(e) {
        e.preventDefault();
        toggleMenu();
        if ($('.blur').css('filter') == 'none'){
          $('.blur').css('filter','blur(10px)')
          $('.menu-link-art').css('font-size','1.8em')
          $('.menu-link-art').css('z-index','9999')
        }
        else {
          $('.blur').css('filter','none')
          $('.menu-link-art').css('font-size','1.2em')
        }
      });
    }

    function toggleMenu() {
      $menuToggle.classList.contains('is-active')
        ? closeMenu()
        : openMenu();
    }

    function openMenu() {
      $menu.classList.add('is-active');
      $menuToggle.classList.add('is-active');
      $menuMask.classList.add('is-active');
    }

    function closeMenu() {
      $menu.classList.remove('is-active');
      $menuToggle.classList.remove('is-active');
      $menuMask.classList.remove('is-active');
    }
  };

