<template>
  <main>
    <div id="container-cinema">
      <title>C I N E M A</title>
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
        <h1 class="art-title">Cinema</h1>
        <h2 class="art-subtitle">A sétima arte, um mar de sensações</h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container">

      <div class="mySlides">
        <q>"O cinema não tem fronteiras nem limites. É um fluxo constante de sonho."</q>
        <p class="author">- Orson Welles</p>
      </div>

      <div class="mySlides">
        <q>"Para o cinema tudo se torna uma imensa natureza-morta, até os sentimentos dos outros são qualquer coisa de que se pode dispor."</q>
        <p class="author">- Federico Fellini</p>
      </div>

      <div class="mySlides">
        <q>"O cinema não é um ofício. É uma arte. Cinema não é um trabalho de equipe. O diretor está só diante de uma página em branco."</q>
        <p class="author">- Jean-Luc Godard
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

        <div class="container-right black-to-white white-7">
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
    
      <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">E o vento levou</h1>
                A complicada vida de Scarlett O’Hara, seus amores e desilusões em um período que tem a Guerra Civil Americana como pano de fundo. Rhett Butler é um vivido aventureiro que passa pela vida dela, em uma relação de amor e ódio marcada por conflitos já clássicos e cenas inesquecíveis de amor. Praticamente o inventor das telenovelas, devido aos conflitos constantes de emoções manifestadas e o romance como tema – não necessariamente por uma outra pessoa, e sim por uma causa, lugar ou qualquer outra coisa que se refira sentimentalmente ao personagem.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cinemalivre.net/imagens/capas/e_o_vento_levou_1939_o.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
          <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Assim caminha a humanidade</h1>
                Depois que um rancheiro texano aparece para comprar um cavalo premiado em uma fazenda distante, ele acaba se apaixonando pela filha do proprietário, com quem logo se casa. Uma vez de volta aos Texas, sua nova família enfrenta um cowboy rival a ele, em um confronto que se estende por duas gerações.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://br.web.img2.acsta.net/pictures/14/02/06/13/55/182482.jpg"
                />
              </td>
            </tr>
          </table>
        </div>    
      <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Magnólia</h1>
                A história se desenvolve em Los Angeles, nos arredores da rua Magnólia, acompanhando um dia na vida de nove personagens, que moram na mesma área e cujas histórias se cruzam por coincidências do destino. O filme aborda diversos temas polêmicos como vício, suicídio, abuso infantil, e homossexualidade.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://www.cafecomfilme.com.br/media/k2/items/cache/9a9975ed61463a6dc929492ab2b7763b_XL.jpg?t=20170320_031632"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">O poderoso chefão</h1>
                Amplamente considerado um dos melhores filmes de todos os tempos, esse drama da máfia, baseado no romance homônimo de Mario Puzo, concentra-se na poderosa família criminosa ítalo-americana de Don Vito Corleone (Marlon Brando). Quando o filho mais novo de Don, Michael (Al Pacino), se junta com relutância à Máfia, ele se envolve no inevitável ciclo de violência e traição. Embora Michael tente manter um relacionamento normal com sua esposa, Kay (Diane Keaton), ele está mais envolvido nos negócios da família.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://br.web.img3.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left black-to-white white-7" id="contato-div" style="width:20%;">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Contato</h1>
                🖂 cinema@olympia.com<br>
                ☏ 0800 123 0004 
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
