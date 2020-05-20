<template>
  <main>
    <div id="container-feedback">
      <title>F E E D B A C K</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/feedback.css" />
      
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

      <section class="choose-wrapper">
        <h1>Onde está o problema?</h1>
        <div class="wrapper-sec">
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="https://image.flaticon.com/icons/svg/25/25694.svg" />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Feed</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://i.pinimg.com/originals/ff/77/56/ff7756247e080009b8418d80e47c5c91.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Daily Contents</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://image.flaticon.com/icons/png/512/82/82582.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Perfil</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://image.flaticon.com/icons/png/512/16/16036.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Login</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://static.thenounproject.com/png/521193-200.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Conteúdos</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="https://img.icons8.com/all/500/settings.png" />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Configurações</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="/src/assets/images/plus-sign.png" />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Postar</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://static.thenounproject.com/png/17840-200.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Eventos</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png"
                />
              </div>
            </div>
            <div class="flex-part"><h2 class="title">Outro</h2></div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
        </div>
      </section>
      <div class="wrapper-form">
        <svg
          version="1.1"
          id="Layer_1"
          xml:space="preserve"
        >
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
        </svg>
        <div class="frm-wrapper">
        <div class="container">
          <h2 class="title-form">Detalhe o Problema:</h2>
          <form>
            <textarea class="email" placeholder="Detalhes..." />
            <br />
            <label class="file-lb" for='selecao-arquivo'><i class="fa fa-paperclip"></i></label>
            <input type="file" id="selecao-arquivo"/>
          </form>
          <br />
          <div class="btn-cont">
              <input type="submit" class="register" value="Registrar">
          </div>
          
        </div>
        </div>
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
