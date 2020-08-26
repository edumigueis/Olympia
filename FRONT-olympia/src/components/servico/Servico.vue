<template>
  <main style="overflow:hidden;">
    <div id="container-obra">
      <link rel="stylesheet" href="/src/assets/css/detalhe.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <title id="page-det-name">S E R V I C O</title>
      <div id="col-container">
        <div id="img-col-d" class="transparent">
          <div class="bg"></div>
          <div class="masonry">
            <div class="brick" style="display: none">
              <img
                class="img-col"
                src="https://i.pinimg.com/originals/2a/81/ab/2a81abef24a1630ef86ac1c74b0ec947.jpg"
              />
            </div>
          </div>
        </div>
        <div id="info-col-d" class="white-6">
          <ul id="info-list" class="white-6">
            <li class="info-item white-6" id="info-1">
              <div class="inner-list white-6">
                <div id="simple-art-info">
                  <p id="art-name" class="black-to-white">N. 17a</p>
                  <p id="art-detail-p" class="black-to-white">
                    Nova York, 1948. 1,38 m x 1,38 m. Tela, Tinta a óleo.
                  </p>
                </div>
                <div class="fine-line white-6"></div>
                <div id="art-data" class="black-to-white">
                  O Retrato de Adele Bloch-Bauer I é uma pintura de Gustav Klimt
                  completada em 1907. Foi vendida em junho de 2006, a Ronald
                  Lauder, proprietário da Neue Galerie em Nova Iorque, por 135
                  milhões de dólares, tendo sido, na época, a segunda pintura
                  mais cara do mundo. A obra encontra-se em exibição permanente
                  na dita galeria, desde julho de 2006. Klimt empregou três anos
                  em completar este retrato, medindo 138cm x 138 cm, executado
                  em óleo e ouro sobre tela, com uma ornamentação elaborada e
                  complexa, tal e qual se vê nos trabalhos do Jugendstil. Klimt
                  foi membro da Secessão Vienense, um grupo de artistas que
                  cortaram com a forma tradicional de pintar. A obra foi
                  realizada em Viena, por encomenda de Ferdinand Bloch-Bauer,
                  que fizera fortuna com a indústria açucareira.
                </div>
              </div>
            </li>
            <li class="info-item white-6" id="info-2">
              <div class="inner-list">
                <div id="simple-artist-info">
                  <p id="artist-user">
                    <b>
                      User:
                      <a
                        id="user-link"
                        href="/user/pollock"
                        class="black-to-white"
                        >@pollock</a
                      >
                    </b>
                  </p>
                  <p id="artist-name" class="black-to-white">
                    <b>Nome:</b> <span id="name"> Jackson Pollock</span>
                  </p>
                  <p id="artist-nac" class="black-to-white">
                    <b>Bio:</b>
                    <span id="bio">
                      Art is inspiring people and telling stories</span
                    >
                  </p>
                </div>
                <div id="artist-pic" class="black-to-white">
                  <img
                    src="https://static.todamateria.com.br/upload/po/ll/pollockarte-cke.jpg"
                    class="art-icon"
                    id="artist-profile-pic"
                  />
                </div>
                <p id="artist-profile" class="black-to-white">
                  <a
                    href="/profile/klimt"
                    id="visit-profile-link"
                    class="link black-to-white"
                    >Visitar o perfil</a
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="paginate-detail">
        <div id="arrows-pag-det">
          <svg id="more-arrows" class="arrow">
            <polygon
              class="arrow-top black-to-white-pol"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle black-to-white-pol"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom black-to-white-pol"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </div>
        <div id="arrows-pag-det-2">
          <svg id="more-arrows-2" class="more-arrows-2 arrow">
            <polygon
              class="arrow-top-2 black-to-white-pol"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle-2 black-to-white-pol"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom-2 black-to-white-pol"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </div>
      </div>

      <div class="bg-det"></div>
      <div class="bg-det bg-det2"></div>
      <div class="bg-det bg-det3"></div>

      <div class="bg-det-gray"></div>
      <div class="bg-det-gray bg-det2"></div>
      <div class="bg-det-gray bg-det3"></div>

      <div id="myModal" class="modal">
        <span class="close-mod">&times;</span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
        <meu-mouse></meu-mouse>
      </div>
      <meu-footer></meu-footer>
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

export default {
  components: {
    "meu-menu-bar": MenuBar,
    "meu-menu-items": MenuItems,
    "meus-contatos": Contatos,
    "meu-mouse": Mouse,
    "meu-footer": Footer,
    "meu-dark-mode": DarkMode
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    formatDate(input) {},
    getMarkers() {
      var url = window.location.href;
      var codigo = url.substring(32);
      $.ajax({
        url: "https://localhost:5001/api/Servicos/" + codigo,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function(field) {
          $("#art-data").text(field.descricao.split('+').join(' '));
          $("#art-name").text(field.nome.split('+').join(' '));
          $("#page-det-name").text(field.nome.split('+').join(' '));
          $.ajax({
            url: "https://localhost:5001/api/Usuarios/" + field.idUsuario,
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            success: function(resul) {
              $("#user-link").text("@" + resul.userName);
              $("#user-link").attr("href", "/#/perfil/" + resul.userName);
              $("#visit-profile-link").attr(
                "href",
                "/#/perfil/" + resul.userName
              );
              $("#bio").text(resul.bio.split('+').join(' '));
              $("#name").text(resul.nome.split('+').join(' '));
              if (resul.foto.length > 20) {
                $("#artist-profile-pic").attr("src", resul.foto);
              } else {
                $("#artist-pic").css("background-color", resul.foto);
                $("#artist-pic").append(
                  '<span class="letter-prof">' +
                    resul.nome.substring(0, 1) +
                    "</span>"
                );
                $("#artist-profile-pic").attr("src", "");
              }
              
            },
            error: function(thrownError) {
              //Add these parameters to display the required response
              console.log(thrownError);
            }
          });
        },
        error: function(thrownError) {
          //Add these parameters to display the required response
          console.log(thrownError);
        }
      });

      $.ajax({
        url: "https://localhost:5001/api/fotos/Servico/" + codigo,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
        },
        success: function(result) {
          result.forEach(element => {
            $(".masonry").append(
              '<div class="brick"> <img class="img-col" src="' +
                element +
                '" /></div>'
            );
          });
        },
        error: function(thrownError) {
          //Add these parameters to display the required response
          console.log(thrownError);
          $("#load-modal").fadeOut();
        }
      });
    }
  },

  mounted() {
    this.getMarkers();
  },
  beforeCreate(){
    if (window.$cookies.isKey("user_cadastro")) {
      document.location.href = "/#/categorias";
    } else if (!window.$cookies.isKey("user_session")) {
      document.location.href = "/#/login";
    }
  }
};
</script>
