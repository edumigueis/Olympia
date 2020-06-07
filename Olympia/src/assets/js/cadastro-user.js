var jaFoiCadUser = false;
var senhaFoi = false;
var codeHex = 'fc6c85';
var jaFoiPostCadUser = false;
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
var sentences= [
  'Temos a arte para não morrer da verdade. -Friedrich Nietzsche',
  'A arte é a autoexpressão lutando para ser absoluta. -Fernando Pessoa',
  'A arte diz o indizível; exprime o inexprimível, traduz o intraduzível. -Leonardo da Vinci',
  'A música é o tipo de arte mais perfeita: nunca revela o seu último segredo. -Oscar Wilde',
  'A arte é a mentira que nos permite conhecer a verdade. -Pablo Picasso',
  'A arte é uma forma de crescimento para a liberdade, um caminho para a vida. -Fayga Ostrower',
  'O trabalho do artista é aprofundar sempre no mistério. -Francis Bacon',
  'Arte não se trata de arte. Arte é sobre vida. E isso a resume. - Louise Bourgeois',
  'Penso que não há nada mais artístico do que amar verdadeiramente as pessoas. -Vincent van Gogh'
],

maxSentences = sentences.length;
var JaFoiForCad = false;
var selectedImage;
var isSelImg = false;
var userValidado;
setInterval(() => {
  if ($("#container-cad-user").length && jaFoiCadUser == false) {
    $(function () {
      var firstLet = null;
      
      $("#name").on('focusout', function() {
        if (isSelImg == false) {
          if ($("#name").val() != "") {
            $(".zmdi.zmdi-palette").fadeIn();
            $("#hexcolor").fadeIn();
            $(".default-prof-user").empty();
            firstLet = $("#name")
              .val()
              .charAt(0);
            firstLet = firstLet.toUpperCase();
            $(".bin").css("display", "none");
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
        } else {
          var name = $("#name").val();
          var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
          if (name == "") {
            return;
          }
          if (!regName.test(name)) {
            $(".error-modal").css("display", "block");
            $(".error-modal").css("opacity", "1");
            $(".ui-widget-overlay").css("display", "block");
            $(".warn").html("Deve ser fornecido o nome completo.");
            $("#name").val("");
          }
        }
        for (var i = 0; i < colorList.length; i++) {
          $("#color-picker").append(
            '<li class="color-item" data-hex="' +
            "#" +
            colorList[i] +
            '" style="background-color:' +
            "#" +
            colorList[i] +
            ';"></li>'
          );
        }
      });
      $("body").on("click", function () {
        $("#color-picker").fadeOut();
      });
      $(".ui-widget-overlay").on("click", function () {
        if (selectedImage != null) {
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $("#user-let-img").empty();
          $(".is-same-cont").css("background-color", "transparent");
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='" +
            selectedImage +
            "' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          isSelImg = true;
          $(".bin").fadeIn();
          $(".ui-widget-overlay").css("display", "none");
          $("#pick-image-modal").css("display", "none");
          $(".error-modal").css("display", "none");
          $(".error-modal").css("opacity", "0");
        } else if (selectedImage == null && $("#name").val() != "") {
          $(".hexcolor").css("display", "block");
          $(".color-holder").css("display", "block");
          $(".is-same-cont").css("background-color", "transparent");
          $(".ui-widget-overlay").css("display", "none");
          $("#pick-image-modal").css("display", "none");
          $(".error-modal").css("display", "none");
          $(".error-modal").css("opacity", "0");
        } else {
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".is-same-cont").css("background-color", "transparent");
          $("#user-let-img").empty();
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          $(".ui-widget-overlay").css("display", "none");
          $("#pick-image-modal").css("display", "none");
          $(".error-modal").css("display", "none");
          $(".error-modal").css("opacity", "0");
        }
      });
      $(".bin").on("click", function () {
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
          isSelImg = false;
        } else {
          $("#user-let-img").css("display", "none");
          $(".hexcolor").css("display", "none");
          $(".color-holder").css("display", "none");
          $(".signup-image").html(
            "<figure class='default-prof-user'><img src='/src/assets/images/user-ico.png' alt='sing up image' id='user-prof-image'></figure><div id='user-let-img'></div><p class='signup-image-link'>Escolher Foto de Perfil</p><img class='bin' src='/src/assets/images/trash-can-icon.png'>"
          );
          isSelImg = false;
          $(".bin").fadeOut();
        }
      });
      $(".hexcolor").on("click", function () {
        $("#color-picker").css("display", "none");
      });
      var readURL = function (input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $("#profile-pic").attr("src", e.target.result);
            selectedImage = e.target.result;

          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $("#file").on("change", function () {
        readURL(this);
      });

      $(".call-picker").click(function (event) {
        event.stopPropagation();
        $("#color-picker").fadeIn();
        $("#color-picker")
          .children("li")
          .click(function () {
            codeHex = $(this).data("hex");

            $(".color-holder").css("background-color", codeHex);
            $("#user-let-img").css("background", codeHex);
            $("#hexcolor").val(codeHex);
          });
      });
      $("#name").focusin(function () {
        if (
          $("#user-prof-image").attr("src") == "/src/assets/images/user-ico.png"
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
      $("#tel").focusin(function () {
        $("#tel").css("border-radius", "0");
        $("#tel").css("border-top", 0);
        $("#tel").css("border-left", 0);
        $("#tel").css("border-right", 0);
        $("#tel").css("border-bottom", "1px solid #999");
      });
      $("#pass").focusin(function () {
        $("#pass").css("border-radius", "0");
        $("#pass").css("border-top", 0);
        $("#pass").css("border-left", 0);
        $("#pass").css("border-right", 0);
        $("#pass").css("border-bottom", "1px solid #999");
      });
      $("#re_pass").focusin(function () {
        $("#re_pass").css("border-radius", "0");
        $("#re_pass").css("border-top", 0);
        $("#re_pass").css("border-left", 0);
        $("#re_pass").css("border-right", 0);
        $("#re_pass").css("border-bottom", "1px solid #999");
      });
      $("#email").focusin(function () {
        $("#email").css("border-radius", "0");
        $("#email").css("border-top", 0);
        $("#email").css("border-left", 0);
        $("#email").css("border-right", 0);
        $("#email").css("border-bottom", "1px solid #999");
      });

      $("#hexcolor").on("click", function () {
        $("#color-picker").css("display", "none");
        $("#user-let-img").css("background", this.value);
      });

      $("#pass").on("keyup", function () {
        forcaSenha($(this).val());
      });
      $("#user").on("change", function () {
        var user = $("#user").val();
        
        if (user == "") {
          return;
        }
        if (user.length > 29) {
          return;
        }
        if (!user.match(/^[a-z0-9_-]{1,30}$/igm)) {
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $(".ui-widget-overlay").css("display", "block");
          $(".warn").html(
            "O username não deve conter acentuação e caracteres especiais."
          );
          $("#user").val("");
        }
        $.ajax({
          type: "GET",
          url: "https://localhost:5001/api/Redirect/UserNameIsUsado/" + $("#user").val() + "",
          dataType: "json",
          contentType: "application/json",
          success: function (result) {
            console.log(result);
            if (result == true) {
              $("#user").css('border-bottom', '1px solid red');
              userValidado = false;
            } else {
              $("#user").css('border-bottom', '1px solid #999');
              userValidado = true;
            }
          },
          fail: function () {

          }
        });

      });
      $("#user").on("focusout", function () {
          if(userValidado == false)
          $("#user").val("");
      });
      $("#name").on("focusout", function () {
        var name = $("#name").val();
        if (name.length > 39) {
          return;
        }
        var regName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
        if (name == "") {
          return;
        }
        if (!regName.test(name)) {
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $(".ui-widget-overlay").css("display", "block");
          $(".warn").html("Deve ser fornecido o nome completo.");
          $("#name").val("");
        }
      });
      $("#name").on("keyup", function () {
        if ($("#name").val().toString().length > 39) {
          return;
        }
      });
      $("#tel").on("focusout", function () {
        var tele = $("#tel").val();
        var regName = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g;
        if (tele == "") {
          return;
        }
        if (!regName.test(tele)) {
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $(".ui-widget-overlay").css("display", "block");
          $(".warn").html(
            "Deve ser fornecido telefone nos padrões: +55 00 000000000 (BR), +591 00000000, +1 000 000 0000, +(591) 0000000, +(591) (0) 0000000, 0000 00000000, 0001 0000000000 ou (0001) 0000000."
          );
          $("#tel").val("");
        }
      });
      $("#email").on("focusout", function () {
        var email = $("#email").val();
        if (email == "") {
          return;
        }
        if (!validar(email)) {
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $(".ui-widget-overlay").css("display", "block");
          $(".warn").html("O email deve ter um @ seguido pelo domínio.");
          $("#email").val("");
        }
      });
      function validar(emailp) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailp);
      }
      function forcaSenha(senha) {
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

        if (senha.length >= 6) tam = true;
        if (senha.length >= 10) tamM = true;
        if (regLetrasMa.exec(senha)) letrasMa = true;
        if (regLetrasMi.exec(senha)) letrasMi = true;
        if (regNumero.exec(senha)) numero = true;
        if (regEspecial.exec(senha)) especial = true;

        if (tam) forca += 10;
        if (tamM) forca += 10;
        if (letrasMa) forca += 10;
        if (letrasMi) forca += 10;
        if (letrasMa && letrasMi) forca += 20;
        if (numero) forca += 20;
        if (especial) forca += 20;

        exibeForca(forca);
      }

      function exibeForca(forca) {
        var color,
          percent = 0;

        if (forca < 30) {
          color = "#ED2939";
          percent = 25;
        } else if (forca >= 30 && forca < 50) {
          color = "orange";
          percent = 50;
        } else if (forca >= 50 && forca < 80) {
          color = "#e6e600";
          percent = 75;
        } else {
          color = "#2eb82e";
          percent = 100;
        }

        $(".locker-cont").css("background-color", color);
      }
      $("#pass").on("focusout", function () {
        var color = $(".locker-cont").css("background-color");
        if ($("#pass").val() == "") {
          $(".locker-cont").css("background-color", "transparent");
          color = "rgb(255, 255, 255)";
        }
        if ($("#pass").val().length < 8) {
          $(".ui-widget-overlay").css("display", "block");
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $("#pass").val("");
          $(".is-same-cont").css("background-color", "transparent");
          $(".warn").text(
            "A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são obrigatórias. Evite repetições!"
          );
        }
        if (color == "rgb(237, 41, 57)") {
          $(".ui-widget-overlay").css("display", "block");
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $("#pass").val("");
          $(".is-same-cont").css("background-color", "transparent");
          $(".warn").html(
            "A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são obrigatórias. Evite repetições!"
          );
        }
        if (color == "rgb(255, 165, 0)") {
          $(".ui-widget-overlay").css("display", "block");
          $(".error-modal").css("display", "block");
          $(".error-modal").css("opacity", "1");
          $("#pass").val("");
          $(".is-same-cont").css("background-color", "transparent");
          $(".warn").html(
            "A senha deve ter pelo menos 8 caracteres e um número. Letras maiúsculas e minúsculas são obrigatórias. Evite repetições."
          );
        }
      });

      $("#re_pass").on("focusin", function () {
        $(".is-same-cont").css("background-color", "rgb(237, 41, 57)");
      });
      $("#pass, #re_pass").on("keyup", function () {
        if ($("#pass").val() == $("#re_pass").val() && $("#pass").val() != "") {
          $(".is-same-cont").css("background-color", "#2eb82e");
        }
        if ($("#pass").val() != $("#re_pass").val() && $("#pass").val() != "")
          $(".is-same-cont").css("background-color", "rgb(237, 41, 57)");
        if ($("#pass").val() == "") {
          $(".is-same-cont").css("background-color", "transparent");
        }
      });
      $(".signup-image-link").on("click", function () {
        $(".ui-widget-overlay").css("display", "block");
        $("#pick-image-modal").css("display", "block");
      });
      function getRandomSentence(){
        var index= Math.floor(Math.random() * (sentences.length));
        return sentences[index];
      }
      $(document.body).on("click", "#signup", function (eve) {
        eve.preventDefault();
        if (!jaFoiPostCadUser) {
          var valorFoto;

          if ($("#name").val() == "") {
            return;
          } else if ($("#user").val() == "") {
            return;
          } else if ($("#email").val() == "") {
            return;
          } else if ($("#pass").val() == "") {
            return;
          } else if ($("#re_pass").val() == "") {
            return;
          } else if ($("#pass").val() != $("#re_pass").val()) {
            return;
          } else if ($("#agree-term").is(":checked") == false) {
            return;
          }

          if (isSelImg == true) {
            valorFoto = LZString.compress(selectedImage);
          } else {
            valorFoto = codeHex;
          }
        var sentence = getRandomSentence();

          var myObject = {
            nome: $('#name').val(),
            userName: $('#user').val(),
            email: $('#email').val(),
            senha: $('#pass').val(),
            foto: "" + valorFoto,
            biografia: "nossa que legal",
            bio: sentence + "",
            configs: "{'menu':0,'deslig':0,'login':0,'capa':0,'dark':0}",
            seguindo: "{}",
            seguidores: "{}"
          }


          var jsonInput = JSON.stringify(myObject);

          jaFoiPostCadUser = true;
          console.log(jsonInput);
          $.ajax({
            type: "POST",
            data: jsonInput,
            dataType: "json",
            contentType: 'application/json',
            url: "https://localhost:5001/api/Redirect/Cadastro",
            complete: function (code) {
              if (code.status === 200) {
                document.location.href = "/#/login";
              } else {
                $(".error-modal").css("display", "block");
                $(".error-modal").css("opacity", "1");
                $(".ui-widget-overlay").css("display", "block");
                $(".warn").html("Algúm dado foi fornecido incorretamente. Ou ocorreu um problema com o servidor. Tente novamente.");
                $("#name").val("");
                /*setTimeout(function () {
                  location.reload();
                }, 2000)*/
              }
            }, error: function(er){
              console.log(er);
            }
          });
        }
      });
      /*-----------------------------------------------------Final Verifications*/
      setInterval(function () {
        if ($("#container-cad-user").length && jaFoiCadUser == false) {
          if ($("#name").val() == "") {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#user").val() == "") {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#email").val() == "") {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#pass").val() == "") {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#re_pass").val() == "") {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#pass").val() != $("#re_pass").val()) {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else if ($("#agree-term").is(":checked") == false) {
            document.getElementById("signup").disabled = true;
            $("#signup").css("opacity", "0.7");
            $("#signup").css("cursor", "unset");
          } else {
            document.getElementById("signup").disabled = false;
            $("#signup").css("opacity", "1");
            $("#signup").css("cursor", "pointer");
          }
        } else if (!$("#container-cad-user").length) {
          jaFoiCadUser = false;
        }
      }, 100);
      /*-----------------------------------------------------/Final Verifications*/
    });
  } else if (!$("#container-cad-user").length) {
    jaFoiCadUser = false;
  }
}, 100);
