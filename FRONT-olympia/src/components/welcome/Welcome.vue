<template>
  <main>
    <div id="container-welcome">
      <title>W E L C O M E</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <link rel="preload" as="image" href="/src/assets/images/land-1.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-2.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-3.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-4.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-5.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-6.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-7.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-8.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-9.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-10.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-11.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-12.jpg" />
      <link rel="preload" as="image" href="/src/assets/images/land-13.jpg" />
      <link rel="stylesheet" href="/src/assets/css/welcome.css" />
      <link rel="preload" href="/src/assets/css/welcome.css" as="style" />
      <link rel="stylesheet" href="/src/assets/css/welcome.css" />
      <section class="canvas-wrap">
        <div id="container">
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-7.jpg");'
          ></div>
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-13.jpg");'
          ></div>
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-12.jpg");'
          ></div>
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-11.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-10.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-9.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-8.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-7.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-6.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-5.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-4.jpg");'
          ></div>

          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-3.jpg");'
          ></div>
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-2.jpg");'
          ></div>
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-1.jpg");'
          ></div>
        </div>
        <div class="canvas-content"></div>
        <div id="canvas-o" class="gradiente"></div>
      </section>

      <div class="landing-top-bar">
        <div class="col">
          <img
            class="landing-logo"
            src="/src/assets/images/Logos/gradient-transparent-back-logo.png"
          />
          <div class="landing-nav">
            <ul>
              <li><a href="/#/" class="active">Início</a></li>
              <li><a href="/#/sobre">Sobre</a></li>
              <!--<li><a href="/#/news">News</a></li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn"
                  >Aprender<span class="arrow"><span></span><span></span></span
                ></a>
                <div class="dropdown-content">
                  <a href="/#/blog" class="link-title">Blog</a>
                  <a href="/#/blog">Fotografia</a>
                  <a href="/#/blog">Design</a>
                  <a href="/#/blog">Desenho</a>
                  <a href="/#/blog">Pintura</a>
                </div>
              </li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn"
                  >Inspirar-se<span class="arrow"
                    ><span></span><span></span></span
                ></a>
                <div class="dropdown-content">
                  <a href="#" class="link-title">Get to Know</a>
                  <a href="#">Projetos</a>
                  <a href="#">O-Artists</a>
                  <a href="#">Destaques</a>
                </div>
              </li>-->
            </ul>
          </div>
        </div>
        <div class="col right-to-left">
          <a href="/#/login" class="login-top-btn">Entrar</a>
          <a href="/#/cadastro" class="signup-top-btn">Registrar-se</a>
        </div>
        <div id="hidden-menu" v-on:click="showMenu()">
          <img src="/src/assets/images/bars-ico.png" />
        </div>
      </div>
      <div class="menu-ld">
        <div id="close-menu" v-on:click="hideMenu()"></div>
        <div class="top-menu">
          <ul class="menu-itens-ld">
            <li><a href="/#/">Início</a></li>
            <li><a href="/#/sobre">Sobre</a></li>
            <!--<li><a href="/#/">News</a></li>
            <li><a href="/#/">Blog</a></li>
            <li><a href="/#/">Get to Know</a></li>
            <li><a href="/#/">Ajuda</a></li>-->
          </ul>
        </div>
        <div class="bottom-menu">
          <div class="bottom-top-menu">
            <a href="/#/help">Política de Privacidade</a>
            <br />
            <br />
            <span class="language"
              ><i class="fas fa-globe"></i>Português (Brasil)</span
            >
          </div>
          <div class="bottom-down-menu">
            <a href="/#/login">Entrar</a>
            <br />
            <br />
            <a href="/#/cadastro">Registrar-se</a>
          </div>
        </div>
      </div>

      <div class="ui-hide" v-on:click="hideMenu()"></div>
      <div class="wrapper-main">
        <div class="colunm-1">
          <div class="phone-container">
            <div class="iphone iphone-1">
              <div class="iphone-top">
                <span class="camera"></span>
                <span class="sensor"></span>
                <span class="speaker"></span>
              </div>
              <div class="top-bar"></div>
              <div class="iphone-screen">
                <img
                  src="/src/assets/images/print-0.jpeg"
                />
              </div>
              <div class="buttons">
                <span class="on-off"></span>
                <span class="sleep"></span>
                <span class="up"></span>
                <span class="down"></span>
              </div>
              <div class="bottom-bar"></div>
              <div class="iphone-bottom">
                <span></span>
              </div>
            </div>
            <div class="iphone-2">
              <div class="marvel-device iphone-x">
                <div class="notch">
                  <div class="camera"></div>
                  <div class="speaker"></div>
                </div>
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="bottom-bar"></div>
                <div class="volume"></div>
                <div class="overflow">
                  <div class="shadow shadow--tr"></div>
                  <div class="shadow shadow--tl"></div>
                  <div class="shadow shadow--br"></div>
                  <div class="shadow shadow--bl"></div>
                </div>
                <div class="inner-shadow"></div>
                <div class="screen">
                  <img
                    src="/src/assets/images/print-1.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="colunm-2">
          <div class="signup-or-signin-form">
            <div class="inner-signup-or-signin-form">
              <h1>Comece a explorar</h1>
              <ul class="check-list">
                <li>
                  Conecte-se com seus amigos e veja o que eles estão produzindo.
                </li>
                <li>Mergulhe no mundo da arte e se inspire.</li>
                <li>
                  Divulgue seu trabalho, suas obras e o seu amor pela arte.
                </li>
                <li>Apoveite um ambiente para todas as artes.</li>
              </ul>
              <div class="bottom-link button2">
                <a href="/#/cadastro" class="register-link">Registrar-se</a>
              </div>
              <p class="paragraph">
                Já tem uma conta?
                <a class="inner-text-link" href="/#/login"
                  ><span class="underline--magical"> Faça login</span></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    showMenu() {
      $(".menu-ld").addClass("visible");
    },
    hideMenu() {
      $(".menu-ld").removeClass("visible");
    }
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
            this.$welcome = 1;
          } else if (window.$cookies.isKey("user_session")) {
            document.location.href = "/#/home";
            this.$welcome = 1;
          }
        }
      }
    });
  },
  created() {
    if (this.$welcome == 0) {
      localStorage.clear();
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
    }
  }
};
</script>
