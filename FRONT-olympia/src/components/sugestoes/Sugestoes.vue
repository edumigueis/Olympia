<template>
  <main>
    <div id="container-sugestoes">
      <title>S U G E S T Õ E S</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/sugestoes.css" />

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

<style>
.wrapper-sec {
    /* Grid Fallback */
    display: flex;
    flex-wrap: wrap;
  
    /* Supports Grid */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 1em;
  }
  
  .module {
    background: #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
  
    /* Flex Fallback */
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.18s all ease-in;
  }
  .module:hover{
      background: #c9c9c9c9;
      transform: scale(1.015);
  }
  /* If Grid is supported, remove the margin we set for the fallback */
  @supports (display: grid) {
    .module {
      margin: 0;
    }
  }
  
  .wrapper-sec{
      margin-top: 50px;
      margin: 0.5em;
      margin-bottom: 100px;
  }
  .img-wp {
    width: 120px;
    height: 120px;
    border-radius: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      90deg,
      #ccff33,
      #d1f13e,
      #d5e349,
      #dad553,
      #dfc75e,
      #e3b969,
      #e8ac74,
      #ec9e7f,
      #f1908a,
      #f68294,
      #fa749f,
      #ff66aa
    );
    margin-left: 10px;
  }
  .img-wp img {
    width: 80%;
  }
  .title {
    font-family: "Montserrat", sans-serif;
    transition: 0.3s all;
  }
  .flex-part {
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
  }
  
  .arrow {
    background-image: url("/src/assets/images/arrow-2.png");
    background-position: right;
    width: 50px;
    height: 50px;
    float: right;
    margin-right: 10px;
    background-size: cover;
  }
  @media only screen and (max-width: 440px){
      .title{
          margin-left: 30px;
      }
      h1{
          font-size: 1.5em;
      }
  }
  @media only screen and (min-width: 725px) and (max-width: 900px){
      .title{
          margin-left: 30px;
      }
  
  }
  @media only screen and (min-width: 1090px) and (max-width: 1270px){
      .title{
          margin-left: 30px;
      }
  }
  @media only screen and (min-width: 1460px) and (max-width: 1670px){
      .title{
          margin-left: 30px;
      }
  }
  @media only screen and (min-width: 1671px){
      .wrapper-sec{
          grid-template-columns: repeat(4, minmax(350px, 1fr));
      }
      .title{
          font-size: 1.8em;
      }
  }
  h1{
      margin-top: 100px;
      font-family: 'Montserrat', sans-serif;
      text-indent: 1em;
  }
  
  .wrapper-form{
    display: none;
    height: 110vh;
  }
  .frm-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: fit-content;
  }
  :root {
    --color-1: #ccff33;
    --color-2: #dad553;
    --color-3: #e3b969;
    --color-4: #f1908a;
    --color-5: #ff66aa;
  }
  
  .shape {
    r: 80;
    animation: moveCircle 1550ms ease-in-out both infinite;
  }
  
  .shape:nth-child(1) {
    cx: 0;
    fill: var(--color-1);
  }
  
  .shape:nth-child(2) {
    cx: 180;
    fill: var(--color-2);
    animation-delay: 150ms;
  }
  
  .shape:nth-child(3) {
    cx: 360;
    fill: var(--color-3);
    animation-delay: 250ms;
  }
  
  .shape:nth-child(4) {
    cx: 540;
    fill: var(--color-4);
    animation-delay: 350ms;
  }
  
  .shape:nth-child(5) {
    cx: 720;
    fill: var(--color-5);
    animation-delay: 450ms;
  }
  
  @keyframes moveCircle {
    50% {
      cy: 150;
    }
  }
  svg {
    position: fixed;
    top: 200px;
    left: calc((100vw - 720px)/2);
    display: none;
    width: 720px;
    height: 500px;
    overflow: visible;
  }
  
  .container {
    position: relative;
    top: 190px;
    display: block;
    margin-bottom: 80px;
    width: 500px;
    height: 380px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    box-shadow: 3px 3px 9px 9px lightgray;
    transition: 0.3s all;
  }
  
  .title-form {
    padding: 40px;
    font-weight: normal;
    color: #414141;
    font-family: 'Montserrat', sans-serif;
  }
  
  input {
    display: block;
    height: 50px;
    width: 90%;
    margin: 0 auto;
    border: none;
  }
  input::placeholder {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: .5s;
    transition: .5s;
  }
  input:hover, input:focus, input:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;
  }
  input:hover::placeholder, input:focus::placeholder, input:active:focus::placeholder {
    color: #ff5722;
    position: relative;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  textarea {
    display: block;
    height: 50px;
    width: 90%;
    margin: 0 auto;
    border: none;
    max-height: 80px;
    max-width: 80%;
    min-width: 79%;
    min-height: 50px;
  }
  textarea::placeholder {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: .5s;
    transition: .5s;
  }
  textarea:hover, textarea:focus, textarea:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;
  }
  textarea:hover::placeholder, textarea:focus::placeholder, textarea:active:focus::placeholder {
    color: #ff5722;
    position: relative;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  .desc,
  .pwd {
    position: relative;
    z-index: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #858585;
    font-weight: lighter;
    -webkit-transition: .5s;
    transition: .5s;
  }
  
  .btn-cont{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .reg {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: translateY(-100%) scale(1);
    transform: translateY(-100%) scale(1);
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #673ab7;
    z-index: 5;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }
  
  .sig {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translateY(-100%) scale(1);
    transform: translateY(-100%) scale(1);
    display: block;
    width: 20px;
    height: 20px;
    display: block;
    background: #ff5722;
    z-index: 5;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }
  
  h3 {
    position: absolute;
    top: -100%;
    left: 20%;
    text-transform: uppercase;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.3);
    -webkit-transition: .3s ease-in-out 1.2s;
    transition: .3s ease-in-out 1.2s;
  }
  
  .file-lb{
    background-color: transparent;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
    margin-left: 39px;
  }
  
  input[type='file'] {
    display: none
  }
  .register{
    width: 180px;
    font-size: 1.5em;
    color: #222;
    background: linear-gradient(
      90deg,
      #ccff33,
      #d1f13e,
      #d5e349,
      #dad553,
      #dfc75e,
      #e3b969,
      #e8ac74,
      #ec9e7f,
      #f1908a,
      #f68294,
      #fa749f,
      #ff66aa
    );
    filter: blur(0.1px);
    cursor: pointer;
    border-radius: 18px;
  }
  .register:hover{
    color: #222 !important;
    border-bottom: none !important;
    transform: scale(1.02);
  }
  .fa-paperclip{
    color: #222;
    font-size: 2em !important;
  }
  .fa-close{
    color: #222;
    font-size: 2em !important;
    opacity: 0;
    transition: 0.2s all;
    cursor: pointer;
  }
  .img-mask{
    overflow: hidden;
    width: 160px;
    max-height: 130px;
    border-radius: 16px;
    margin-left: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .img-mask img{
    width: 100%;
    object-fit: cover;
  }
  
  @media only screen and (max-width: 600px){
    .container{
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  .dark-mode.module{
    background-color: #646464 !important;
  }
  .arrow.dark-mode{
    filter: invert(100%);
  }
  .white-7.dark-mode{
    box-shadow: 3px 3px 9px 9px #666666;
  }
  .dark-mode-page{
    background-color: #2b2b2b;
  } 
  .return-btn {
    width: 33px;
    height: 33px;
    position: absolute;
    top: 130px;
    left: 50px;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 30;
    transform: rotate(225deg);
    box-sizing: border-box;
    transition: 0.2s all;
  }
  .return-btn::before {
    content: "";
    width: 100%;
    height: 100%;
    border-width: 0.7vmin 0.7vmin 0 0;
    border-style: solid;
    border-color: #222;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }
  .return-btn:after {
    content: "";
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 0.7vmin 0 0;
    border-style: solid;
    border-color: #222;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }
  .return-btn:hover::after {
    transform: rotate(45deg);
    border-color: #333;
    height: 120%;
  }
  .return-btn:hover::before {
    border-color: #333;
    transform: scale(0.8);
  }
  @media only screen and (max-width: 500px) {
    .return-btn {
      width: 30px !important;
      height: 30px !important;
    }
  }

  @media only screen and (min-width: 1600px){
    .container{
      width: 700px;
      height: fit-content !important;
      top: 300px;
    }
    svg{
      top: 310px;
    }
    textarea::placeholder {
      font-weight: 1.5em;
    }
    .img-mask{
      width: 310px;
      max-height: 260px;
    }
    .btn-cont{
      padding-bottom: 30px;
    }
  }
</style>