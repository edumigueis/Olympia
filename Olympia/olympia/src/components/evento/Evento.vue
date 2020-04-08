<template>
  <main id="page-container">
    <div id="container-evento">
      <link rel="stylesheet" href="/src/assets/css/event-detail.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <meu-mouse></meu-mouse>
      <div class="event-header">
        <div class="img-header">
          <div class="img-wrap">
            <img
              src="https://www.moma.org/d/assets/W1siZiIsIjIwMTkvMTAvMTAvaGxleXY0b2E4X2luMjQyN18wNzc5LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/in2427_0779.jpg?sha=2b029d673aa33a2e"
              class="img-header-proper"
            />
          </div>
        </div>
        <div id="bottom-header">
          <div id="calendar-red">
            <p class="month">SET</p>
            <div id="calendar-white">
              <p class="day">23</p>
            </div>
          </div>
          <div id="title">
            <p id="event-name">Mirrors by Fenjhki MoMA</p>
          </div>
        </div>
      </div>
      <div id="page-rol" class="white-5">
        <div class="grid-item" id="grid-item-1">
          <div id="event-info">
            <div class="event-info-p">
              <p id="event-info-nome" class="event-info-item">Mirrors by Fenjhki MoMA</p>
              <p id="event-info-local" class="event-info-item">
                Endereço: 11 W 53rd St, New York, NY 10019,
                Estados Unidos
              </p>
              <p id="event-info-datas" class="event-info-item">Datas: De 23/09/2020 a 27/10/2020</p>
              <p id="event-info-horarios" class="event-info-item">Horários: 9:00-16:00</p>
              <p id="event-info-precominimo" class="event-info-item">Preço mínimo: USD $20</p>
              <p id="event-info-website" class="event-info-item">
                <a href="wwww.moma.org" class="tickets-link detail-link-0">Compre Ingressos</a>
              </p>
            </div>
          </div>
        </div>
        <div id="second-part-eve">
          <div id="gallery-cont">
            <div class="view-gallery">
              <button>View Gallery</button>
            </div>
            <ul>
              <li class="box box-1"></li>
              <li class="box box-2"></li>
              <li class="box box-3"></li>
              <li class="box box-4"></li>
              <li class="box box-5"></li>
              <li class="box box-6"></li>
            </ul>
          </div>

          <div id="text-about-event">
            <div class="deconstructed">
              SOBRE
              <div>SOBRE</div>
              <div>SOBRE</div>
              <div>SOBRE</div>
              <div>SOBRE</div>
            </div>
            <p class="about-event-text-in">
              <span>
                Lorem ipsum dolor sit amet,
                <a class="underlined underlined--reverse">consectetur adipiscing elit</a>. Nunc tincidunt velit nulla, id pharetra ex pellentesque et. Ut at ante malesuada neque vulputate fringilla a eget leo. Nam ultrices diam eu metus tristique, vel faucibus lacus sollicitudin. Aliquam metus urna, elementum eu finibus eu, hendrerit maximus nunc. Sed id massa et nibh scelerisque semper in at magna. Suspendisse sed ultrices felis. Praesent felis leo, elementum id maximus eget, blandit vitae eros. Proin vel lacus lacus. Maecenas mauris purus, finibus a efficitur sed, lobortis sit amet augue. Morbi elementum massa at pulvinar tempus. Nullam suscipit nisl eu erat faucibus pretium. Aliquam sodales eget dolor vestibulum facilisis. Praesent consectetur, justo vitae molestie ullamcorper, nisl sapien iaculis mi, sit amet accumsan lorem felis non tellus.
                Praesent vitae mollis sapien. Sed id neque sem. Aenean purus nunc, fermentum varius risus ut, porttitor blandit tellus. Sed fermentum consectetur lectus, nec iaculis nisi molestie eget. Vestibulum rutrum tincidunt arcu, sed malesuada nisi. Curabitur libero urna, pulvinar quis faucibus sit amet, venenatis nec odio. Ut vel nibh vehicula, porttitor mi nec, laoreet justo. Duis euismod pharetra leo, et ultrices lacus placerat at. Vestibulum lorem erat, euismod ac dolor luctus, pharetra pretium eros. Nulla sit amet consequat arcu, et aliquam ante. Integer iaculis, turpis at venenatis tincidunt, dolor purus tristique massa, id tincidunt ante lorem porttitor purus. Duis felis sapien, ullamcorper sit amet suscipit eu, tristique id nulla. Duis tristique dolor non consectetur ultrices. Curabitur eget libero lobortis, posuere erat sed, rhoncus mauris.
                Nullam vel quam felis. Donec egestas interdum enim, quis hendrerit sem consequat vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum posuere orci in consectetur. Proin vitae lacus euismod, blandit magna id, sollicitudin tortor. Vivamus at fermentum neque. Fusce a rutrum metus. Duis porta sollicitudin dui. In lobortis laoreet laoreet. Quisque ut mi at nisi scelerisque viverra non in eros. Integer aliquam ipsum nec elit mattis, a commodo sem porta.
              </span>
            </p>
          </div>
          <div id="location-of-event">
            <div class="deconstructed" style="height: 1.2em !important;">
              LOCALIZAÇÃO
              <div>LOCALIZAÇÃO</div>
              <div>LOCALIZAÇÃO</div>
              <div>LOCALIZAÇÃO</div>
              <div>LOCALIZAÇÃO</div>
            </div>
            <div id="bottom-location">
              <div class="map-container">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.026733576006!2d-73.97981028509388!3d40.761436742527366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bdb102b%3A0xea9f8fc0b3ffff55!2sThe%20Museum%20of%20Modern%20Art!5e0!3m2!1spt-BR!2sbr!4v1586369480301!5m2!1spt-BR!2sbr"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <img src="/src/assets/images/finish.png" class="location-icon" />
              <p id="y-r-here">Você está aqui!</p>
              <div class="address-cont">
                <p class="popout">
                  <span>11 W 53rd St,</span>
                  <br />
                  <span>New York, NY,</span>
                  <br />
                  <span>10019, Estados Unidos</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
<!--<script src="/src/assets/dist/aos.js"></script>
    <script>
        AOS.init({
            easing: 'ease-in-out-sine'
        });
    </script>-->
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