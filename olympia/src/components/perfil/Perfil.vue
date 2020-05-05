<template>
  <main>
    <div id="container-perfil">
      <title>P E R F I L</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/src/assets/css/perfil.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <div class="container-profile">
        <div class="bg"></div>
        <div class="profile">
          <div class="title-content">
            <h1 class="title">Seu <br />Perfil</h1>
          </div>
          <div class="info-profile white-2 black-to-white">
            <div class="user-pic">
              <img
                src="/src/assets/images/perfil.jpeg"
                alt
                class="img-profile"
              />
            </div>
            <div class="info-user">
              <div class="info-1">
                <h1 class="name-user">José Marques Costa</h1>
                <h2 class="user">@jose.costa</h2>
                <div class="info-estatisticas">
                  <p class="seguindo">1.2k seguindo</p>
                  <p class="seguidores">53.9k seguidores</p>
                  <p class="publicacoes">13 publicações</p>
                </div>
              </div>
              <div class="info-2">
                <a class="link-ico"
                  ><img src="/src/assets/images/edit.png" class="img-ico"
                /></a>
              </div>
            </div>
          </div>
          <main ontouchstart class="tab-bar">
            <nav class="tab-link">
              <a class="tab-link-a sobre-mim">Sobre mim</a>
              <a class="tab-link-a curtidas">Curtidas</a>
              <a class="tab-link-a salvos">Salvos</a>
              <a class="tab-link-a configuracoes">Configurações</a>
              <hr />
            </nav>
          </main>
        </div>
        <div class="container-wrap">
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7)"
                  class="fill fill-1"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                  class="fill fill-2"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                  class="fill fill-3"
                />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" class="fill fill-4"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="perfil-content white-4">
          <div class="sobre-mim-content content-perfil white-6 black-to-white">
            <hr />
            <h1 class="title-content-config black-to-white">
              Mais sobre mim...
            </h1>
            <div class="div-info-perfil">
              <p class="bio"><b>Uma frase que me descreva:</b> ekdiejrjghtjrjfuiejfkfjrjfjrjrjjrrjjrjrjrrf</p>
              <p class="biografia"><b>Mais um pouco de mim...</b> My name is Karl Kristiansen. I was born in Connecticut. I spent most of my childhood in Stonington, a small, seaside town on the Connecticut-Rhode Island border. My father was a commercial fisherman and since he was from Norway, life on the sea was a natural for him. My mother was a housewife. We were the typical '50's family. Much of my childhood was spent around the docks and fishing boats of Stonington. In 1954, my father and a few of the other fishermen decided to try their luck at shrimping in Brownsville, Texas. After a few months, and very little success, we returned to Stonington. Most of the Stonington boats were selling their catches in New Bedford, MA, so it was no surprise that in 1959, we packed up and moved.New Bedford remained my home through my secondary school years. I graduated from New Bedford High School in 1965. I had the opportunity to go to college, but I opted for a hitch in the Navy. If you recall, at that time, you only had a few choices: go to college, wait to be drafted, enlist or After an exciting ten weeks at NTCkes and a couple of weeks leave, I flew to Subic Bay in the Philippines, to catch my ship, the USS Mansfield DD-728. Our main mission was p
              </p> 
              <button class="alterar btnPerfil">Alterar biografia</button>
            </div>
            <h1 class="title-content-config black-to-white">
              Suas publicações...
            </h1>
            <div class="div-scroll">

            </div>
          </div>
          <div class="curtidas-content content-perfil white-6 black-to-white">
            <hr />
            <h1 class="title-content-config black-to-white">
              Confira as suas curtidas...
            </h1>
            <div class="div-scroll">
              
            </div>
          </div>
          <div class="salvos-content content-perfil white-6 black-to-white">
            <hr />
            <h1 class="title-content-config black-to-white">
              Publicações salvas... (só você pode ver isto)
            </h1>
            <div class="div-scroll">
              
            </div>
          </div>
          <div class="configuracoes-content content-perfil white-6 black-to-white">
            <hr />
            <h1 class="title-content-config black-to-white">Mude o efeito da capa...</h1>
            <section class="config-section">
              <div class="div-capa">
                <input
                  type="radio"
                  id="control_01"
                  name="select"
                  value="1"
                  checked
                />
                <label for="control_01" class="label-capa colorful">
                  <h2>COLORFUL</h2>
                  <p>
                    Que tal uma animação bem colorida para adoçar seu dia??
                  </p>
                </label>
              </div>
              <div class="div-capa black-and-white-capa">
                <input type="radio" id="control_02" name="select" value="2" />
                <label class="label-capa" for="control_02">
                  <h2>B&W</h2>
                  <p>
                    Ou, então, em preto e branco?
                  </p>
                </label>
              </div>
              <div class="div-capa">
                <input type="radio" id="control_03" name="select" value="3" />
                <label class="label-capa black" for="control_03">
                  <h2>BLACK</h2>
                  <p>
                    Tá, então vamos no pretinho básico.
                  </p>
                </label>
              </div>
            </section>
            <div class="btnsPerfil">
              <button class="apagar btnPerfil">Apagar conta</button>
              <button class="sair btnPerfil">Sair</button>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
        <span class="close-mod">&times;</span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
        <meu-mouse></meu-mouse>
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
