<template>
  <main>
    <div id="container-literatura">
      <title>L I T E R A T U R A</title>
      <link rel="stylesheet" href="/src/assets/css/event-detail.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
       <link rel="stylesheet" href="/src/assets/css/literatura.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <meu-mouse></meu-mouse>

      <!--Seu código aqui-->
    <div style="position:relative">
      <div class="image-container">
                <img
                  src="https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt
                  class="image"
                />
              </div>

    </div>
     <h1 class="title">Literatura</h1>
     <div class="caixa-texto">
       <p class="texto">  A Literatura é a técnica de compor e expor textos escritos, em prosa ou em verso, de acordo com princípios teóricos e práticos; o exercício dessa técnica ou da eloquência e poesia.

A palavra Literatura vem do latim "litteris" que significa "Letras", e possivelmente uma tradução do grego "grammatikee". Em latim, literatura significa uma instrução ou um conjunto de saberes ou habilidades de escrever e ler bem, e se relaciona com as técnicas da gramática, da retórica e da poética. Por extensão, se refere especificamente à arte ou ofício de escrever. O termo Literatura também é usado como referência a um conjunto escolhido de textos como, por exemplo a literatura portuguesa, a literatura espanhola, a literatura inglesa, a literatura brasileira, a literatura japonesa, etc.</p>
  
     </div>
    <!---->

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
