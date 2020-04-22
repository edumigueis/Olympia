<template>
  <main>
    <div id="container-login">
      <title>L O G I N</title>
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
      <meu-small-footer></meu-small-footer>
    </div>
  </main>
</template>

<script>
import DarkMode from "../shared/dark-mode/Dark-mode.vue";
import SmallFooter from "../shared/small-footer/SmallFooter.vue";
export default {
  name: 'register-form',
  methods: {
      login: function () {
        this.$http.post('http://localhost:8080/user/login', {
          password: this.password,
          user: this.user
      }).then(function (response) {
          this.$session.start()
          this.$session.set('jwt', response.body.token)
          Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
          this.$router.push('/#/home')
      }, function (err) {
        console.log('err', err)
      })
    }    
  },
  components: {
    "meu-dark-mode": DarkMode,
    "meu-small-footer": SmallFooter,
  }
};
</script>
