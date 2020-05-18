<template>
  <main>
    <div id="container-search-result">
      <title>P E S Q U I S A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/searchResult.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <section id="tab-page" class="white-7 border-bottom-0">
        <h1 id="page-name-on-tab" class="black-to-white">Explorar</h1>
        <div id="tab-pages-cont">
          <div
            class="paginate-tab active-tab-p text-gray border-bottom-wh"
            id="to-slide-0"
          >
            Explorar
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-1">
            Aprender
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-2">
            Inspirar-se
          </div>
        </div>

        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" class="brd">
              <div id="selected-value">
                <span class="selected-value-prop">Ordenar por...</span>
              </div>
              <div id="chevrons">
                <i class="fas fa-chevron-up"></i>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="options">
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i class="fa fa-calendar-plus"></i>
                <span class="label">Mais Recente</span>
                <span class="opt-val">Mais Recente</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <i class="fa fa-calendar-minus"></i>
                <span class="label">Menos Recente</span>
                <span class="opt-val">Menos Recente</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i class="fa fa-star"></i>
                <span class="label">Mais Relevante</span>
                <span class="opt-val">Mais Relevane</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i class="fa fa-star-half"></i>
                <span class="label">Menos Relevante</span>
                <span class="opt-val">Menos Relevante</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i class="fa fa-heart"></i>
                <span class="label">Mais Curtidas</span>
                <span class="opt-val">Mais Curtidas</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i class="far fa-heart"></i>
                <span class="label">Menos Curtidas</span>
                <span class="opt-val">Menos Curtidas</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </form>
        <div class="right-tab-control">
          <a href="/#/post">
          <img
            id="post-tab-ut"
            class="tab-page-ut white-icon"
            src="/src/assets/images/plus-sign.png"
          />
          </a>
          <img
            id="search-tab-ut"
            class="tab-page-ut white-icon"
            src="/src/assets/images/search-small.png"
          /><img
            id="list-tab-ut"
            class="tab-page-ut white-icon"
            src="/src/assets/images/list-ico.png"
          />
        </div>
      </section>

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
