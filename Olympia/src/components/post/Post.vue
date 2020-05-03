<template>
  <main>
    <div id="container-post">
      <link rel="stylesheet" href="/src/assets/css/post.css" />
      <title>P O S T</title>

      <div class="buttons-cont">
        <div class="cont-major" id="cont-major-1">
          <div class="btn-cont">
            <div class="btn" id="obra-btn">
              Divulgar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Se deseja postar um trabalho pessoal, uma pintura, um texto, uma
              fotografia... O que você imaginar.
            </p>
          </div>
        </div>
        <div class="cont-major" id="cont-major-2">
          <div class="btn-cont">
            <div class="btn" id="serv-btn">
              Ensinar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Divulgue aqui tudo que te encanta em ensinar. Aulas de dança,
              música, escultura... Aquilo que te encanta.
            </p>
          </div>
        </div>
        <div class="cont-major" id="cont-major-3">
          <div class="btn-cont">
            <div class="btn" id="post-btn">
              Inspirar
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </div>
            <p class="w-to-post">
              Compartilhe um pensamento, uma dica, um projeto ou o que você
              sente que deve postar. Inspire-se.
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <section id="post-obra-img">
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner" id="obra-1"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-2"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-3"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-4"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-5"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-6"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner" id="obra-7"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>
            <li class="img-list-item">
              <img
                class="img-inner" id="obra-8"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload">
              <input type="file" class="upload" id="obra-picker" />
              <span>Escolher Imagens</span>
            </div>
            <div id="go-on-btn">Continuar</div>
          </div>
        </section>
        <section id="post-serv-img">
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>
            <li class="img-list-item">
              <img
                class="img-inner"
                src="/src/assets/images/colorful-cam.jpg"
              />
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload">
              <input type="file" class="upload" id="serv-picker" />
              <span>Escolher Imagens</span>
            </div>
            <div id="go-on-btn">Continuar</div>
          </div>
        </section>
        <section id="post-obra">
          <div class="wrapper wrapper--w780">
            <div class="card card-3">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Registration Info</h2>
                <form method="POST">
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3 js-datepicker"
                      type="text"
                      placeholder="Birthdate"
                      name="birthday"
                    />
                    <i
                      class="zmdi zmdi-calendar-note input-icon js-btn-calendar"
                    ></i>
                  </div>
                  <div class="input-group">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select
                        name="gender"
                        tabindex="-1"
                        class="select2-hidden-accessible"
                        aria-hidden="true"
                      >
                        <option disabled="disabled" selected="selected"
                          >Gender</option
                        >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option> </select
                      ><span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        style="width: 69px;"
                        ><span class="selection"
                          ><span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-labelledby="select2-gender-o2-container"
                            ><span
                              class="select2-selection__rendered"
                              id="select2-gender-o2-container"
                              title="Gender"
                              >Gender</span
                            ><span
                              class="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span
                        ><span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span
                      ></span>
                      <div class="select-dropdown"></div>
                    </div>
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Phone"
                      name="phone"
                    />
                  </div>
                  <div class="p-t-10">
                    <button class="btn btn--pill btn--green" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="post-serv"></section>
        <section id="post-insp">
          <div class="insp-post-cont">
            <form>
              <textarea
                name="message"
                rows="3"
                class="question"
                id="msg"
                required
                autocomplete="off"
              ></textarea>
              <label for="msg"
                ><span class="question">O que te inspira?</span></label
              >
              <input type="submit" value="Postar" id="submit" />
            </form>
            <div class="img-pick-cont">
              <img id="image-picked" />
              <div class="pick-file-cont">
                <div class="image-upload">
                  <label for="file-input">
                    <img src="/src/assets/images/clip.svg" />
                  </label>

                  <input id="file-input" type="file" />
                </div>
              </div>
            </div>
          </div>
          <div id="background-wrap" class="white-6">
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
        </section>
      </div>
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
  }
};
</script>
