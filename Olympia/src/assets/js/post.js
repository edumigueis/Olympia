// The resize function
function resize() {
    var vheight = $(window).height();
    var vwidth = $(window).width();
    $('.fullsize-background').css({
      'height': vheight,
      'width': vwidth 
    });
  };
  
  // The scroll-up function
  function scrollUp() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
    }, 500);
  };
  
  // The scroll-down function
  function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 500);  
  };
  var contImg = 0;
var jaFoiPost = false;
var selectedImage;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-post").length && jaFoiPost == false) {

    jaFoiPost = true;

    $(function () {

        var readURL = function (input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
    
              reader.onload = function (e) {
                $("#image-picked").attr("src", e.target.result);
                selectedImage = e.target.result;
              };
    
              reader.readAsDataURL(input.files[0]);
            }
          };
          var readURLObra = function (input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
                contImg++;
              reader.onload = function (e) {
                $("#obra-" +contImg).attr("src", e.target.result);
                selectedImage = e.target.result;
                if(contImg >= 2){
                    $('#go-on-btn').css('display','block');
                }
                if(contImg >= 8){
                    $('.fileUpload').css('filter','brightness(68%)');
                    $('.fileUpload').css('pointer-events','none');
                }
              };
    
              reader.readAsDataURL(input.files[0]);
            }
          };
  // Click to Scroll DOWN Functions
  $('#obra-btn').on('click',function(event){
    $('#post-obra-img').css('display','inline-flex')
    scrollDown();
    event.preventDefault();
    setInterval(() => {
        $('.buttons-cont').css('display','none')
    }, 840)
    
  });
  $('#serv-btn').on('click',function(event){
    $('#post-serv-img').css('display','inline-flex')
    scrollDown();
    event.preventDefault();
    setInterval(() => {
        $('.buttons-cont').css('display','none')
    }, 840)
    
  });
  $('#post-btn').on('click',function(event){
    $('#post-insp').css('display','inline-flex')
    scrollDown();
    event.preventDefault();
    setInterval(() => {
        $('.buttons-cont').css('display','none')
    }, 840)
    
  });
  $("#file-input").on("change", function () {
    readURL(this);
  });
  $("#obra-picker").on("change", function () {
    readURLObra(this);
  });
  // Click to Scroll UP Functions
  $('.scroll-prev').click(function(event){
    scrollUp();
    event.preventDefault();

  });

// Resize Container on window resize
$(window).resize(function(){
  
  resize();
  
});
    })
  }
  else if (!$("#container-post").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiPost = false;
  }
}, 100);