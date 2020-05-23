<template>
  <main>
    <div id="container-post">
      <link rel="stylesheet" href="/src/assets/css/post.css" />
      <title>P O S T</title>
      <div id="fullpage"  style="display: none;"><div class="section"><div class="time-circle"><div class="sun"></div> <div class="moon"><div></div> <div></div> <div></div></div> <div class="stars"><div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div></div> <div class="water"></div></div></div></div>
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
        <section id="post-obra-img" class="white-6">
          <div class="return-btn filter-invert" id="to-btn-cont-from-obra"></div>
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-1"
                src="/src/assets/images/car-1.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-2"
                src="/src/assets/images/car-2.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-3"
                src="/src/assets/images/car-3.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-4"
                src="/src/assets/images/car-4.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-5"
                src="/src/assets/images/car-5.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-6"
                src="/src/assets/images/car-6.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-7"
                src="/src/assets/images/car-7.jpg"
              />
              <span class="remove-img"></span>
            </li>
            <li class="img-list-item">
              <img
                class="img-inner"
                id="obra-8"
                src="/src/assets/images/car-8.jpg"
              />
              <span class="remove-img"></span>
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload">
              <input type="file" class="upload" id="obra-picker"/>
              <span>Escolher Imagens</span>
            </div>
            <div id="go-on-btn-obra" class="go-on-btn black-to-white active-tab-p border-bottom-wh">Continuar</div>
          </div>
        </section>
        <section id="post-serv-img" class="white-6">
          <div class="return-btn filter-invert" id="to-btn-cont-from-serv"></div>
          <ul class="img-list">
            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-1"
                src="/src/assets/images/car-1.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-2"
                src="/src/assets/images/car-2.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-3"
                src="/src/assets/images/car-3.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-4"
                src="/src/assets/images/car-4.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-5"
                src="/src/assets/images/car-5.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-6"
                src="/src/assets/images/car-6.jpg"
              />
              <span class="remove-img"></span>
            </li>

            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-7"
                src="/src/assets/images/car-7.jpg"
              />
              <span class="remove-img"></span>
            </li>
            <li class="img-list-item">
              <img
                class="img-inner"
                id="serv-8"
                src="/src/assets/images/car-8.jpg"
              />
              <span class="remove-img"></span>
            </li>
          </ul>
          <div class="pick-file-cont">
            <div class="fileUpload"> 
              <input type="file" class="upload" id="serv-picker"/>
              <span>Escolher Imagens</span>
            </div>
            <div id="go-on-btn-serv" class="go-on-btn black-to-white active-tab-p border-bottom-wh">Continuar</div>
          </div>
        </section>
        <section id="post-obra" class="white-6">
          <div class="return-btn filter-invert" id="to-pick-img-from-obra"></div>
          <div class="wrapper wrapper--w780">
            <div class="card card-3 white-7">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title black-to-white">Dados da Postagem</h2>
                <form method="POST">
                  <div class="input-group">
                    <input
                      class="input--style-3 black-to-white"
                      type="text"
                      placeholder="Título"
                      name="name"
                      maxlength="40"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3 js-datepicker black-to-white"
                      type="text"
                      placeholder="Dados Técnicos"
                      name="birthday"
                      maxlength="140"
                      required
                    />
                    <i
                      class="zmdi zmdi-calendar-note input-icon js-btn-calendar"
                    ></i>
                  </div>
                  <div class="input-group black-to-white">
                    <textarea
                      class="input--style-3 text-area-desc"
                      placeholder="Descrição"
                      rows="1"
                    ></textarea>
                  </div>
                  <div class="input-group black-to-white">
                    <div class="select black-to-white">
                      <select name="slct" id="slct">
                        <option
                          title="Arte Digital"
                          value="Arte Digital"
                          selected="selected"
                          >Arte Digital</option
                        >
                        <option title="Arquitetura" value="Arquitetura"
                          >Arquitetura</option
                        >
                        <option title="Cinema" value="Cinema">Cinema</option>
                        <option title="Escultura" value="Escultura"
                          >Escultura</option
                        >
                        <option title="Fotografia" value="Fotografia"
                          >Fotografia</option
                        >
                        <option title="Literatura" value="Literatura"
                          >Literatura</option
                        >
                        <option title="Música" value="Música">Música</option>
                        <option title="Pintura" value="Pintura">Pintura</option>
                        <option title="Teatro" value="Teatro">Teatro</option>
                        <option title="Teatro" value="Teatro">Dança</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group" id="inp-gp-no-border">
                    <div class="dropdown">
                      <div class="input-group" id="inp-gp-no-border-2">
                        <div class="select black-to-white" id="search-select">
                          Selecione Categorias
                        </div>
                      </div>
                      <div id="myDropdown" class="dropdown-content">
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInput"
                          required
                        />
                        <a class="sel-cat">About</a>
                        <a class="sel-cat">Base</a>
                        <a class="sel-cat">Blog</a>
                        <a class="sel-cat">Contact</a>
                        <a class="sel-cat">Custom</a>
                        <a class="sel-cat">Support</a>
                        <a class="sel-cat">Tools</a>
                      </div>
                    </div>
                  </div>
                  <div class="input-group border-bottom-7" id="inp-gp-no-border-3">
                    <div class="add-tags-cont">
                      <p id="tag-1">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 1"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-2">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 2"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-3">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 3"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-4">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 4"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-5">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 5"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="plus-tag">
                        <span class="input">
                          <img src="/src/assets/images/plus-sign.png" class="plus-ico">
                        </span>
                      </p>
                      <p id="minus-tag">
                        <span class="input">
                          <img src="/src/assets/images/minus-icon.svg" class="plus-ico">
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="p-t-10">
                    <button class="btn btn--pill btn--green" type="submit" id="sub-obra">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div> 
          </div>
        </section>
        <section id="post-serv" class="white-6">
          <div class="return-btn filter-invert" id="to-pick-img-from-serv"></div>
          <div class="wrapper wrapper--w780">
            <div class="card card-3 white-7">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Dados da Postagem</h2>
                <form method="POST">
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Título"
                      name="name"
                      maxlength="40"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3 js-datepicker"
                      type="text"
                      placeholder="Curta Descrição"
                      name="birthday"
                      maxlength="370"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <textarea
                      class="input--style-3 text-area-desc"
                      placeholder="Descrição"
                      rows="1"
                    ></textarea>
                  </div>
                  <div class="input-group">
                    <div class="select">
                      <select name="slct" id="slct">
                        <option
                          title="Arte Digital"
                          value="Arte Digital"
                          selected="selected"
                          >Arte Digital</option
                        >
                        <option title="Arquitetura" value="Arquitetura"
                          >Arquitetura</option
                        >
                        <option title="Cinema" value="Cinema">Cinema</option>
                        <option title="Escultura" value="Escultura"
                          >Escultura</option
                        >
                        <option title="Fotografia" value="Fotografia"
                          >Fotografia</option
                        >
                        <option title="Literatura" value="Literatura"
                          >Literatura</option
                        >
                        <option title="Música" value="Música">Música</option>
                        <option title="Pintura" value="Pintura">Pintura</option>
                        <option title="Teatro" value="Teatro">Teatro</option>
                        <option title="Teatro" value="Teatro">Dança</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group" id="inp-gp-no-border">
                    <div class="dropdown">
                      <div class="input-group" id="inp-gp-no-border-2">
                        <div class="select black-to-white" id="search-select-serv">
                          Selecione Categorias
                        </div>
                      </div>
                      <div id="myDropdown-serv" class="dropdown-content">
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInput-serv"
                        />
                        <a class="sel-cat">About</a>
                        <a class="sel-cat">Base</a>
                        <a class="sel-cat">Blog</a>
                        <a class="sel-cat">Contact</a>
                        <a class="sel-cat">Custom</a>
                        <a class="sel-cat">Support</a>
                        <a class="sel-cat">Tools</a>
                      </div>
                    </div>
                  </div>
                  <div class="input-group border-bottom-7" id="inp-gp-no-border-3">
                    <div class="add-tags-cont">
                      <p id="tag-serv-1">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 1"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-2">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 2"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-3">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 3"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-4">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 4"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="tag-serv-5">
                        <span class="input">
                          <input
                            type="text"
                            placeholder="Tag 5"
                            maxlength="40"
                          />
                          <span></span>
                        </span>
                      </p>
                      <p id="plus-tag-serv">
                        <span class="input">
                          <img src="/src/assets/images/plus-sign.png" class="plus-ico">
                        </span>
                      </p>
                      <p id="minus-tag-serv">
                        <span class="input">
                          <img src="/src/assets/images/minus-icon.svg" class="plus-ico">
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="p-t-10">
                    <button class="btn btn--pill btn--green" id="sub-serv">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="post-insp" class="white-6">
          <div class="insp-post-cont white-7">
            <form>
              <textarea
                name="message"
                rows="3"
                class="question black-to-white"
                id="msg"
                required
                autocomplete="off"
              ></textarea>
              <label for="msg"
                ><span class="question black-to-white">O que te inspira?</span></label
              >
              <button id="submit">Postar</button>
            </form>
            <div class="img-pick-cont">
              <img id="image-picked" />
              <div class="pick-file-cont-insp">
                <div class="image-upload">
                  <label for="file-input">
                    <img src="/src/assets/images/clip.svg"/>
                  </label>

                  <input id="file-input" type="file"/>
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
        <meu-small-footer></meu-small-footer>
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
import SmallFooter from "../shared/small-footer/SmallFooter.vue";

export default {
  components: {
    "meu-menu-bar": MenuBar,
    "meu-menu-items": MenuItems,
    "meus-contatos": Contatos,
    "meu-mouse": Mouse,
    "meu-footer": Footer,
    "meu-small-footer": SmallFooter,
    "meu-dark-mode": DarkMode
  }
};
</script>
