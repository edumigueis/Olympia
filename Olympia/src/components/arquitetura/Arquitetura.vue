<template>
  <main>
    <div id="container-arquitetura">
      <title>A R Q U I T E T U R A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/arquitetura.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <!--ATENÇÂO-->
              <div class="bg"></div> <!--BACKGROUND-->
      <div style="position:relative">
        <div class="image-container">
          <img
            src="/src/assets/images/arch-bg.jpg"
            alt
            class="image"
          />
        </div>
        <h1 class="art-title">Arquitetura</h1>
        <h2 class="art-subtitle">Arquitetura é uma arte visual e as obras falam por si mesmas.</h2>
      </div>

      <div id="corpo">
        <div class="slideshow-container dark-slideshow">

      <div class="mySlides">
        <q>"A arquitetura é o jogo sábio, correto e magnífico dos volumes dispostos sob a luz."</q>
        <p class="author">- Le Corbusier</p>
      </div>

      <div class="mySlides">
        <q>"A felicidade é como encontrar o belo na arquitetura: não esta onde procuramos e só encontramos quando somos humildes o suficente pra entender que a simplicidade é o caminho."</q>
        <p class="author">- Sú Franke.</p>
      </div>

      <div class="mySlides">
        <q>"A arquitetura é o engenho na insônia do poeta."</q>
        <p class="author">- Brenon Salvador
    
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
                <h1 class="text-title-principal">Arquitetura</h1>
               Arquitetura refere-se a toda construção e modelagem artificial do ambiente físico, incluindo seu processo
               de projeto e o produto deste, sendo a palavra também usada para definir os estilos e métodos de projeto das
               construções de uma época. Em outras áreas, como, por exemplo, ciência da computação, o termo arquitetura se
               refere à estrutura geral de um sistema, sendo como um sinônimo de algo que projetado ou a forma como 
               funciona.O interior do Panteão, obra icônica da arquitetura romana que inovou nas técnicas construtivas
               e resistiu ao tempo.O prédio da Fundação Iberê Camargo, projetado por Álvaro Siza, é um exemplo de 
               arquitetura contemporânea.A principal aplicação da palavra se refere ao projeto de edifícios pela 
               humanidade, uma área de atuação multidisciplinar que trabalha entre arte e ciência e também engloba 
               o projeto de paisagens, cidades, interiores, móveis e objetos individuais - áreas como paisagismo, 
               urbanismo, design industrial e planejamento regional estão, assim, diretamente relacionados com a 
               arquitetura, sendo muitas vezes ensinados junto com esta em escolas. Desde o Renascimento, a arquitetura 
               é considerada uma das artes plásticas. Sociologia e filosofia também estão presentes, com tendências como 
               racionalismo, construtivismo e fenomenologia sendo parte importante da história e das teorias da arquitetura.
              O trabalho do profissional, chamado arquiteto ou arquiteta, envolve, portanto, toda a escala da vida humana, 
              desde a manual até a urbana.
              </td>
            </tr>
          </table>
        </div>

        <!--<img class="linha" src="https://img.pngio.com/black-line-png-just-pink-about-it-black-line-png-900_150.png"/>-->

        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title"> Museu Guggenheim de Nova York</h1>
                O Guggenheim se trata de uma das grandes obras de arquitetura, um exemplar valioso do movimento neo-expressionista, 
                surgido nos anos oitenta.
                Ele foi projetado por Frank Lloyd Wright, um pouco antes de sua morte.
                Internamente, apresenta um amplo e fluido espaço.
                É repleto de rampas em espiral e inundado por luz natural, proveniente de uma belíssima cúpula na cobertura do edifício.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/05/obras-de-arquitetura-famosas-guggenheim-nova-iorque-768x493.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
    
      <div class="container-left black-to-white white-7">
          <table> <!--TABELA PERMETE UMA BOA RESPONSIVIDADE PELO VERTICAL-ALIGN NO CSS-->
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Museu Guggenheim de Bilbao</h1>
               Outro Museu Guggenheim que está na lista das obras de arquitetura famosas é o de Bilbao, na Espanha.
               O edifício escultural projetado por Frank Gehry possui formas que parecem desafiar a gravidade e a lógica.
               As folhas brilhantes de metal aplicadas em sua fachada remetem a uma grande embarcação ancorada no Rio Nervión.
               Seu volume desconstrutivista se destaca na paisagem e encanta os espectadores.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/05/obras-de-arquitetura-famosas-guggenheim-bilbao-768x462.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
          <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Ópera de Sydney</h1>
                A Ópera de Sydney também é considerada como uma das obras de arquitetura famosas.
                Seu design foi bastante inovador para o século XX.
                Projeto de Jorn Utzon, o edifício é composto de três conchas interligadas que servem de cobertura para as salas de espetáculos, além de outras instalações.
                Depois de mais de quarenta anos de funcionamento, essa grande obra se tornou símbolo da nação australiana.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/05/obras-de-arquitetura-famosas-opera-de-sydney.jpg"
                />
              </td>
            </tr>
          </table>
        </div>    
      <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Templo de Lótus, Nova Deli</h1>
               Agora, de todas as construções famosas desta lista, a Lótus indiana poder ser, de longe, uma das mais belas.
               O templo foi projetado pelo arquiteto Fariborz Sahba.
               Trata-se de um templo erguido para uma religião monoteísta chamada de Fé bahá’í, que prega a união espiritual.
               A ampla sala central possui nove acessos.
               Eles simbolizam, justamente, a possibilidade da junção harmoniosa de pessoas de diferentes crenças por um mesmo propósito: o da paz.           
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/05/obras-de-arquitetura-famosas-templo-de-lotus.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Museu do Amanhã</h1>
                Concebido como um dos ícones arquitetônicos do Porto Maravilha, projeto de requalificação da região 
                portuária do Rio de Janeiro, 
                o Museu do Amanhã ocupa 15 mil metros quadrados.
                Sua forma longilínea, inspirada nas bromélias do Jardim Botânico, foi projetada de maneira a se integrar
                à paisagem ao redor e, especialmente, deixar visível o Mosteiro de São Bento, um dos mais importantes 
                conjuntos barrocos do país. 
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://museudoamanha.org.br/sites/default/files/Calatrava_1280x800_MdA-ByronPrujansky.jpg"
                />
              </td>
            </tr>
          </table>
        </div>  
        <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">MASP</h1>
               O edifício do Museu de Arte de São Paulo (Masp) é de autoria da arquiteta ítalo-brasileira Lina Bo Bardi 
               (1914-1992). Localizado na Avenida Paulista, em São Paulo, o projeto da sede tem início em 1957 e, 
               inaugurado mais de uma década depois, em 7 de novembro de 1968. Ocupa o terreno do antigo Clube Belvedere
              Trianon (1916), local de encontro da elite paulistana e sede da 1ª Bienal de Arte de São Paulo (1951). 
              Sua demolição ocorre em 1953 para dar lugar a uma edificação permanente destinada à arte.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/MASP_Brazil.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-right black-to-white white-7">
          <table>
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Museu de Arte Contemporânea de Niterói</h1>
               Um único cilindro surge numa ponta da Baía da Guanabara. Dele desabrocha em flor o edifício branco, circular, 
               embelezando a natureza verde. Um espelho d’água dá continuidade visual ao mar. E o museu que de longe parecia 
               brotar da terra, surge em verdade do mar.
               A forma circular do museu, com 16 metros de altura, juntamente com grandes vãos, resultou em uma solução estrutural
              essencialmente radial, dividida em seis setores. A grande rampa de concreto exterior leva os visitantes, através 
              de 98 metros de espaço livre, até as entradas aos andares superiores.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://i.ytimg.com/vi/yj7fXHgUTrc/maxresdefault.jpg"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="container-left black-to-white white-7">
          <table> 
            <tr>
              <td class="texto-linha">
                <h1 class="text-title">Ópera de Arame, Curitiba</h1>
              A região onde está situada a Ópera de Arame era, de fato, uma pedreira, que pertencia à família Gava. A região, que estava bastante encoberta pela vegetação, foi descoberta por um assessor.

Assim que visitaram o espaço, surgiu na equipe a ideia de projetar um edifício transparente, que fosse capaz de trazer o lado de fora para dentro, como se a decoração das paredes fosse a própria natureza ao redor.
Com uma estrutura circular, o objetivo maior era que o edifício não entrasse em conflito com a paisagem.

O projeto do edifício ganhou corpo durante o mês de setembro de 1991. A construção da Ópera de Arame foi feita a partir de vidros, estruturas metálicas e tubos de aço.
              </td>
              <td class="td-imagem">
                <img
                  class="imagem"
                  margin-right:100px
                  src="https://cdn.culturagenial.com/imagens/curitiba-opera-de-arame3-cke.jpg"
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
