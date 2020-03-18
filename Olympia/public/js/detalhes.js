$(document).ready(function(){
   var altura = $(document).height()

   $('#bg').css('height', altura);

   $( window ).resize(function() {
    var altura2 = $(document).height()

   $('#bg').css('height', altura2);

  
  });
  $('.img-col').click(function() {
      var src = $(this).attr("src");
    $('#myModal').css('display','block');
    $("#img01").attr("src",src);
    $(window).scrollTop(0);
    $('#mouse').css('display','block');
  });
  $('.close-mod').click(function(){
    $('#myModal').css('display','none');
    $('#mouse').css('display','none');
  })
  $('#myModal').click(function(){
    $('#myModal').css('display','none');
    $('#mouse').css('display','none');
  })

})
