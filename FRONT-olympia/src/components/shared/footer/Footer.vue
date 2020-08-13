<template>
  <!--<div id="footer-container" class="white">
    <div id="config-container">
      <ul class="config">
        <li class="config-item"><a class="config-link config-link-hover sumir">menu-bar sumir ao rolar</a></li>
        <hr class="line-config">
        <li class="config-item"><a class="config-link config-link-hover desligar">desligar menu-bar</a></li>
        <hr class="line-config">
        <li class="config-item "><a class="config-link config-link-hover reaplicar">reaplicar definições no login</a></li>
      </ul>
    </div>
    <div id="footer" class="white" style="margin-top: -10px;">
      <div id="copyright" class="wfont">© OLYMPIA INC. All Rights Reserved.</div>

      <div id="lower-footer">
        <a class="footer-link back-to-top">Back To Top</a><span class="span-bar">|</span>
        <a class="footer-link  dark-mode-activators" id="dark-mode-link">Modo Noturno</a><span class="span-bar">|</span>
        <a class="footer-link">Termos De Uso</a>
        <a class="footer-config"><img src="/src/assets/images/config.png" class="config-img"></a>
      </div>
    </div>
  </div>-->
  <footer class="footer">
    <nav class="footer__nav shuffle shuffled">
      <section class="footer__col footer__col--intro background--active">
        <a class="footer__logo" href="/" data-footer-link="1">
          <img
            src="../../../assets/images/logos/gradient-transparent-back-logo.png"
          />
        </a>

        <p class="footer__slogan">
          Nós queremos dar as ferramentas para que todos possam ver, produzir e
          se conectar através da arte. A qualquer hora.
          <strong>Be Bold, Be You.</strong>
        </p>

        <div class="buttons-container">
          <div class="button conf" v-on:click="toggleConfig()">
            <i class="fas fa-cog config-icon"></i>
          </div>
          <div class="button up"><i class="fas fa-arrow-up"></i></div>
          <div class="button"><i class="fas fa-moon"></i></div>
        </div>
      </section>

      <section class="footer__col">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">Explorar</h4>

          <div class="footer__nav-list">
            <a href="/" class="footer__link" data-footer-link="1">Home</a>
            <a href="/capabilities" class="footer__link" data-footer-link="3"
              >Aulas e Workshops</a
            >
            <a href="/capabilities" class="footer__link" data-footer-link="3"
              >Trending</a
            >
            <a href="/capabilities" class="footer__link" data-footer-link="3"
              >Hoje</a
            >
            <a href="/capabilities" class="footer__link" data-footer-link="3"
              >Eventos</a
            >
            <a href="/about" class="footer__link" data-footer-link="2">Sobre</a>
            <a href="/careers" class="footer__link" data-footer-link="4"
              >Blog</a
            >
          </div>
        </div>
      </section>

      <section class="footer__col">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">Suporte</h4>
          <a href="" class="footer__link footer__hide--small">Dar Feedback</a>
          <a href="" class="footer__link footer__hide--small">Dar Sugestões</a>
          <a href="" class="footer__link footer__hide--small">Ajuda</a>
          <h4
            class="footer__col-title footer__col-title-sec footer__hide--small"
          >
            Marcas
          </h4>
          <a href="" class="footer__link footer__hide--small">Anuncie Aqui</a>
        </div>
      </section>

      <section class="footer__col">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">Seguir</h4>
          <a href="" target="_blank" class="footer__link no-barba">Instagram</a>
          <a href="" target="_blank" class="footer__link no-barba">Twitter</a>
          <a href="" target="_blank" class="footer__link no-barba">LinkedIn</a>
          <a href="" target="_blank" class="footer__link no-barba">Facebook</a>
        </div>
      </section>

      <section class="footer__col footer__col-last">
        <div class="footer__col-wrap">
          <h4 class="footer__col-title">Olympia</h4>
          <a href="/terms" class="footer__link">Sobre</a>
          <a href="/privacy" class="footer__link">Contato</a>
          <a href="/privacy" class="footer__link">Newsroom</a>
          <a href="/privacy" class="footer__link">Criadores</a>
        </div>
        <div class="footer__col-wrap">
          <h4 class="footer__col-title footer__col-title-sec">Legal</h4>
          <a href="/privacy" class="footer__link">Termos de Serviço</a>
          <a href="/privacy" class="footer__link">Política de Privacidade</a>
          <a href="/privacy" class="footer__link">Cookies</a>
        </div>
      </section>

      <small class="footer__legal">
        <p>© 2020 Olympia. All Rights Reserved.</p>
        <p class="footer-slogan">Share Your Art. Share Your Love.</p>
        <div class="language-sel-footer">
          <div
            class="country-icon"
            style="
                background-image: url(https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png);
              "
          ></div>
          Portugês Brasileiro
        </div>
      </small>
    </nav>
    <div class="footer-config">
      <h2 class="footer-config-title">Configurações</h2>
      <div class="footer-configs-container">
        <div class="config-item">
          <p class="inline-config-def">Menu Dinâmico</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle1"
              class="mobileToggle"
              id="toggle1"
            />
            <label for="toggle1"></label>
          </div>
        </div>
        <div class="config-item">
          <p class="inline-config-def">Dark Mode</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle-dark"
              class="mobileToggle"
              id="toggle-dark"
            />
            <label for="toggle-dark"></label>
          </div>
        </div>
        <div class="config-item">
          <p class="inline-config-def">Auto Dark Mode</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle2"
              class="mobileToggle"
              id="toggle2"
            />
            <label for="toggle2"></label>
          </div>
        </div>
        <div class="config-item">
          <p class="inline-config-def">Descrição no Feed</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle3"
              class="mobileToggle"
              id="toggle3"
              checked
            />
            <label for="toggle3"></label>
          </div>
        </div>
        <div class="config-item">
          <p class="inline-config-def">Toolbar</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle4"
              class="mobileToggle"
              id="toggle4"
            />
            <label for="toggle4"></label>
          </div>
        </div>
        <div class="config-item">
          <p class="inline-config-def">Fixed Back To Top</p>
          <div class="toggleWrapper">
            <input
              type="checkbox"
              name="toggle6"
              class="mobileToggle"
              id="toggle6"
            />
            <label for="toggle6"></label>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.inactiveMixin {
  content: "";
  position: absolute;
  display: block;
}

.beforeAnimation {
  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
}

.afterAnimation {
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04),
    0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);
  -webkit-transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
}

.toggleWrapper {
  position: absolute;
  right: 30px;
  padding: 0;
  width: fit-content;
  margin-top: 5px;
  border-radius: 5px;
  background: white;
}

.toggleWrapper input.mobileToggle {
  opacity: 0;
  position: absolute;
}

.toggleWrapper input.mobileToggle + label {
  position: relative;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  height: 30px;
  width: 50px;
  border: 1px solid #e4e4e4;
  border-radius: 60px;
}

.toggleWrapper input.mobileToggle + label:before {
  content: "";
  position: absolute;
  display: block;
  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
  height: 30px;
  width: 51px;
  top: 0;
  left: 0;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 1px lightgray;
}

.toggleWrapper input.mobileToggle + label:after {
  content: "";
  position: absolute;
  display: block;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04),
    0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);
  -webkit-transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  background: whitesmoke;
  height: 28px;
  width: 28px;
  top: 1px;
  left: 0px;
  border-radius: 60px;
}

.toggleWrapper input.mobileToggle:checked + label:before {
  background: rgba(75, 240, 180, 1);
  -webkit-transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px 1px lightgray;
}

.toggleWrapper input#toggle-dark:checked + label:before {
  background-image: url(../../../assets/images/night.jpg);
  background-position: center;
  background-size: cover;
  -webkit-transition: background-image 0.2s cubic-bezier(0, 0, 0, 0.1);
  transition: background-image 0.2s cubic-bezier(0, 0, 0, 0.1);
  -webkit-transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px 1px lightgray;
}

.toggleWrapper input.mobileToggle:checked + label:after {
  left: 24px;
}

.country-icon {
  background-position: center;
  background-size: cover;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  padding: 0;
  margin-right: 10px;
}

.language-sel-footer {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: center;
  height: 25px;
  width: 33.33333%;
}

.footer-slogan {
  text-align: center;
}

.footer__legal > p {
  width: 33.3333333%;
  margin: 0 !important;
}

.footer__nav {
  margin-left: 5%;
  margin-right: 5%;
  max-width: 1170px;
  width: 90%;
  display: inline-flex;
  flex-wrap: wrap;
  transition: 0.2s all;
}

.footer__col-last {
  margin: 0 !important;
}

@media screen and (min-width: 1300px) {
  .footer__nav {
    margin-left: calc((100vw - 1170px) / 2);
    margin-right: calc((100vw - 1170px) / 2);
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    padding-bottom: 50px !important;
    padding-top: 72px !important;
  }
}

.footer {
  background-color: #000;
  color: #232323;
  font-size: 14px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding: 50px 0;
  width: 100%;
  z-index: 1;
  font-family: "Poppins", sans-serif;
}

.footer__nav:after {
  clear: both;
  content: "";
  display: block;
}

*,
:after,
:before {
  box-sizing: inherit;
}

footer {
  display: block;
}

@media (max-width: 1300px) and (min-width: 1024px) {
  .footer__col:first-child {
    margin-right: 7.9%;
  }
}

@media screen and (min-width: 1024px) {
  .footer__col--intro {
    clear: none;
    border-bottom: 0;
    margin-bottom: 0;
    min-width: auto;
    padding-bottom: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .footer__col {
    margin-right: 4.7641%;
    width: 15.3% !important;
  }
}

@media screen and (min-width: 480px) {
  .footer__col {
    width: 26.22222%;
  }
}

.footer__col {
  float: left;
  line-height: 25px;
  width: 50%;
}

.footer__col--intro {
  clear: both;
  margin-bottom: 7px;
  padding-bottom: 5px;
}

.footer {
  background-color: #fafafb;
  color: #232323;
  font-size: 12px;
  -webkit-font-smoothing: auto;
}

@media screen and (min-width: 1024px) {
  .footer__legal {
    border-top: 0;
    margin-top: 0;
    padding-top: 35px;
  }
}

.footer__legal {
  border-top: 1px solid #dcdcdf;
  clear: both;
  color: #232323;
  display: block;
  float: left;
  font-size: 14px;
  line-height: 25px;
  margin-top: 45px;
  padding-top: 43px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

small {
  font-size: 80%;
}

@media screen and (min-width: 1024px) {
  .footer__btn {
    float: right !important;
    margin-right: 14px !important;
    margin-top: -2px;
    white-space: nowrap;
  }
}

.footer__btn {
  color: #343945;
  float: left;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  line-height: 35px;
  margin-top: 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
}

.footer__btn > span {
  color: #232323;
  cursor: pointer;
  pointer-events: none;
  position: relative;
  transition: color 0.6s ease;
  font-weight: bold;
  z-index: 5;
}

.footer__btn-line {
  bottom: -5px;
  cursor: pointer;
  height: 2px;
  border-radius: 50%;
  left: 0;
  pointer-events: none;
  position: absolute;
  transition: -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),
    -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  background-color: #222222;
}

@media screen and (min-width: 1024px) {
  .footer__col-title {
    margin-top: -2px;
  }
}

.footer__link {
  color: #232323;
  display: block;
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  transition: color 0.75s ease;
  text-decoration: none;
}

.footer__col-title {
  color: #222222;
  margin-bottom: 6px;
  font-size: 15px;
}

.footer__col-title-sec {
  margin-top: 24px;
}

.footer__logo > img {
  width: 40%;
}

.footer-config-title {
  font-size: 1.7em;
  text-indent: 0;
  margin: 34px 0;
}

.config-item {
  width: fit-content;
  display: inline-flex;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;
}

.footer-config {
  display: none;
  position: relative;
  margin-left: 54.25px;
  margin-right: 54.25px;
  max-width: 1170px;
  width: calc(100vw - 108.5px);
  margin-top: 50px;
  border-top: 1px solid #dcdcdf;
}

@media screen and (min-width: 1300px) {
  .footer-config {
    margin-left: calc((100vw - 1170px) / 2);
    margin-right: calc((100vw - 1170px) / 2);
  }
}

.buttons-container {
  display: flex;
  margin-top: 30px;
  border: none;
}

.buttons-container > .button {
  background-color: rgb(241, 240, 240);
  border-radius: 50%;
  border: 1px solid rgb(204, 204, 204);
  margin-right: 9px;
  cursor: pointer;
}

.buttons-container > .button:hover .config-icon {
  transform: rotate(70deg);
}

.buttons-container > .button.up:hover i {
  transform: translateY(-4px);
}

.buttons-container .button i {
  padding: 10px;
  font-size: 16px;
  transition: 0.3s transform ease-in;
}

.inline-config-def {
  font-size: 13px;
}

.footer-configs-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px;
  column-gap: 10px;
  row-gap: 15px;
}
</style>
<script>
export default {
  methods: {
    toggleConfig() {
      if (!$(".footer-config").hasClass("active")) {
        $(".footer-config").css("display", "block");
        $(".footer-config").addClass("active");
        $("body,html").animate({ scrollTop: $("body").height() }, 1000);
      } else {
        $("body,html").animate({ scrollTop: 1800 }, 800);
        setTimeout(function() {
          $(".footer-config").css("display", "none");
        }, 1100);

        $(".footer-config").removeClass("active");
      }
    }
  }
};
</script>
