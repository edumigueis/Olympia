$(document).ready(function () {
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

  $(document.body).on('click','.close-mod',function () {
    $('#myModal').css('display', 'none');
    $('#mouse').css('display', 'none');
  })

  $(document.body).on('click','#myModal',function () {
    $('#myModal').css('display', 'none');
    $('#mouse').css('display', 'none');
  })
  
  var image = document.createElement('img');
  var color;

  const colorThief = new ColorThief();
  const img = document.querySelector(".art-icon");

  if (img.complete) {
    color = colorThief.getColor(img);
  }
  else {
    image.addEventListener('load', function () {
      color = colorThief.getColor(img);
    });
  }

  $("body").css('color', "rgb(" + color + ")");
})

