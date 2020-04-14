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
        <svg class="intro" viewBox="0 0 200 86">
          <text text-anchor="start" x="50" y="90" class="text text-stroke">All the</text>
          <text text-anchor="start" x="500" y="110" class="text text-stroke">PALACES</text>
          <text text-anchor="start" x="1000" y="130" class="text text-stroke">for art.</text>
          <text text-anchor="start" x="50" y="90" class="text text-stroke text-stroke-2">All the</text>
          <text text-anchor="start" x="500" y="110" class="text text-stroke text-stroke-2">PALACES</text>
          <text
            text-anchor="start"
            x="1000"
            y="130"
            class="text text-stroke text-stroke-2"
          >for art.</text>
          <defs>
            <clipPath id="text1">
              <text text-anchor="start" x="50" y="90" class="text">All the</text>
            </clipPath>
            <clipPath id="text2">
              <text text-anchor="start" x="500" y="40" class="text">PALACES</text>
            </clipPath>
            <clipPath id="text3">
              <text text-anchor="start" x="1000" y="50" class="text">for art.</text>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div id="black-div">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <img id="palaces-img" src="src/assets/images/palaces.png" />
      </div>

      <!--////////////////////////////////////////////////////////////-->

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
