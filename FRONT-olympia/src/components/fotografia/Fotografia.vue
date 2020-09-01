<template>
  <main>
    <div id="container-fotografia">
      <title>F O T O G R A F I A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/fotografia.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <!--ATENÇÂO-->
      <div class="bg"></div>
      <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img src="/src/assets/images/art-cam-head.jpg" alt class="image" />
        </div>
        <h1 class="art-title">Fotografia</h1>
        <h2 class="art-subtitle">
          A história que palavras não podem expressar.
        </h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">
          <div class="mySlides">
            <q
              >Fotografia é o retrato de um concavo, de uma falta, de uma
              ausencia</q
            >
            <p class="author">- Clarice Lispector</p>
          </div>

          <div class="mySlides">
            <q
              >A fotografia é uma das poucas coisas que tem poder sobre o tempo:
              ela o paralisa.</q
            >
            <p class="author">- Tumblr</p>
          </div>

          <div class="mySlides">
            <q
              >No fundo a Fotografia é subversiva, não quando aterroriza,
              perturba ou mesmo estigmatiza, mas quando é pensativa.</q
            >
            <p class="author">- Roland Barthes</p>
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
                <h1 class="text-title-principal">fotografia</h1>
                Fotografia (do grego φως [fós] ("luz"), e γραφις [grafis]
                ("estilo", "pincel") ou γραφη grafê, e significa "desenhar com
                luz e contraste"), por definição, é essencialmente a técnica de
                criação de imagens por meio de exposição luminosa, fixando-as em
                uma superfície sensível. A primeira fotografia reconhecida
                remonta ao ano de 1826 e é atribuída ao francês Joseph Nicéphore
                Niépce. Contudo, a invenção da fotografia não é obra de um só
                autor, mas um processo de acúmulo de avanços por parte de muitas
                pessoas, trabalhando, juntas ou em paralelo, ao longo de muitos
                anos. Se por um lado os princípios fundamentais da fotografia se
                estabeleceram há décadas e, desde a introdução do filme
                fotográfico colorido, quase não sofreram mudanças, por outro, os
                avanços tecnológicos têm sistematicamente possibilitado
                melhorias na qualidade das imagens produzidas, agilização das
                etapas do processo de produção e a redução de custos,
                popularizando o uso da fotografia.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">
                  Os Beatles atravessando a Abbey Road (1969)
                </h1>
                Uma das fotografias mais famosas da história foi feita no dia 8
                de agosto de 1969. A fotografia que imortalizou o fotógrafo
                escocês Iain Macmillan foi tirada do lado de fora dos estúdios
                Abbey Road, em Londres. Foram feitas seis fotos. Reza a lenda
                que o fotógrafo só teve dez minutos para clicar os músicos
                atravessando a faixa de pedestres da famosa rua londrina. Lennon
                teria dito: “Vamos tirar logo essa foto e sair daqui, deveríamos
                estar gravando o disco e não posando pra fotos idiotas”.
                McCartney aparece de pés descalços na fotografia, fato que
                alimentou a lenda de que ele estaria morto, vítima de um
                acidente de carro três anos antes.
                <p class="author">Fotografia: Iain Macmillan</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/1a.jpg"
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
                <h1 class="text-title">Einstein mostrando a língua (1951)</h1>
                Einstein acabara de ser homenageado por seu aniversário de 72
                anos. Diante da perseguição dos fotógrafos e repórteres que
                pediam que fizesse uma pose, mostrou a língua para demonstrar
                seu descontentamento com o assédio. Embora essa versão tenha
                sido confirmada pelo fotógrafo, existem outras teorias e
                hipóteses menos críveis, por exemplo, um suposto protesto
                antibomba atômica.
                <p class="author">- Fotografia por Arthur Sasse</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/2a.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Menina afegã (1984)</h1>
                Sharbat Gula tinha 12 anos quando foi fotografada durante uma
                reportagem da “National Geographic” sobre a ocupação soviética
                no Afeganistão. Se tornou uma das fotografias mais conhecidas do
                mundo. Em 2002, o fotógrafo Steve McCurry, autor da fotografia,
                reencontrou Gula, então, com 30 anos, numa região remota do
                Afeganistão. Ela não tinha a menor ideia do impacto que sua foto
                causou na civilização ocidental.
                <p class="author">- Fotografia por Steve McCurry</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/3a.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">O beijo da Times Square (1945)</h1>
                Fotografia imortalizada pela revista “Life”. Durante o anúncio
                do fim da guerra contra o Japão, em 14 de agosto de 1945, o
                fotógrafo Alfred Eisenstaedt registrou um marinheiro beijando
                uma jovem mulher de vestido branco. A mulher foi identificada
                mais tarde, na década de 1970, como Edith Shain. A identidade do
                marinheiro permanece desconhecida e controversa. Mas está é
                apenas uma das versões.
                <p class="author">- Fotografia por Alfred Eisenstaedt</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/4a.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">
                  Che Guevara — Guerrilheiro Heroico (1960)
                </h1>
                Guevara participava de um memorial às vítimas de uma explosão de
                barco que matara 136 pessoas, quando foi fotografado por Alberto
                Korda, em 5 de março de 1960. Embora a autoria seja de Korda, a
                foto foi imortalizada pelo artista irlandês, Jim Fitzpatrick,
                que criou uma estampa em monotipia baseada na foto e a colocou
                em domínio público.
                <p class="author">- Fotografia por Alberto Korda</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/245px-CheHigh.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">
                  Massacre da Praça da Paz Celestial (1989)
                </h1>
                A imagem mais famosa da revolta estudantil chinesa de 1989. Um
                jovem solitário e desarmado invade a Praça da Paz Celestial e
                anonimamente faz parar uma fileira de tanques de guerra. Sua
                identidade e seu paradeiro são desconhecidos até hoje. Em 2000,
                o rebelde desconhecido foi eleito pela revista “Time” como uma
                das pessoas mais influentes do século 20.
                <p class="author">- Fotografia por Jeff Widener</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/6a.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Phan Thi Kim Phúc (1972)</h1>
                Ganhadora do Prêmio Pulitzer em 1973 e a mais famosa fotografia
                de guerra de todos os tempos. Kim Phuc (a garotinha nua) corre
                ao longo de uma estrada perto de Trang Bang, no sul do Vietnã,
                após um ataque aéreo com napalm. Para sobreviver, Kim arrancou a
                roupa em chamas do corpo.
                <p class="author">- Fotografia por Nick Ut</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.revistabula.com/wp/wp-content/uploads/2013/05/7a.jpg"
                />
              </td>
            </tr>
          </table>
        </div>

        <div class="container-left show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Sem título (1993)</h1>
                Kevin Carter disparou, em 1993, no Sudão, a foto que lhe viria a
                custar a vida, paradoxalmente, eternizando o fotógrafo
                sul-africano na galeria dos maiores repórteres fotográficos de
                sempre, com um "frame" icónico, um retrato de uma tragédia que
                não precisa de uma sílaba sequer. Quando fotografou aquela cena,
                em Ayod, no Sudão, em 1993, Kavin Carter terá visto, como quase
                toda a gente, na imagem de um abutre postado atrás de uma
                criança desnutrida, a metáfora perfeita para a fome que
                grassava, e matava, no Sudão.
                <p class="author">- Fotografia por Kavin Carter</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://static.globalnoticias.pt/jn/image.aspx?brand=JN&type=generate&name=medium&id=1789058&source=ng1457439.jpg&t="
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right show-on-scroll black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Dalí Atomicus (1948)</h1>
                O fotógrafo Philippe Halsman e o artista Salvador Dalí 28 vezes
                tentaram alcançar a leveza de Dalí Atomicus. Halsman conheceu
                Dalí e outros artistas do círculo surrealista enquanto ele
                morava em Paris na década de 1930. No final da década de 1940,
                os dois homens começaram a colaborar em uma variedade de
                projetos fotográficos. Dalí Atomicus, talvez a imagem mais
                icônica a surgir dessa colaboração, é um retrato do artista
                inspirado em sua pintura, Leda Atomica (1949), que aparece no
                canto direito da composição - pendurada suspensa no chão como o
                cavalete, cadeira, escada, gatos, água e o próprio Dalí.
                <p class="author">- Fotografia por Philippe Halsman</p>
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.demilked.com/magazine/wp-content/uploads/2016/11/top-100-photos-most-influential-all-time-9.jpg"
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
  beforeCreate() {
    $.ajax({
      url: "https://olympiaserver.ddns.net/",
      type: "GET",
      dataType: "json",
      contentType: "application/json",
      complete: function(jqXHR, status) {
        if (status != "parsererror") {
          document.location.href = "/#/siteoff";
        } else {
          if (window.$cookies.isKey("user_cadastro")) {
            document.location.href = "/#/categorias";
          } else if (!window.$cookies.isKey("user_session")) {
            document.location.href = "/#/login";
          }
        }
      }
    });
  }
};
</script>
