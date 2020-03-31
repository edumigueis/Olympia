var jaFoi = false;
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
var picker = $("#color-picker");

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
  if ($("#container-cad-user").css("display") == "block" && jaFoi == false) {
    $(function() {
      var firstLet = null;
      $("#tel").mask("+00 (00) 00000-0000");

      $("#name").focusin(function() {
        $("#hexcolor").fadeOut();
        $(".zmdi.zmdi-palette").fadeOut();
      });

      $("#name").focusout(function() {
        $(".zmdi.zmdi-palette").fadeIn();
        $("#hexcolor").fadeIn();
        if ($("#name").val() != "") {
          $(".default-prof-user").empty();
          firstLet = $("#name")
            .val()
            .charAt(0);
          firstLet = firstLet.toUpperCase();
          var vzs = 0;
          vzs++;
          if (vzs == 1) $("#user-let-img").css("display", "block");
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $("#user-let-img").html(
            "<p class='prof-user-letter'>" + firstLet + "</p>"
          );
          $(".signup-image").css("margin-top", 0);
          $("#user-let-img").css("margin-bottom", "60px");
          firstLet = null;
        } else {
          $("#user-let-img").css("display", "none");
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
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
          $("#user-let-img").empty();
          $('.is-same-cont').css("background-color","rgb(255, 255, 255)");
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='" +
              selectedImage +
              "' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".bin").fadeIn();
          $(".ui-widget-overlay").fadeOut(350);
          $("#pick-image-modal").fadeOut(500);
          $(".error-modal").fadeOut(500);
        } else {
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $('.is-same-cont').css("background-color","rgb(255, 255, 255)");
          $("#user-let-img").empty();
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".ui-widget-overlay").fadeOut(350);
          $("#pick-image-modal").fadeOut(500);
          $(".error-modal").fadeOut(500);
        }
      });
      $(".bin").on("click", function() {
        $(".zmdi.zmdi-palette").fadeIn();
        $("#hexcolor").fadeIn();
        if ($("#name").val() != "") {
          $(".default-prof-user").empty();
          firstLet = $("#name")
            .val()
            .charAt(0);
          firstLet = firstLet.toUpperCase();
          var vzs = 0;
          vzs++;
          if (vzs == 1) $("#user-let-img").css("display", "block");
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $("#user-let-img").html(
            "<p class='prof-user-letter'>" + firstLet + "</p>"
          );
          $(".signup-image").css("margin-top", 0);
          $("#user-let-img").css("margin-bottom", "60px");
          $(".bin").fadeOut();
          firstLet = null;
        } else {
          $("#user-let-img").css("display", "none");
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".bin").fadeOut();
        }
      });
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $(".profile-pic").attr("src", e.target.result);
            selectedImage = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $("#file").on("change", function() {
        readURL(this);
      });

      $(".call-picker").on("click", function(event) {
        event.stopPropagation();
        picker.fadeIn();
        picker.children("li").hover(function() {
          var codeHex = $(this).data("hex");

          $(".color-holder").css("background-color", codeHex);
          $("#user-let-img").css("background", codeHex);
          $("#hexcolor").val(codeHex);
        });
      });
      $("#name").focusin(function() {
        if (
          $("#user-prof-image").attr(src) == "/src/assets/images/user-ico.png"
        ) {
          $("#user-let-img").empty();
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p>"
          );
          $("#name").css("border-radius", "0");
          $(".color-holder").css("display", "none");
          $("#name").css("border-top", 0);
          $("#name").css("border-left", 0);
          $("#name").css("border-right", 0);
          $("#name").css("border-bottom", "1px solid #999");
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
      $("#pass").focusin(function() {
        $("#pass").css("border-radius", "0");
        $("#pass").css("border-top", 0);
        $("#pass").css("border-left", 0);
        $("#pass").css("border-right", 0);
        $("#pass").css("border-bottom", "1px solid #999");
      });
      $("#re_pass").focusin(function() {
        $("#re_pass").css("border-radius", "0");
        $("#re_pass").css("border-top", 0);
        $("#re_pass").css("border-left", 0);
        $("#re_pass").css("border-right", 0);
        $("#re_pass").css("border-bottom", "1px solid #999");
      });
      $("#email").focusin(function() {
        $("#email").css("border-radius", "0");
        $("#email").css("border-top", 0);
        $("#email").css("border-left", 0);
        $("#email").css("border-right", 0);
        $("#email").css("border-bottom", "1px solid #999");
      });

      $("#hexcolor").on("change", function() {
        $("#user-let-img").css("background", this.value);
      });

      $('#pass').on("keyup",function (){
        forcaSenha($(this).val());                        
      })
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
    $('#pass').on("focusout", function(){
      var color = $('.locker-cont').css("background-color");
      if($('#pass').val() == "")
      {
        $('.locker-cont').css("background-color","#FFF")
        color = "rgb(255, 255, 255)";
      }
      if(color == "rgb(237, 41, 57)"){
        $(".ui-widget-overlay").fadeIn(450);
        $(".error-modal").fadeIn(500);
        $('#pass').val("");
        $('.is-same-cont').css("background-color","rgb(255, 255, 255)");
        $(".warn").html("A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são recomendadas. Evite repetições.");
      }
      if(color == "rgb(255, 165, 0)"){
        $(".ui-widget-overlay").fadeIn(450);
        $(".error-modal").fadeIn(500);
        $('#pass').val("");
        $('.is-same-cont').css("background-color","rgb(255, 255, 255)");
        $(".warn").html("A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são recomendadas. Evite repetições.");
      }
    });


    $('#re_pass').on("focusin", function(){
      $('.is-same-cont').css("background-color","rgb(237, 41, 57)");
    });
    $('#pass, #re_pass').on('keyup', function () {
      if ($('#pass').val() == $('#re_pass').val() && $('#pass').val() != "") {
        $('.is-same-cont').css("background-color","#2eb82e");
      } 
      if ($('#pass').val() != $('#re_pass').val() && $('#pass').val() != "")
        $('.is-same-cont').css("background-color","rgb(237, 41, 57)");
      if($('#pass').val() == ""){
        $('.is-same-cont').css("background-color","rgb(255, 255, 255)")
      }
    });
      $(".signup-image-link").on("click", function() {
        $(".ui-widget-overlay").fadeIn();
        $("#pick-image-modal").fadeIn();
      });
      $("#signup").on("click", function(e) {
        if ($("#nome").val() == "") {
          return;
        } else if ($("#email").val() == "") {
          return;
        } else if ($("#tel").val() == "") {
          return;
        } else if ($("#pass").val() == "") {
          return;
        } else if ($("#re_pass").val() == "") {
          return;
        } else if ($("#pass").val() != $("#re_pass").val()) {
          $(".warn").text("As senhas devem ser as mesmas ao confirmar.");
          $(".error-modal").fadein();
          return;
        }
      });
    });
  } else if (!$("#container-cad-user").length) {
    jaFoi = false;
  }
}, 1500);
