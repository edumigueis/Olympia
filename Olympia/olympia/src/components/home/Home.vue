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
          <text text-anchor="start" x="610" y="60" class="text text-stroke" id="text2" font-size='60'>PALACES</text>
          <text text-anchor="start" x="1050" y="60" class="text text-stroke" id="text3" font-size='60'>of art.</text>
          <text text-anchor="start" x="200" y="60" class="text text-stroke text-stroke-2" id="text1" font-size='60'>All the</text>
          <text text-anchor="start" x="610" y="60" class="text text-stroke text-stroke-2" id="text2" font-size='60'>PALACES</text>
          <text text-anchor="start" x="1050" y="60" class="text text-stroke text-stroke-2" id="text3" font-size='60'>of art.</text>         
        </svg>
      </div>

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
