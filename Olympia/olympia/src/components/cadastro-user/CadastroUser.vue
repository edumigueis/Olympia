<template>
  <main id="page-container-cad-user">
    <div id="container-cad-user">
      <title>C A D A S T R O</title>
      <link rel="stylesheet" href="/src/assets/css/cadastro-user.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />

      <meu-dark-mode></meu-dark-mode>

      <section class="signup">
        <div class="container dark-register-div">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title black-to-white">Cadastre-se</h2>
              <form class="register-form" id="register-form">
                <div class="form-group">
                  <label for="name">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-account material-icons-name" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu Nome"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="user">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-sign-in" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Seu Nome de Usuário"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <div class="gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-email" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <div class="locker-cont gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-lock" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <div class="is-same-cont gray-n-imp">
                    <i class="zmdi dark-register-ico zmdi-lock-outline" style="margin-top: 5.5px"></i>
                    </div>
                  </label>
                  <input
                    class="dark-register-input"
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Confirme sua senha"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
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
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Registrar"
                  />
                </div>
              </form>
            </div>
            <div class="form-group hexcolor">
              <label for="hexcolor" style="margin-top:-13px">
                <i class="zmdi dark-register-ico zmdi-palette"></i>
              </label>
              <input
                type="text"
                name="custom_color"
                placeholder="#FFFFFF"
                id="hexcolor"
              />
            </div>
            <div class="color-holder call-picker" style="display: none"></div>
            <div class="color-picker" id="color-picker" style="display: none">
              
            </div>

            <div class="signup-image">
              <figure class="default-prof-user">
                <img src="/src/assets/images/user-ico.png" alt="sing up image" id="user-prof-image" />
              </figure>
              <div id="user-let-img"></div>
              <p class="signup-image-link">Escolher Foto de Perfil</p>
              <img class='bin' src='/src/assets/images/trash-can-icon.png'>
            </div>
          </div>
        </div>
      </section>
      <div id="pick-image-modal" class="background-white-to-darkgray" >
        <h3 class="file-input-title black-to-white">Selecione uma Imagem</h3>
        <ul class="file-list">
          <li class="file-item file-item-1">
            <div class="input-file-cont">
              <input type="file" name="file" id="file" class="inputfile" accept=".jpg, .jpeg, .png" />
              <label for="file" class="file-label">Escolher Imagem</label>
            </div>
          </li>
          <li class="file-item">
            <div class="circle">
              <img id="profile-pic" src="/src/assets/images/user-ico.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="ui-widget-overlay"></div>
      <div class="error-modal">
        <div class="warn-image"><img class="warning-pic" src="/src/assets/images/warn-ico.png" /></div>
        <P class="warn"></P>
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
