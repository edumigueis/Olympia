 <template>
  <main>
    <div id="container-home">
      <link rel="stylesheet" href="/src/assets/css/home.css" />
      <link rel="stylesheet" href="/src/assets/css/palaces.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
      <title>H O M E</title>
      
      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-mouse></meu-mouse>
      <meu-dark-mode></meu-dark-mode>

      <div id="margin"></div>

      <!--slider-->
      <div class="demo-cont">
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
          <a
            class="demo-cont__credits-link"
            >Botero - 1977</a
          >
          <div class="mask-img">
              <img class="daily-art-img" src="/src/assets/images/daily-art.jpg">
          </div>
          </div>
        </div>
      
      <div id="padding"></div>
      <!---->


      <!--////////////////////////deixa chamativo. clean porém colorido. um ambiente gostoso de navegar////////////////////////////////////-->

      <!--tab page control-->
      <section id="tab-page">
        
      </section>
      <!-- feed -->
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
                <img
                  class="post-main-img"
                  src="https://i.pinimg.com/originals/55/6a/47/556a47568fdcb3eb1199eb9d388ed311.jpg"
                />
              </div>
              <div class="post-det-cont">
                <div class="name-of-post">Outter Seas</div>
                <div class="name-of-prof"><a class="name-of-prof-link">Luna Dias</a></div>
                <div class="desc-of-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut facilisis justo. In hac habitasse platea dictumst. Fusce vestibulum imperdiet felis sed ultrices. Curabitur ullamcorper molestie nunc in pharetra. Curabitur at cursus nunc. Curabitur porta, orci sed eleifend mollis, justo elit ullamcorper erat, sed vehicula nisl turpis a nibh. Pellentesque id odio a purus bibendum congue. Nunc ut viverra tellus. Donec volutpat posuere nisi, sed efficitur augue pretium sit amet. Curabitur congue, erat a mattis imperdiet, lectus ligula lacinia dolor, in tincidunt augue sem nec est.</div>
                <div class="prof-cont-feed">
                  <div class="prof-img-cont"><img class="prof-img-prop" src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"></div>
                  <div class="prof-name-det">Luna Dias</div>
                  <div class="prof-bio-det">What would our lives be without art?</div>
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
                <img
                  class="post-main-img"
                  src="https://www.tickpick.com/blog/wp-content/uploads/2019/02/audience-1835431_1280.jpg"
                />
              </div>
              <div class="post-det-cont">
                <div class="name-of-post">The Dawn Project</div>
                <div class="name-of-prof"><a class="name-of-prof-link">Justin Alberman</a></div>
                <div class="desc-of-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut facilisis justo. In hac habitasse platea dictumst. Fusce vestibulum imperdiet felis sed ultrices. Curabitur ullamcorper molestie nunc in pharetra. Curabitur at cursus nunc. Curabitur porta, orci sed eleifend mollis, justo elit ullamcorper erat, sed vehicula nisl turpis a nibh. Pellentesque id odio a purus bibendum congue. Nunc ut viverra tellus. Donec volutpat posuere nisi, sed efficitur augue pretium sit amet. Curabitur congue, erat a mattis imperdiet, lectus ligula lacinia dolor, in tincidunt augue sem nec est.</div>
                <div class="prof-cont-feed">
                  <div class="prof-img-cont"><img class="prof-img-prop" src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"></div>
                  <div class="prof-name-det">Justin Alberman</div>
                  <div class="prof-bio-det">Music inspires us to be who we are xd</div>
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
