<template>
  <main>
    <div id="container-search-result">
      <title>P E S Q U I S A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/searchResult.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <section id="tab-page" class="white-7 border-bottom-0">
        <div class="search__container">
          <input
            type="text"
            class="search__input dark-search-input"
            name="pesquisa"
            placeholder="Pesquisar..."
            id="search"
          />
          <div class="search-button center-position dark-search-icon">
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
            Aulas
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-3">
            Postagens
          </div>
          <div class="paginate-tab text-gray border-bottom-wh" id="to-slide-4">
            Users
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
          <div
            class="slider__slide slider__slide--active slider-1"
            data-slide="1"
          >
            <div class="bg"></div>
            <div class="container-routes">
              <h1 class="title-routes">
                Rotas
                <div class="arrow arrow-1"></div>
                <div class="arrow arrow-2"></div>
              </h1>
              <div class="routes">
                <a href="/#/artes" class="link-route">
                  <div class="1-route route">
                    <h1 class="title-route">Artes</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
                <a href="/#/artes" class="link-route">
                  <div class="2-route route">
                    <h1 class="title-route">Arquitetura</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
                <a href="/#/artes" class="link-route">
                  <div class="3-route route">
                    <h1 class="title-route">Cinema</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
                <a href="/#/artes" class="link-route">
                  <div class="4-route route">
                    <h1 class="title-route">Home</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
                <a href="/#/artes" class="link-route">
                  <div class="5-route route">
                    <h1 class="title-route">Home</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
                <a href="/#/artes" class="link-route">
                  <div class="6-route route">
                    <h1 class="title-route">Home</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>
              </div>
              <h1 class="title-routes title-destaques">
                #Top12<img
                  src="/src/assets/images/heart-image.png"
                  class="heart-title"
                />
                <div class="arrow arrow-3"></div>
                <div class="arrow arrow-4"></div>
              </h1>
              <div class="destaques">
                <div class="1-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"El Cafetán"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Célio Lima Barbosa
                          </h1>
                          <h1 class="top-obra-destaque">#1</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"El Cafetán"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Célio Lima Barbosa
                          </h1>
                          <h1 class="top-obra-destaque">#2</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="2-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"El Cafetán"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Célio Lima Barbosa
                          </h1>
                          <h1 class="top-obra-destaque">#3</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"El Cafetán"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Célio Lima Barbosa
                          </h1>
                          <h1 class="top-obra-destaque">#4</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="3-container-destaque container-destaque">
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                </div>
                <div class="4-container-destaque container-destaque">
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                </div>
                <div class="5-container-destaque container-destaque">
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                </div>
                <div class="6-container-destaque container-destaque">
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                  <div class="destaque-content">
                    <div class="flex-image-destaque">
                      <img
                        src="https://i.pinimg.com/736x/b2/a1/ed/b2a1ed6d29acffafa9e398ab28d05d1f.jpg"
                        class="img-destaque"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slider__slide" data-slide="2">
            <div class="bg"></div>
          </div>
          <div class="slider__slide" data-slide="3">
            <div class="bg"></div>
          </div>
          <div class="slider__slide" data-slide="4">
            <div class="bg"></div>
          </div>
          <div class="slider__slide" data-slide="5">
            <div class="bg"></div>
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
