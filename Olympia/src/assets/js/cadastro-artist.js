var jaFoiCadArt = false;
var senhaFoi = false;
var colorList = [
  "f8b195",
  "f67280",
  "c06c84",
  "6c5b7b",
  "4480b0",
  "355c7d",
  "99b898",
  "fecea8",
  "ff847c",
  "e84a5f",
  "2a363b",
  "FF6633",
  "97a2ff",
  "ff9cee",
  "336666",
  "FCC133",
  "E12B38",
  "666666",
  "Ef3366",
  "FF9933",
  "99CC33",
  "669966",
  "66CCCC",
  "3366FF",
  "663366",
  "DAF7A6",
  "FFC300",
  "FF5733",
  "C70039",
  "900C3F",
  "FBD1D3",
  "F198AF",
  "EBB2D6",
  "9F81CD",
  "766DC1",
  "298fca",
  "026aa7",
  "AAEEAA",
  "CCFF00",
  "CC04FF"
];
var picker = $("#color-picker-artist");

for (var i = 0; i < colorList.length; i++) {
  picker.append(
    '<li class="color-item" data-hex="' +
      "#" +
      colorList[i] +
      '" style="background-color:' +
      "#" +
      colorList[i] +
      ';"></li>'
  );
}

var selectedImage;
setInterval(() => {
  if ($("#container-cad-artist").css("display") == "block" && jaFoiCadArt == false) {
    $(function() {
      var firstLet = null;

      $("#name-art").focusout(function() {
        $(".zmdi.zmdi-palette").fadeIn();
        $("#hexcolor-art").fadeIn();
        if ($("#name-art").val() != "") {

          $(".default-prof-artist").empty();
          firstLet = $("#name-art")
            .val()
            .charAt(0);
          firstLet = firstLet.toUpperCase();
          
          $("#artist-let-img").css("display", "block");
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $("#artist-let-img").html(
            "<p class='prof-user-letter'>" + firstLet + "</p>"
          );
          $(".signup-image").css("margin-top", 0);
          $("#artist-let-img").css("margin-bottom", "60px");
          firstLet = null;
        } else {
          $("#artist-let-img").css("display", "none");
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".signup-image").html(
            "<figure class='default-prof-artist'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='artist-prof-image'></figure><div id='artist-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".bin").fadeOut();
        }
      });
      $("body").on("click", function() {
        picker.fadeOut();
      });
      $(".ui-widget-overlay").on("click", function() {
        if (selectedImage != null) {
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $("#artist-let-img").empty();
          $('.is-same-cont').css("background-color","transparent");
          $(".signup-image").html(
            "<figure class='default-prof-artist'><img src='" +
              selectedImage +
              "' alt='sing up image' id='artist-prof-image'></figure><div id='artist-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".bin").fadeIn();
          $(".ui-widget-overlay").css('display','none');
          $("#pick-image-modal-art").css('display','none');
          $(".error-modal").css('display','none');
          $(".error-modal").css('opacity','0');
        } 
        else
        if(selectedImage == null && $("#name-art").val() != "")
        {
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $('.is-same-cont').css("background-color","transparent");
          $(".ui-widget-overlay").css('display','none');
          $("#pick-image-modal-art").css('display','none');
          $(".error-modal").css('display','none');
          $(".error-modal").css('opacity','0');
        }
        else {
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $('.is-same-cont').css("background-color","transparent");
          $("#artist-let-img").empty();
          $(".signup-image").html(
            "<figure class='default-prof-artist'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='artist-prof-image'></figure><div id='artist-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".ui-widget-overlay").css('display','none');
          $("#pick-image-modal-art").css('display','none');
          $(".error-modal").css('display','none');
          $(".error-modal").css('opacity','0');
        }
      });
      $(".bin").on("click", function() {
        $(".zmdi.zmdi-palette").fadeIn();
        $("#hexcolor-art").fadeIn();
        if ($("#name-art").val() != "") {
          $(".default-prof-artist").empty();
          firstLet = $("#name-art")
            .val()
            .charAt(0);
          firstLet = firstLet.toUpperCase();
          var vzsart2 = 0;
          vzsart2++;
          if (vzsart2 == 1) $("#artist-let-img").css("display", "block");
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $("#artist-let-img").html(
            "<p class='prof-user-letter'>" + firstLet + "</p>"
          );
          $(".signup-image").css("margin-top", 0);
          $("#artist-let-img").css("margin-bottom", "60px");
          $(".bin").fadeOut();
          firstLet = null;
        } else {
          $("#artist-let-img").css("display", "none");
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".signup-image").html(
            "<figure class='default-prof-artist'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='artist-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".bin").fadeOut();
        }
      });
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $("#profile-pic-artist").attr("src", e.target.result);
            selectedImage = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $("#file-artist").on("change", function() {
        readURL(this);
      });

      $("#call-picker-art").on("click", function(event) {
        event.stopPropagation();
        picker.fadeIn();
        picker.children("li").hover(function() {
          var codeHex = $(this).data("hex");

          $(".color-holder").css("background-color", codeHex);
          $("#artist-let-img").css("background", codeHex);
          $("#hexcolor-art").val(codeHex);
        });
      });

      $("#name-art").focusin(function() {
        if (
          $("#artist-prof-image").attr('src') == "/src/assets/images/user-ico.png"
        ) {
          $("#artist-let-img").empty();
          $(".signup-image").html(
            "<figure class='default-prof-artist'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='artist-prof-image'></figure><div id='artist-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p>"
          );
          $("#name-art").css("border-radius", "0");
          $(".color-holder").css("display", "none");
          $("#name-art").css("border-top", 0);
          $("#name-art").css("border-left", 0);
          $("#name-art").css("border-right", 0);
          $("#name-art").css("border-bottom", "1px solid #999");
        } else {
          return;
        }
      });
      $("#tel").focusin(function() {
        $("#tel").css("border-radius", "0");
        $("#tel").css("border-top", 0);
        $("#tel").css("border-left", 0);
        $("#tel").css("border-right", 0);
        $("#tel").css("border-bottom", "1px solid #999");
      });
      $("#pass_art").focusin(function() {
        $("#pass_art").css("border-radius", "0");
        $("#pass_art").css("border-top", 0);
        $("#pass_art").css("border-left", 0);
        $("#pass_art").css("border-right", 0);
        $("#pass_art").css("border-bottom", "1px solid #999");
      });
      $("#re_pass_art").focusin(function() {
        $("#re_pass_art").css("border-radius", "0");
        $("#re_pass_art").css("border-top", 0);
        $("#re_pass_art").css("border-left", 0);
        $("#re_pass_art").css("border-right", 0);
        $("#re_pass_art").css("border-bottom", "1px solid #999");
      });
      $("#email-art").focusin(function() {
        $("#email-art").css("border-radius", "0");
        $("#email-art").css("border-top", 0);
        $("#email-art").css("border-left", 0);
        $("#email-art").css("border-right", 0);
        $("#email-art").css("border-bottom", "1px solid #999");
      });

      $("#hexcolor-art").on("change", function() {
        $("#artist-let-img").css("background", this.value);
      });

      $('#pass_art').on("keyup",function (){
        forcaSenha($(this).val());                        
      })
      $('#artist').on("keyup",function (){
        var user = $('#artist').val();
        if(user ==  "")
        {
          return;
        }
        if (!user.match(/^[A-Za-z0-9 ]+$/)) {
          $(".error-modal").css('display','block');
          $(".error-modal").css('opacity','1');
          $(".ui-widget-overlay").css('display','block');
          $(".warn").html("O username não deve conter acentuação e caracteres especiais");
          $('#artist').val("");
        }                     
      })
      $('#name-art').on("focusout",function (){
        var name = $('#name-art').val();
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(name ==  "")
        {
          return;
        }
        if (!regName.test(name)) {
          $(".error-modal").css('display','block');
          $(".error-modal").css('opacity','1');
          $(".ui-widget-overlay").css('display','block');
          $(".warn").html("Deve ser fornecido o nome e o sobrenome.");
          $('#name-art').val("");
        }                     
      })
      $('#tel').on("focusout",function (){
        var tele = $('#tel').val();
        var regName = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g;
        if(tele ==  "")
        {
          return;
        }
        if (!regName.test(tele)) {
          $(".error-modal").fadeIn(500);
          $(".error-modal").css('opacity','1');
          $(".ui-widget-overlay").fadeIn(500);
          $(".warn").html("Deve ser fornecido telefone nos padrões: +55 00 000000000 (BR), +591 00000000, +1 000 000 0000 ou +(591) 0000000.");
          $('#tel').val("");
        }                     
      })
      $('#email-art').on("focusout",function (){
        var email = $('#email-art').val();
        if(email ==  "")
        {
          return;
        }
        if (!validar(email)) {
          $(".error-modal").css('display','block');
          $(".error-modal").css('opacity','1');
          $(".ui-widget-overlay").css('display','block');
          $(".warn").html("O email deve ter um @ seguido pelo domínio.");
          $('#email-art').val("");
        }
      })
      function validar(emailp){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailp);
      }
      function forcaSenha(senha){

        var forca = 0;
        
        var regLetrasMa = /[A-Z]/;
        var regLetrasMi = /[a-z]/;
        var regNumero = /[0-9]/;
        var regEspecial = /[!@#$%&*?]/;
        
        var tam = false;
        var tamM = false;
        var letrasMa = false;
        var letrasMi = false;
        var numero = false;
        var especial = false;
    
    
        if(senha.length >= 6) 
            tam = true;
        if(senha.length >= 10) 
            tamM = true;
        if(regLetrasMa.exec(senha)) 
            letrasMa = true;
        if(regLetrasMi.exec(senha)) 
            letrasMi = true;
        if(regNumero.exec(senha)) 
            numero = true;
        if(regEspecial.exec(senha)) 
            especial = true;
        
        if(tam) 
            forca += 10;
        if(tamM) 
            forca += 10;
        if(letrasMa) 
            forca += 10;
        if(letrasMi) 
            forca += 10;
        if(letrasMa && letrasMi) 
            forca += 20;
        if(numero) 
            forca += 20;
        if(especial) 
            forca += 20;
        
        exibeForca(forca);
    }
    
    function exibeForca(forca){
    
        var color, percent = 0;
    
        if(forca < 30){
            color = "#ED2939";
            percent = 25;
        }
        else if((forca >= 30) && (forca < 50)){
            color = "orange";
            percent = 50;
        }
        else if((forca >= 50) && (forca < 80)){
            color = "#e6e600";
            percent = 75;
        }
        else{
            color = "#2eb82e";
            percent = 100;
        }
    
        $('.locker-cont').css("background-color", color);
    }
    $('#pass_art').on("focusout", function(){
      var color = $('.locker-cont').css("background-color");
      if($('#pass_art').val() == "")
      {
        $('.locker-cont').css("background-color","transparent")
        color = "rgb(255, 255, 255)";
      }
      if(color == "rgb(237, 41, 57)"){
        $(".ui-widget-overlay").css('display','block');
        $(".error-modal").css('display','block');
        $(".error-modal").css('opacity','0');
        $('#pass_art').val("");
        $('.is-same-cont').css("background-color","transparent");
        $(".warn").html("A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são obrigatórias. Evite repetições!");
      }
      if(color == "rgb(255, 165, 0)"){
        $(".ui-widget-overlay").css('display','block');
        $(".error-modal").css('display','block');
        $(".error-modal").css('opacity','1');
        $('#pass_art').val("");
        $('.is-same-cont').css("background-color","transparent");
        $(".warn").html("A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são obrigatórias. Evite repetições.");
      }
    });


    $('#re_pass_art').on("focusin", function(){
      $('.is-same-cont').css("background-color","rgb(237, 41, 57)");
    });
    $('#pass_art, #re_pass_art').on('keyup', function () {
      if ($('#pass_art').val() == $('#re_pass_art').val() && $('#pass_art').val() != "") {
        $('.is-same-cont').css("background-color","#2eb82e");
      } 
      if ($('#pass_art').val() != $('#re_pass_art').val() && $('#pass_art').val() != "")
        $('.is-same-cont').css("background-color","rgb(237, 41, 57)");
      if($('#pass_art').val() == ""){
        $('.is-same-cont').css("background-color","transparent")
      }
    });
      $(".signup-image-link").on("click", function() {
        $(".ui-widget-overlay").css('display','block');
        $("#pick-image-modal-art").css('display','block');
      });
      $("#signup-artist").on("click", function(e) {
        if ($("#name-art").val() == "") {
          return;
        } else if ($("#email-art").val() == "") {
          return;
        } else if ($("#tel").val() == "") {
          return;
        } else if ($("#pass_art").val() == "") {
          return;
        } else if ($("#re_pass_art").val() == "") {
          return;
        } else if ($("#pass_art").val() != $("#re_pass_art").val()) {
          $(".warn").text("As senhas não correspondem!");
          $(".error-modal").css('display','block');
          $(".error-modal").css('opacity','1');
          return;
        }
      });
    });
  } else if (!$("#container-cad-artist").length) {
    jaFoiCadArt = false;
  }
}, 1500);
