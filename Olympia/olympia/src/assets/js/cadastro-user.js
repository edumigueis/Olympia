var jaFoi = false;

setInterval(() => {

  if ($('#container-cad-user').css('display') == 'block' && jaFoi == false) {
    $(function () {
        var firstLet = null;
        $("#tel").mask('+00 (00) 00000-0000');

          $("#name").focusout(function(){
              if($('#name').val() != "")
              {
                $(".default-prof-user").empty();
                firstLet = $('#name').val().charAt(0);
                firstLet = firstLet.toUpperCase();
                var vzs = 0;
                vzs++;
                if(vzs == 1)
                $("#user-let-img").css('display','block');
                $("#hexcolor").css('display','block');
                $("#user-let-img").html("<p class='prof-user-letter'>"+firstLet+"</p>");
                $(".signup-image").css("margin-top",0);
                $("#user-let-img").css('margin-bottom','60px');
                firstLet =null;
              }else{
                $("#user-let-img").css('display','none');
                $("#hexcolor").css('display','none');
                $('#name').css("border-radius","4px");
                $('#name').css("border","1px solid red");
              }
          });
          $("#name").focusin(function(){
            $("#user-let-img").empty();
            $(".signup-image").html("<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image'></figure><div class='form-group'><label for='hexcolor'><i class='zmdi zmdi-palette'></i></label><input type='text' name='hexcolor' pattern='^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$' id='hexcolor' placeholder='Selecione a Cor de Fundo'></div><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p>");
            $('#name').css("border-radius","0");
              $('#name').css("border-top",0);
              $('#name').css("border-left",0);
              $('#name').css("border-right", 0);
              $('#name').css("border-bottom", '1px solid #999');
        });
        $("#tel").focusin(function(){
            $('#tel').css("border-radius","0");
              $('#tel').css("border-top",0);
              $('#tel').css("border-left",0);
              $('#tel').css("border-right", 0);
              $('#tel').css("border-bottom", '1px solid #999');
        });
        $("#pass").focusin(function(){
            $('#pass').css("border-radius","0");
              $('#pass').css("border-top",0);
              $('#pass').css("border-left",0);
              $('#pass').css("border-right", 0);
              $('#pass').css("border-bottom", '1px solid #999');
        });
        $("#re_pass").focusin(function(){
            $('#re_pass').css("border-radius","0");
              $('#re_pass').css("border-top",0);
              $('#re_pass').css("border-left",0);
              $('#re_pass').css("border-right", 0);
              $('#re_pass').css("border-bottom", '1px solid #999');
        });
        $("#email").focusin(function(){
            $('#email').css("border-radius","0");
              $('#email').css("border-top",0);
              $('#email').css("border-left",0);
              $('#email').css("border-right", 0);
              $('#email').css("border-bottom", '1px solid #999');
        });

        $('#hexcolor').on('change', function() {
          $('#user-let-img').css('background',this.value);
        });
        $(".signup-image-link").on('click',function(){
            alert("foi");
        })
        $("#signup").on('click',function(){
            
            if($('#nome').val() == "")
            {
                $('#nome').css("border-radius","4px");
                $('#nome').css("border","1px solid red");
                return;
            }
            else
            if($('#email').val() == "")
            {
                $('#email').css("border-radius","4px");
                $('#email').css("border","1px solid red");
                return;
            }
            else
            if($('#tel').val() == "")
            {
                $('#tel').css("border-radius","4px");
                $('#tel').css("border","1px solid red");
                return;
            }
            else
            if($('#pass').val() == "")
            {
                $('#pass').css("border-radius","4px");
                $('#pass').css("border","1px solid red");
                return;
            }
            else
            if($('#re_pass').val() == "")
            {
                $('#re_pass').css("border-radius","4px");
                $('#re_pass').css("border","1px solid red");
                return;
            }
            else
            if($('#pass').val() != $('#re_pass').val())
            {
                $(".error-box").css("display","block")
            }
        })
    })
  }
  else if (!$('#container-cad-user').length) {
    jaFoi = false;
  }
}, 1500);

