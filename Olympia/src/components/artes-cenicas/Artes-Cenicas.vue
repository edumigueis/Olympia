<template>
  <main>
    <div id="container-artes-cenicas">
      <title>A R T E S C E N I C A S</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/artes-cenicas.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <!--ATENÇÂO-->
              <div class="bg"></div> <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt
            class="image"
          />
        </div>
        <h1 class="art-title">Artes Cênicas</h1>
        <h2 class="art-subtitle">O amor ao movimento, à dinâmica e às ideias.</h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">

        <div class="mySlides">
        <q>"A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente, antes que a cortina se feche e a peça termine sem aplausos."</q>
        <p class="author">- Desconhecido</p>
      </div>
      <div class="mySlides">
        <q>"O teatro é o primeiro soro que o homem inventou para se proteger da doença da angústia."</q>
        <p class="author">- Jean Barrault</p>
      </div>

      <div class="mySlides">
        <q>"A dança: uma expressão perpendicular de um desejo horizontal."</q>
        <p class="author">- George Bernard Shaw
    </p>
      </div>

      <div class="mySlides">
        <q>"O mundo já caiu, só me resta dançar sobre os destroços."</q>
        <p class="author">- Clarice Lispector
    </p>
      </div>

      <a class="prev" onclick="plusSlides(-1)">❮</a>
      <a class="next" onclick="plusSlides(1)">❯</a>

      </div>

<div class="dot-container">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
</div>
        <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-principal">
                <h1 class="text-title-principal">Teatro</h1>
                Teatro, do grego θέατρον (théatron), é uma forma de arte em que um ator ou conjunto de atores, 
                interpreta uma história ou atividades para o público em um determinado lugar. Com o auxílio de 
                dramaturgos ou de situações improvisadas, de diretores e técnicos, o espetáculo tem como objetivo 
                apresentar uma situação e despertar sentimentos no público. Também denomina-se teatro o edifício 
                onde se desenvolve esta forma de arte, podendo também ser local de apresentações para a dança, 
                recitais, etc.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-principal">
                <h1 class="text-title-principal">dança</h1>
                A dança é uma das três principais artes cênicas da antiguidade, ao lado do teatro e da música. 
                No antigo Egito já se realizavam as chamadas danças astro-teológicas em homenagem a Osíris. Na Grécia, 
                a dança era frequentemente vinculada aos jogos, em especial aos olímpicos.[1] A dança caracteriza-se 
                pelo uso do corpo seguindo movimentos previamente estabelecidos (coreografia) ou improvisados 
                (dança livre).[2] Na maior parte dos casos, a dança, com passos ritmados ao som e compasso de música 
                e envolve a expressão de sentimentos potenciados por ela.
                A dança pode existir como manifestação artística ou como forma de divertimento ou cerimónia.
                Atualmente, a dança manifesta-se nas ruas, em eventos como vídeo-clip ou em qualquer outro ambiente 
                em que for contextualizado o propósito artístico.
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
    
      <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Romeu e Julieta</h1>
                Romeu e Julieta (no original em inglês Romeo and Juliet) é uma tragédia escrita entre 1591 e 1595, 
                nos primórdios da carreira literária de William Shakespeare, sobre dois adolescentes cuja morte acaba 
                unindo suas famílias, outrora em pé de guerra. A peça ficou entre as mais populares na época de 
                Shakespeare e, ao lado de Hamlet, é uma das suas obras mais levadas aos palcos do mundo inteiro. 
                Hoje, o relacionamento dos dois jovens é considerado como o arquétipo do amor juvenil.
                Romeu e Julieta pertence a uma tradição de romances trágicos que remonta à antiguidade. 
                Seu enredo é baseado em um conto da Itália, traduzido em versos como A Trágica História de Romeu 
                e Julieta por Arthur Brooke em 1562, e retomado em prosa como Palácio do Prazer por William Painter
                em 1582. Shakespeare baseou-se em ambos, mas reforçou a ação de personagens secundários, 
                especialmente Mercúcio e Páris, a fim de expandir o enredo. O texto foi publicado pela primeira 
                vez em um quarto[a] de 1597, mas essa versão foi considerada como de péssima qualidade, o que 
                estimulou muitas outras edições posteriores que trouxeram consonância com o texto original shakespeariano.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20070205000653%21Romeo_and_juliet_brown.jpg/200px-20070205000653%21Romeo_and_juliet_brown.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
          <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Sonho de uma noite de verão</h1>
                Sonho de uma Noite de Verão (no original: A Midsummer Night's Dream) é uma peça teatral da autoria de 
                William Shakespeare, uma comédia escrita em meados da década de 1590.Não se sabe ao certo quando a
                peça foi escrita e apresentada ao público pela primeira vez, mas crê-se que terá sido entre 1594 e 1596. 
                Alguns autores defendem que a peça possa ter sido escrita para o casamento de Sir Thomas Berkeley e 
                Elizabeth Carey, em Fevereiro de 1596.Não existe uma fonte direta que tenha servido de inspiração 
                para a peça, ainda que se possam encontrar elementos relacionados com a mitologia greco-romana e 
                respectiva literatura clássica, assim como a história de "romeo and juliet". Por exemplo, a história 
                de Píramo e Tisbe é contada por Ovídio, nas suas Metamorfoses, assim como a transformação de Fundilhos 
                em burro se pode relacionar com O asno de ouro de Apuleio. Pensa-se que Shakespeare tenha escrito o 
                "Sonho de uma noite de verão" sensivelmente ao mesmo tempo que o Romeu e Julieta e, de facto, existem 
                muitos pontos de contacto entre as histórias: Egeu quer casar Hérmia à força com Demétrio, assim como 
                Píramo e Tisbe acabam mortos por questões de amor, ainda que numa perspectiva cômica.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="src\assets\images\romeuejulieta.jpg"
                />
              </td>
            </tr>
          </table>
        </div>    
      <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Quebra nozes</h1>
                Este espetáculo é um dos três balés criados pelo compositor Piotr Ilitch Tchaikovsky. 
                O enredo transcorre no século XIX, e tem como cenário a Europa Oriental. Ele foi baseado em um 
                fragmento do conto de E. T. A. Hoffmann, conhecido como O Quebra-nozes e o Rei dos Camundongos, 
                interpretado no idioma francês pelo autor Alexandre Dumas.Ele foi levado aos palcos no dia 18 de 
                dezembro de 1892, no Teatro Mariinsky,em São Petersburgo, na Rússia. A história se passa durante o Natal.
                Jans Stahlbaum, prefeito da cidade e também um respeitado médico, oferece aos amigos e familiares uma 
                inesquecível festividade natalina.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://naspontas.com.br/wp-content/uploads/2017/11/49354-the-nutcracker-francesca-hayward-as-clara-croh-2015-photographed-by-tristram-kenton-510-510x550.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">O lago dos Cisnes</h1>
                O Lago dos Cisnes (em russo: Лебединое Озеро, Lebedinoye Ozero) é um ballet dramático em quatro 
                atos do compositor russo Piotr Ilitch Tchaikovski e com o libreto de Vladimir Begitchev e Vasily Geltzer. 
                A sua estreia ocorreu no Teatro Bolshoi em Moscou (Moscovo) no dia 20 de fevereiro de 1877, sendo um fracasso 
                não por causa da música , mas sim pela má interpretação da orquestra e dos bailarinos, assim como a 
                coreografia e a cenografia. O balé foi encomendado pelo Teatro Bolshoi em 1876 e o compositor começou 
                logo a escrever.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Swanlakemordkin.jpg/250px-Swanlakemordkin.jpg"
                />
              </td>
            </tr>
          </table>
        </div>  
        <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Coppélia</h1>
               Coppélia é um balé cómico-sentimental com coreografia original de Arthur Saint-Léon, com libreto de 
               Charles Nuitter, e música de Léo Delibes. Baseia-se num conto fantástico de E.T.A. Hoffmann intitulado 
               "Der Sandmann" ("O homem da areia") publicado em 1815. O balé estreou a 25 de Maio de 1870 na Ópera de 
               Paris, com Giuseppina Bozzachi no papel principal. Um primeiro momento de sucesso foi interrompido pela 
               Guerra Franco-Prussiana e pelo cerco de Paris, tornando-se, posteriormente, o balé mais representado na 
               Opera Garnier. Foi o primeiro balé clássico a incluir danças folclóricas como czardas, mazurcas e polcas,
                dando cor local e realismo à ação.1 No Brasil estreou no Theatro Municipal do Rio de Janeiro em 9 de maio
                de 1918, apresentado pela companhia de Ana Pavlova.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://i2.wp.com/www.gramilano.com/wp-content/uploads/2019/11/Coppelia.-Francesca-Hayward-as-Swanilda-and-Gary-Avis-as-Dr-Coppelius.-c-ROH-2019.-Photographed-by-Bill-Cooper.-1.jpg?ssl=1"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Esmeralda</h1>
               La Esmeralda é um balé em três atos, cinco cenas, inspiradas por Notre Dame de Paris de Victor Hugo, 
               originalmente coreografado por Jules Perrot , com música de Cesare Pugni e design por William Grieve 
               (cenário), D. Sloman (máquinas), Mme. Copere (figurinos). Ele foi apresentado pela primeira vez pelo 
               Ballet do Teatro de Sua Majestade , de Londres em 09 de março de 1844 com a bailarina Carlotta Grisi 
               como Esmeralda, Jules Perrot como Gringoire, Arthur Saint-Leon como Phoebus, Adelaide Frassi como Fleur 
               de Lys, e Louis Antoine Coulon como Quasimodo.

              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://i.pinimg.com/originals/6a/b8/e8/6ab8e874180c49555ba35e32b2139508.jpg"
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
