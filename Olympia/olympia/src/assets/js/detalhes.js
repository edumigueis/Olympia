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
var imagem = document.getElementById("image-1-det").src;

toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
  var image64 = dataUrl;
})


setInterval(() => {

  if ($('#container-obra').css('display') == 'block' && jaFoi == false) {
    $(function () {
      jaFoi = true;
      cor = cor +"";
      $('body').css('background-color', 'rgb('+cor.substring(0, 5)+')');

      var altura = $(document).height()

      $('#bg').css('height', altura);

      $(window).resize(function () {
        var altura2 = $(document).height()

        $('#bg').css('height', altura2);
        altura2 = 0;
      });

      $(document.body).on('click', '.img-col', function () {
        var src = $(this).attr("src");
        $('#myModal').css('display', 'block');
        $("#img01").attr("src", src);
        $(window).scrollTop(0);
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

