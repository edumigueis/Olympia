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

      <div id="palaces-container">
        <svg class="intro">
          <text text-anchor="start" x="200" y="60" class="text text-stroke" id="text1" font-size='60'>All the</text>
          <text text-anchor="start" x="620" y="60" class="text text-stroke" id="text2" font-size='60'>PALACES</text>
          <text text-anchor="start" x="1030" y="60" class="text text-stroke" id="text3" font-size='60'>of art.</text>
          <text text-anchor="start" x="200" y="60" class="text text-stroke text-stroke-2" id="text1" font-size='60'>All the</text>
          <text text-anchor="start" x="620" y="60" class="text text-stroke text-stroke-2" id="text2" font-size='60'>PALACES</text>
          <text text-anchor="start" x="1030" y="60" class="text text-stroke text-stroke-2" id="text3" font-size='60'>of art.</text>         
        </svg>
      </div>

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
                Grandient
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
          <h2 class="demo-cont__credits-heading">Made by</h2>
          <img
            src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg"
            alt=""
            class="demo-cont__credits-img"
          />
          <h3 class="demo-cont__credits-name">Nikolay Talanov</h3>
          <a
            href="https://codepen.io/suez/"
            target="_blank"
            class="demo-cont__credits-link"
            >My codepen</a
          >
          <a
            href="https://twitter.com/NikolayTalanov"
            target="_blank"
            class="demo-cont__credits-link"
            >My twitter</a
          >
          <h2 class="demo-cont__credits-heading">Based on</h2>
          <a
            href="https://dribbble.com/shots/2375246-Fashion-Butique-slider-animation"
            target="_blank"
            class="demo-cont__credits-link"
            >Concept by Kreativa Studio</a
          >
          <h4 class="demo-cont__credits-blend">Global Blend Mode</h4>
          <div class="colorful-switch">
            <input
              type="checkbox"
              class="colorful-switch__checkbox js-activate-global-blending"
              id="colorful-switch-cb"
            />
            <label class="colorful-switch__label" for="colorful-switch-cb">
              <span class="colorful-switch__bg"></span>
              <span class="colorful-switch__dot"></span>
              <span class="colorful-switch__on">
                <span class="colorful-switch__on__inner"></span>
              </span>
              <span class="colorful-switch__off"></span>
            </label>
          </div>
        </div>
      </div>
      <!---->


      <!--////////////////////////deixa chamativo. clean porém colorido. um ambiente gostoso de navegar////////////////////////////////////-->

      <!--tab page control-->
      <section id="tab-page">
        
      </section>
      <!-- feed -->
      <section id="home-feed">
          
      </section>
      <div id="recuo-teste"></div>
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
