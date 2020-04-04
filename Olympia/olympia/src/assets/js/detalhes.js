var jaFoi = false;
var cor;
function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}
var imagem = $("#3image-1-det").attr("src");

toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
  var image64 = dataUrl;
})


setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-obra").length && jaFoi == false) {

    jaFoi = true;
    $(function () {

      $(document.body).on('click', '.img-col', function () {
        var src = $(this).attr("src");
        $('#myModal').css('display', 'block');
        $("#img01").attr("src", src);
        $(window).scrollTop(0);
        $('#mouse').css('display', 'block');
      });
      $(document.body).on('click', '#arrows-pag-det', function () {
        $('#img-col-d').fadeOut(200);
        $('#info-col-d').fadeIn(1200);
        $('#arrows-pag-det').css('display', 'none');
        $('#arrows-pag-det-2').css('display', 'block');
        $('.bg-det').css('display', 'block');
        $('.bg-det-gray').css('display', 'none');
        $('#mouse').css('display', 'none');
      });
      $(document.body).on('click', '#arrows-pag-det-2', function () {
        $('#img-col-d').fadeIn(1200);
        $('#info-col-d').fadeOut(200);
        $('#arrows-pag-det').css('display', 'block');
        $('#arrows-pag-det-2').css('display', 'none');
        $('.bg-det').css('display', 'none');
        $('.bg-det-gray').css('display', 'block');
        $('#mouse').css('display', 'block');
      });

      $(document.body).on('click', '.close-mod', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');

      })

      $(document.body).on('click', '#myModal', function () {
        $('#myModal').css('display', 'none');
        $('#mouse').css('display', 'none');
      })

      
    })
  }
  else if (!$('#container-obra').length) {
    jaFoi = false;
  }
}, 100);

