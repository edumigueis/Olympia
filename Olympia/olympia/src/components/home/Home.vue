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
      </div>
      <div id="padding"></div>
      <!---->


      <!--////////////////////////deixa chamativo. clean porém colorido. um ambiente gostoso de navegar////////////////////////////////////-->

      <!--tab page control-->
      <section id="tab-page">
        
      </section>
      <!-- feed -->
      <section id="home-feed">
          
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
