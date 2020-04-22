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

      <!--ATENÇÂO-->
              <div class="bg"></div> <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            alt
            class="image"
          />
        </div>
      </div>

      <div id="corpo">
        <div class="container-left">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-principal">
                <h1 class="text-title-principal">CINEMA</h1>
                Cinema (do em grego: κίνημα, kinema "movimentos" e γράφειν,
                graphein "registrar"), também chamada sétima arte, ou, em certos
                contextos cinematografia, pode ser definida como a técnica e a
                arte de fixar e de reproduzir imagens que suscitam impressão de
                movimento, assim como a indústria que produz estas imagens. As
                obras cinematográficas (mais conhecidas como filmes) são
                produzidas através da gravação de imagens do mundo com câmeras
                (câmaras) adequadas, ou pela sua criação utilizando técnicas de
                animação ou efeitos visuais específicos. Mais especificamente,
                pode ser descrita como o "conjunto de princípios, processos e
                técnicas utilizados para captar e projetar numa tela imagens
                estáticas sequenciais (fotogramas) obtidas com uma câmera
                especial, dando impressão ao espectador de estarem em
                movimento". O diretor de arte pode ser descrito como o principal
                colaborador visual de um diretor de cinema.Também se usa a
                palavra 'cinegrafia', estando dicionarizada.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">HISTÓRIA</h1>
                Louis e Auguste eram filhos e colaboradores do industrial
                Antoine Lumière, fotógrafo e fabricante de películas
                fotográficas, proprietário da Fábrica Lumière (Usine Lumière),
                instalada na cidade francesa de Lyon. Antoine reformou-se em
                1892, deixando a fábrica entregue aos filhos. O cinematógrafo
                era uma máquina de filmar e projetor de cinema, invento que lhes
                tem sido atribuído mas que na verdade foi inventado por Léon
                Bouly no ano de 1892, o qual teria perdido o registro dessa
                patente, sendo então de novo registrado pelos irmãos Lumiere em
                13 de fevereiro de 1895. São considerados os inventores da
                Sétima Arte junto com Georges Méliès, também francês, sendo este
                visto como o pai do cinema de ficção.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Fratelli_Lumiere.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
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
