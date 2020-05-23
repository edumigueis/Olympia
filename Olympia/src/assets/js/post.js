// The resize function
function resize() {
  var vheight = $(window).height();
  var vwidth = $(window).width();
  $(".fullsize-background").css({
    height: vheight,
    width: vwidth
  });
}

// The scroll-up function
function scrollUp() {
  var vheight = $(window).height();
  $("html, body").animate(
    {
      scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
    },
    800
  );
}

// The scroll-down function
function scrollDown() {
  var vheight = $(window).height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
    },
    700
  );
}
function scrollDownPlus() {
  var vheight = $(window).height();
  $("html, body").animate(
    {
      scrollTop:
        (Math.floor($(window).scrollTop() / vheight) + 1) * vheight + 300
    },
    700
  );
}
var arteNm;
var contImg = 0;
var contImgServ = 0;
var jaFoiPost = false;
var selectedImage;
var isSelImgPostagem = false;
setInterval(() => {
  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-post").length && jaFoiPost == false) {
    jaFoiPost = true;

    $(function() {
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $("#image-picked").attr("src", e.target.result);
            isSelImgPostagem = true;
            selectedImage = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        }
      };
      var readURLObra = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          contImg++;
          reader.onload = function(e) {
            $("#obra-" + contImg).attr("src", e.target.result);
            if (contImg == 1) {
              selectedImage = e.target.result;
            }
            if (contImg >= 2) {
              $("#go-on-btn-obra").css("display", "block");
            }
            if (contImg >= 8) {
              $(".fileUpload").css("filter", "brightness(68%)");
              $(".fileUpload").css("pointer-events", "none");
            }
          };

          reader.readAsDataURL(input.files[0]);
        }
      };
      var readURLServ = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          contImgServ++;
          reader.onload = function(e) {
            $("#serv-" + contImgServ).attr("src", e.target.result);
            if (contImgServ == 1) {
              selectedImage = e.target.result;
            }
            if (contImgServ >= 2) {
              $("#go-on-btn-serv").css("display", "block");
            }
            if (contImgServ >= 8) {
              $(".fileUpload").css("filter", "brightness(68%)");
              $(".fileUpload").css("pointer-events", "none");
            }
          };

          reader.readAsDataURL(input.files[0]);
        }
      };
      // Click to Scroll DOWN Functions
      $("#obra-btn").on("click", function(event) {
        $("#post-obra-img").css("display", "inline-flex");
        var width = $(window).width();
        if (width < 901) {
          scrollDownPlus();
        } else {
          scrollDown();
        }
        event.preventDefault();
        setTimeout(function() {
          $(".buttons-cont").css("display", "none");
          $("#small-footer").css("display", "block");
        }, 840);
      });
      $("#serv-btn").on("click", function(event) {
        $("#post-serv-img").css("display", "inline-flex");
        var width = $(window).width();
        if (width < 901) {
          scrollDownPlus();
        } else {
          scrollDown();
        }
        event.preventDefault();
        setTimeout(function() {
          $(".buttons-cont").css("display", "none");
          $("#small-footer").css("display", "block");
        }, 840);
      });
      $("#post-btn").on("click", function(event) {
        $("#post-insp").css("display", "inline-flex");
        var width = $(window).width();
        if (width < 901) {
          scrollDownPlus();
        } else {
          scrollDown();
        }
        event.preventDefault();
        setInterval(() => {
          $(".buttons-cont").css("display", "none");
          $("#small-footer").css("display", "block");
        }, 840);
      });
      $("#file-input").on("change", function() {
        readURL(this);
      });
      $("#obra-picker").on("change", function() {
        readURLObra(this);
      });
      $("#serv-picker").on("change", function() {
        readURLServ(this);
      });
      $("#go-on-btn-obra").on("click", function() {
        $("#post-obra").css("display", "block");
        $(".card-heading").css(
          "background-image",
          "url('" + selectedImage + "')"
        );
        scrollDown();
        event.preventDefault();
        setTimeout(function() {
          $("#post-obra-img").css("display", "none");
        }, 840);
      });

      $("#go-on-btn-serv").on("click", function() {
        $("#post-serv").css("display", "block");
        $(".card-heading").css(
          "background-image",
          "url('" + selectedImage + "')"
        );
        scrollDown();
        event.preventDefault();
        setTimeout(function() {
          $("#post-serv-img").css("display", "none");
        }, 840);
      });

      $("#to-btn-cont-from-obra").on("click", function() {
        $(".buttons-cont").css("display", "inline-flex");
        $("#small-footer").css("display", "none");
        scrollUp();
        event.preventDefault();
        setTimeout(function() {
          $("#post-obra-img").css("display", "none");
        }, 840);
      });

      $("#to-btn-cont-from-serv").on("click", function() {
        $(".buttons-cont").css("display", "inline-flex");
        $("#small-footer").css("display", "none");
        scrollUp();
        event.preventDefault();
        setTimeout(function() {
          $("#post-serv-img").css("display", "none");
        }, 840);
      });

      $("#to-pick-img-from-obra").on("click", function() {
        $("#post-obra-img").css("display", "inline-flex");
        scrollUp();
        event.preventDefault();
        setTimeout(function() {
          $("#post-obra").css("display", "none");
        }, 840);
      });

      $("#to-pick-img-from-serv").on("click", function() {
        $("#post-serv-img").css("display", "inline-flex");
        scrollUp();
        event.preventDefault();
        setTimeout(function() {
          $("#post-serv").css("display", "none");
        }, 840);
      });

      $(document.body).on("click", ".remove-img", function(e) {
        var target = $(e.target);
        var parent = target.parent();
        var child = parent.children(".img-inner");
        $(".fileUpload").css("filter", "brightness(100%)");
        $(".fileUpload").css("pointer-events", "all");
        var id = child.attr("id");

        if (
          id.substring(0, 4) == "serv" &&
          $("#serv-" + id.substring(5, 6)).attr("src") !=
            "/src/assets/images/car-" + id.substring(5, 6) + ".jpg"
        ) {
          contImgServ--;
        }
        if (
          id.substring(0, 5) == "obra" &&
          $("#obra-" + id.substring(5, 6)).attr("src") !=
            "/src/assets/images/car-" + id.substring(5, 6) + ".jpg"
        ) {
          contImg--;
        }

        $("#serv-" + id.substring(5, 6)).attr(
          "src",
          "/src/assets/images/car-" + id.substring(5, 6) + ".jpg"
        );
        $("#obra-" + id.substring(5, 6)).attr(
          "src",
          "/src/assets/images/car-" + id.substring(5, 6) + ".jpg"
        );
      });
      // Resize Container on window resize
      $(window).resize(function() {
        resize();
      });

      document.getElementById("search-select").onclick = function() {
        document.getElementById("myDropdown").classList.toggle("show");
      };
      document.getElementById("search-select-serv").onclick = function() {
        document.getElementById("myDropdown-serv").classList.toggle("show");
      };
      function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }
      function filterFunctionServ() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput-serv");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown-serv");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }
      $("#myInput").on("keyup", function() {
        filterFunction();
      });
      $("#myInput-serv").on("keyup", function() {
        filterFunctionServ();
      });

      $(".sel-cat").on("click", function(event) {
        var target2 = $(event.target);
        $("#search-select").text(target2.text());
        $("#search-select-serv").text(target2.text());
      });
      $(".card-heading").on("click", function(event) {
        $("#myDropdown").removeClass("show");
        $("#myDropdown-serv").removeClass("show");
      });

      var counterTag = 1;
      $("#plus-tag").on("click", function() {
        if (counterTag == 4) {
          $("#plus-tag").css("display", "none");
        }
        counterTag++;
        $("#tag-" + counterTag).css("display", "block");
        $("#minus-tag").css("display", "block");
      });

      var counterTagServ = 1;
      $("#plus-tag-serv").on("click", function(event) {
        if (counterTagServ == 4) {
          $("#plus-tag-serv").css("display", "none");
        }
        counterTagServ++;
        $("#tag-serv-" + counterTagServ).css("display", "block");
        $("#minus-tag-serv").css("display", "block");
      });

      $("#minus-tag-serv").on("click", function() {
        $("#tag-serv-" + counterTagServ).css("display", "none");
        counterTagServ--;
        if (counterTagServ <= 1) {
          $("#minus-tag-serv").css("display", "none");
          $("#plus-tag-serv").css("display", "block");
        } else {
          $("#plus-tag-serv").css("display", "block");
        }
      });

      $("#minus-tag").on("click", function() {
        $("#tag-" + counterTag).css("display", "none");
        counterTag--;
        if (counterTag <= 1) {
          $("#minus-tag").css("display", "none");
          $("#plus-tag").css("display", "block");
        } else {
          $("#plus-tag").css("display", "block");
        }
      });
      $("#submit").on("click", function(event) {
        event.preventDefault();

        var valorFoto;

        if ($("#msg").val() == "") {
          var erro = '<p class="error">Adicione um texto a sua postagem!</p>';
          $(".insp-post-cont").append(erro);
          return;
        }
        if (!isSelImgPostagem) {
          valorFoto = selectedImage;
        }

        var finalDate = new Date().toISOString().slice(0, 19);

        var myObjectPubli = {
          texto: $("#msg").val(),
          tags: "",
          foto: "" + valorFoto,
          dataPost: finalDate
        };
        var jsonInput = JSON.stringify(myObjectPubli);

        jaFoiPostCadUser = true;
        $.ajax({
          type: "POST",
          url: "https://localhost:5001/api/Publicacoes",
          data: jsonInput,
          contentType: "application/json",
          success: function() {
            $(".success-msg").fadeIn();
            setTimeout(function() {
              $(".success-msg").animate({ left: -300 });
              $(".success-msg").fadeOut();
            }, 4000);
            $(".success-msg").css("left", "40px");
          },
          fail: function() {
            var erro =
              '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
            $(".insp-post-cont").append(erro);
          },
          dataType: "json"
        });
      });
      $("#titulo").on("keyup", function() {
        if ($("#titulo").val().length >= 2) $(this).removeClass("wrong");
      });
      $("#desc").on("keyup", function() {
        if ($("#desc").val().length >= 150) $(this).removeClass("wrong");
      });
      $("#dadosTec").on("keyup", function() {
        if ($("#dadosTec").val().length >= 4) $(this).removeClass("wrong");
      });
      $("#slct").on("change", function() {
        arteNm = $("#slct option:selected").text();
      });

      $("#sub-obra").on("click", function(event) {
        event.preventDefault();

        var valorFotoObra;

        if ($("#titulo").val() == "" || $("#titulo").val().length < 2) {
          $("#titulo").addClass("wrong");
          return;
        } else if (
          $("#dadosTec").val() == "" ||
          $("#dadosTec").val().length < 4
        ) {
          $("#dadosTec").addClass("wrong");
          return;
        } else if ($("#desc").val() == "" || $("#desc").val().length < 150) {
          $("#desc").addClass("wrong");
          return;
        } else if (
          $("#search-select")
            .text()
            .trim() === "Selecione Categorias"
        ) {
          $("#search-select").addClass("wrong");
          return;
        }

        var arteSel = 0;
        switch (arteNm) {
          case "Arte Digital":
            arteSel = 1;
            break;
          case "Arquitetura":
            arteSel = 2;
            break;
          case "Artes Cenicas":
            arteSel = 3;
            break;
          case "Cinema":
            arteSel = 4;
            break;
          case "Escultura":
            arteSel = 5;
            break;
          case "Fotografia":
            arteSel = 6;
            break;
          case "Literatura":
            arteSel = 7;
            break;
          case "Música":
            arteSel = 8;
            break;
          case "Pintura":
            arteSel = 9;
            break;
        }
        alert($("#search-select").text());
        /*var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");
        var foto1 = $("#obra-1").attr("src");*/

        var finalDate = new Date().toISOString().slice(0, 19);

        var myObjectPubli = {
          idUsuario: 1,
          nome: $("#titulo").val(),
          descricao: $("#desc").val(),
          categorias: $("#search-select")
            .text()
            .trim(),
          tags:
            "{" +
            $("#tag1").val() +
            "," +
            $("#tag2").val() +
            "," +
            $("#tag3").val() +
            "," +
            $("#tag4").val() +
            "," +
            $("#tag5").val() +
            "}",
          idArte: arteSel,
          dataPost: finalDate,
          dadosTecnicos: $("#dadosTec").val()
        };
        var jsonInput = JSON.stringify(myObjectPubli);
        console.log(jsonInput);
        jaFoiPostCadUser = true;
        $.ajax({
          type: "POST",
          url: "https://localhost:5001/api/Obras",
          data: jsonInput,
          contentType: "application/json",
          success: function() {
            $(".success-msg").fadeIn();
            setTimeout(function() {
              $(".success-msg").animate({ left: -300 });
              $(".success-msg").fadeOut();
            }, 4000);
            $(".success-msg").css("left", "40px");
          },
          fail: function() {
            alert("deu bosta");
          },
          dataType: "json"
        });
      });
    });
  } else if (!$("#container-post").length) {
    //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiPost = false;
  }
}, 100);
