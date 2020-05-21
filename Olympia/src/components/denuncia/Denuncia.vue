<template>
  <main>
    <div id="container-denuncia">
      <title>S U G E S T Õ E S</title>
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

      <form id="regForm" action="/action_page.php">
        <h1>Denunciar</h1>
        <!-- One "tab" for each step in the form: -->
        <div class="tab">
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
          <p>
            <input
              placeholder="Nome de quem deseja denunciar..."
              oninput="this.className = ''"
              name="lname"
            />
          </p>
        </div>
        <div class="tab">
          Por que você está denunciando essa publicação?
          <section class="radio-wrapper">
            <div>
              <input
                type="radio"
                id="control_01"
                name="select"
                value="1"
                checked
              />
              <label for="control_01">
                <h2>É span</h2>
                <p>
                  A conta publica anúncios excessivos ou aparece de maneira
                  excessiva e suspeita com os mesmos conteúdos.
                </p>
              </label>
            </div>
            <div>
              <input type="radio" id="control_02" name="select" value="2" />
              <label for="control_02">
                <h2>Apresenta dados falsos</h2>
                <p>
                  É fraudulenta, compartilha dados falsos ou não apresenta
                  identidade devida.
                </p>
              </label>
            </div>
            <div>
              <input type="radio" id="control_03" name="select" value="3" />
              <label for="control_03">
                <h2>É imprópria</h2>
                <p>
                  Apresenta conteúdo sensível, ilegal ou apresenta discurso de
                  ódio.
                </p>
              </label>
            </div>
          </section>
        </div>
        <div class="tab">
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
        <div class="tab">
          <p class="confirmation">
            Clique em confirmar para sua denúncia ser registrada. Ela será
            analizada pelo Olympia, e se for pertinente as ações cabíveis serão
            tomadas. Muito obrigado por ajudar a tornar o Olympia um lugar mais
            amigável, seguro e estimulador da arte.
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
