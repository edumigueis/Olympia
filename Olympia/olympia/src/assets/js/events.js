
  var jaFoi = false;

setInterval(() => {

  if ($('#container-obra').css('display') == 'block' && jaFoi == false) {
    $(function () {
      
      jaFoi = true;
      var altura = $(document).height()
  
    $('.main-content').css('height', altura - 100);
  
    $(window).resize(function () {
      var altura2 = $(document).height()
  
      $('.main-content').css('height', altura2);
      altura2 =0;
  
    });

      
    })
  }
  else if (!$('#container-obra').length) {
    jaFoi = false;
  }
}, 100);