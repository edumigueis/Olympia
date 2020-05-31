<template>
  <main style="overflow:hidden;">
    <div id="container-obra">
      <link rel="stylesheet" href="/src/assets/css/detalhe.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <title id="page-det-name"></title>
      <div id="col-container">
        <div id="img-col-d" class="transparent">
          <div class="bg"></div>
          <div class="masonry">
            <div class="brick">
              <img
                class="img-col"
                src="https://i.pinimg.com/originals/2a/81/ab/2a81abef24a1630ef86ac1c74b0ec947.jpg"
              />
            </div>
            <div class="brick">
              <img
                class="img-col"
                src="https://i.pinimg.com/originals/92/2b/fd/922bfd8e4dceef87cce0aeaa017d0211.jpg"
              />
            </div>
            <div class="brick">
              <img
                class="img-col"
                src="https://blogscdn.thehut.net/wp-content/uploads/sites/7/2016/06/12184902/Matthew-Cusick-Featured.jpg"
              />
            </div>
            <div class="brick">
              <img
                class="img-col"
                src="https://i.pinimg.com/originals/d1/ba/98/d1ba981705ec9ca3b567d2093146e9aa.jpg"
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
      var codigo = 1;
      /*$("#event-name").text("jquery loaded");
      alert("ai");*/
      /*$.getJSON("https://localhost:5001/api/Eventos/1", function(result) {
        alert("entrou aq");
        $.each(result, function(i, field) {
          alert("entrou aq");
          $("#event-name").text(field.nome);
          alert(field.name);
          $("#event-info-nome").text(field.nome);
          $("#event-info-local").text("Endereço:" + field.endereco);
          $("#event-info-datas").text(
            "Data:" +
              this.formatDate(
                field.dataEvento.substring(0, 10).replace("-", "/")
              )
          );
          $("#event-info-horarios").text("Horários:" + field.horarios);
          $("#of-web-link-eve").href = field.linkSiteOficial;
          $(".day").text(field.dataEvento.toString().substring(8, 10));
          $(".month").text(
            monthNames[parseInt(field.dataEvento.substring(5, 7)) - 1]
              .substring(0, 3)
              .toUpperCase()
          );
          $("#event-name").text(field.nome);
          $("#adress-pt-1").text(
            field.endereco.substring(0, field.endereco.indexOf("Cidade:", 3))
          );
          $("#adress-pt-2").text(
            field.endereco.substring(
              field.endereco.indexOf("Cidade:", 3),
              field.endereco.indexOf("País:", 6)
            )
          );
          $("#adress-pt-3").text(
            field.endereco.substring(field.endereco.indexOf("País:", 6))
          );
          $("#desc-ev-wrapper").text(field.descricao);
          $("#event-map").attr("src", field.localizacaoCoord);
        });
      });*/
      /*alert("ya");*/
      var codigo = 1;
      $.ajax({
        url: "https://localhost:5001/api/redirect/Obras/" + codigo,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function(field) {
          $("#art-detail-p").text(field.dadosTecnicos);
          $("#art-data").text(field.descricao);
          $("#art-name").text(field.nome);
          $("#page-det-name").text(field.nome);
          $.ajax({
            url:
              "https://localhost:5001/api/redirect/Usuarios/UserObra/" + codigo,
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            success: function(field) {
              var codigoUser = field.codigo;
              $.ajax({
                url: "https://localhost:5001/api/Redirect/Usuarios/" + codigo,
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                success: function(field) {
                  $("#user-link").text("@" + field.userName);
                  $("#user-link").attr("href", "/perfil/" + field.idUser);
                  $("#bio").text(field.bio);
                  $("#name").text(field.nome);
                  $("#artist-profile-pic").attr(
                    "src",
                    "" + LZString.decompress(field.foto)
                  );
                  $("#visit-profile-link").attr(
                    "href",
                    "/perfil/" + field.idUser
                  );
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
        },
        error: function(thrownError) {
          //Add these parameters to display the required response
          console.log(thrownError);
        }
      });
    }
  },
  mounted() {
    this.getMarkers();
  }
};
</script>
