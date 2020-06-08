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
                      <i
                        class="zmdi dark-register-ico zmdi-sign-in"
                        style="margin-top: 5.5px"
                      ></i>
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
                      <i
                        class="zmdi dark-register-ico zmdi-lock"
                        style="margin-top: 5.5px"
                      ></i>
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
                    type="button"
                    name="login"
                    id="login"
                    class="form-submit"
                    value="Login"
                    v-on:click="login()"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <canvas id="c"></canvas>
      <div class="ui-widget-overlay"></div>
      <div class="error-modal">
        <div class="warn-image">
          <img class="warning-pic" src="/src/assets/images/warn-ico.png" />
        </div>
        <P class="warn"></P>
      </div>
      <meu-small-footer></meu-small-footer>
    </div>
  </main>
</template>

<script>
import DarkMode from "../shared/dark-mode/Dark-mode.vue";
import SmallFooter from "../shared/small-footer/SmallFooter.vue";
import Vue from "vue";
export default {
  components: {
    "meu-dark-mode": DarkMode,
    "meu-small-footer": SmallFooter
  },
  name: "login",
  methods: {
    login: function() {
      var myObject = {
        user: $("#user").val(),
        senha: $("#password").val()
      };

      var jsonInput = JSON.stringify(myObject);

      $.ajax({
        url: "https://localhost:5001/api/redirect/VerificarDados",
        type: "POST",
        data: jsonInput,
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
        },
        complete: function(code) {
          if (code.status === 200) {
            $.ajax({
              url:
                "https://localhost:5001/api/redirect/UserByLoginData/" +
                $("#user").val(),
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              beforeSend: function() {
                $("#load-modal").addClass("loading");
              },
              complete: function(jqXHR, status) {
                if (status == "success") {
                  var string = $.parseJSON(jqXHR.responseText) + "";
                  var split = string.split(',', 20);
                  var id = split[0];
                  var config = split[8] + split[9] + split[10] + split[11] + split[12] + ""; 

                  window.$cookies.set("user_session", "user_session", "4m");
                  localStorage.userId = id;
                  localStorage.config = config;
                  document.location.href = "/#/home";
                }
              }
            });
          } 
          else {
            alert("user n existe");
          }
        }
      });
    }
  },
   beforeCreate(){
    if(window.$cookies.isKey('user_session')){
      document.location.href = "/#/home";
    }
  }
};
</script>
