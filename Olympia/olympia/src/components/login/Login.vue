<template>
  <main id="page-container-cad-user">
    <div id="container-cad-user">
      <title>C A D A S T R O</title>
      <link rel="stylesheet" href="/src/assets/css/login.css" />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />

      <meu-dark-mode></meu-dark-mode>

      <section class="signup">
        <div class="container dark-register-div">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title black-to-white">Faça Login</h2>
              <form class="register-form" id="register-form">
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
                    placeholder="Seu Nome de Usuário ou Email"
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
                    name="password"
                    id="password"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="login"
                    id="login"
                    class="form-submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>    
          </div>
        </div>
      </section>
      <canvas id=c></canvas>
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
