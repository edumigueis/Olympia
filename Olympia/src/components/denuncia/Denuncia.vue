<template>
  <main>
    <div id="container-denuncia">
      <title>D E N U N C I A R</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/denuncia.css" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>
      <div class="wrapper">
        <svg version="1.1" id="Layer_1" xml:space="preserve">
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
        </svg>
        <form id="regForm" class="white-7 cont" action="post">
          <h1 class="black-to-white">Denunciar</h1>
          <!-- One "tab white-7 black-to-white" for each step in the form: -->
          <div class="tab white-7 black-to-white">
            Identificação:
            <p>
              <input
                placeholder="Username de quem deseja denunciar..."
                oninput="this.className = ''"
                name="fname"
                id="username"
                class="input"
              />
            </p>
            <div class="choose">
              <div class="choose-inner">
              <label class="checkbox path">
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <path
                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
                  ></path>
                </svg>
              </label>
              </div>
              <span class="statement black-to-white">Eu desejo receber atualizações do status desta denúncia.</span>
            </div>
          </div>
          <div class="tab white-7 black-to-white">
            Por que você está denunciando esta conta?
            <section class="radio-wrapper">
              <div>
                <input
                  type="radio"
                  id="control_01"
                  name="select"
                  value="1"
                  checked
                />
                <label class="white-2" for="control_01">
                  <h2>É span</h2>
                  <p>
                    A conta publica anúncios excessivos ou aparece de maneira
                    excessiva e suspeita com os mesmos conteúdos.
                  </p>
                </label>
              </div>
              <div>
                <input type="radio" id="control_02" name="select" value="2" />
                <label class="white-2" for="control_02">
                  <h2>Apresenta dados falsos</h2>
                  <p>
                    É fraudulenta, compartilha dados falsos ou não apresenta
                    identidade devida.
                  </p>
                </label>
              </div>
              <div>
                <input type="radio" id="control_03" name="select" value="3" />
                <label class="white-2" for="control_03">
                  <h2>É imprópria</h2>
                  <p>
                    Apresenta conteúdo sensível, ilegal ou apresenta discurso de
                    ódio.
                  </p>
                </label>
              </div>
            </section>
          </div>
          <div class="tab white-7 black-to-white">
            Descição:
            <p>
              <input
                type="text"
                placeholder="Descreva o que aconteceu, por favor."
                oninput="this.className = ''"
                name="desc"
                class="input"
              />
            </p>
          </div>
          <div class="tab white-7 black-to-white">
            <p class="confirmation">
              Clique em confirmar para sua denúncia ser registrada. Ela será
              analizada pelo Olympia, e se for pertinente as ações cabíveis
              serão tomadas. Muito obrigado por ajudar a tornar o Olympia um
              lugar mais amigável, seguro e estimulador da arte.
            </p>
          </div>
          <div style="overflow:auto;">
            <div style="float:right;">
              <button type="button" id="prevBtn">Anterior</button>
              <button type="button" id="nextBtn">Próximo</button>
            </div>
          </div>
          <!-- Circles which indicates the steps of the form: -->
          <div style="text-align:center;margin-top:40px;">
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
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
