<template>
  <main style="overflow:hidden;">
    <div id="container-obra">
      <link rel="stylesheet" href="/src/assets/css/detalhe.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <meu-mouse></meu-mouse>

      <div id="col-container">
        <div id="img-col-d" class="transparent">
          <div class="bg"></div>
          <table
            id="table-img"
            width="100%"
            data-aos="fade-down"
            data-aos-duration="1000"
            class="transparent"
          >
            <colgroup>
              <col width="33.3333333%" />
              <col width="33.3333333%" />
              <col width="33.3333333%" />
            </colgroup>
            <tr class="line-img-container-detail">
              <td class="detail-img-container" id="detail-img-1" colspan="2">
                <div class="detail-mask transparent">
                  <img
                    src="https://gagosian.com/media/images/exhibitions/2013/willem-de-kooning-ten-paintings-1983-1985/xNTqSjL1UVAw_585x329.jpg"
                    class="img-col transparent"
                    id="image-1-det"
                  />
                </div>
              </td>
              <td class="detail-img-container" id="detail-img-2">
                <div class="detail-mask transparent">
                  <img
                    src="https://i.pinimg.com/originals/d0/83/56/d08356194ca7ddf4c0d09acbc58bccec.jpg"
                    class="img-col transparent"
                  />
                </div>
              </td>
            </tr>
            <tr class="line-img-container-detail">
              <td class="detail-img-container" id="detail-img-3">
                <div class="detail-mask transparent">
                  <img
                    src="https://cdn.e-konomista.pt/uploads/2019/07/quadros-mais-caros-850x514.jpg "
                    class="img-col transparent"
                  />
                </div>
              </td>
              <td class="detail-img-container" id="detail-img-4" colspan="2">
                <div class="detail-mask transparent">
                  <img
                    src="https://ep00.epimg.net/cultura/imagenes/2016/02/18/actualidad/1455830675_596061_1455873497_noticia_fotograma.jpg"
                    class="img-col transparent"
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div id="info-col-d" class="white-6">
          <ul id="info-list" class="white-6">
            <li class="info-item white-6" id="info-1">
              <div class="inner-list white-6">
                <div id="simple-art-info">
                  <p id="art-name" class="black-to-white">N. 17a</p>
                  <p id="art-detail-p" class="black-to-white">
                    <span id="art-local">Nova York,</span>
                    <span id="art-year">1948.</span>
                    <span id="art-dim">1,38 m x 1,38 m.</span>
                    <span id="art-mat">Tela, Tinta a óleo.</span>
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
              <div class="inner-list" >
                <div id="simple-artist-info">
                  <p id="artist-user">
                    <b>
                      User:
                      <a id="user-link" href="/user/pollock" class="black-to-white">@pollock</a>
                    </b>
                  </p>
                  <p id="artist-name" class="black-to-white">
                    <b>Nome:</b> Jakson Pollock
                  </p>
                  <p id="artist-nac" class="black-to-white">
                    <b>Nacionalidade:</b> Americano
                  </p>
                </div>
                <div id="artist-pic" class="black-to-white">
                  <img
                    src="https://static.todamateria.com.br/upload/po/ll/pollockarte-cke.jpg"
                    alt
                    class="art-icon"
                  />
                </div>
                <p id="artist-profile" class="black-to-white">
                  <a href="/profile/klimt" class="link black-to-white">Visitar o perfil</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div id="paginate-detail">
          <div id="arrows-pag-det">
              <svg id="more-arrows" class='arrow'>
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
      </div>
      <div id="background-wrap">
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
  }
};
</script>
