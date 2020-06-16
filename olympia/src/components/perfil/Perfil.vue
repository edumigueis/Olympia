<template>
  <main>
    <div id="container-perfil">
      <title>P E R F I L</title>
      <link
        rel="shortcut icon"
        importance="high"
        href="/src/assets/images/page-ico.png"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <link rel="stylesheet" href="/src/assets/css/perfil.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

      <div class="container-profile">
        <div class="bg"></div>
        <div id="conf-modal" style="display: none;">
          <div class="prop-conf-modal">
            <div class="modal-img-conf">
              <img src="/src/assets/images/confirm-modal-img.png" />
            </div>
            <div class="conf-modal-part">
              <div class="confirm-del">
                <div><a class="close-mod-conf"></a></div>
              </div>
              <p id="conf-message">
                Ahh não se vá! Você tem certeza que deseja deletar sua conta?
                Essa ação não pode ser desfeita.
              </p>
              <div class="btn-conf-wrapper">
                <button
                  id="cancel-conf"
                  class="btn-del"
                  v-on:click="cancelAction()"
                >
                  Cancelar
                </button>
                <button
                  id="confirm-prof-alt"
                  class="btn-del"
                  v-on:click="apagarConta()"
                >
                  Deletar
                </button>
                <button
                  id="cancel-conf"
                  class="btn-leave"
                  style="display: none"
                  v-on:click="cancelAction()"
                >
                  Cancelar
                </button>
                <button
                  id="confirm-prof-alt"
                  class="btn-leave"
                  style="display: none"
                  v-on:click="sair()"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="profile">
          <div class="title-content">
            <h1 class="title">Seu <br />Perfil</h1>
          </div>
          <div class="info-profile white-2 black-to-white">
            <div class="user-pic">
              <img class="img-profile" />
            </div>
            <div class="info-user">
              <div class="info-1">
                <h1 class="name-user"></h1>
                <h2 class="user"></h2>
                <div class="info-estatisticas">
                  <p class="seguindo"></p>
                  <p class="seguidores"></p>
                  <p class="publicacoes"></p>
                </div>
              </div>
              <div class="info-2">
                <a class="link-ico"
                  ><img src="/src/assets/images/edit.png" class="img-ico"
                /></a>
              </div>
            </div>
          </div>
          <main ontouchstart class="tab-bar" style="width: 23vw !important">
            <nav class="tab-link">
              <a class="tab-link-a sobre-mim" style="width: 50%!important"
                >Sobre mim</a
              >
              <a class="tab-link-a curtidas" style="display: none">Curtidas</a>
              <a class="tab-link-a salvos" style="display: none">Salvos</a>
              <a class="tab-link-a configuracoes" style="width: 50%!important"
                >Configurações</a
              >
              <hr />
            </nav>
          </main>
        </div>
        <div class="container-wrap">
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7)"
                  class="fill fill-1"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                  class="fill fill-2"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                  class="fill fill-3"
                />
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="7"
                  fill="#fff"
                  class="fill fill-4"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="perfil-content white-4">
          <div class="sobre-mim-content content-perfil white-6 black-to-white">
            <hr class="color-verify sobre-hr" />
            <h1 class="title-content-config black-to-white">
              Mais sobre mim...
            </h1>
            <div class="div-info-perfil">
              <p class="bio black-to-white"></p>
              <p class="biografia black-to-white"></p>
              <button class="alterar btnPerfil">Alterar biografia</button>
            </div>
            <h1 class="title-content-config black-to-white">
              Suas publicações...
            </h1>
            <div class="div-scroll div-scroll-sobre"></div>
          </div>
          <div class="curtidas-content content-perfil white-6 black-to-white">
            <hr class="color-verify curtidas-hr" />
            <h1 class="title-content-config black-to-white">
              Confira as suas curtidas...
            </h1>
            <div class="div-scroll div-scroll-curtidas">
              <div class="slide__content">
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/perfil" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321" id="0post-cur">
                          <div class="after"></div>
                          <img
                            src="https://i.pinimg.com/originals/bd/1b/82/bd1b82378029dfc8c235015aba800cd5.jpg"
                            alt="sq-sample26"
                          />
                          <figcaption class="figcaption">
                            <i class="fas fa-arrow-right"></i>
                            <div class="name-of-prof">
                              <a href="/#/perfil" class="name-of-prof-link"
                                >Luna Dias</a
                              >
                            </div>
                            <h2>Outter Seas</h2>
                            <div class="categories-cont-on-feed">
                              <div class="cat-on-feed paint">Pintura</div>
                              <div class="cat-on-feed paint">Tinta Óleo</div>
                              <div class="cat-on-feed paint">Arte Moderna</div>
                              <div class="cat-on-feed pers">Oceano</div>
                              <div class="cat-on-feed pers">Azul</div>
                              <div class="cat-on-feed paint">Brushed</div>
                              <div class="cat-on-feed pers">
                                Fantasy Landscape
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
                        <div class="stage stage-btn">
                          <button class="trigger">ver mais...</button>
                        </div>
                        <div class="stage star-stage">
                          <a class="magic ">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage heart-stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="salvos-content content-perfil white-6 black-to-white">
            <hr class="color-verify salvos-hr" />
            <h1 class="title-content-config black-to-white">
              Publicações salvas... (só você pode ver isto)
            </h1>
            <div class="div-scroll div-scroll-salvos">
              <div class="slide__content">
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/perfil" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321" id="0post-sal">
                          <div class="after"></div>
                          <img
                            src="https://i.pinimg.com/originals/bd/1b/82/bd1b82378029dfc8c235015aba800cd5.jpg"
                            alt="sq-sample26"
                          />
                          <figcaption class="figcaption">
                            <i class="fas fa-arrow-right"></i>
                            <div class="name-of-prof">
                              <a href="/#/perfil" class="name-of-prof-link"
                                >Luna Dias</a
                              >
                            </div>
                            <h2>Outter Seas</h2>
                            <div class="categories-cont-on-feed">
                              <div class="cat-on-feed paint">Pintura</div>
                              <div class="cat-on-feed paint">Tinta Óleo</div>
                              <div class="cat-on-feed paint">Arte Moderna</div>
                              <div class="cat-on-feed pers">Oceano</div>
                              <div class="cat-on-feed pers">Azul</div>
                              <div class="cat-on-feed paint">Brushed</div>
                              <div class="cat-on-feed pers">
                                Fantasy Landscape
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
                        <div class="stage stage-btn">
                          <button class="trigger">ver mais...</button>
                        </div>
                        <div class="stage star-stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage heart-stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="configuracoes-content content-perfil white-6 black-to-white"
          >
            <hr class="color-verify config-hr" />
            <h1 class="title-content-config black-to-white">
              Mude o efeito da capa...
            </h1>
            <section class="config-section">
              <div class="div-capa">
                <input
                  type="radio"
                  id="control_01"
                  name="select"
                  value="1"
                  checked
                />
                <label for="control_01" class="label-capa colorful">
                  <h2>COLORFUL</h2>
                  <p>
                    Que tal uma animação bem colorida para adoçar seu dia??
                  </p>
                </label>
              </div>
              <div class="div-capa black-and-white-capa">
                <input type="radio" id="control_02" name="select" value="2" />
                <label class="label-capa" for="control_02">
                  <h2>B&W</h2>
                  <p>
                    Ou, então, em preto e branco?
                  </p>
                </label>
              </div>
              <div class="div-capa">
                <input type="radio" id="control_03" name="select" value="3" />
                <label class="label-capa black" for="control_03">
                  <h2>BLACK</h2>
                  <p>
                    Tá, então vamos no pretinho básico.
                  </p>
                </label>
              </div>
            </section>
            <div class="btnsPerfil">
              <button
                id="del-acc-btn"
                v-on:click="showConfModal('del')"
                class="apagar btnPerfil"
              >
                Apagar conta
              </button>
              <button
                id="leave-btn"
                v-on:click="showConfModal('leave')"
                class="sair btnPerfil"
              >
                Sair
              </button>
            </div>
          </div>
          <div class="modal-form">
            <div class="close-modal">
              <img
                class="close-img close-image close-img-modal"
                src="/src/assets/images/x.png"
              />
            </div>

            <div class="alterar-form">
              <section class="signup">
                <div class="container dark-register-div">
                  <div class="signup-content">
                    <div class="signup-form">
                      <h2 class="form-title black-to-white">Alterar dados</h2>
                      <p class="complete-p-alt-perfil">
                        Seus dados foram alterados com sucesso!
                      </p>
                      <form class="register-form">
                        <div class="form-group">
                          <label for="name">
                            <div class="gray-n-imp">
                              <i
                                class="zmdi dark-register-ico zmdi-account material-icons-name"
                                style="margin-top: 5.5px"
                              ></i>
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
                        <span class="err-msg" id="name-err-msg"
                          >Preencha com o nome completo.</span
                        >
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
                            placeholder="Seu Nome de Usuário"
                            v-on:keyup="verificarUser()"
                            required
                          />
                        </div>
                        <span class="err-msg" id="user-err-msg"
                          >O username não pode conter nenhum caracter
                          especial.</span
                        >
                        <div class="form-group">
                          <label for="email">
                            <div class="gray-n-imp">
                              <i
                                class="zmdi dark-register-ico zmdi-email"
                                style="margin-top: 5.5px"
                              ></i>
                            </div>
                          </label>
                          <input
                            class="dark-register-input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Seu Email"
                            v-on:focusout="verificarEmail()"
                            required
                          />
                        </div>
                        <span class="err-msg" id="email-err-msg"
                          >O e-mail deve ter um @ seguido pelo domínio.</span
                        >
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
                            name="pass"
                            id="pass"
                            v-on:focusout="verificarPass()"
                            v-on:keyup="verificarPassKey()"
                            placeholder="Sua nova senha"
                          />
                        </div>
                        <span class="err-msg" id="pass-err-msg"
                          >A senha deve ter no mínimo 8 caracteres, números,
                          letras maiúsculas e minúsculas.</span
                        >
                        <div class="form-group">
                          <label for="re-pass">
                            <div class="is-same-cont gray-n-imp">
                              <i
                                class="zmdi dark-register-ico zmdi-lock-outline"
                                style="margin-top: 5.5px"
                              ></i>
                            </div>
                          </label>
                          <input
                            class="dark-register-input"
                            type="password"
                            name="re_pass"
                            id="re_pass"
                            v-on:keyup="verificarRePass()"
                            v-on:focusout="verificarRePassLeave()"
                            placeholder="Confirme sua nova senha"
                          />
                        </div>
                        <span class="err-msg" id="repass-err-msg"
                          >A senha colocada no campo acima deve ser a mesma que
                          essa.</span
                        >
                        <div class="form-group">
                          <label for="old-pass">
                            <div class="is-old-cont gray-n-imp">
                              <i
                                class="zmdi dark-register-ico zmdi-lock-outline"
                                style="margin-top: 5.5px"
                              ></i>
                            </div>
                          </label>
                          <input
                            class="dark-register-input"
                            type="password"
                            name="old_pass"
                            id="old_pass"
                            placeholder="Confirme sua senha antiga"
                            v-on:leave="confirmarSenhaAntiga()"
                            required
                          />
                        </div>
                        <span class="err-msg" id="repass-err-msg"
                          >Oops essa não é sua senha. Esqueceu sua senha?</span
                        >
                        <div class="form-group form-button">
                          <input
                            type="submit"
                            name="signup"
                            id="signup"
                            class="form-submit"
                            value="Alterar"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="form-group hexcolor">
                      <div
                        class="color-holder call-picker"
                        style="display: none"
                      ></div>

                      <label
                        id="ico-color"
                        for="hexcolor"
                        style="margin-top:-13px;margin-left:40px;"
                      >
                        <i class="zmdi dark-register-ico zmdi-palette"></i>
                      </label>
                      <input
                        class="dark-register-input"
                        type="text"
                        name="custom_color"
                        placeholder="#FFFFFF"
                        id="hexcolor"
                      />
                    </div>
                    <div
                      class="color-picker"
                      id="color-picker"
                      style="display: none"
                    >
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CC04FF"
                        style="background-color:#CC04FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f8b195"
                        style="background-color:#f8b195;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#f67280"
                        style="background-color:#f67280;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#c06c84"
                        style="background-color:#c06c84;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#6c5b7b"
                        style="background-color:#6c5b7b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#4480b0"
                        style="background-color:#4480b0;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#355c7d"
                        style="background-color:#355c7d;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99b898"
                        style="background-color:#99b898;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#fecea8"
                        style="background-color:#fecea8;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff847c"
                        style="background-color:#ff847c;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#e84a5f"
                        style="background-color:#e84a5f;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#2a363b"
                        style="background-color:#2a363b;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF6633"
                        style="background-color:#FF6633;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#97a2ff"
                        style="background-color:#97a2ff;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#ff9cee"
                        style="background-color:#ff9cee;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#336666"
                        style="background-color:#336666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FCC133"
                        style="background-color:#FCC133;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#E12B38"
                        style="background-color:#E12B38;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#666666"
                        style="background-color:#666666;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#Ef3366"
                        style="background-color:#Ef3366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF9933"
                        style="background-color:#FF9933;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#99CC33"
                        style="background-color:#99CC33;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#669966"
                        style="background-color:#669966;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#66CCCC"
                        style="background-color:#66CCCC;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#3366FF"
                        style="background-color:#3366FF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#663366"
                        style="background-color:#663366;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#DAF7A6"
                        style="background-color:#DAF7A6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FFC300"
                        style="background-color:#FFC300;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FF5733"
                        style="background-color:#FF5733;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#C70039"
                        style="background-color:#C70039;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#900C3F"
                        style="background-color:#900C3F;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#FBD1D3"
                        style="background-color:#FBD1D3;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#F198AF"
                        style="background-color:#F198AF;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#EBB2D6"
                        style="background-color:#EBB2D6;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#9F81CD"
                        style="background-color:#9F81CD;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#766DC1"
                        style="background-color:#766DC1;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#298fca"
                        style="background-color:#298fca;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#026aa7"
                        style="background-color:#026aa7;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#AAEEAA"
                        style="background-color:#AAEEAA;"
                      ></li>
                      <li
                        class="color-item"
                        data-hex="#CCFF00"
                        style="background-color:#CCFF00;"
                      ></li>
                    </div>
                    <div class="signup-image">
                      <figure class="default-prof-user">
                        <img
                          src="/src/assets/images/user-ico.png"
                          alt="sing up image"
                          id="user-prof-image"
                        />
                      </figure>
                      <div id="user-let-img"></div>
                      <p class="signup-image-link">Escolher Foto de Perfil</p>
                      <img
                        class="bin"
                        src="/src/assets/images/trash-can-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div id="pick-image-modal" class="background-white-to-darkgray">
                <h3 class="file-input-title black-to-white">
                  Selecione uma Imagem
                </h3>
                <ul class="file-list">
                  <li class="file-item file-item-1">
                    <div class="input-file-cont">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        class="inputfile"
                        accept=".jpg, .jpeg, .png"
                      />
                      <label for="file" class="file-label"
                        >Escolher Imagem</label
                      >
                    </div>
                  </li>
                  <li class="file-item file-item-2">
                    <div class="circle">
                      <img
                        id="profile-pic"
                        src="/src/assets/images/user-ico.png"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="ui-widget-overlay"></div>
              <div class="error-modal">
                <div class="warn-image">
                  <img
                    class="warning-pic"
                    src="/src/assets/images/warn-ico.png"
                  />
                </div>
                <P class="warn"></P>
              </div>
            </div>

            <section class="signup bio-form">
              <div class="container dark-register-div container-bio">
                <div class="signup-content bio-signup-content">
                  <div class="signup-form">
                    <h2 class="form-title black-to-white">
                      Conte-nos mais...
                    </h2>
                    <form
                      class="register-form bio-register-form"
                      id="register-form"
                    >
                      <div class="form-group">
                        <label for="bio">
                          <div class="gray-n-imp">
                            <i
                              class="zmdi dark-register-ico zmdi-account material-icons-name"
                              style="margin-top: 5.5px"
                            ></i>
                          </div>
                        </label>
                        <input
                          class="dark-register-input"
                          type="text"
                          name="bio"
                          id="bio"
                          placeholder="Adicione sua bio"
                          maxlength="50"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="biografia" class="biografia-i">
                          <div class="gray-n-imp">
                            <i
                              class="zmdi dark-register-ico zmdi-account material-icons-name"
                              style="margin-top: 5.5px"
                            ></i>
                          </div>
                        </label>
                        <textarea
                          rows="8"
                          style="resize: none"
                          class="dark-register-input"
                          name="biografia"
                          id="biografia"
                          placeholder="Adicione sua biografia"
                          maxlength="1200"
                          required
                        ></textarea>
                      </div>
                      <div class="form-group form-button">
                        <button
                          type="submit"
                          name="signup"
                          class="form-submit"
                          id="submit-bio"
                          v-on:click="altBio()"
                        >
                          Salvar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
        <span class="close-mod">&times;</span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
        <meu-mouse></meu-mouse>
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
  data() {
    return {
      data: null
    };
  },
  methods: {
    verificarCampos() {
      setInterval(function() {
        if (!$("#container-cad-user").length) return;

        if ($("#name").val() == "") {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#user").val() == "") {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#email").val() == "") {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#pass").val() == "") {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#re_pass").val() == "") {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#pass").val() != $("#re_pass").val()) {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else if ($("#agree-term").is(":checked") == false) {
          document.getElementById("signup").disabled = true;
          $("#signup").css("opacity", "0.7");
          $("#signup").css("cursor", "unset");
        } else {
          document.getElementById("signup").disabled = false;
          $("#signup").css("opacity", "1");
          $("#signup").css("cursor", "pointer");
        }
      }, 1000);
    },
    verificarUser() {
      var user = $("#user").val();
      if (user == "") {
        return;
      }
      if (user.length > 29) {
        return;
      }
      if (!user.match(/^[a-z0-9_-]{1,30}$/gim)) {
        this.error("#user-err-msg");
        return;
      } else {
        this.remError("#user-err-msg");
      }
      $.ajax({
        type: "GET",
        url:
          "https://localhost:5001/api/Redirect/UserNameIsUsado/" +
          $("#user").val() +
          "",
        dataType: "json",
        contentType: "application/json",
        success: function(result) {
          console.log(result);
          if (result == true) {
            $("#user").css("border-bottom", "1px solid red");
            userValidado = false;
          } else {
            $("#user").css("border-bottom", "1px solid #999");
            userValidado = true;
          }
        },
        fail: function() {}
      });
    },
    error(elem) {
      $("" + elem).fadeIn();
      $("" + elem)
        .prev()
        .children("input")
        .css("border-color", "red");
      $("" + elem)
        .prev()
        .css("margin-bottom", "5px");
      $("" + elem)
        .next()
        .css("margin-top", "15px");
    },
    remError(elem) {
      $("" + elem).fadeOut();
      $("" + elem)
        .prev()
        .children("input")
        .css("border-color", "#999");
      $("" + elem)
        .prev()
        .css("margin-bottom", "25px");
      $("" + elem)
        .next()
        .css("margin-top", "0");
    },
    verificarPass() {
      var color = $(".locker-cont").css("background-color");
      if ($("#pass").val() == "") {
        $(".locker-cont").css("background-color", "transparent");
        color = "rgb(255, 255, 255)";
        this.remError("#pass-err-msg");
      } else if ($("#pass").val().length < 8) {
        this.error("#pass-err-msg");
      } else if (color == "rgb(237, 41, 57)") {
        this.error("#pass-err-msg");
      } else if (color == "rgb(255, 165, 0)") {
        this.error("#pass-err-msg");
      } else {
        this.remError("#pass-err-msg");
      }
    },
    verificarPassKey() {
      this.forcaSenha($("#pass").val());
      var color = $(".locker-cont").css("background-color");
      if (color == "rgb(230, 230, 0)" && $("#pass").val().length > 7) {
        this.remError("#pass-err-msg");
      }
      if (color == "rgb(46, 184, 46)" && $("#pass").val().length > 7) {
        this.remError("#pass-err-msg");
      }
    },
    verificarRePass() {
      if ($("#pass").val() != $("#re_pass").val()) {
        $(".is-same-cont").css("background-color", "rgb(237, 41, 57)");
        return;
      }
      if ($("#pass").val() == $("#re_pass").val() && $("#pass").val() != "") {
        $(".is-same-cont").css("background-color", "#2eb82e");
      }
      if ($("#pass").val() != $("#re_pass").val() && $("#pass").val() != "")
        $(".is-same-cont").css("background-color", "rgb(237, 41, 57)");
      if ($("#pass").val() == "") {
        $(".is-same-cont").css("background-color", "transparent");
      }
    },
    verificarRePassLeave() {
      if ($("#pass").val() == "") {
        this.remError("#repass-err-msg");
      }
      if ($("#pass").val() != $("#re_pass").val()) {
        this.error("#repass-err-msg");
      }
      if ($("#pass").val() == $("#re_pass").val() && $("#pass").val() != "") {
        this.remError("#repass-err-msg");
      }
      if ($("#pass").val() != $("#re_pass").val() && $("#pass").val() != "")
        this.error("#repass-err-msg");
    },
    forcaSenha(senha) {
      var forca = 0;

      var regLetrasMa = /[A-Z]/;
      var regLetrasMi = /[a-z]/;
      var regNumero = /[0-9]/;
      var regEspecial = /[!@#$%&*?]/;

      var tam = false;
      var tamM = false;
      var letrasMa = false;
      var letrasMi = false;
      var numero = false;
      var especial = false;

      if (senha.length >= 8) tam = true;
      if (senha.length >= 10) tamM = true;
      if (regLetrasMa.exec(senha)) letrasMa = true;
      if (regLetrasMi.exec(senha)) letrasMi = true;
      if (regNumero.exec(senha)) numero = true;
      if (regEspecial.exec(senha)) especial = true;

      if (tam) forca += 10;
      if (tamM) forca += 10;
      if (letrasMa) forca += 10;
      if (letrasMi) forca += 10;
      if (letrasMa && letrasMi) forca += 20;
      if (numero) forca += 20;
      if (especial) forca += 20;

      /*this.exibeForca(forca);*/
      var color,
        percent = 0;

      if (forca < 30) {
        color = "#ED2939";
        percent = 25;
      } else if (forca >= 30 && forca < 50) {
        color = "orange";
        percent = 50;
      } else if (forca >= 50 && forca < 80) {
        color = "#e6e600";
        percent = 75;
      } else {
        color = "#2eb82e";
        percent = 100;
      }

      $(".locker-cont").css("background-color", color);
    },
    verificarEmail() {
      var email = $("#email").val();
      if (email == "") {
        this.remError("#email-err-msg");
        return;
      }
      if (!this.validarEmail(email)) {
        this.error("#email-err-msg");
      } else {
        this.remError("#email-err-msg");
      }
    },
    validarEmail(emailp) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailp);
    },
    altBio() {
      event.preventDefault();
      var myObjectPubli = {
        bio: $("#bio").val(),
        biografia: $("#biografia").val(),
        idUsuario: parseInt(localStorage.userId)
      };
      alert($("#bio").val());
      alert($("#biografia").val());
      console.log(myObjectPubli);
      var jsonInput = JSON.stringify(myObjectPubli);
      console.log(jsonInput);
      jaFoiPostCadUser = true;
      $.ajax({
        type: "POST",
        url: "https://localhost:5001/api/Redirect/MudarBio",
        data: jsonInput,
        contentType: "application/json",
        success: function() {
          $(".success-msg").fadeIn();
          setTimeout(function() {
            $(".success-msg").animate({ left: -300 });
            $(".success-msg").fadeOut();
          }, 4000);
          $(".success-msg").css("left", "40px");
        },
        fail: function() {
          alert("deu erro");
        },
        dataType: "json"
      });
    },
    showConfModal(which) {
      if (which == "leave") {
        $("#footer").css("display", "none");
        $("#menu-bar").css("display", "none");
        $("#conf-modal").css("display", "block");
        $("#conf-message").text(
          "Você deseja mesmo sair? Esperamos que volte logo."
        );
        $(".confirm-del div").html(
          '<img src="/src/assets/images/leave-session.png" style="width: 100%">'
        );
        $(".confirm-del div").css("border", "none");
        $(".btn-leave").css("display", "block");
        $(".btn-del").css("display", "none");
      }
      if (which == "del") {
        $("#footer").css("display", "none");
        $("#menu-bar").css("display", "none");
        $("#conf-modal").css("display", "block");
      }
    },
    cancelAction() {
      $("#footer").css("display", "block");
      $("#menu-bar").css("display", "block");
      $("#conf-modal").css("display", "none");
      $(".confirm-del div").css("border", "2px solid rgb(206, 48, 82)");
      $(".confirm-del div").html('<a class="close-mod-conf"></a>');
      $("#conf-message").text(
        "Ahh não se vá! Você tem certeza que deseja deletar sua conta? Essa ação não pode ser desfeita."
      );
      $("#confirm-prof-alt").text("Deletar");
    },
    apagarConta() {
      localStorage.clear();
      window.$cookies.remove("user_session");
      location.href = "/#/";
    },
    sair() {
      localStorage.clear();
      window.$cookies.remove("user_session");
      location.href = "/#/login";
    },
    alterarConta() {
      var biografiaAtual;
      var bioAtual;

      $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        url:
          "https://localhost:5001/api/Redirect/Biografia" + localStorage.userId,
        complete: function(jqXHR, status) {
          if (status == "success") {
            biografiaAtual = $.parseJSON(jqXHR.responseText);
            $.ajax({
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              url:
                "https://localhost:5001/api/Redirect/Bio" + localStorage.userId,
              complete: function(jqXHR, status) {
                if (status == "success") {
                  bioAtual = $.parseJSON(jqXHR.responseText);
                } else {
                  location.href = "/#/error";
                }
              }
            });
          } else {
            location.href = "/#/error";
          }
        }
      });

      var myObject = {
        idUsuario: localStorage.userId,
        nome: $("#name").val(),
        userName: $("#user").val(),
        email: $("#email").val(),
        senha: $("#pass").val(),
        foto: "" + valorFoto,
        biografia: biografiaAtual + "",
        bio: bioAtual + "",
        configs: "{'menu':0,'deslig':0,'login':0,'capa':0,'dark':0}",
        seguindo: "{}",
        seguidores: "{}"
      };

      var jsonInput = JSON.stringify(myObject);

      jaFoiPostCadUser = true;

      $.ajax({
        type: "PUT",
        data: jsonInput,
        dataType: "json",
        contentType: "application/json",
        url: "https://localhost:5001/api/Redirect/AlterarDados",
        complete: function(code) {
          if (code.status === 200) {
            $("complete-p-alt-perfil").fadeIn();
            setTimeout(() => {
              $("complete-p-alt-perfil").fadeOut();
            }, 2000);
          } else {
            $(".error-modal").css("display", "block");
            $(".error-modal").css("opacity", "1");
            $(".ui-widget-overlay").css("display", "block");
            $(".warn").html(
              "Algúm dado foi fornecido incorretamente. Ou ocorreu um problema com o servidor. Tente novamente."
            );
            $("#name").val("");
          }
        }
      });
    },
    getPublicacoes() {
      var codigo = location.href.substring(30);
      $.ajax({
        url: "https://localhost:5001/api/redirect/AllObrasUser/" + codigo,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var conteudoDiv =
              '<div class="masonry-item" id="' +
              index +
              '-obra"><div class="masonry-content"><div class="prof-cont-feed white-7"><div class="prof-img-cont"><img class="prof-img-prop" id="prof-img-prop-obra-' +
              index +
              '" src=""/></div> <a href="/#/profile/" class="prof-name-det black-to-white" id="obra-prof-name-link-' +
              index +
              '"></a><div class="prof-bio-det text-gray" id="obra-prof-bio-' +
              index +
              '">Bio</div></div>';
            conteudoDiv +=
              '<div class="post-img-cont"><a href="/#/obra/' +
              item.idObra +
              '"><figure class="snip1321" id="' +
              index +
              '-post"><div class="after"></div> <img id="obra-img-' +
              index +
              '" src="/src/assets/images/unloaded-img.jpeg"/>';
            conteudoDiv +=
              '<figcaption><i class="fas fa-arrow-right"></i><div class="name-of-prof"><a href="/#/perfil/" id="name-of-prof-link-' +
              index +
              '" class="name-of-prof-link">Name</a></div><h2>' +
              item.nome +
              '</h2><div class="categories-cont-on-feed"><div class="cat-on-feed paint">' +
              item.categorias[0] +
              '</div><div class="cat-on-feed paint">' +
              item.categorias[1] +
              '</div><div class="cat-on-feed pers">' +
              item.categorias[2] +
              '</div><div class="cat-on-feed pers">Azul</div><div class="cat-on-feed paint">' +
              item.categorias[3] +
              '</div><div class="cat-on-feed pers">' +
              item.categorias[5] +
              "</div></div></figcaption></figure></a>";
            conteudoDiv +=
              '<div class="interact-container"><div class="stage stage-btn"><button class="trigger">ver mais...</button></div><div class="stage"><a class="magic"><i class="fas fa-star"></i></a></div><div class="stage"><div class="heart"></div></div></div></div> </div></div>';
            $("#pub-prof-wrapper").append(conteudoDiv);
            $.ajax({
              url: "https://localhost:5001/api/redirect/Usuario/" + codigo,
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              success: function(result) {
                if (result.idUsuario != 0) {
                  if (result.foto.length > 20) {
                    $("#prof-img-prop-obra-" + index).attr(
                      "src",
                      result.foto + ""
                    );
                  } else {
                    $("#prof-img-prop-obra-" + index)
                      .parent()
                      .css("background-color", result.foto);
                    $("#prof-img-prop-obra-" + index)
                      .parent()
                      .append(
                        '<span class="letter-prof">' +
                          result.nome.substring(0, 1) +
                          "</span>"
                      );
                    $("#artist-profile-pic").attr("src", "");
                  }

                  $("#obra-prof-name-link-" + index).text(result.nome);

                  if (result.bio.length > 90) {
                    $("#obra-prof-bio-" + index).text(
                      result.bio.substring(0, 90) + "..."
                    );
                  } else {
                    $("#obra-prof-bio-" + index).text(result.bio);
                  }

                  $("#name-of-prof-link-" + index).text(result.nome);

                  $.ajax({
                    url:
                      "https://localhost:5001/api/redirect/FotosDaObra/" +
                      item.idObra,
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    beforeSend: function() {
                      $("#load-modal").addClass("loading");
                    },
                    success: function(data) {
                      $("#obra-img-" + index).attr("src", data[0]);
                    },
                    error: function(thrownError) {}
                  });
                }
              }
            });
          });
        }
      });
    }
  },
  mounted() {
    this.verificarCampos();
    this.getPublicacoes();
  },
  beforeCreate() {
    if (window.$cookies.isKey("user_cadastro")) {
      document.location.href = "/#/categorias";
    } else if (!window.$cookies.isKey("user_session")) {
      document.location.href = "/#/login";
    }
  },
  created() {
     $.ajax({
      type: "GET",
      dataType: "json",
      contentType: "application/json",
      url: "https://localhost:5001/api/Usuarios/" + localStorage.userId,
      complete: function(jqXHR, status) {
        if (status == 'success') {
          var result = $.parseJSON(jqXHR.responseText);
          $("#name").val(result.nome + "");
          $("#user").val(result.userName + "");
          $("#email").val(result.email + "");

          if ((result.foto + "").length > 10) {
            $("#user-prof-image").val(result.foto);
            $("#user-prof-image").css("display", "block");
            $(".prof-user-letter").css("display", "none");
            $("#user-let-img").css("display", "none");
            $('.hexcolor').css('display','none');
            $('.color-holder').css('display','none');
            $(".bin").css("display", "block");
          } 
          else {
            $("#user-prof-image").css("background", result.foto);
            $(".prof-user-letter").css("display", "block");
            $(".prof-user-letter").text((result.nome + "").substring(0, 1));
            $("#user-prof-image").css("display", "none");
            $("#user-let-img").css("display", "block");           
            $(".zmdi.zmdi-palette").fadeIn();
            $("#hexcolor").fadeIn();
            $(".default-prof-user").empty();
            var firstLet = null;
            firstLet = $("#name")
              .val()
              .charAt(0);
            firstLet = firstLet.toUpperCase();
            $(".bin").css("display", "none");
            $("#user-let-img").css("display", "block");
            $(".hexcolor").css("display", "block");
            $(".color-holder").css("display", "block");
            $("#user-let-img").html(
              "<p class='prof-user-letter'>" + firstLet + "</p>"
            );
            $(".signup-image").css("margin-top", 0);
            $("#user-let-img").css("margin-bottom", "60px");
          }
        } 
        else {
          location.href = "/#/error";
        }
      }
    });
  }
};
</script>
