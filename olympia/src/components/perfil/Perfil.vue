<template>
  <main>
    <div id="container-perfil">
      <title>P E R F I L</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
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
              <a class="tab-link-a estatisticas">Estatísticas</a>
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
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div class="perfil-content">
          <div class="estatisticas-content content-perfil">
            <hr />
          </div>
          <div class="sobre-mim-content content-perfil">
            <hr />
          </div>
          <div class="curtidas-content content-perfil">
            <hr />
          </div>
          <div class="salvos-content content-perfil">
            <hr />
          </div>
          <div class="configuracoes-content content-perfil">
            <hr />
            <h1 class="capas-config">Efeito da capa...</h1>
            <section class="config-section">
              <div class="div-capa">
                <input type="radio" id="control_01" name="select" value="1" checked/>
                <label for="control_01" class="label-capa colorful" >
                  <h2>COLORFUL</h2>
                  <p>
                    Que tal uma animação bem colorida para adoçar seu dia??
                  </p>
                </label>
              </div>
              <div class="div-capa">
                <input type="radio" id="control_02" name="select" value="2" />
                <label class="label-capa black-and-white" for="control_02">
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
