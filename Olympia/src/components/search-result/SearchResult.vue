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
        <div class="search__container">
          <input
            type="text"
            class="search__input"
            name="pesquisa"
            placeholder="Pesquisar..."
            id="search"
          />
          <div class="search-button center-position">
            <div class="search-icon"></div>
          </div>
        </div>

        <h1 id="page-name-on-tab" class="black-to-white">Principais</h1>
        <div id="tab-pages-cont">
          <div
            class="paginate-tab active-tab-p text-gray border-bottom-wh"
            id="to-slide-0"
          >
            Principais
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-1">
            Obras
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-2">
            Serviços
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-3">
            Postagens
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
          <img
            id="list-tab-ut"
            class="tab-page-ut white-icon"
            src="/src/assets/images/list-ico.png"
          />
        </div>
      </section>
      <section id="search-result">
        <div class="slider">
          <div class="slider__slide slider__slide--active" data-slide="1">
            <img
              src="https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg"
            />
          </div>
          <div class="slider__slide" data-slide="2">
            <img
              src="https://timeline.canaltech.com.br/305150.1400/voce-ja-pode-baixar-os-wallpapers-oficiais-dos-novos-iphones-xs-e-xr.jpg"
            />
          </div>
          <div class="slider__slide" data-slide="3">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
            />
          </div>
          <div class="slider__slide" data-slide="4">
            <img
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&w=1000&q=80"
            />
          </div>
          <div class="slider__indicators"></div>
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
