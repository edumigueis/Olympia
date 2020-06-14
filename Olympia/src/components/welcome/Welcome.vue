<template>
  <main>
    <div id="container-welcome">
      <title>W E L C O M E</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <section class="canvas-wrap">
        <div id="container">
          <div
            class="bg-module"
            style='background-image: url("/src/assets/images/land-14.jpg");'
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
          <img class="landing-logo" src="/src/assets/images/Logos/gradient-transparent-back-logo.png" />
          <div class="landing-nav">
            <ul>
              <li><a href="/#/" class="active">Início</a></li>
              <li><a href="/#/sobre">Sobre</a></li>
              <li><a href="/#/news">News</a></li>
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
              </li>
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
            <li><a href="/#/">Sobre</a></li>
            <li><a href="/#/">News</a></li>
            <li><a href="/#/">Blog</a></li>
            <li><a href="/#/">Get to Know</a></li>
            <li><a href="/#/">Ajuda</a></li>
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
                  src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
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
                    src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
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
                <li>Divulgue seu trabalho e o seu amor pela arte.</li>
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
<style>
@font-face {
  font-family: "Poppins";
  src: url("/src/assets/fonts/poppins-light.otf");
}
@font-face {
  font-family: "Poppins Bold";
  src: url("/src/assets/fonts/Poppins-Bold.otf");
}

html,
body {
  overflow: hidden;
  font-family: "Poppins";
}
#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
}
.bg-module {
  position: fixed;
  min-width: 100%;
  bottom: 0;
  top: 0;
  max-height: 100%;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
@-webkit-keyframes imgFade {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes imgFade {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes imgFade {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes imgFade {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bg-module {
  -webkit-animation-name: imgFade;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 76s;

  -moz-animation-name: imgFade;
  -moz-animation-timing-function: ease-in-out;
  -moz-animation-iteration-count: infinite;
  -moz-animation-duration: 76s;

  -o-animation-name: imgFade;
  -o-animation-timing-function: ease-in-out;
  -o-animation-iteration-count: infinite;
  -o-animation-duration: 76s;

  animation-name: imgFade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 76s;
}
.bg-module:nth-of-type(1) {
  -webkit-animation-delay: 70s;
  -moz-animation-delay: 70s;
  -o-animation-delay: 70s;
  animation-delay: 70s;
}
.bg-module:nth-of-type(2) {
  -webkit-animation-delay: 65s;
  -moz-animation-delay: 65s;
  -o-animation-delay: 65s;
  animation-delay: 65s;
}
.bg-module:nth-of-type(3) {
  -webkit-animation-delay: 60s;
  -moz-animation-delay: 60s;
  -o-animation-delay: 60s;
  animation-delay: 60s;
}
.bg-module:nth-of-type(4) {
  -webkit-animation-delay: 55s;
  -moz-animation-delay: 55s;
  -o-animation-delay: 55s;
  animation-delay: 55s;
}
.bg-module:nth-of-type(5) {
  -webkit-animation-delay: 50s;
  -moz-animation-delay: 50s;
  -o-animation-delay: 50s;
  animation-delay: 50s;
}
.bg-module:nth-of-type(6) {
  -webkit-animation-delay: 45s;
  -moz-animation-delay: 45s;
  -o-animation-delay: 45s;
  animation-delay: 45s;
}
.bg-module:nth-of-type(7) {
  -webkit-animation-delay: 40s;
  -moz-animation-delay: 40s;
  -o-animation-delay: 40s;
  animation-delay: 40s;
}
.bg-module:nth-of-type(8) {
  -webkit-animation-delay: 35s;
  -moz-animation-delay: 35s;
  -o-animation-delay: 35s;
  animation-delay: 35s;
}
.bg-module:nth-of-type(9) {
  -webkit-animation-delay: 30s;
  -moz-animation-delay: 30s;
  -o-animation-delay: 30s;
  animation-delay: 30s;
}
.bg-module:nth-of-type(10) {
  -webkit-animation-delay: 25s;
  -moz-animation-delay: 25s;
  -o-animation-delay: 25s;
  animation-delay: 25s;
}
.bg-module:nth-of-type(11) {
  -webkit-animation-delay: 20s;
  -moz-animation-delay: 20s;
  -o-animation-delay: 20s;
  animation-delay: 20s;
}
.bg-module:nth-of-type(12) {
  -webkit-animation-delay: 15s;
  -moz-animation-delay: 15s;
  -o-animation-delay: 15s;
  animation-delay: 15s;
}
.bg-module:nth-of-type(13) {
  -webkit-animation-delay: 10s;
  -moz-animation-delay: 10s;
  -o-animation-delay: 10s;
  animation-delay: 10s;
}
.bg-module:nth-of-type(14) {
  -webkit-animation-delay: 5s;
  -moz-animation-delay: 5s;
  -o-animation-delay: 5s;
  animation-delay: 5s;
}

#canvas-o {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
}
.canvas-wrap {
  position: absolute;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.6),
    rgba(30, 30, 30, 0.3),
    rgba(30, 30, 30, 0.05)
  );
  height: 100vh;
  width: 100%;
}
div.canvas-content {
  position: relative;
  z-index: 2000;
  color: #fff;
  text-align: center;
}

body {
  margin: 0;
}
a {
  text-decoration: none !important;
}
.iphone {
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
    0 0 30px 0px rgba(0, 0, 0, 0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 877px;
  width: 423px;
  position: relative;
  margin: 30px auto;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}

.iphone-top {
  padding: 5px 110px 40px;
  position: relative;
}
.iphone-top .speaker {
  display: block;
  width: 70px;
  height: 6px;
  margin: 0 auto;
  border-radius: 6px;
  background: #292728;
}
.iphone-top .camera {
  display: block;
  margin: 0 auto;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 13px;
  background: #333;
}
.iphone-top .sensor {
  display: block;
  width: 15px;
  height: 15px;
  float: left;
  background: #333;
  margin-top: -5px;
  border-radius: 50%;
}

.top-bar,
.bottom-bar {
  display: block;
  width: 423px;
  height: 15px;
  border-left: 5px solid #bbb;
  border-right: 5px solid #bbb;
  position: absolute;
  left: -5px;
}

.top-bar {
  top: 65px;
}

.bottom-bar {
  bottom: 65px;
}

.iphone-screen {
  background: #eee;
  border: 1px solid #fff;
  height: 677px;
  width: 375px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 3px;
  overflow: hidden;
  background-image: url("https://assets.codepen.io/285131/paintbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.iphone-screen img {
  width: 100%;
}

.buttons .on-off,
.buttons .up,
.buttons .down,
.buttons .sleep {
  display: block;
  background: #ccc;
  position: absolute;
  border-radius: 2px 0px 0px 2px;
}
.buttons .on-off {
  height: 40px;
  width: 3px;
  top: 100px;
  left: -8px;
}
.buttons .up,
.buttons .down,
.buttons .sleep {
  height: 60px;
  width: 5px;
  left: -10px;
}
.buttons .up {
  top: 170px;
}
.buttons .down {
  top: 250px;
}
.buttons .sleep {
  left: auto;
  right: -10px;
  top: 170px;
  border-radius: 0px 2px 2px 0px;
}

.iphone-bottom {
  padding: 10px 0 0;
}
.iphone-bottom span {
  display: block;
  margin: 0 auto;
  width: 68px;
  height: 68px;
  background: #ccc;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #303233 0%,
    #b5b7b9 50%,
    #f0f2f2 69%,
    #303233 100%
  );
  position: relative;
}
.iphone-bottom span:after {
  content: "";
  display: block;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 4px;
}
* {
  box-sizing: border-box;
}
.colunm {
  width: 50vw;
  min-width: 400px;
  overflow-x: hidden;
  padding-bottom: 100px;
}
.bottom-wrapper-sb {
  display: inline-flex;
  flex-wrap: wrap;
  width: 100vw;
}

.iphone-1 {
  margin-right: -300px !important;
  margin-top: -140px;
  transition: 0.3s transform ease-out;
}
@media only screen and (max-width: 1800px) {
  .iphone-1:hover {
    transform: scale(0.83);
  }
  .iphone-2:hover {
    transform: scale(0.83);
  }
}

.iphone-2 {
  margin-top: 50px;
  margin-right: 0px;
  transform: scale(0.8);
  transition: 0.3s transform ease-out;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.phone-container {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: 0;
  position: relative;
  transform: scale(0.65);
  margin-right: 10vw;
}
.colunm-1 {
  position: relative;
  width: 50vw;
  height: 100%;
}
.colunm-2 {
  position: relative;
  width: 50vw;
  height: 100%;
}
.wrapper-main {
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.landing-top-bar {
  width: 92vw;
  margin-left: 4vw;
  margin-right: 4vw;
  display: inline-flex;
  flex-wrap: nowrap;
  padding: 8px 0;
}
.col {
  width: 50%;
  display: inline-flex;
  flex-wrap: nowrap;
  height: 100%;
  z-index: 3;
}
.col.right-to-left {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-end;
}
#hidden-menu {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-end;
}
#hidden-menu img {
  filter: invert(100%);
}
.landing-nav {
  position: relative;
  z-index: 3;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  color: rgb(255, 210, 225);
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 16px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content > a:hover {
  background-color: #cccccc;
  color: #232323;
}
.dropdown-content > a:hover:nth-child(1) {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.dropdown-content > a:last-child {
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.landing-logo {
  width: 60px;
  height: 60px;
  z-index: 3;
  position: relative;
  margin-right: 12px;
}
.arrow {
  margin-bottom: -5px;
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin-left: 0.8rem;
}
.arrow span {
  top: 0.5rem;
  position: absolute;
  width: 0.75rem;
  height: 0.1rem;
  background-color: #efefef;
  display: inline-block;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.arrow span:first-of-type {
  left: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.arrow span:last-of-type {
  right: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
a:hover > .arrow span:first-of-type {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
a:hover > .arrow span:last-of-type {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.link-title {
  font-weight: bold;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
.col.right-to-left > a {
  z-index: 3;
  color: #fff;
  padding: 7px 16px;
  margin: 7px 8px;
  cursor: pointer;
}
.login-top-btn {
  border: 1.5px solid #efefefb0;
  border-radius: 10px;
}
.login-top-btn:hover {
  border: 1.5px solid #efefef;
  border-radius: 10px;
  transform: scale(1.02);
}
.signup-top-btn {
  border: 1.5px solid #efefefb0;
  border-radius: 10px;
}
.signup-top-btn:hover {
  border: 1.5px solid #efefef;
  border-radius: 10px;
  transform: scale(1.02);
}

.marvel-device {
  display: inline-block;
  position: relative;
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
}
.marvel-device .screen {
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  background: white;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  -webkit-box-shadow: 0 0 0 3px #111;
  box-shadow: 0 0 0 3px #111;
}
.marvel-device .top-bar,
.marvel-device .bottom-bar {
  height: 3px;
  background: black;
  width: 100%;
  display: block;
}
.marvel-device .middle-bar {
  width: 3px;
  height: 4px;
  top: 0px;
  left: 90px;
  background: black;
  position: absolute;
}

.marvel-device.iphone-x {
  width: 375px;
  height: 810px;
  padding: 26px;
  background: #fdfdfd;
  -webkit-box-shadow: inset 0 0 11px 0 black;
  box-shadow: inset 0 0 11px 0 black;
  border-radius: 66px;
}
.marvel-device.iphone-x .overflow {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 66px;
  overflow: hidden;
}
.marvel-device.iphone-x .shadow {
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 60%
  );
}
.marvel-device.iphone-x .shadow--tl {
  top: -20px;
  left: -20px;
}
.marvel-device.iphone-x .shadow--tr {
  top: -20px;
  right: -20px;
}
.marvel-device.iphone-x .shadow--bl {
  bottom: -20px;
  left: -20px;
}
.marvel-device.iphone-x .shadow--br {
  bottom: -20px;
  right: -20px;
}
.marvel-device.iphone-x:before {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  position: absolute;
  top: 5px;
  content: "";
  left: 5px;
  border-radius: 61px;
  background: black;
  z-index: 1;
}
.marvel-device.iphone-x .inner-shadow {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  top: 10px;
  overflow: hidden;
  left: 10px;
  border-radius: 56px;
  -webkit-box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.66);
  z-index: 1;
}
.marvel-device.iphone-x .inner-shadow:before {
  -webkit-box-shadow: inset 0 0 20px 0 #ffffff;
  box-shadow: inset 0 0 20px 0 #ffffff;
  width: 100%;
  height: 116%;
  position: absolute;
  top: -8%;
  content: "";
  left: 0;
  border-radius: 200px / 112px;
  z-index: 2;
}
.marvel-device.iphone-x .screen {
  border-radius: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.marvel-device.iphone-x .top-bar,
.marvel-device.iphone-x .bottom-bar {
  width: 100%;
  position: absolute;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  left: 0;
}
.marvel-device.iphone-x .top-bar {
  top: 80px;
}
.marvel-device.iphone-x .bottom-bar {
  bottom: 80px;
}
.marvel-device.iphone-x .volume,
.marvel-device.iphone-x .volume:before,
.marvel-device.iphone-x .volume:after,
.marvel-device.iphone-x .sleep {
  width: 3px;
  background: #b5b5b5;
  position: absolute;
}
.marvel-device.iphone-x .volume {
  left: -3px;
  top: 116px;
  height: 32px;
}
.marvel-device.iphone-x .volume:before {
  height: 62px;
  top: 62px;
  content: "";
  left: 0;
}
.marvel-device.iphone-x .volume:after {
  height: 62px;
  top: 140px;
  content: "";
  left: 0;
}
.marvel-device.iphone-x .sleep {
  height: 96px;
  top: 200px;
  right: -3px;
}
.marvel-device.iphone-x .camera {
  width: 6px;
  height: 6px;
  top: 9px;
  border-radius: 100%;
  position: absolute;
  left: 154px;
  background: #0d4d71;
}
.marvel-device.iphone-x .speaker {
  height: 6px;
  width: 60px;
  left: 50%;
  position: absolute;
  top: 9px;
  margin-left: -30px;
  background: #171818;
  border-radius: 6px;
}
.marvel-device.iphone-x .notch {
  position: absolute;
  width: 210px;
  height: 30px;
  top: 26px;
  left: 108px;
  z-index: 4;
  background: black;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.marvel-device.iphone-x .notch:before,
.marvel-device.iphone-x .notch:after {
  content: "";
  height: 8px;
  position: absolute;
  top: 0;
  width: 8px;
}
.marvel-device.iphone-x .notch:after {
  background: radial-gradient(
    circle at bottom left,
    transparent 0,
    transparent 70%,
    black 70%,
    black 100%
  );
  left: -8px;
}
.marvel-device.iphone-x .notch:before {
  background: radial-gradient(
    circle at bottom right,
    transparent 0,
    transparent 70%,
    black 70%,
    black 100%
  );
  right: -8px;
}
.marvel-device.iphone-x.landscape {
  height: 375px;
  width: 812px;
}
.marvel-device.iphone-x.landscape .top-bar,
.marvel-device.iphone-x.landscape .bottom-bar {
  width: 8px;
  height: 100%;
  top: 0;
}
.marvel-device.iphone-x.landscape .top-bar {
  left: 80px;
}
.marvel-device.iphone-x.landscape .bottom-bar {
  right: 80px;
  bottom: auto;
  left: auto;
}
.marvel-device.iphone-x.landscape .volume,
.marvel-device.iphone-x.landscape .volume:before,
.marvel-device.iphone-x.landscape .volume:after,
.marvel-device.iphone-x.landscape .sleep {
  height: 3px;
}
.marvel-device.iphone-x.landscape .inner-shadow:before {
  height: 100%;
  width: 116%;
  left: -8%;
  top: 0;
  border-radius: 112px / 200px;
}
.marvel-device.iphone-x.landscape .volume {
  bottom: -3px;
  top: auto;
  left: 116px;
  width: 32px;
}
.marvel-device.iphone-x.landscape .volume:before {
  width: 62px;
  left: 62px;
  top: 0;
}
.marvel-device.iphone-x.landscape .volume:after {
  width: 62px;
  left: 140px;
  top: 0;
}
.marvel-device.iphone-x.landscape .sleep {
  width: 96px;
  left: 200px;
  top: -3px;
  right: auto;
}
.marvel-device.iphone-x.landscape .camera {
  left: 9px;
  bottom: 154px;
  top: auto;
}
.marvel-device.iphone-x.landscape .speaker {
  width: 6px;
  height: 60px;
  left: 9px;
  top: 50%;
  margin-top: -30px;
  margin-left: 0;
}
.marvel-device.iphone-x.landscape .notch {
  height: 210px;
  width: 30px;
  left: 26px;
  bottom: 108px;
  top: auto;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 0;
}
.marvel-device.iphone-x.landscape .notch:before,
.marvel-device.iphone-x.landscape .notch:after {
  left: 0;
}
.marvel-device.iphone-x.landscape .notch:after {
  background: radial-gradient(
    circle at bottom right,
    transparent 0,
    transparent 70%,
    black 70%,
    black 100%
  );
  bottom: -8px;
  top: auto;
}
.marvel-device.iphone-x.landscape .notch:before {
  background: radial-gradient(
    circle at top right,
    transparent 0,
    transparent 70%,
    black 70%,
    black 100%
  );
  top: -8px;
}
.signup-or-signin-form {
  border-radius: 16px;
  height: fit-content;
  width: 360px;
  margin-top: 60px;
  margin-left: 8vw;
  background-color: #efefef;
}
.inner-signup-or-signin-form {
  padding: 32px 20px;
}
.inner-signup-or-signin-form h1 {
  text-align: center;
}
.button2 a {
  transition: all 0.6s ease;
  overflow: hidden;
  font-size: 18px;
  font-weight: 800;
  position: absolute;
  transform: translate(-50%, -50%);
  color: #222;
  border-radius: 10px;
  cursor: pointer;
}
.button2 a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -50px;
  left: -60px;
  width: 90px;
  height: 90px;
  z-index: -1;
  transition: all 0.3s ease;
  transform: rotate(-45deg);
}
.button2 a:hover::after {
  box-shadow: 40px -20px 0px rgb(240,180,76), 41px -20px 8px rgba(0, 0, 0, 0.3),
    80px 20px 0px rgb(240,132,128), 81px 20px 8px rgba(0, 0, 0, 0.3),
    120px 60px 0px rgb(240,85,181), 121px 60px 8px rgba(0, 0, 0, 0.3),
    160px 100px 0px rgb(165,150,186), 161px 100px 8px rgba(0, 0, 0, 0.3),
    200px 120px 0px rgb(75,240,180);
}
.button2 a:hover {
  color: white;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.3);
}
@media only screen and (max-width: 900px) {
  .register-link {
    margin-right: 0 !important;
    margin-left: 163px !important;
  }
  .colunm-2 {
    width: 100% !important;
    margin-bottom: -10vh;
    height: 70vh;
  }
  .colunm-1 {
    width: 100% !important;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .phone-container {
    margin: 0 !important;
  }
  .signup-or-signin-form {
    position: absolute;
    left: calc(50vw - 180px);
    bottom: 30px;
    margin: 0 !important;
  }
  .wrapper-main {
    flex-flow: wrap-reverse;
  }
  body {
    overflow-y: scroll !important;
    overflow-x: hidden !important;
  }
  html {
    overflow-y: hidden;
  }
  .wrapper-main {
    height: 180vh;
    overflow: visible;
  }
}

@media only screen and (max-height: 500px) {
  .colunm-1 {
    margin-bottom: -100vh !important;
  }
  .colunm-2 {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 980px) and (max-width: 1290px) {
  .col.right-to-left {
    width: 35% !important;
  }
  .col {
    width: 65%;
  }
}
@media only screen and (min-width: 980px) and (max-width: 1290px) {
}

.check-list {
  margin: 0;
  padding-left: 1.2rem;
}

.check-list li {
  position: relative;
  list-style-type: none;
  padding-left: 2rem;
  margin-bottom: 0.5rem;
}

.check-list li:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: -2px;
  width: 5px;
  height: 11px;
  border-width: 0 2px 2px 0;
  border-style: solid;
  border-color: #00a8a8;
  transform-origin: bottom left;
  transform: rotate(45deg);
}
.screen img {
  min-height: 100%;
  width: 100%;
}
.iphone-screen img {
  min-height: 100%;
  width: 100%;
}
.register-link {
  padding: 10px 20px;
  border: 1px solid #232323;
  border-radius: 12px;
  margin-left: 163px;
  margin-top: 35px;
}
.paragraph{
  margin-top: 25px!important;
}
.bottom-link {
  margin-top: 12px;
  height: 50px;
}
.bottom-link + p {
  margin: 0;
}
a.active {
  text-decoration: underline !important;
  color: rgb(221, 207, 212);
}
@media only screen and (max-width: 980px) {
  .col {
    width: 100%;
  }
  .col.right-to-left {
    display: none;
  }
}
@media only screen and (max-width: 636px) {
  .landing-nav {
    display: none;
  }
  #hidden-menu {
    display: block !important;
  }
}
@media only screen and (min-width: 637px) {
  .menu-ld.visible {
    width: 0 !important;
  }
  .menu-ld {
    width: 0 !important;
  }
  .menu-ld.visible + .ui-hide {
    width: 0 !important;
  }
  #close-menu {
    display: none !important;
  }
}
.menu-ld {
  background-color: #efefef;
  width: 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: block;
  z-index: 6;
  transition: all 0.6s ease-out;
}
.menu-ld.visible {
  width: 300px;
}
.ui-hide {
  width: 0;
  transition: all 0.6s ease-out;
  position: absolute;
  top: 0;
  z-index: 5;
}
.menu-ld.visible + .ui-hide {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.8),
    rgba(30, 30, 30, 0.6),
    rgba(30, 30, 30, 0.7)
  );
}
#hidden-menu {
  height: 60px;
  width: 60px;
  display: none;
  cursor: pointer;
  transition: 0.2s all;
}
#hidden-menu :hover {
  transform: scale(0.95);
}
#hidden-menu img {
  height: 60px;
  width: 60px;
}
.bottom-menu {
  height: 50%;
  border-top: 1px solid rgba(201, 200, 200, 0.9);
}
.bottom-down-menu {
  width: 100%;
  height: 20%;
}
.bottom-down-menu > a {
  padding: 20px 32px;
  color: #232323;
  font-size: 1.2em;
  font-family: "Poppins Bold" !important;
}
.bottom-top-menu {
  width: 100%;
  height: 75%;
  margin-top: 5%;
}
.bottom-top-menu a {
  padding: 20px 32px;
  color: #555555;
  font-size: 1.2em;
}
.top-menu {
  width: 100%;
  height: 50%;
}
.top-menu ul li a {
  padding: 10px 32px;
  color: #222;
  font-size: 1.2em;
}
.top-menu ul {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 32px 0;
}
.top-menu ul > li {
  width: 100%;
}
.language {
  color: #777777;
  padding: 20px 32px;
  font-size: 1.2em;
  line-height: 1.2em;
}
.fa-globe {
  margin-right: 7px;
}
.underline--magical {
  background: linear-gradient(
          90deg, 
          rgb(240,180,76) 0%,
          rgb(240,132,128) 50%,
          rgb(240,85,181) 100%
        );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  color: #232323 !important;
  padding: 4.5px !important;
  border-radius: 8px;
}
.underline--magical:hover {
  background-size: 100% 100%;
}
.menu-ld.visible #close-menu {
  display: block;
}
#close-menu {
  display: none;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 32px;
  right: 32px;
  background-image: url("/src/assets/images/x.png");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: 0.2s all;
}
#close-menu:hover {
  transform: scale(0.95);
}
@media only screen and (max-width: 400px) {
  .signup-or-signin-form {
    width: 100%;
    border-radius: unset;
    position: absolute;
    left: 0;
    margin-top: 100px;
  }
  .colunm-2 {
    margin-bottom: -20vh;
  }
  .phone-container {
    position: relative;
    margin-top: 60px !important;
  }
}
@media only screen and (max-width: 350px) {
  .register-link {
    margin-left: 140px !important;
  }
  .colunm-2 {
    margin-bottom: -40vh;
  }
  .signup-or-signin-form h1 {
    font-size: 1.4em;
  }
}
@media only screen and (min-height: 550px) and (max-height: 600px) and (max-width: 340px) {
  .phone-container {
    z-index: 2;
    margin-top: auto;
  }
  .colunm-1 {
    margin-bottom: -160px;
  }
  .colunm-2 {
    margin-bottom: unset !important;
    height: auto;
  }
  .signup-or-signin-form {
    position: absolute;
    top: 0;
  }
}
@media only screen and (min-height: 900px) {
  .colunm-2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signup-or-signin-form {
    margin-top: 0 !important;
    margin-left: 0 !important;
  }
}

@media only screen and (min-width: 1800px) {
  body {
    font-size: 1.4rem;
  }
  .signup-or-signin-form {
    width: 460px;
    border-radius: 18px;
  }
  .register-link {
    margin-left: 207px;
  }
  .iphone-1 {
    transform: scale(1);
  }
  .iphone-2 {
    transform: scale(1);
  }
  .iphone-1:hover {
    transform: scale(1.03);
  }
  .iphone-2:hover {
    transform: scale(1.03);
  }
}
</style>
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
    if (window.$cookies.isKey("user_cadastro")) {
      document.location.href = "/#/categorias";
      this.$welcome = 1;
    } else if (window.$cookies.isKey("user_session")) {
      document.location.href = "/#/home";
      this.$welcome = 1;
    }
  },
  created() {
    if (this.$welcome === 0) {
      localStorage.clear();
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
    }
  }
};
</script>
