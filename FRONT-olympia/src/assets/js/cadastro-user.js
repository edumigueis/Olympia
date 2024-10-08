var jaFoiCadUser = false;
var senhaFoi = false;
var codeHex = "#fc6c85";
var jaFoiPostCadUser = false;
/*var colorList = [
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
];*/
var sentences = [
    "Temos a arte para não morrer da verdade. -Friedrich Nietzsche",
    "A arte é a autoexpressão lutando para ser absoluta. -Fernando Pessoa",
    "A arte diz o indizível; exprime o inexprimível, traduz o intraduzível. -Leonardo da Vinci",
    "A música é o tipo de arte mais perfeita: nunca revela o seu último segredo. -Oscar Wilde",
    "A arte é a mentira que nos permite conhecer a verdade. -Pablo Picasso",
    "A arte é uma forma de crescimento para a liberdade, um caminho para a vida. -Fayga Ostrower",
    "O trabalho do artista é aprofundar sempre no mistério. -Francis Bacon",
    "Arte não se trata de arte. Arte é sobre vida. E isso a resume. - Louise Bourgeois",
    "Penso que não há nada mais artístico do que amar verdadeiramente as pessoas. -Vincent van Gogh"
  ],
  maxSentences = sentences.length;
var JaFoiForCad = false;
var selectedImage;
var isSelImg = false;
var userValidado;
setInterval(() => {
  if ($("#container-cad-user").length && jaFoiCadUser == false) {
    $(function() {
      var firstLet = null;

      $("#name").on("focusout", function() {
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
          } 
          else {
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
      });
      $("body").on("click", function() {
        $("#color-picker").fadeOut();
      });
      $(".ui-widget-overlay").on("click", function() {
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
      $(".hexcolor").on("click", function() {
        $("#color-picker").css("display", "none");
      });
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $("#profile-pic").attr("src", e.target.result);
            selectedImage = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $("#file").on("change", function() {
        readURL(this);
      });

      $(".call-picker").click(function(event) {
        event.stopPropagation();
        $("#color-picker").fadeIn();
        $("#color-picker")
          .children("li")
          .click(function() {
            codeHex = $(this).data("hex");

            $(".color-holder").css("background-color", codeHex);
            $("#user-let-img").css("background", codeHex);
            $("#hexcolor").val(codeHex);
          });
      });
      $("#name").focusin(function() {
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

      $("#hexcolor").on("click", function() {
        $("#color-picker").css("display", "none");
        $("#user-let-img").css("background", this.value);
      });

      $("#name").on("focusout", function() {
        var name = $("#name").val();
        if (name == "") {
          remError("#name-err-msg");
          return;
        }
        if (name.length > 39) {
          $("#name").val(name.substring(0, 39));
          return;
        }
        var regName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
        if (!regName.test(name)) {
          error("#name-err-msg");
        } else {
          remError("#name-err-msg");
        }
      });
      $("#name").on("keyup", function() {
        if (
          $("#name")
            .val()
            .toString().length > 39
        ) {
          return;
        }
      });

      $(".signup-image-link").on("click", function() {
        $(".ui-widget-overlay").css("display", "block");
        $("#pick-image-modal").css("display", "block");
      });
      function error(elem) {
        $("" + elem).fadeIn();
        $("" + elem)
          .prev()
          .children("input")
          .css("border-color", "red");
        $("" + elem)
          .prev()
          .css("margin-bottom", "5px");
        $("" + elem)
          .next()
          .css("margin-top", "15px");
      }
      function remError(elem) {
        $("" + elem).fadeOut();
        $("" + elem)
          .prev()
          .children("input")
          .css("border-color", "#999");
        $("" + elem)
          .prev()
          .css("margin-bottom", "25px");
        $("" + elem)
          .next()
          .css("margin-top", "0");
      }
      function getRandomSentence() {
        var index = Math.floor(Math.random() * sentences.length);
        return sentences[index];
      }
      $(document.body).on("click", "#signup", function(eve) {
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
            valorFoto = selectedImage;
          } else {
            valorFoto = codeHex;
          }
          var sentence = getRandomSentence();

          var myObject = {
            nome: $("#name").val(),
            userName: $("#user").val(),
            email: $("#email").val(),
            senha: $("#pass").val(),
            foto: "" + valorFoto,
            biografia: "Olá! Sou um amante de artes!",
            bio: sentence + "",
            configs: "{'menu':0,'deslig':0,'login':0,'capa':0,'dark':0}",
            seguindo: "{}",
            seguidores: "{}"
          };

          jaFoiPostCadUser = true;

          $.ajax({
            type: "POST",
            data: myObject,
            dataType: "json",
            contentType: "application/json",
            url: "https://olympiaserver.ddns.net/api/Usuarios",
            complete: function(code) {
              if (code.status === 200) {
                window.$cookies.set("user_cadastro", "", Infinity);
                document.location.href = "/#/categorias";
              } 
              else {
                $(".error-modal").css("display", "block");
                $(".error-modal").css("opacity", "1");
                $(".ui-widget-overlay").css("display", "block");
                $(".warn").html(
                  "Algúm dado foi fornecido incorretamente. Ou ocorreu um problema com o servidor. Tente novamente."
                );
                $("#name").val("");
              }
            }
          });
        }
      });
    });
  } else if (!$("#container-cad-user").length) {
    jaFoiCadUser = false;
  }
}, 100);
