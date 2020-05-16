<template>
  <main>
    <div id="container-pintura">
      <title>P I N T U R A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/pintura.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <!--ATENÇÂO-->
              <div class="bg"></div> <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="/src/assets/images/art-paint-h.jpg"
            alt
            class="image"
            style="margin-top: 40px"
          />
        </div>
        <h1 class="art-title">Pintura</h1>
        <h2 class="art-subtitle">Tintas, pincéis, lápis e cores. É o melhor que existe.</h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">

      <div class="mySlides">
        <q>A pintura é poesia sem palavras.</q>
        <p class="author">- Voltaire</p>
      </div>

      <div class="mySlides">
        <q>A pintura nunca é prosa. É poesia que se escreve com versos de rima plástica.</q>
        <p class="author">- Picasso</p>
      </div>

      <div class="mySlides">
        <q>A pintura é poesia muda; a poesia, pintura cega.</q>
        <p class="author">- Leonardo da Vinci
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
                <h1 class="text-title-principal">Pintura</h1>
                A pintura refere-se genericamente à técnica de aplicar pigmento em forma pastosa, 
                líquida ou em pó a uma superfície, a fim de colori-la, atribuindo-lhe matizes, tons e texturas.
                Em um sentido mais específico, é a arte de pintar uma superfície, tais como papel, tela, ou 
                uma parede (pintura mural ou afrescos). Devido ao fato de grandes obras de arte, tais como a 
                Mona Lisa e A Última Ceia, do renascentista Leonardo Da Vinci, serem pinturas a óleo, a técnica
                é historicamente considerada uma das mais tradicionais das artes plásticas. Com o desenvolvimento 
                tecnológico dos materiais, outras técnicas tornaram-se igualmente importantes como, por exemplo, 
                a tinta acrílica.
                Diferencia-se do desenho pelo uso dos pigmentos líquidos e do uso constante da cor, 
                enquanto aquele apropria-se principalmente de materiais secos.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Mona Lisa, de Leonardo da Vinci</h1>
                A pintura considerada a obra-prima de Leonardo da Vinci foi iniciada em 1503/1506 e 
                acabou sendo concluída somente em 1517. Apesar de ser uma tela pequena, com apenas 77 cm 
                por 53 cm, Mona Lisa fascina os espectadores com o seu sorriso enigmático. 
                Atualmente o quadro se encontra no museu do Louvre, em Paris.
                Pintada a óleo sobre madeira, a imagem é um símbolo do renascimento francês. 
                Também conhecida como Gioconda, chama a atenção a naturalidade com que a protagonista é representada. 
                A mulher, cuja identidade é até hoje desconhecida, ficou imortalizada naquele que talvez seja 
                o retrato mais celebrado da pintura ocidental.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/leonardo-da-vinci-mona-lisa-0-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
    
      <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">A noite estrelada,van Gogh</h1>
                A noite estrelada foi pintada em 1889. A peça é uma pintura a óleo em tela que mede 73,7 cm × 92,1 cm 
                e se encontra atualmente no MoMA, em Nova Iorque.Internado voluntariamente após decepar a sua própria 
                orelha durante uma crise psicótica, o pintor escolheu a paisagem vista da janela do quarto do hospício 
                de Saint-Rémy-de-Provence como cenário da sua A noite estrelada. O que mais chama a atenção do espectador 
                são as espirais pintadas no céu, um traço que se pode identificar como sendo típico do impressionismo.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/1200px-van-gogh-starry-night-google-art-project-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
          <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title"> A persistência da memória, de Dalí</h1>
                A persistência da memória, criada em 1931 é uma pintura a óleo e o símbolo do surrealismo e 
                 mede cerca de 24 cm × 33 cm. Atualmente se encontra no MoMA, em Nova Iorque.O quadro foi pintado 
                 em apenas algumas horas, enquanto a mulher de Dalí e alguns amigos se divertiam no cinema. 
                 A tela consagrou os relógios derretidos e as formigas, ícones do pintor.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/2012-01-20-15-37-020-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>    
      <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Guernica,de Pablo Picasso</h1>
                O painel pintado a óleo pelo espanhol Pablo Picasso, em 1937, é enorme (349 cm × 776 cm) e tem como 
                tema o bombardeamento ocorrido no dia 26 de abril de 1937, na cidade Guernica, país Basco.
                Apesar da complexidade, o trabalho demorou apenas um mês para ser executado. Guernica se encontra 
                no museu Reina Sofia, em Madrid, Espanha.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/image-content-635182-20170403104358-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Abaporu, de Tarsila do Amaral</h1>
                A obra mais conhecida do universo das artes visuais brasileira é Abaporu. A tela foi pintada por 
                Tarsila do Amaral em 1929 para ser oferecida de presente de aniversário ao seu então marido, 
                o escritor Oswald de Andrade. A imagem é um ícone da fase antropofágica da artista.
                Símbolo do modernismo brasileiro, o quadro, de 85cm x 72cm, curiosamente se encontra exposto no 
                Museu de Arte Latino-Americana de Buenos Aires.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/abaporu-tarsila-do-amaral-jpg-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>  
         <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">O grito, de Munch</h1>
                A imagem representada pelo norueguês Edvard Munch já deve ter cruzado o seu caminho algumas vezes. 
                A peça possui quatro versões, pintadas em tempera, óleo, pastel e litografia. A primeira versão, 
                pintada a óleo, data de 1893, as outras versões foram criadas com técnicas distintas até 1910.
                Um dos quadros de O grito (com 91 cm × 73,5 cm) se encontra na Galeria Nacional de Oslo, na Noruega. 
                Outras duas versões estão no Museu Munch, também na capital norueguesa. A quarta versão foi vendida em 
                leilão na Sotheby’s por mais de US$ 119 milhões.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/854px-edvard-munch-the-scream-google-art-project-cke.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">A última ceia, de Leonardo da Vinci</h1>
                A polêmica A última ceia foi pintada pelo italiano entre 1495 e 1498 e se encontra em Santa Maria 
                delle Grazie, em Milão, na Itália.
                O painel, com 4,6 m por 8,8 m, foi danificado após a abertura de uma porta que custou os pés de Cristo. 
                O imagem, que da testemunha da última reunião de Jesus com seus discípulos, é controversa e amplamente 
                debatida até os dias de hoje. Há quem diga que Maria Madalena se encontra representada ao lado direito de 
                Jesus, por exemplo.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/1280px-leonardo-da-vinci-1452-1519-the-last-supper-1495-1498-cke.jpg"
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
