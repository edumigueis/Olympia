<template>
  <main>
    <div id="container-sugestoes">
      <title>S U G E S T Õ E S</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/sugestoes.css">
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
        <h1>Onde deseja sugerir mudanças?</h1>
        <div class="wrapper-sec">
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="https://image.flaticon.com/icons/svg/25/25694.svg" />
              </div>
            </div>
            <div class="flex-part">
              <h2 class="title black-to-white">Feed</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Daily Contents</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Perfil</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Login</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Conteúdos</h2>
            </div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="https://img.icons8.com/all/500/settings.png" />
              </div>
            </div>
            <div class="flex-part">
              <h2 class="title black-to-white">Configurações</h2>
            </div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
          <div class="module">
            <div class="flex-part">
              <div class="img-wp">
                <img src="/src/assets/images/plus-sign.png" />
              </div>
            </div>
            <div class="flex-part">
              <h2 class="title black-to-white">Postar</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Eventos</h2>
            </div>
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
            <div class="flex-part">
              <h2 class="title black-to-white">Outro</h2>
            </div>
            <div class="flex-part"><div class="arrow"></div></div>
          </div>
        </div>
      </section>
      <div class="wrapper-form">
        <div class="return-btn filter-invert"></div>
        <svg version="1.1" id="Layer_1" xml:space="preserve">
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
          <circle class="shape" />
        </svg>
        <div class="frm-wrapper">
          <div class="container white-7">
            <h2 class="title-form black-to-white">Detalhe a Sugestão:</h2>
            <form>
              <textarea class="desc" placeholder="Detalhes..." id="det" />
              <br />
              <label class="file-lb" for="file-input"
                ><i class="black-to-white fa fa-paperclip"></i>
              </label>
              <i class="black-to-white fa fa-close"></i>
              <input type="file" id="file-input" multiple accept="image/*" />
              <br />
              <div class="img-mask"><img id="img-file" src="" /></div>
              <div class="btn-cont">
                <input
                  type="submit"
                  class="register"
                  value="Registrar"
                  id="registrar"
                />
              </div>
            </form>
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

