<template>
  <main>
    <div id="container-sobre">
        <link rel="stylesheet" href="/src/assets/css/sobre.css">
        <title>S O B R E</title>

        <meu-menu-bar></meu-menu-bar>
        <meu-menu-items></meu-menu-items>
        <meus-contatos></meus-contatos>
        <meu-mouse></meu-mouse>
        <meu-dark-mode></meu-dark-mode>

        <div class="gradient"></div>
        <div class="bg"></div>

        <span id="fundo">
          <div id="imagens">
            <img class="box" id="exposicao" src="/src/assets/images/sede.jpg" />
            <img class="box" id="museu" src="/src/assets/images/museu.jpg" />
          </div>

          <span id="mouse"></span>
        </span>

        <div id="text">
          <p id="title">NOSSA HISTÓRIA</p>
          <div class="linha"></div>
          <p id="texto1">
            Essa é a nossa sede lalala ecialização e Mestrado em Planejamento e
            Administração do Desenvolvimento Regós.doc em Ciências da
            Comunicaçãcimento e Comunicação. CEO do Portal do Envelhecimento,
            Portal Edições e Espaço Longeviver. Integrou o banco de avaliadores
            do Sistema Nacionajjjjjl de Avaliação da Educação Superior –
            Basis/Inep/MEC até 2018. Integra a Rede Iberoamericana de
            Psicogerontologia (Redip) e a Red Iberoamericana
            Interdisciplinjjjjjjjar de Investigación en Envejecimiento y
            Sociedad (RIIIES). E-mail: beltrinac
          </p>

          <p id="texto2">
            Jornalista, Espfggfggggggggggggg Rede Iberoamericana de
            Psicogerontologia (Redip) e rrrrrrrrrra Red Iberoamericana
            Interdisciplinar dttte Investigación ett Envejecimiento y Sociedad
            (RIIIES). E-mail: beltrinac
          </p>
          <div class="linha"></div>
        </div>
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
