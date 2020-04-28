var jaFoiCat = false;
var target;
var parent;
var child;
var childImg;
var selectedCat = 0;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-categorias").length && jaFoiCat == false) {

    jaFoiCat = true;

    $(function () {
        selectedCat = $('#cat-number').text();
      $(document.body).on('click', '.cat-card', function (event) {
         target = $( event.target );
         parent = target.parent();
         parent.removeClass("active");
            target.css("filter","brightness(40%) !important");
            parent.addClass("active");
            child = parent.children(".checked-img");
            child.css('display', 'block');
            childImg = parent.children(".cat-img");
            child.next().css('margin-top','-7px')
            child.next().css('margin-bottom','0')
            childImg.css("filter","brightness(40%)");
            selectedCat++;
            $('#cat-number').html(""+selectedCat);
            if(selectedCat == 5){
                $('.btn-wrap').css('display', 'block');
            }
      });
      $(document.body).on('click', '.active', function (event) {
           target = $( event.target );
           parent = target.parent();
           child = parent.children(".checked-img");
           child.css('display', 'block');
           child.next().css('margin-top','-37px')
           target.next().css('display','none');
           target.css("filter","brightness(96%)");
           parent.removeClass("active");
           selectedCat = selectedCat - 2;
           $('#cat-number').html(""+selectedCat);
           if(selectedCat < 5){
            $('.btn-wrap').css('display', 'none');
        }
     });
    })
  }
  else if (!$("#container-categorias").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiCat = false;
  }
}, 100);