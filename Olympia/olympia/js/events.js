$(document).ready(function () {
    var altura = $(document).height()
  
    $('.main-content').css('height', altura - 100);
  
    $(window).resize(function () {
      var altura2 = $(document).height()
  
      $('.main-content').css('height', altura2);
      altura2 =0;
  
    });
  })
  
  