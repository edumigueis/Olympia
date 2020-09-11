<template>
  <main>
    <div id="container-post">
      <link rel="stylesheet" href="/src/assets/css/post.css" />
      <title>P O S T</title>
      <div id="fullpage" style="display: none;">
        <div class="section">
          <div class="time-circle">
            <div class="sun"></div>
            <div class="moon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="stars">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="water"></div>
          </div>
        </div>
      </div>
      <div class="buttons-cont">
        <div class="cont-major" id="cont-major-1">
          <div class="btn-cont">
            <div class="btn" id="obra-btn">
              Divulgar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Se deseja postar um trabalho pessoal, uma pintura, um texto, uma
              fotografia... O que você imaginar.
            </p>
          </div>
        </div>
        <div class="cont-major" id="cont-major-2">
          <div class="btn-cont">
            <div class="btn" id="serv-btn">
              Ensinar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Divulgue aqui tudo que te encanta em ensinar. Aulas de dança,
              música, escultura... Aquilo que te encanta.
            </p>
          </div>
        </div>
        <div class="cont-major" id="cont-major-3">
          <div class="btn-cont">
            <div class="btn" id="post-btn">
              Inspirar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Compartilhe um pensamento, uma dica, um projeto ou o que você
              sente que deve postar. Inspire-se.
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <section id="post-obra-img" class="white-6">
          <div
            class="return-btn filter-invert"
            id="to-btn-cont-from-obra"
          ></div>
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-1"
                src="/src/assets/images/car-1.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-2"
                src="/src/assets/images/car-2.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-3"
                src="/src/assets/images/car-3.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-4"
                src="/src/assets/images/car-4.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-5"
                src="/src/assets/images/car-5.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-6"
                src="/src/assets/images/car-6.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-7"
                src="/src/assets/images/car-7.jpg"
              />
              <span class="remove-img"></span>
            </li>
            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-8"
                src="/src/assets/images/car-8.jpg"
              />
              <span class="remove-img"></span>
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload">
              <input type="file" class="upload" id="obra-picker" />
              <span>Escolher Imagens</span>
            </div>
            <div
              id="go-on-btn-obra"
              class="go-on-btn black-to-white active-tab-p border-bottom-wh"
            >
              Continuar
            </div>
          </div>
        </section>
        <section id="post-serv-img" class="white-6">
          <div
            class="return-btn filter-invert"
            id="to-btn-cont-from-serv"
          ></div>
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-1"
                src="/src/assets/images/car-1.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-2"
                src="/src/assets/images/car-2.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-3"
                src="/src/assets/images/car-3.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-4"
                src="/src/assets/images/car-4.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-5"
                src="/src/assets/images/car-5.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-6"
                src="/src/assets/images/car-6.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-7"
                src="/src/assets/images/car-7.jpg"
              />
              <span class="remove-img"></span>
            </li>
            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-8"
                src="/src/assets/images/car-8.jpg"
              />
              <span class="remove-img"></span>
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload">
              <input type="file" class="upload" id="serv-picker" />
              <span>Escolher Imagens</span>
            </div>
            <div
              id="go-on-btn-serv"
              class="go-on-btn black-to-white active-tab-p border-bottom-wh"
            >
              Continuar
            </div>
          </div>
        </section>
        <section id="post-obra" class="white-6">
          <div
            class="return-btn filter-invert"
            id="to-pick-img-from-obra"
          ></div>
          <div class="wrapper wrapper--w780">
            <div class="card card-3 white-7">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title black-to-white">Dados da Postagem</h2>
                <form method="POST">
                  <div class="input-group">
                    <input
                      class="input--style-3 black-to-white"
                      id="titulo"
                      type="text"
                      placeholder="Título"
                      name="name"
                      maxlength="40"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3 js-datepicker black-to-white"
                      id="dadosTec"
                      type="text"
                      placeholder="Dados Técnicos"
                      name="dadosTec"
                      maxlength="140"
                      required
                    />
                    <i
                      class="zmdi zmdi-calendar-note input-icon js-btn-calendar"
                    ></i>
                  </div>
                  <div class="input-group black-to-white">
                    <textarea
                      id="desc"
                      class="input--style-3 text-area-desc"
                      placeholder="Descrição"
                      rows="1"
                    ></textarea>
                  </div>
                  <div class="input-group black-to-white">
                    <div class="select black-to-white">
                      <select name="slct" id="slct">
                        <option
                          title="Arte Digital"
                          value="Arte Digital"
                          selected="selected"
                          >Arte Digital</option
                        >
                        <option title="Arquitetura" value="Arquitetura"
                          >Arquitetura</option
                        >
                        <option title="Cinema" value="Cinema">Cinema</option>
                        <option title="Escultura" value="Escultura"
                          >Escultura</option
                        >
                        <option title="Fotografia" value="Fotografia"
                          >Fotografia</option
                        >
                        <option title="Literatura" value="Literatura"
                          >Literatura</option
                        >
                        <option title="Música" value="Música">Música</option>
                        <option title="Pintura" value="Pintura">Pintura</option>
                        <option title="Teatro" value="Teatro">Teatro</option>
                        <option title="Teatro" value="Teatro">Dança</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group" id="inp-gp-no-border">
                    <div class="dropdown">
                      <div class="input-group" id="inp-gp-no-border-2">
                        <div class="select black-to-white" id="search-select">
                          Selecione Categorias
                        </div>
                      </div>
                      <div id="myDropdown" class="dropdown-content">
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInput"
                          required
                        />
                        <a class="sel-cat">Body Art</a>
                        <a class="sel-cat">Concept Art</a>
                        <a class="sel-cat">B&W</a>
                        <a class="sel-cat">Editorial</a>
                        <a class="sel-cat">Design</a>
                        <a class="sel-cat">Product Design</a>
                        <a class="sel-cat">Tools</a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="input-group border-bottom-7"
                    id="inp-gp-no-border-3"
                  >
                    <div class="add-tags-cont">
                      <p id="tag-1">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 1"
                            maxlength="30"
                            id="tag1"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-2">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 2"
                            maxlength="30"
                            id="tag2"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-3">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 3"
                            maxlength="30"
                            id="tag3"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-4">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 4"
                            maxlength="30"
                            id="tag4"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-5">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 5"
                            maxlength="30"
                            id="tag5"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="plus-tag">
                        <span class="input">
                          <img
                            src="/src/assets/images/plus-sign.png"
                            class="plus-ico"
                          />
                        </span>
                      </p>
                      <p id="minus-tag">
                        <span class="input">
                          <img
                            src="/src/assets/images/minus-icon.svg"
                            class="plus-ico"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="p-t-10">
                    <button
                      class="btn btn--pill btn--green"
                      type="submit"
                      v-on:click="postObra()"
                      id="sub-obra"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="post-serv" class="white-6">
          <div
            class="return-btn filter-invert"
            id="to-pick-img-from-serv"
          ></div>
          <div class="wrapper wrapper--w780">
            <div class="card card-3 white-7">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Dados da Postagem</h2>
                <form method="POST">
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Título"
                      name="name"
                      maxlength="40"
                      id="titulo-serv"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3 js-datepicker"
                      type="text"
                      placeholder="Curta Descrição"
                      name="birthday"
                      id="short-desc-serv"
                      maxlength="370"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <textarea
                      class="input--style-3 text-area-desc"
                      placeholder="Descrição"
                      id="desc-serv"
                      rows="1"
                    ></textarea>
                  </div>
                  <div class="input-group">
                    <div class="select">
                      <select name="slct" id="slct-serv">
                        <option
                          title="Arte Digital"
                          value="Arte Digital"
                          selected="selected"
                          >Arte Digital</option
                        >
                        <option title="Arquitetura" value="Arquitetura"
                          >Arquitetura</option
                        >
                        <option title="Cinema" value="Cinema">Cinema</option>
                        <option title="Escultura" value="Escultura"
                          >Escultura</option
                        >
                        <option title="Fotografia" value="Fotografia"
                          >Fotografia</option
                        >
                        <option title="Literatura" value="Literatura"
                          >Literatura</option
                        >
                        <option title="Música" value="Música">Música</option>
                        <option title="Pintura" value="Pintura">Pintura</option>
                        <option title="Teatro" value="Teatro">Teatro</option>
                        <option title="Teatro" value="Teatro">Dança</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group" id="inp-gp-no-border">
                    <div class="dropdown">
                      <div class="input-group" id="inp-gp-no-border-2">
                        <div
                          class="select black-to-white"
                          id="search-select-serv"
                        >
                          Selecione Categorias
                        </div>
                      </div>
                      <div id="myDropdown-serv" class="dropdown-content">
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInput-serv"
                        />
                        <a class="sel-cat">Body Art</a>
                        <a class="sel-cat">Concept Art</a>
                        <a class="sel-cat">B&W</a>
                        <a class="sel-cat">Editorial</a>
                        <a class="sel-cat">Design</a>
                        <a class="sel-cat">Product Design</a>
                        <a class="sel-cat">Tools</a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="input-group border-bottom-7"
                    id="inp-gp-no-border-3"
                  >
                    <div class="add-tags-cont">
                      <p id="tag-serv-1">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 1"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-2">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 2"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-3">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 3"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-4">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 4"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-5">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 5"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="plus-tag-serv">
                        <span class="input">
                          <img
                            src="/src/assets/images/plus-sign.png"
                            class="plus-ico"
                          />
                        </span>
                      </p>
                      <p id="minus-tag-serv">
                        <span class="input">
                          <img
                            src="/src/assets/images/minus-icon.svg"
                            class="plus-ico"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="p-t-10">
                    <button
                      class="btn btn--pill btn--green"
                      id="sub-serv"
                      v-on:click="postServ()"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="post-insp" class="white-6">
          <div class="insp-post-cont white-7">
            <form>
              <textarea
                name="message"
                rows="3"
                class="question black-to-white"
                id="msg"
                required
                autocomplete="off"
              ></textarea>
              <label for="msg"
                ><span class="question black-to-white"
                  >O que te inspira?</span
                ></label
              >
              <button id="submit" v-on:click="postInsp()">Postar</button>
            </form>
            <div class="img-pick-cont">
              <img id="image-picked" />
              <div class="pick-file-cont-insp">
                <div class="image-upload">
                  <label for="file-input">
                    <img src="/src/assets/images/clip.svg" />
                  </label>

                  <input id="file-input" type="file" />
                </div>
              </div>
            </div>
          </div>
          <div id="background-wrap" class="white-6">
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>
            <div class="bubble x11"></div>
            <div class="bubble x12"></div>
            <div class="bubble x13"></div>
            <div class="bubble x14"></div>
            <div class="bubble x15"></div>
            <div class="bubble x16"></div>
            <div class="bubble x17"></div>
            <div class="bubble x18"></div>
            <div class="bubble x19"></div>
            <div class="bubble x20"></div>
          </div>
        </section>
        <div class="success-msg">Post feito com sucesso ;)</div>
        <meu-small-footer></meu-small-footer>
      </div>
    </div>
  </main>
</template>
<script>
import MenuBar from "../shared/menu-bar/Menu-bar.vue";
import MenuItems from "../shared/menu-items/Menu-items.vue";
import Contatos from "../shared/contatos/Contatos.vue";
import Mouse from "../shared/mouse/Mouse.vue";
import Footer from "../shared/footer/Footer.vue";
import DarkMode from "../shared/dark-mode/Dark-mode.vue";
import SmallFooter from "../shared/small-footer/SmallFooter.vue";

export default {
  components: {
    "meu-menu-bar": MenuBar,
    "meu-menu-items": MenuItems,
    "meus-contatos": Contatos,
    "meu-mouse": Mouse,
    "meu-footer": Footer,
    "meu-small-footer": SmallFooter,
    "meu-dark-mode": DarkMode
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    postInsp() {
      event.preventDefault();
      var valorFoto;

      if ($("#msg").val() == "") {
        var erro = '<p class="error">Adicione um texto a sua postagem!</p>';
        $(".insp-post-cont").append(erro);
        return;
      }
      if (isSelImgPostagem) {
        valorFoto = selectedImage;
      }

      var finalDate = new Date().toISOString().slice(0, 19);

      var myObjectPubli = {
        idUsuario: parseInt(localStorage.userId),
        texto: $("#msg").val(),
        tags: "{tag1}",
        foto: "" + valorFoto,
        dataPost: finalDate
      };

      jaFoiPostCadUser = true;
      $.ajax({
        type: "POST",
        url: "https://olympiaserver.ddns.net/api/Publicacoes",
        data: myObjectPubli,
        contentType: "application/json",
        complete: function(code) {
          if (code.status === 200) {
            $(".success-msg").fadeIn();
            setTimeout(function() {
              $(".success-msg").animate({ left: -300 });
              $(".success-msg").fadeOut();
            }, 4000);
            $(".success-msg").css("left", "40px");
          }
        },
        fail: function(error) {
          console.log(error);
          var erro =
            '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
          $(".insp-post-cont").append(erro);
        },
        dataType: "json"
      });
    },
    postObra() {
      event.preventDefault();

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

      var arteNm = $("#slct option:selected").text();
      var arteSel = 0;
      /*switch (arteNm) {
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
        }*/

      var finalDate = new Date().toISOString().slice(0, 19);

      var myObjectPubli = {
        idUsuario: parseInt(localStorage.userId),
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
      jaFoiPostCadUser = true;
      $.ajax({
        type: "POST",
        url: "https://olympiaserver.ddns.net/api/Obras",
        data: myObjectPubli,
        contentType: "application/json",
        complete: function(jqXHR, status) {
          if (status == "success" || status == "notmodified") {
            var asset = $.parseJSON(jqXHR.responseText);

            var vetorFotos = [
              $("#obra-1").attr("src"),
              $("#obra-2").attr("src"),
              $("#obra-3").attr("src"),
              $("#obra-4").attr("src"),
              $("#obra-5").attr("src"),
              $("#obra-6").attr("src"),
              $("#obra-7").attr("src"),
              $("#obra-8").attr("src")
            ];
            console.log(vetorFotos);
            var nVetorFotos = [""];
            var contador = 0;
            for (var i = 0; i < 8; i++) {
              console.log(vetorFotos[i]);
              if (vetorFotos[i].substring(0, 4) != "/src") {
                nVetorFotos[contador] = vetorFotos[i];
                contador++;
              }
            }
            for (var f = 0; f < nVetorFotos.length; f++) {
              var jsonVetorFotos = {
                foto: nVetorFotos[f] + "",
                idEvento: 0,
                idObra: asset.idObra,
                idServico: 0
              };

              $.ajax({
                type: "POST",
                url: "https://olympiaserver.ddns.net/api/Fotos",
                data: jsonVetorFotos,
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
                  $("#small-footer").css("margin-bottom", "-100px");
                  var erro =
                    "<p>Algo deu errado. Tente postar novamente mais tarde.</p>";
                  $(".p-t-10").append(erro);
                },
                dataType: "json"
              });
            }
            $(".success-msg").fadeIn();
            setTimeout(function() {
              $(".success-msg").animate({ left: -300 });
              $(".success-msg").fadeOut();
            }, 4000);
            $(".success-msg").css("left", "40px");
          }
        },
        fail: function() {
          $("#small-footer").css("margin-bottom", "-100px");
          var erro =
            "<p>Algo deu errado. Tente postar novamente mais tarde.</p>";
          $(".p-t-10").append(erro);
        },
        dataType: "json"
      });
    },
    postServ() {
      event.preventDefault();

      if ($("#titulo-serv").val() == "" || $("#titulo-serv").val().length < 2) {
        $("#titulo-serv").addClass("wrong");
        return;
      } else if (
        $("#desc-serv").val() == "" ||
        $("#desc-serv").val().length < 150
      ) {
        $("#desc-serv").addClass("wrong");
        return;
      } else if (
        $("#search-select-serv")
          .text()
          .trim() === "Selecione Categorias"
      ) {
        $("#search-select-serv").addClass("wrong");
        return;
      }

      var arteNm = $("#slct-serv option:selected").text();
      var arteSel = 0;
      /*switch (arteNm) {
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
      }*/

      var finalDate = new Date().toISOString().slice(0, 19);

      var myObjectPubli = {
        idUsuario: parseInt(localStorage.userId),
        nome: $("#titulo-serv").val(),
        descricao: $("#desc-serv").val(),
        categorias: $("#search-select-serv")
          .text()
          .trim(),
        tags:
          "{" +
          $("#tag-serv-1").val() +
          "," +
          $("#tag-serv-2").val() +
          "," +
          $("#tag-serv-3").val() +
          "," +
          $("#tag-serv-4").val() +
          "," +
          $("#tag-serv-5").val() +
          "}",
        idArte: arteSel,
        dataPost: finalDate
      };

      jaFoiPostCadUser = true;
      $.ajax({
        type: "POST",
        url: "https://olympiaserver.ddns.net/api/Servicos",
        data: myObjectPubli,
        contentType: "application/json",
        complete: function(jqXHR, status) {
          if (status == "success" || status == "notmodified") {
            var asset = $.parseJSON(jqXHR.responseText);
            var vetorFotos = [
              $("#serv-1").attr("src"),
              $("#serv-2").attr("src"),
              $("#serv-3").attr("src"),
              $("#serv-4").attr("src"),
              $("#serv-5").attr("src"),
              $("#serv-6").attr("src"),
              $("#serv-7").attr("src"),
              $("#serv-8").attr("src")
            ];
            console.log(vetorFotos);
            var nVetorFotos = [""];
            var contador = 0;
            for (var i = 0; i < 8; i++) {
              if (vetorFotos[i].toString().substring(0, 4) != "/src") {
                nVetorFotos[contador] = vetorFotos[i];
                contador++;
              }
            }
            for (var f = 0; f < nVetorFotos.length; f++) {
              var jsonVetorFotos = {
                foto: nVetorFotos[f] + "",
                idEvento: 0,
                idObra: 0,
                idServico: asset.idServico
              };

              $.ajax({
                type: "POST",
                url: "https://olympiaserver.ddns.net/api/Fotos",
                data: jsonVetorFotos,
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
                  $("#small-footer").css("margin-bottom", "-100px");
                  var erro =
                    "<p>Algo deu errado. Tente postar novamente mais tarde.</p>";
                  $(".p-t-10").append(erro);
                },
                dataType: "json"
              });
            }
            $(".success-msg").fadeIn();
            setTimeout(function() {
              $(".success-msg").animate({ left: -300 });
              $(".success-msg").fadeOut();
            }, 4000);
            $(".success-msg").css("left", "40px");
          }
        },
        fail: function() {
          $("#small-footer").css("margin-bottom", "-100px");
          var erro =
            "<p>Algo deu errado. Tente postar novamente mais tarde.</p>";
          $(".p-t-10").append(erro);
        },
        dataType: "json"
      });
    }
  },
  beforeCreate() {
    $.ajax({
      url: "https://olympiaserver.ddns.net/",
      type: "GET",
      dataType: "json",
      contentType: "application/json",
      complete: function(jqXHR, status) {
        if (status != "parsererror") {
          document.location.href = "/#/siteoff";
        } else {
          if (window.$cookies.isKey("user_cadastro")) {
            document.location.href = "/#/categorias";
          } else if (!window.$cookies.isKey("user_session")) {
            document.location.href = "/#/login";
          }
        }
      }
    });
  }
};
</script>

<style>
@font-face {
  font-family: "Bebas-Neue-Regular";
  src: url("../fonts/BebasNeue-Regular.ttf");
}

@font-face {
  font-family: "Poppins";
  src: url("../fonts/poppins-light.otf");
}
html, body{
  width: 100%;
  height: auto;
}
body {
  height: 100%;
  width: 100%;
  background-color: #efefef;
  overflow-y: hidden;
  overflow-x: hidden;
}
.buttons-cont {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.cont-major {
  height: 100vh;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  filter: brightness(70%);
  filter: saturate(135%);
}
#cont-major-1 {
  background-image: url("../images/paint.jpg");
  background-position: center;
  background-size: cover;
}
#cont-major-2 {
  background-position: center;
  background-size: cover;
}
#cont-major-3 {
  background-image: url("../images/insp.jpg");
  background-position: center;
  background-size: cover;
}
#cont-major-2::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../images/dance.jpeg");
  background-size: cover;
  background-position: center;
  filter: brightness(83%);
  z-index: -2;
}
#cont-major-3::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../images/insp.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(83%);
  z-index: -2;
}
#cont-major-1::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../images/paint.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(83%);
  z-index: -2;
}
.w-to-post {
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  z-index: 20;
}
.btn-cont {
  text-align: center;
  margin-top: 50px;
  max-width: 300px;
  cursor: pointer;
}
.btn-cont .btn {
  position: relative;
  padding: 20px 70px;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-size: 1.125em;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
.btn-cont .btn:hover {
  border: none;
}
.btn-cont .btn:hover .line-1 {
  -webkit-animation: move1 1500ms infinite ease;
  animation: move1 1500ms infinite ease;
}
.btn-cont .btn:hover .line-2 {
  -webkit-animation: move2 1500ms infinite ease;
  animation: move2 1500ms infinite ease;
}
.btn-cont .btn:hover .line-3 {
  -webkit-animation: move3 1500ms infinite ease;
  animation: move3 1500ms infinite ease;
}
.btn-cont .btn:hover .line-4 {
  -webkit-animation: move4 1500ms infinite ease;
  animation: move4 1500ms infinite ease;
}
.btn-cont .line-1 {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  background-color: white;
  left: 0;
  bottom: 0;
}
.btn-cont .line-2 {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  background-color: white;
  left: 0;
  top: 0;
}
.btn-cont .line-3 {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  background-color: white;
  right: 0;
  top: 0;
}
.btn-cont .line-4 {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  background-color: white;
  right: 0;
  bottom: 0;
}
@media only screen and (max-width: 900px) {
  body {
    overflow-y: auto;
  }
  .cont-major {
    width: 100%;
    height: calc(100vh / 3 + 100px);
  }
}
@-webkit-keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}

@keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}
@-webkit-keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@-webkit-keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@-webkit-keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
@keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
.section {
  height: fit-content;
  width: 100%;
  padding-top: 0 !important;
}
section {
  height: 100vh;
  width: 100%;
}
#post-obra-img {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: none;
}
#post-obra {
  display: none;
}
#post-serv {
  display: none;
}
#post-serv-img {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: none;
}
#post-insp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: none;
}
.pick-file-cont {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  position: relative;
  padding: 0;
  list-style: none;
  width: 80%;
  max-width: 1000px;
  height: 450px;
  border-radius: 21px;
  overflow: hidden;
  box-shadow: 1px 1px 3px 1px;
}

li {
  position: relative;
  width: calc(100% / 8);
  height: 100%;
  float: left;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
  box-shadow: -2px 10px 10px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none !important;
}

ul li:first-child {
  border: none;
}
ul li:last-child {
  width: calc(100% / 8);
}
@media only screen and (max-width: 1200px) {
  ul {
    width: 90%;
  }
}
@media only screen and (max-width: 880px) {
  ul {
    width: 90%;
  }
  ul li:last-child {
    width: calc(100% / 8);
  }
  .img-list {
    margin-top: 40px;
  }
}
@media only screen and (max-width: 780px) {
  ul li:last-child {
    width: calc(100% / 8);
  }
  .return-btn {
    width: 35px !important;
    height: 35px !important;
  }
  .img-list {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 630px) {
  ul {
    width: 95%;
  }
  ul li:last-child {
    width: calc(100% / 8);
  }
  .img-list {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 500px) {
  ul {
    width: 100%;
  }
  ul li:last-child {
    width: calc(100% / 8.3);
  }
  .img-list {
    margin-top: 60px;
  }
  .return-btn {
    width: 30px !important;
    height: 30px !important;
  }
}
@media only screen and (max-width: 410px) {
  ul li:last-child {
    width: calc(100% / 8.4);
  }
}
img {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
}
.img-list {
  transition: 0.5s all;
  background-image: url('../images/car-8.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
ul:hover li {
  width: 50px;
}
li {
  filter: saturate(110%);
}

ul li:hover {
  width: 750px;
}
ul li:last-child:hover {
  width: 600px !important;
}
ul li:nth-last-child(2):hover {
  width: 600px !important;
}
ul li:nth-last-child(3):hover {
  width: 640px !important;
}
ul li:hover > span {
  height: 30px;
  width: 30px;
  top: 12px;
  right: 10px;
}
.remove-img {
  position: absolute;
  top: 9px;
  right: 7px;
  height: 20px;
  width: 20px;
  background-image: url(../images/x.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s all;
  cursor: pointer;
}

.fileUpload {
  background: #00bcbe;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  overflow: hidden;
  padding: 0.875em; /*14px/16px*/
  position: relative;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}
.fileUpload:hover,
.fileUpload:active,
.fileUpload:focus {
  background: #00a2a4;
  cursor: pointer;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
  cursor: pointer;
}

input[type="file"] {
  position: fixed;
  right: 100%;
  bottom: 100%;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
.insp-post-cont {
  width: 80%;
  max-width: 1000px;
  height: fit-content;
  border-radius: 21px;
  box-shadow: 3px 3px 9px 9px lightgray;
  padding: 30px;
  background-color: #f9f9f9;
}
@media only screen and (max-width: 750px) {
  .insp-post-cont {
    width: 95%;
    padding: 20px;
  }
  .question {
    font-size: 36px !important;
  }
  #image-picked {
    max-width: 100%;
  }
}
/*
Basic input element using psuedo classes
*/

h1 {
  font-size: 28px;
  margin-bottom: 2.5%;
}

textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input.question,
textarea.question {
  font-size: 1.5em;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
  color: #000;
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
  font-family: "Montserrat", sans-serif;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 85px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8f8f8f;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: 2;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

#submit {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}
.question {
  color: #444;
}

#submit:active {
  background: #999;
}

input.question:valid ~ #submit,
textarea.question:valid ~ #submit {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ #submit,
textarea.question:invalid ~ #submit {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
.image-upload > input {
  display: none;
}
.image-upload {
  text-align: left !important;
  margin-top: 20px;
}
.image-upload img {
  width: 60px;
  cursor: pointer;
}
#image-picked {
  width: auto;
  max-height: 400px;
  object-fit: cover;
  margin-top: 20px;
}
.img-pick-cont {
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
#background-wrap {
  background-color: rgba(231, 231, 231, 1);
  position: absolute;
  overflow: hidden;
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin-top: -5vh;
  z-index: -2;
  -webkit-animation: BubblesBackground 15s ease infinite;
  -moz-animation: BubblesBackground 15s ease infinite;
  -o-animation: BubblesBackground 15s ease infinite;
  animation: BubblesBackground 15s ease infinite;
}
/* ANIMATIONS */

.x1 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: -5%;
  top: 5%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x2 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 5%;
  top: 80%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x3 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 10%;
  top: 51%;

  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  transform: scale(0.7);
}

.x4 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x5 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 30%;
  top: 42%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x6 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 50%;
  top: -10%;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
}

.x7 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 70%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x8 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 80%;
  top: 10%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x9 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x10 {
  -webkit-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 80%;
  top: 80%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}
.x11 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: -30%;
  top: 55%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x12 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 25%;
  top: 90%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x13 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 67%;

  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  transform: scale(0.7);
}

.x14 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 35%;
  top: 0;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x15 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 47%;
  top: 59%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x16 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
}

.x17 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 55%;
  top: 72%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x18 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 50%;
  top: 20%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x19 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x20 {
  -webkit-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 90%;
  top: 90%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

  height: 250px;
  position: absolute;
  width: 250px;
}

.bubble:after {
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

  content: "";
  height: 250px;
  left: 0;
  position: absolute;
  width: 250px;
  border-radius: 50%;
  background: linear-gradient(
    136deg,
    #fc6c85,
    #fc6c6d,
    #fc836c,
    #fc9b6c,
    #fc6c9d,
    #fc6cb5,
    #fc6ccd
  );
  background-size: 1400% 1400%;

  -webkit-animation: BubblesBackground 8s ease infinite;
  -moz-animation: BubblesBackground 8s ease infinite;
  -o-animation: BubblesBackground 8s ease infinite;
  animation: BubblesBackground 8s ease infinite;
}

@-webkit-keyframes BubblesBackground {
  0% {
    background-position: 0% 13%;
  }
  50% {
    background-position: 100% 88%;
  }
  100% {
    background-position: 0% 13%;
  }
}
@-moz-keyframes BubblesBackground {
  0% {
    background-position: 0% 13%;
  }
  50% {
    background-position: 100% 88%;
  }
  100% {
    background-position: 0% 13%;
  }
}
@-o-keyframes BubblesBackground {
  0% {
    background-position: 0% 13%;
  }
  50% {
    background-position: 100% 88%;
  }
  100% {
    background-position: 0% 13%;
  }
}
@keyframes BubblesBackground {
  0% {
    background-position: 0% 13%;
  }
  50% {
    background-position: 100% 88%;
  }
  100% {
    background-position: 0% 13%;
  }
}

@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
#submit {
  border-radius: 18px;
  transition: 0.4s all;
  background: linear-gradient(
    136deg,
    #fc6c85,
    #fc6c6d,
    #fc836c,
    #fc9b6c,
    #fc6c9d,
    #fc6cb5,
    #fc6ccd
  );
  padding: 4px;
  font-size: 1.5rem;
  color: white;
  display: block;
  text-align: center;
  height: 50px;
  margin: 0;
  width: 200px;
  float: left;
  margin-top: 20px;
  font-family: "poppins", sans-serif;
  border: 0 !important;
}

/* ==========================================================================
   #FONT
   ========================================================================== */
.font-robo {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
}

.font-poppins {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
}

/* ==========================================================================
     #GRID
     ========================================================================== */
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.row-space {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.col-2 {
  width: -webkit-calc((100% - 60px) / 2);
  width: -moz-calc((100% - 60px) / 2);
  width: calc((100% - 60px) / 2);
}

@media (max-width: 767px) {
  .col-2 {
    width: 100%;
  }
}
/**
   * Remove default table spacing.
   */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
   * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
   *    on fieldsets.
   */
fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

/* ==========================================================================
     #PAGE WRAPPER
     ========================================================================== */
.page-wrapper {
  min-height: 100vh;
}

body {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 15px;
}

h6 {
  font-size: 13px;
}

/* ==========================================================================
     #BACKGROUND
     ========================================================================== */
.bg-blue {
  background: #2c6ed5;
}

.bg-red {
  background: #fa4251;
}

.bg-gra-01 {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fbc2eb),
    to(#a18cd1)
  );
  background: -webkit-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: -moz-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: -o-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);
  background: linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%);
}

/* ==========================================================================
     #SPACING
     ========================================================================== */
.p-t-100 {
  padding-top: 100px;
}

.p-t-180 {
  padding-top: 180px;
}

.p-t-20 {
  padding-top: 20px;
}

.p-t-10 {
  padding-top: 10px;
  margin-top: 30px;
}

.p-t-30 {
  padding-top: 30px;
}

.p-b-100 {
  padding-bottom: 100px;
}

/* ==========================================================================
     #WRAPPER
     ========================================================================== */
.wrapper {
  margin: 0 auto;
}

.wrapper--w960 {
  max-width: 960px;
}

.wrapper--w780 {
  max-width: 780px;
  margin-top: 20px !important;
  font-family: "Poppins", sans-serif;
  box-shadow: 3px 3px 9px 9px #999999;
  border-radius: 21px;
  margin-bottom: 40px !important;
}

.wrapper--w680 {
  max-width: 680px;
}

/* ==========================================================================
     #BUTTON
     ========================================================================== */
.btn {
  display: inline-block;
  line-height: 40px;
  padding: 0 33px;
  font-family: Poppins, Arial, "Helvetica Neue", sans-serif;
  cursor: pointer;
  color: #fff;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 18px;
}

.btn--radius {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn--pill {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green {
  margin-top: 20px;
  background: linear-gradient(21deg, #10abff, #1beabd);
  transition: 0.4s ease all;
}

.btn--green:hover {
  font-size: 20px;
}

/* ==========================================================================
     #DATE PICKER
     ========================================================================== */
td.active {
  background-color: #2c6ed5;
}

input[type="date" i] {
  padding: 14px;
}

.table-condensed td,
.table-condensed th {
  font-size: 14px;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.daterangepicker td {
  width: 40px;
  height: 30px;
}

.daterangepicker {
  border: none;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  display: none;
  border: 1px solid #e0e0e0;
  margin-top: 5px;
}

.daterangepicker::after,
.daterangepicker::before {
  display: none;
}

.daterangepicker thead tr th {
  padding: 10px 0;
}

.daterangepicker .table-condensed th select {
  border: 1px solid #222;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  outline: none;
}

/* ==========================================================================
     #FORM
     ========================================================================== */
input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}

.input-icon {
  position: absolute;
  font-size: 18px;
  color: #222;
  right: 8px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
}

.input-group {
  position: relative;
  margin-bottom: 33px;
  border-bottom: 1px solid rgba(2, 2, 2, 0.2);
}

.input--style-3 {
  padding: 5px 0;
  font-size: 16px;
  color: #222;
  background: transparent;
}

.input--style-3::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #222;
}

.input--style-3:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #222;
  opacity: 1;
}

.input--style-3::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #222;
  opacity: 1;
}

.input--style-3:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #222;
}

.input--style-3:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #222;
}

/* ==========================================================================
     #SELECT2
     ========================================================================== */
.select--no-search .select2-search {
  display: none !important;
}

.rs-select2 .select2-container {
  width: 100% !important;
  outline: none;
}

.rs-select2 .select2-container .select2-selection--single {
  outline: none;
  border: none;
  height: 36px;
  background: transparent;
}

.rs-select2
  .select2-container
  .select2-selection--single
  .select2-selection__rendered {
  line-height: 36px;
  padding-left: 0;
  color: #ccc;
  font-size: 16px;
  font-family: inherit;
}

.rs-select2
  .select2-container
  .select2-selection--single
  .select2-selection__arrow {
  height: 34px;
  right: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.rs-select2
  .select2-container
  .select2-selection--single
  .select2-selection__arrow
  b {
  display: none;
}

.rs-select2
  .select2-container
  .select2-selection--single
  .select2-selection__arrow:after {
  font-family: "Material-Design-Iconic-Font";
  content: "\f2f9";
  font-size: 18px;
  color: #ccc;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.rs-select2
  .select2-container.select2-container--open
  .select2-selection--single
  .select2-selection__arrow::after {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.select2-container--open .select2-dropdown--below {
  border: none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
  margin-top: 5px;
  overflow: hidden;
}

/* ==========================================================================
     #TITLE
     ========================================================================== */
.title {
  font-size: 24px;
  color: #222;
  font-weight: 400;
  margin-bottom: 36px;
}

/* ==========================================================================
     #CARD
     ========================================================================== */
.card {
  overflow: hidden;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}

.card-3 {
  background: #f9f9f9;
  -webkit-border-radius: 21px;
  -moz-border-radius: 21px;
  border-radius: 21px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: table;
}

.card-3 .card-heading {
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  display: table-cell;
  width: 50%;
}

.card-3 .card-body {
  padding: 30px 65px;
  padding-bottom: 40px;
  display: table-cell;
}

@media (max-width: 767px) {
  .card-3 {
    display: block;
  }
  .card-3 .card-heading {
    display: block;
    width: 100%;
    padding-top: 400px;
    background-position: center center;
  }
  .card-3 .card-body {
    display: block;
    width: 100%;
    padding: 37px 30px;
    padding-bottom: 45px;
  }
  .select::after {
    right: 40px !important;
  }
  .add-tags-cont {
    width: 100vw !important;
    max-width: 90% !important;
  }
}

.go-on-btn {
  display: none;
  border: 2px solid #333;
  width: 200px;
  margin-left: 20px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  color: #222;
  font-size: 1em;
  font-weight: bold;
  overflow: hidden;
  padding: 0.875em;
  position: relative;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
}
.go-on-btn::before,
.button25::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  -webkit-transform: translate(-105%, 0);
  transform: translate(-105%, 0);
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgb(92, 92, 92);
  background-color: rgba(92, 92, 92, 0.4);
}
.go-on-btn::after {
  -webkit-transition-delay: 0.2s; /* Safari */
  transition-delay: 0.2s;
}
.go-on-btn:hover::before,
.go-on-btn:hover::after {
  opacity: 0;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.text-area-desc {
  width: 100%;
  border: none !important;
  font-family: "Poppins", sans-serif;
  min-height: 35px;
}
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: transparent;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 20em;
  background: transparent;
  overflow: hidden;
  border-radius: 0.25em;
  font-size: 16px;
}
select {
  flex: 1;
  padding: 0 0.5em;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  padding: 5px 0;
  font-size: 16px;
  color: #222;
}
/* Arrow */
.select::after {
  content: " ";
  white-space: pre;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: transparent;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
  background-image: url(../images/arrow-single-down.png);
  background-position: center;
  background-size: cover;
}
#myInput {
  box-sizing: border-box;
  background-image: url("searchicon.png");
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 5px 9px 4px 18px;
  border: none;
  border-bottom: 1px solid #ddd;
}

#myInput:focus {
  outline: 3px solid #ddd;
}
#myInput-serv {
  box-sizing: border-box;
  background-image: url("searchicon.png");
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 5px 9px 4px 18px;
  border: none;
  border-bottom: 1px solid #ddd;
}

#myInput-serv:focus {
  outline: 3px solid #ddd;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  max-height: 50px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  max-height: 170px;
  overflow-y: scroll;
  overflow-x: hidden !important;
  border: 1px solid #ddd;
  z-index: 10000;
  margin-top: -35px;
}

.dropdown-content a {
  color: black;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.show {
  display: block !important;
}
.dropdown a:hover {
  background-color: #ddd;
}
#search-select {
  z-index: 20000;
  font-family: "Poppins", sans-serif;
  padding: 5px 0;
}
#search-select-serv {
  z-index: 20000;
  font-family: "Poppins", sans-serif;
  padding: 5px 0;
}
#inp-gp-no-border {
  border: 0 !important;
}
#inp-gp-no-border-2 {
  width: 100%;
}
#inp-gp-no-border-3 {
  width: 100% !important;
  height: fit-content;
  border-bottom: 1px solid #fff;
}
.add-tags-cont {
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
  height: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 319px;
  margin-top: -30px;
  float: left;
}

.input {
  position: relative;
  background: lightgray;
  padding: 3px;
  display: inline-block;
  border-radius: 9999em;
  max-height: 37px;
  min-width: 90px;
}
#tag-1{
  margin-right: 4px;
}
#tag-2{
  margin-right: 4px;
}
#tag-3{
  margin-right: 4px;
}
#tag-4{
  margin-right: 4px;
}
#tag-5{
  margin-right: 4px;
}
.input *:not(span) {
  position: relative;
  display: inherit;
  border-radius: inherit;
  margin: 0;
  border: none;
  outline: none;
  height: 29px;
  z-index: 1;
  width: 96%;
}
.input *:not(span):focus + span {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.input span {
  -webkit-transform: scale(0.993, 0.94);
  transform: scale(0.993, 0.94);
  -webkit-transition: opacity 0.25s, -webkit-transform 0.5s;
  transition: opacity 0.25s, -webkit-transform 0.5s;
  transition: transform 0.5s, opacity 0.25s;
  transition: transform 0.5s, opacity 0.25s, -webkit-transform 0.5s;
  opacity: 0;
  position: absolute;
  z-index: 0;
  margin: 4px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: 0 0 0 4px #10dbffda;
}
#tag-2 {
  display: none;
}
#tag-3 {
  display: none;
}
#tag-4 {
  display: none;
}
#tag-5 {
  display: none;
}
#tag-serv-2 {
  display: none;
}
#tag-serv-3 {
  display: none;
}
#tag-serv-4 {
  display: none;
}
#tag-serv-5 {
  display: none;
}
#plus-tag{
  margin-right: 2px;
}
#plus-tag span {
  min-width: unset !important;
}
#plus-tag-serv span {
  min-width: unset !important;
}
#minus-tag span {
  min-width: unset !important;
}
#minus-tag {
  display: none;
}
#minus-tag-serv {
  display: none;
}
#minus-tag-serv span {
  min-width: unset !important;
}
.add-tags-cont::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}
.add-tags-cont::-webkit-scrollbar-thumb {
  background-color: #a1a1a1;
  border-radius: 3px;
}
.add-tags-cont::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

.plus-ico {
  width: 25px !important;
  height: 25px !important;
  object-fit: cover !important;
  cursor: pointer;
  padding: 3px;
  padding-bottom: 0;
}

.return-btn {
  width: 33px;
  height: 33px;
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 30;
  transform: rotate(225deg);
  box-sizing: border-box;
  transition: 0.2s all;
}
.return-btn::before {
  content: "";
  width: 100%;
  height: 100%;
  border-width: 0.7vmin 0.7vmin 0 0;
  border-style: solid;
  border-color: #222;
  transition: 0.2s ease;
  display: block;
  transform-origin: 100% 0;
}
.return-btn:after {
  content: "";
  float: left;
  position: relative;
  top: -100%;
  width: 100%;
  height: 100%;
  border-width: 0 0.7vmin 0 0;
  border-style: solid;
  border-color: #222;
  transform-origin: 100% 0;
  transition: 0.2s ease;
}
.return-btn:hover::after {
  transform: rotate(45deg);
  border-color: #333;
  height: 120%;
}
.return-btn:hover::before {
  border-color: #333;
  transform: scale(0.8);
}
#small-footer {
  margin-bottom: -80px !important;
  margin-top: 20px !important;
  display: none;
  z-index: -3;
}

.dark-mode-page {
  background-color: #2b2b2b !important;
}

input.dark::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #dfdfdf;
  opacity: 1; /* Firefox */
}

input.dark:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #dfdfdf;
}

input.dark::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #dfdfdf;
}
select.dark {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #dfdfdf;
  opacity: 1; /* Firefox */
  background-color: #535353;
}

select.dark {
  /* Internet Explorer 10-11 */
  color: #dfdfdf;
}

select.dark {
  /* Microsoft Edge */
  color: #dfdfdf;
}
textarea{
    /* will prevent resizing horizontally */
    resize:vertical;
    max-height: 200px;
}
textarea.dark::-webkit-input-placeholder {
  color: #dfdfdf;
}

textarea.dark:-moz-placeholder {
  /* Firefox 18- */
  color: #dfdfdf;
}

textarea.dark::-moz-placeholder {
  /* Firefox 19+ */
  color: #dfdfdf;
}

textarea.dark:-ms-input-placeholder {
  color: #dfdfdf;
}

textarea.dark::placeholder {
  color: #dfdfdf;
}

.dark-mode.white-7 {
  box-shadow: 3px 3px 9px 9px #686868 !important;
}

.success-msg{
  position: fixed;
  bottom: 20px;
  padding: 20px 30px;
  border-radius: 19px;
  display: none;
  background: #eee;
  font-size: 1.5em;
  box-shadow: 2px 2px 6px 6px #bbbbbb;
  left: 40px;
}
.wrong{
  border-bottom: 2px solid rgb(255, 38, 129) !important;
  transition: 0.4s all ease-in;
  transform: scale(1.01);
}
</style>