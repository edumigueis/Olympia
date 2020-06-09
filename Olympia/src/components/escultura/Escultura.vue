<template>
  <main>
    <div id="container-escultura">
      <title>E S C U L T U R A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/escultura.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <!--ATENÇÂO-->
      <div class="bg"></div>
      <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img src="/src/assets/images/sculpture-bg.jpg" alt class="image" />
        </div>
        <h1 class="art-title">Escultura</h1>
        <h2 class="art-subtitle">
          A quarta arte, representação esculpida dos sentimentos
        </h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">
          <div class="mySlides">
            <q>Eu vi o anjo no mármore e esculpi até que o libertei.</q>
            <p class="author">- Michelangelo</p>
          </div>

          <div class="mySlides">
            <q
              >A educação é para a alma o que a escultura é para um bloco de
              mármore.</q
            >
            <p class="author">- Joseph Addison</p>
          </div>

          <div class="mySlides">
            <q>O valor da escultura impugna a beleza singela da alma.</q>
            <p class="author">- Leandro Langone</p>
          </div>

          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <a class="next" onclick="plusSlides(1)">❯</a>
        </div>

        <div class="dot-container">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-principal">
                <h1 class="text-title-principal">Escultura</h1>
                Escultura é uma arte que representa ou ilustra imagens plásticas
                em relevo total ou parcial. Existem várias técnicas de trabalhar
                os materiais, como a cinzelação, a fundição, a moldagem ou a
                aglomeração de partículas para a criação de um objeto. Vários
                materiais se prestam a esta arte, uns mais perenes como o bronze
                ou o mármore, outros mais fáceis de trabalhar, como a argila, a
                cera ou a madeira. Embora possam ser utilizadas para representar
                qualquer coisa, ou até coisa nenhuma, tradicionalmente o
                objetivo maior foi sempre representar o corpo humano, ou a
                divindade numa forma antropomórfica. É considerada a quarta das
                artes clássicas.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Vitória de Samotrácia</h1>
                A Vitória de Samotrácia, também conhecida como Nice de
                Samotrácia, é uma escultura que representa a deusa grega Nice
                (em grego Νίκη, Níkē ou Niké – "Vitória"), cujos pedaços foram
                descobertos em 1863 nas ruínas do Santuário dos grandes deuses
                de Samotrácia. Em grego, o seu nome é Níkē tes Samothrakes (Νίκη
                της Σαμοθράκη). Fazia parte de uma fonte, com a forma de proa de
                embarcação, em pedra calcária, doada ao santuário provavelmente
                pela cidade de Rodes. Ocupa lugar de destaque numa escadaria do
                Museu do Louvre, em Paris.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg/226px-Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg"
                />
              </td>
            </tr>
          </table>
        </div>

        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Vênus de Milo</h1>
                A Vênus de Milo (pt-BR) ou Vénus de Milo (pt) é uma estátua da
                Grécia Antiga pertencente ao acervo do Museu do Louvre, situado
                em Paris, França. A história de sua descoberta em 1820 na ilha
                de Milo, então parte do Império Otomano, e a forma como perdeu
                os braços foram narradas pelas fontes primitivas em versões
                contraditórias que nunca puderam ser de todo esclarecidas, mas
                depois de sua aquisição pela França foi imediatamente exposta no
                Louvre, oficialmente como uma obra-prima da prestigiosa geração
                clássica e atribuída ao círculo de Praxíteles, tornando-se uma
                celebridade instantânea e um motivo de orgulho nacionalista. Mas
                logo se criou uma polêmica, pois segundo alguns eruditos havia
                evidências para se acreditar que de fato fora produzida no
                período helenístico, na época desprezado como uma fase decadente
                na tradição artística grega, e esta possibilidade não
                interessava politicamente ao governo francês. O debate se
                estendeu por muito tempo, mas mesmo assim seu valor estético não
                foi posto em séria dúvida, sendo elogiada em altos termos por
                muitos artistas e intelectuais e mesmo pelo público leigo. Foi
                copiada muitas vezes e divulgada em gravuras e outros meios de
                larga circulação ao longo de todo o século XIX.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Front_views_of_the_Venus_de_Milo.jpg/250px-Front_views_of_the_Venus_de_Milo.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">O Pensador</h1>
                O Pensador (francês: Le Penseur) é uma das mais famosas
                esculturas de bronze do escultor francês Auguste Rodin. Retrata
                um homem em meditação soberba, lutando com uma poderosa força
                interna. A peça era parte de uma comissão do Museu de Arte
                Decorativa em Paris para criar um portal monumental baseada na
                Divina Comédia, de Dante Alighieri. Cada uma das estátuas na
                peça representavam um dos personagens principais do poema épico.
                O Pensador originalmente procurava retratar Dante em frente dos
                Portões do Inferno, ponderando seu grande poema. A escultura
                está nua porque Rodin queria uma figura heroica à la
                Michelangelo para representar o pensamento assim como a poesia.
                A primeira estátua (O Pensador) em escala maior foi terminada em
                1902, mas não foi apresentada ao público até 1904. Tornou-se
                propriedade da cidade de Paris e foi colocada em frente do
                Panteão em 1906. Em 1922, contudo, foi levada para o Hotel
                Biron, transformado no Musée Rodin. Mais de vinte cópias da
                escultura estão em museus em volta do mundo.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Paris_2010_-_Le_Penseur.jpg/250px-Paris_2010_-_Le_Penseur.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">David</h1>
                David ou Davi é uma das esculturas mais famosas do artista
                renascentista Michelangelo. O trabalho retrata o herói bíblico
                com realismo anatômico impressionante, sendo considerada uma das
                mais importantes obras do Renascimento. A escultura encontra-se
                em Florença, Itália, cidade que originalmente encomendou a obra.
                A escultura possui 5,17 metros de altura e representa o herói
                bíblico David, um dos personagens mais frequentes na arte
                florentina. Originalmente encomendada como parte de uma série de
                outras estátuas de profetas e heróis bíblicos, David estava
                cotado para decorar uma das fachadas de Santa Maria del Fiore.
                No entanto, após sua conclusão, a escultura foi posicionada em
                frente ao Palazzo della Signoria, sede da governadoria de
                Florença, onde foi revelada ao público oficialmente em 8 de
                setembro de 1504. Por conta da natureza heroica representada, a
                estátua simbolizou o sentimento de liberdades civis que dominava
                a República de Florença. Os olhos de David, com semblante sério
                e cauteloso, estavam posicionados em direção a Roma. Em 1873, a
                escultura foi transferida para o interior da Galeria da Academia
                de Belas Artes enquanto a praça pública recebeu uma réplica em
                seu lugar.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="data:image/jpeg;base64,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"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Os 12 profetas</h1>
                A série de 12 profetas esculpidos em pedra-sabão, na cidade de
                Congonhas, em Minas Gerais, é uma das mais completas da tradição
                cristã em todo mundo. De autoria do escultor e arquiteto
                Francisco Lisboa, o Aleijadinho, o conjunto fica instalado em
                frente à igreja do Senhor Bom Jesus de Matosinhos, no alto de um
                morro. Principal artista do período colonial brasileiro,
                Aleijadinho realizou este trabalho entre 1796 e 1805, junto com
                as outras obras do Santuário de Congonhas - as seis capelas dos
                Passos da Paixão e os projetos de arquitetura e ornamentação da
                igreja. A teologia cristã fixa em 16 o número de profetas, que
                resulta da soma dos 12 apóstolos e quatro evangelistas. São
                quatro profetas maiores e oito menores, selecionados na ordem do
                cânon bíblico. Os quatro profetas maiores, assim chamados pela
                maior quantidade de textos proféticos escritos, correspondem aos
                evangelistas Isaías, Jeremias, Ezequiel e Daniel.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Congonhas_sanctuary_of_Bom_Jesus_statues_1.jpg/240px-Congonhas_sanctuary_of_Bom_Jesus_statues_1.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Maman</h1>
                Maman (1999) é uma escultura em bronze, aço inoxidável e mármore
                da artista Louise Bourgeois. A escultura, que representa uma
                aranha, está entre as maiores do mundo, medindo mais de 30 pés
                de altura e 33 pés de largura (927 x 891 x 1024 cm). Inclui
                um saco contendo 32 ovos de mármore e seu abdômen e tórax são
                feitos de bronze com nervuras. O título é a familiar palavra
                francesa para Mãe (semelhante a Mamãe). A escultura foi criada
                em 1999 por Bourgeois como parte de sua comissão inaugural da
                The Unilever Series (2000), no Turbine Hall da Tate Modern em
                Londres. Este original foi criado em aço, com uma edição de
                seis peças fundidas subsequentes em bronze.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Giant_spider_strikes_again%21.jpg/800px-Giant_spider_strikes_again%21.jpg"
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
  },
  beforeCreate(){
    if (window.$cookies.isKey("user_cadastro")) {
      document.location.href = "/#/categorias";
    } else if (!window.$cookies.isKey("user_session")) {
      document.location.href = "/#/login";
    }
  }
};
</script>
