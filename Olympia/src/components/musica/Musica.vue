<template>
  <main>
    <div id="container-musica">
      <title>M U S I C A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/musica.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <!--ATENÇÂO-->
              <div class="bg"></div> <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="https://midia.gruposinos.com.br/_midias/jpg/2019/09/03/caxiasensemble6-18431661.jpg"
            alt
            class="image"
          />
        </div>
        <h1 class="art-title">Musica</h1>
        <h2 class="art-subtitle">A sétima arte, um mar de sensações</h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">

      <div class="mySlides">
        <q>"A música é o vínculo que une a vida do espírito à vida dos sentidos. A melodia é a vida sensível da poesia."</q>
        <p class="author">- Ludwig van Beethoven</p>
      </div>

      <div class="mySlides">
        <q>"A música exprime a mais alta filosofia numa linguagem que a razão não compreende."</q>
        <p class="author">- Arthur Schopenhauer</p>
      </div>

      <div class="mySlides">
        <q>"Quando se ouve boa música fica-se com saudade de algo que nunca se teve e nunca se terá."</q>
        <p class="author">- Samuel Howe
    </p>
      </div>

      <a class="prev" onclick="plusSlides(-1)">❮</a>
      <a class="next" onclick="plusSlides(1)">❯</a>

      </div>

<div class="dot-container">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>
        <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-principal">
                <h1 class="text-title-principal">MÚSICA</h1>
               A música (do grego μουσική τέχνη - musiké téchne, a arte das musas)é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo.

É considerada por diversos autores como uma prática cultural e humana. Não se conhece nenhuma civilização ou agrupamento que não possua manifestações musicais próprias. Embora nem sempre seja feita com esse objetivo, a música pode ser considerada como uma forma de arte, considerada por muitos como sua principal função.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Metal</h1>
               O heavy metal é um gênero do rock que se desenvolveu no final da década de 1960 e no início da década de 1970, em grande parte no Reino Unido e nos Estados Unidos. Tem com raiz o blues-rock e o rock psicodélico, sendo que as bandas que criaram o heavy metal desenvolveram um som massivo e encorpado, caracterizado por um timbre saturado e distorcido dos amplificadores, pelas cordas graves da guitarra para a criação de riffs e pela exploração de sonoridades em tons menores, dando um ar sombrio às composições. As primeiras bandas a serem consideradas de heavy metal foram Led Zeppelin, Deep Purple e Black Sabbath.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://images.unsplash.com/photo-1515890326200-a07ce46010a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </td>
            </tr>
          </table>
        </div>
    
      <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Pop</h1>
                O começo do pop se deu nos anos 30, nos Estados Unidos. O pop (de popular) é aquela música que tem um pouco de tudo, agrega todo mundo e arrasta multidões. Pode ter uma pegada de rock, dance, rap, funk e metal, só para ficar em alguns gêneros. Foi nos anos 50 que o pop veio com tudo: Elvis Presley surgia no cenário musical como um ícone do rock, mas era adorado por fãs de todo o mundo. Daí para a frente, só tem celebridade: Marvin Gaye, Ray Charles e Stevie Wonder, com um passo mais romântico e cheio de suingue; Queen e David Bowie adicionaram a pitada do rock.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://api.time.com/wp-content/uploads/2020/01/new-pop-music-era_social1.jpg?quality=85"
                />
              </td>
            </tr>
          </table>
        </div>
          <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Música classica</h1>
                Música clássica, música de concerto ou música erudita é o nome dado à principal variedade de música produzida ou enraizada nas tradições da música secular e litúrgica ocidental. Abrange um período amplo que vai aproximadamente do século IX até o presente e segue cânones preestabelecidos no decorrer da história da música. Apesar do nome que remete a algo do 'passado' ou 'antigo', esta variedade de música é escrita também nos dias de hoje, através de compositores do século XXI que criam obras inéditas, originais e atuais.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://i.mlcdn.com.br/portaldalu/fotosconteudo/72394.jpg"
                />
              </td>
            </tr>
          </table>
        </div>    
      <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Hip hop</h1>
                O hip-hop emergiu em meados da década de 1970 nos subúrbios negros e latinos de Nova York. Estes subúrbios enfrentavam diversos problemas de ordem social como pobreza, violência, racismo, carência de infra-estrutura e de educação, entre outros. Os jovens encontravam na rua o único espaço de lazer. Por lá, existiam festas de rua com equipamentos sonoros ou carros de som muito possantes chamados de Sound System (carros equipados com sistemas de som, parecidos com os trios elétricos).
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Rock</h1>
                O rock and roll surgiu nos subúrbios dos Estados Unidos no final dos anos 1940 e início da década de 1950 e rapidamente se espalhou para o resto do mundo. Suas origens imediatas remontam a uma mistura entre blues e country, mas com influência de vários gêneros musicais com o rhythm and blues. Em 1951, na cidade de Cleveland, o discotecário Alan Freed começou a tocar a mistura de blues, country e rhythm and blues para uma plateia multirracial e a ele é creditado a primeira utilização da expressão “rock and roll” para descrever a música. O rock desenvolveu diferentes subgêneros, como folk music, glam rock, heavy metal, hard rock, rock progressivo, punk rock, grunge, o britpop e indie rock.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://images.unsplash.com/photo-1547525372-7acfcbcd8acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </td>
            </tr>
          </table>
        </div>  
         <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Jazz</h1>
                O jazz é uma manifestação musical originária de Nova Orleans, Chicago e Nova York, nos Estados Unidos. Tal manifestação teria surgido por volta do início do século XX na região de Nova Orleans e em suas proximidades, tendo, na cultura popular e na criatividade das comunidades negras que ali viviam, um de seus espaços de desenvolvimento mais importantes.Ele se desenvolveu com a mistura de várias tradições religiosas, em particular a afro-americana.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://images.unsplash.com/photo-1525994886773-080587e161c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
