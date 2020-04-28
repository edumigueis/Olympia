<template>
  <main>
    <div id="container-home">
      <link rel="stylesheet" href="/src/assets/css/home.css" />
      <link rel="stylesheet" href="/src/assets/css/palaces.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <title>H O M E</title>

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-mouse></meu-mouse>
      <meu-dark-mode></meu-dark-mode>

      <svg
        class="click"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 462.8 580.9"
      >
        <path
          id="tap-target"
          class="st1"
          d="M142.8,276.4c-0.1-51.8-0.2-81.5-0.2-102.6c0-45.9,76.5-48.1,80.7-3.1v104.4
        c57.1-18,98.5-71.3,98.5-134.3C321.8,63,258.8,0,181,0S40.2,63,40.2,140.8C40.2,205.4,83.6,259.8,142.8,276.4z"
        />

        <g id="hand">
          <path
            class="st0"
            id="hand-untapped"
            d="M297.3,572.9c-46.1,0-94.4-5.9-126.1-15.4c-37.1-11.1-49.6-43.4-66.8-88.1c-16-41.4-35.9-93-82.7-154.7
          c-12.9-17.1-16.7-30.5-11.5-41c3.3-6.7,11.9-14.7,33.8-14.7c10.9,0,23.8,2.1,34.6,5.7l0.5,0.2l0.5,0.2c1,0.5,2.2,1,3.4,1.6
          c11.7,5.6,31.3,14.8,51.4,40.6v-4.8l0.6,1.1c-0.1-55.9-0.3-170.3-0.3-202.3c0-13.3,5.6-25,15.7-33c8.8-6.9,20.4-10.7,32.8-10.7
          c21.4,0,45.6,12.5,48.2,39.8l0,0.4v128.7l1.8-1c7.5-4.2,19.1-9.2,32-9.2c13.8,0,33.2,5.9,47.1,33.9l2.7-1.5
          c9.8-5.6,20-8.6,29.5-8.6c8.1,0,15.7,2,22.8,6.1c6.3,3.6,14.5,11.9,19.5,30.9l5.2-1.2c3.7-0.9,7.4-1.3,11-1.3
          c14.6,0,34.7,7.3,47.7,42c6.1,16.4,5.4,71.8-1.7,121c-6.7,47.1-21.3,105.9-52.7,119.6C371.7,570.8,323.8,572.9,297.3,572.9
          C297.3,572.9,297.3,572.9,297.3,572.9z"
          />
        </g>
        <svg id="shadow">
          <g id="hand-tapping">
            <path
              class="st0"
              id="hand-tapped"
              style="display:none"
              d="M297.3,572.9c-46.1,0-94.4-5.9-126.1-15.4c-37.1-11.1-49.6-43.4-66.8-88.1c-16-41.4-35.9-93-82.7-154.7
            c-12.9-17.1-16.7-30.5-11.5-41c3.3-6.7,11.9-14.7,33.8-14.7c10.9,0,23.8,2.1,34.6,5.7l0.5,0.2l0.5,0.2c1,0.5,2.2,1,3.4,1.6
            c11.7,5.6,31.3,14.8,51.4,40.6v-4.8l0.6,1c-0.1-38-0.3-100.8-0.3-129.6c0-13.3,5.6-25,15.7-33c8.8-6.9,20.4-10.7,32.8-10.7
            c21.4,0,45.6,12.5,48.2,39.8l0,0.4v56l1.8-1c7.5-4.2,19.1-9.2,32-9.2c13.8,0,33.2,5.9,47.1,33.9l2.7-1.5c9.8-5.6,20-8.6,29.5-8.6
            c8.1,0,15.7,2,22.8,6.1c6.3,3.6,14.5,11.9,19.5,30.9l5.2-1.2c3.7-0.9,7.4-1.3,11-1.3c14.6,0,34.7,7.3,47.7,42
            c6.1,16.4,5.4,71.8-1.7,121c-6.7,47.1-21.3,105.9-52.7,119.6C371.7,570.8,323.8,572.9,297.3,572.9
            C297.3,572.9,297.3,572.9,297.3,572.9z"
            />
          </g>
        </svg>
      </svg>

      <div id="margin"></div>
      <!--slider-->
      <div class="demo-cont">
        <img src="/src/assets/images/page-ico.png" class="logo-ico" />
        <!-- slider start -->
        <div class="fnc-slider example-slider">
          <div class="fnc-slider__slides">
            <!-- slide start -->
            <div class="fnc-slide m--blend-green m--active-slide">
              <div class="fnc-slide__inner">
                <div class="fnc-slide__mask">
                  <div class="fnc-slide__mask-inner"></div>
                </div>
                <div class="fnc-slide__content">
                  <h2 class="fnc-slide__heading">
                    <div class="fnc-slide__heading-line">
                      <span>Daily</span>
                    </div>
                    <div class="fnc-slide__heading-line">
                      <span>Art</span>
                    </div>
                  </h2>
                  <button type="button" class="fnc-slide__action-btn">
                    Detalhes
                    <span data-text="Detalhes">Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- slide end -->
            <!-- slide start -->
            <div class="fnc-slide m--blend-dark">
              <div class="fnc-slide__inner">
                <div class="fnc-slide__mask">
                  <div class="fnc-slide__mask-inner"></div>
                </div>
                <div class="fnc-slide__content">
                  <h2 class="fnc-slide__heading">
                    <div class="fnc-slide__heading-line">
                      <span>Destaques</span>
                    </div>
                    <div class="fnc-slide__heading-line">
                      <span></span>
                    </div>
                  </h2>
                  <button type="button" class="fnc-slide__action-btn">
                    Detalhes
                    <span data-text="Detalhes">Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- slide end -->
            <!-- slide start -->
            <div class="fnc-slide m--blend-red">
              <div class="fnc-slide__inner">
                <div class="fnc-slide__mask">
                  <div class="fnc-slide__mask-inner"></div>
                </div>
                <div class="fnc-slide__content">
                  <h2 class="fnc-slide__heading">
                    <div class="fnc-slide__heading-line">
                      <span>Gradient of</span>
                    </div>
                    <div class="fnc-slide__heading-line">
                      <span>The month</span>
                    </div>
                  </h2>
                  <button type="button" class="fnc-slide__action-btn">
                    Detalhes
                    <span data-text="Detalhes">Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- slide end -->
            <!-- slide start -->
            <div class="fnc-slide m--blend-blue">
              <div class="fnc-slide__inner">
                <div class="fnc-slide__mask">
                  <div class="fnc-slide__mask-inner"></div>
                </div>
                <div class="fnc-slide__content">
                  <h2 class="fnc-slide__heading">
                    <div class="fnc-slide__heading-line">
                      <span>art</span>
                    </div>
                    <div class="fnc-slide__heading-line">
                      <span>news</span>
                    </div>
                  </h2>
                  <button type="button" class="fnc-slide__action-btn">
                    Detalhes
                    <span data-text="Detalhes">Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- slide end -->
          </div>
          <nav class="fnc-nav">
            <div class="fnc-nav__bgs">
              <div class="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
              <div class="fnc-nav__bg m--navbg-dark"></div>
              <div class="fnc-nav__bg m--navbg-red"></div>
              <div class="fnc-nav__bg m--navbg-blue"></div>
            </div>
            <div class="fnc-nav__controls">
              <button class="fnc-nav__control">
                Daily Art
                <span class="fnc-nav__control-progress"></span>
              </button>
              <button class="fnc-nav__control">
                Destaques
                <span class="fnc-nav__control-progress"></span>
              </button>
              <button class="fnc-nav__control">
                Gradient
                <span class="fnc-nav__control-progress"></span>
              </button>
              <button class="fnc-nav__control">
                Art news
                <span class="fnc-nav__control-progress"></span>
              </button>
            </div>
          </nav>
        </div>
        <!-- slider end -->
        <div class="demo-cont__credits">
          <div class="demo-cont__credits-close"></div>
          <h2 class="demo-cont__credits-heading">DAILY ART</h2>
          <h3 class="demo-cont__credits-name">"Mona Lisa", por</h3>
          <a class="demo-cont__credits-link">Botero - 1977</a>
          <div class="mask-img">
            <img class="daily-art-img" src="/src/assets/images/daily-art.jpg" />
          </div>
        </div>
      </div>

      <!---->

      <!--////////////////////////////////////////////////////////////-->

      <!--tab page control-->
      <section id="tab-page">
        <h1 id="page-name-on-tab">Obras</h1>
        <div id="tab-pages-cont">
          <div class="paginate-tab active-tab-p" id="to-slide-0">Obras</div>
          <div class="paginate-tab" id="to-slide-1">Serviços</div>
          <div class="paginate-tab" id="to-slide-2">Inspire-se</div>
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
            id="post-tab-ut"
            class="tab-page-ut"
            src="/src/assets/images/plus-sign.png"
          />
          <img
            id="search-tab-ut"
            class="tab-page-ut"
            src="/src/assets/images/search-small.png"
          /><img
            id="list-tab-ut"
            class="tab-page-ut"
            src="/src/assets/images/list-ico.png"
          />
        </div>
      </section>
      <!-- feed -->
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
      <section id="home-feed">
        <div class="slider-container">
          <div class="slider-control left inactive"></div>
          <div class="slider-control right"></div>
          <ul class="slider-pagi"></ul>
          <div class="slider">
            <div class="slide slide-0 active">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <div class="feed-item">
                  <div class="post-img-cont">
                    <a href="/#/obra">
                    <figure class="snip1321">
                      
                      <img
                        src="https://i.pinimg.com/originals/bd/1b/82/bd1b82378029dfc8c235015aba800cd5.jpg"
                        alt="sq-sample26"
                      />
                      <figcaption>
                        <i class="fas fa-arrow-right"></i>
                        <h4>Inverness</h4>
                        <h2>McKenzie</h2>
                      </figcaption>
                      
                    </figure>
                    </a>
                  </div>
                  <div class="post-det-cont">
                    <div class="name-of-post">Outter Seas</div>
                    <div class="name-of-prof">
                      <a class="name-of-prof-link">Luna Dias</a>
                    </div>
                    <div class="desc-of-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ut facilisis justo. In hac habitasse platea
                      dictumst. Fusce vestibulum imperdiet felis sed ultrices.
                      Curabitur ullamcorper molestie nunc in pharetra. Curabitur
                      at cursus nunc. Curabitur porta, orci sed eleifend mollis,
                      justo elit ullamcorper erat, sed vehicula nisl turpis a
                      nibh. Pellentesque id odio a purus bibendum congue. Nunc
                      ut viverra tellus. Donec volutpat posuere nisi, sed
                      efficitur augue pretium sit amet. Curabitur congue, erat a
                      mattis imperdiet, lectus ligula lacinia dolor, in
                      tincidunt augue sem nec est.
                    </div>
                    <div class="prof-cont-feed">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <div class="prof-name-det">Luna Dias</div>
                      <div class="prof-bio-det">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="categories-cont-on-feed">
                      <div class="cat-on-feed paint">Pintura</div>
                      <div class="cat-on-feed paint">Tinta Óleo</div>
                      <div class="cat-on-feed paint">Arte Moderna</div>
                      <div class="cat-on-feed pers">Oceano</div>
                      <div class="cat-on-feed pers">Azul</div>
                    </div>
                  </div>
                </div>
                <div class="feed-item">
                  <div class="post-img-cont">
                    <a href="/#/obra">
                    <figure class="snip1321">
                      
                      <img
                        src="https://www.tickpick.com/blog/wp-content/uploads/2019/02/audience-1835431_1280.jpg"
                        alt="sq-sample26"
                      />
                      <figcaption>
                        <i class="fas fa-arrow-right"></i>
                        <h4>Inverness</h4>
                        <h2>McKenzie</h2>
                      </figcaption>
                      
                    </figure>
                    </a>
                  </div>
                  <div class="post-det-cont">
                    <div class="name-of-post">The Dawn Project</div>
                    <div class="name-of-prof">
                      <a class="name-of-prof-link">Justin Alberman</a>
                    </div>
                    <div class="desc-of-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ut facilisis justo. In hac habitasse platea
                      dictumst. Fusce vestibulum imperdiet felis sed ultrices.
                      Curabitur ullamcorper molestie nunc in pharetra. Curabitur
                      at cursus nunc. Curabitur porta, orci sed eleifend mollis,
                      justo elit ullamcorper erat, sed vehicula nisl turpis a
                      nibh. Pellentesque id odio a purus bibendum congue. Nunc
                      ut viverra tellus. Donec volutpat posuere nisi, sed
                      efficitur augue pretium sit amet. Curabitur congue, erat a
                      mattis imperdiet, lectus ligula lacinia dolor, in
                      tincidunt augue sem nec est.
                    </div>
                    <div class="prof-cont-feed">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                        />
                      </div>
                      <div class="prof-name-det">Justin Alberman</div>
                      <div class="prof-bio-det">
                        Music inspires us to be who we are xd
                      </div>
                    </div>
                    <div class="categories-cont-on-feed">
                      <div class="cat-on-feed music">Music</div>
                      <div class="cat-on-feed pers">Young Artist</div>
                      <div class="cat-on-feed music">Show</div>
                      <div class="cat-on-feed music">Comtemporary</div>
                      <div class="cat-on-feed pers">Indie</div>
                    </div>
                  </div>
                </div>
                <div class="feed-item">
                  <div class="post-img-cont">
                    <a href="/#/obra">
                    <figure class="snip1321">
                      
                      <img
                        src="https://i.pinimg.com/originals/7d/80/9c/7d809cc3528614e7a0fbdbe8f960d235.jpg"
                        alt="sq-sample26"
                      />
                      <figcaption>
                        <i class="fas fa-arrow-right"></i>
                        <h4>Inverness</h4>
                        <h2>McKenzie</h2>
                      </figcaption>
                      
                    </figure>
                    </a>
                  </div>
                  <div class="post-det-cont">
                    <div class="name-of-post">The Dawn Project</div>
                    <div class="name-of-prof">
                      <a class="name-of-prof-link">Justin Alberman</a>
                    </div>
                    <div class="desc-of-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ut facilisis justo. In hac habitasse platea
                      dictumst. Fusce vestibulum imperdiet felis sed ultrices.
                      Curabitur ullamcorper molestie nunc in pharetra. Curabitur
                      at cursus nunc. Curabitur porta, orci sed eleifend mollis,
                      justo elit ullamcorper erat, sed vehicula nisl turpis a
                      nibh. Pellentesque id odio a purus bibendum congue. Nunc
                      ut viverra tellus. Donec volutpat posuere nisi, sed
                      efficitur augue pretium sit amet. Curabitur congue, erat a
                      mattis imperdiet, lectus ligula lacinia dolor, in
                      tincidunt augue sem nec est.
                    </div>
                    <div class="prof-cont-feed">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                        />
                      </div>
                      <div class="prof-name-det">Justin Alberman</div>
                      <div class="prof-bio-det">
                        Music inspires us to be who we are xd
                      </div>
                    </div>
                    <div class="categories-cont-on-feed">
                      <div class="cat-on-feed music">Music</div>
                      <div class="cat-on-feed pers">Young Artist</div>
                      <div class="cat-on-feed music">Show</div>
                      <div class="cat-on-feed music">Comtemporary</div>
                      <div class="cat-on-feed pers">Indie</div>
                    </div>
                  </div>
                </div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
              </div>
            </div>
            <div class="slide slide-1">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
              </div>
            </div>
            <div class="slide slide-2">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
              </div>
            </div>
            <div class="slide slide-3">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
                <div class="feed-item"></div>
              </div>
            </div>
          </div>
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
