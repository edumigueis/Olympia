<template>
  <main>
    <div id="container-cad-artist">
      <title>C A D A S T R O | A R T I S T A</title>
      <link rel="stylesheet" href="/src/assets/css/cadastro-artist.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />

      <meu-dark-mode></meu-dark-mode>

      <section class="signup">
        <div class="container dark-register-div">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title black-to-white">Cadastre-se</h2>
              <form class="register-form" id="register-form">
                <div class="form-group">
                  <label for="name-art">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-account material-icons-name" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="text"
                    name="name-art"
                    id="name-art"
                    placeholder="Seu Nome"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="artist">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-sign-in" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="text"
                    name="artist"
                    id="artist"
                    placeholder="Seu Nome de Usuário"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email-art">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-email" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="email"
                    name="email"
                    id="email-art"
                    placeholder="Seu Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="tel">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-phone" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Seu Telefone"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="pass_art">
                    <div class="locker-cont gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-lock" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="password"
                    name="pass_art"
                    id="pass_art"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass_art">
                    <div class="is-same-cont gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-lock-outline" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="password"
                    name="re_pass_art"
                    id="re_pass_art"
                    placeholder="Confirme sua senha"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term-artist"
                    class="agree-term dark-register-input"
                  />
                  <label for="agree-term" class="label-agree-term black-to-white">
                    <span>
                      <span></span>
                    </span>Eu concordo com os
                    <a href="#" class="term-service">Termos de Serviço</a>
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup-artist"
                    id="signup-artist"
                    class="form-submit"
                    value="Registrar"
                  />
                </div>
              </form>
            </div>
            <div class="form-group hexcolor">
              <label for="hexcolor-art" style="margin-top:-13px">
                <i class="zmdi dark-register-ico zmdi-palette"></i>
              </label>
              <input
                type="text"
                name="custom_color"
                placeholder="#FFFFFF"
                id="hexcolor-art"
              />
            </div>
            <div class="color-holder" id="call-picker-art" style="display: none"></div>
            <div class="color-picker" id="color-picker-artist" style="display: none"></div>

            <div class="signup-image">
              <figure class="default-prof-artist">
                <img src="/src/assets/images/user-ico.png" alt="sing up image" id="artist-prof-image" />
              </figure>
              <div id="artist-let-img"></div>
              <p class="signup-image-link">Escolher Foto de Perfil</p>
              <img class='bin' src='/src/assets/images/trash-can-icon.png'>
            </div>
          </div>
        </div>
      </section>
      <div id="pick-image-modal-art" class="background-white-to-darkgray" >
        <h3 class="file-input-title black-to-white">Selecione uma Imagem</h3>
        <ul class="file-list">
          <li class="file-item file-item-1">
            <div class="input-file-cont">
              <input type="file" name="file" id="file-artist" class="inputfile" accept=".jpg, .jpeg, .png" />
              <label for="file-artist" class="file-label">Escolher Imagem</label>
            </div>
          </li>
          <li class="file-item">
            <div class="circle">
              <img id="profile-pic-artist" src="/src/assets/images/user-ico.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="ui-widget-overlay"></div>
      <div class="error-modal">
        <div class="warn-image"><img class="warning-pic" src="/src/assets/images/warn-ico.png" /></div>
        <p class="warn"></p>
      </div>
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
        <div class="bubble x11"></div>
        <div class="bubble x12"></div>
        <div class="bubble x13"></div>
        <div class="bubble x14"></div>
        <div class="bubble x15"></div>
        <div class="bubble x16"></div>
        <div class="bubble x17"></div>
        <div class="bubble x18"></div>
        <div class="bubble x19"></div>
        <div class="bubble x20"></div>
      </div>
      <meu-small-footer></meu-small-footer>
    </div>
  </main>
</template>

<script>
import DarkMode from "../shared/dark-mode/Dark-mode.vue";
import SmallFooter from "../shared/small-footer/SmallFooter.vue";
export default {
  components: {
    "meu-dark-mode": DarkMode,
    "meu-small-footer": SmallFooter,
  }
};
</script>
