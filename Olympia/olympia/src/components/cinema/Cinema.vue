<template>
  <main>
    <div id="container-cinema">
      <title>C I N E M A</title>
      <link rel="stylesheet" href="/src/assets/css/event-detail.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/cinema.css" />


      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <meu-mouse></meu-mouse>

      <!--Seu código aqui-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            alt class="image" />
        </div>

      </div>
      <h1 class="title">Cinema</h1>
      <div class="caixa-texto">
        <p class="texto"> Cinema (do em grego: κίνημα, kinema "movimentos" e γράφειν, graphein "registrar"), 
          também chamada sétima arte, ou, em certos contextos cinematografia, pode ser definida como a técnica 
          e a arte de fixar e de reproduzir imagens que suscitam impressão de movimento, assim como a indústria que produz estas imagens. 
          As obras cinematográficas (mais conhecidas como filmes) são produzidas através da gravação de imagens do mundo com câmeras (câmaras)
          adequadas, ou pela sua criação utilizando técnicas de animação ou efeitos visuais específicos. Mais especificamente, 
          pode ser descrita como o "conjunto de princípios, processos e técnicas utilizados para captar e projetar numa tela imagens estáticas
          sequenciais (fotogramas) obtidas com uma câmera especial, dando impressão ao espectador de estarem em movimento".
          O diretor de arte pode ser descrito como o principal colaborador visual de um diretor de cinema.Também se usa a palavra 
          'cinegrafia', estando dicionarizada.</p>

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
