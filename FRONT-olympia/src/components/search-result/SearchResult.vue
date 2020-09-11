<template>
  <main>
    <div id="container-search-result">
      <title>P E S Q U I S A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
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

      <section id="tab-page" class="white-7 border-bottom-0">
        <div class="search__container">
          <input
            type="text"
            class="search__input dark-search-input"
            name="pesquisa"
            placeholder="Pesquisar..."
            id="search"
            autocomplete="off"
            maxlength="300"
            v-on:keyup="pesquisar()"
            v-on:keyup.enter="btnSearch()"
          />
          <div
            class="search-button center-position dark-search-icon"
            v-on:click="btnSearch()"
          >
            <div class="search-icon"></div>
          </div>
        </div>

        <h1 id="page-name-on-tab" class="black-to-white">Principais</h1>
        <div id="tab-pages-cont">
          <div
            class="paginate-tab active-tab-p text-gray border-bottom-wh"
            id="to-slide-0"
          >
            Principais
          </div>
          <div
            class="paginate-tab text-gray border-bottom-wh"
            id="to-slide-1"
            v-on:click="searchObras()"
          >
            Obras
          </div>
          <div
            class="paginate-tab text-gray border-bottom-wh"
            id="to-slide-2"
            v-on:click="searchServ()"
          >
            Aulas
          </div>
          <div
            class="paginate-tab text-gray border-bottom-wh"
            id="to-slide-3"
            v-on:click="searchPosts()"
          >
            Postagens
          </div>
          <div
            class="paginate-tab text-gray border-bottom-wh"
            id="to-slide-4"
            v-on:click="searchUsers()"
          >
            Users
          </div>
        </div>

        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" class="brd">
              <div id="selected-value">
                <span class="selected-value-prop">Ordenar por...</span>
              </div>
              <div id="chevrons">
                <i class="fas fa-chevron-up"></i>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="options">
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i class="fa fa-calendar-plus"></i>
                <span class="label">Mais Recente</span>
                <span class="opt-val">Mais Recente</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <i class="fa fa-calendar-minus"></i>
                <span class="label">Menos Recente</span>
                <span class="opt-val">Menos Recente</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i class="fa fa-star"></i>
                <span class="label">Mais Relevante</span>
                <span class="opt-val">Mais Relevane</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i class="fa fa-star-half"></i>
                <span class="label">Menos Relevante</span>
                <span class="opt-val">Menos Relevante</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i class="fa fa-heart"></i>
                <span class="label">Mais Curtidas</span>
                <span class="opt-val">Mais Curtidas</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i class="far fa-heart"></i>
                <span class="label">Menos Curtidas</span>
                <span class="opt-val">Menos Curtidas</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </form>
        <div class="right-tab-control">
          <img
            id="list-tab-ut"
            class="tab-page-ut white-icon"
            src="/src/assets/images/list-ico.png"
          />
        </div>
      </section>
      <section id="search-result">
        <div class="slider">
          <div
            class="slider__slide slider__slide--active slider-1"
            data-slide="1"
          >
            <div class="bg"></div>
            <div class="container-routes">
              <h1 class="title-routes">
                Rotas
                <div class="arrow arrow-1"></div>
                <div class="arrow arrow-2"></div>
              </h1>
              <div class="routes" id="routes-wrapper">
                <!--<a href="/#/artes" class="link-route">
                  <div class="6-route route">
                    <h1 class="title-route">Home</h1>
                    <div class="img-wp">
                      <div class="arrow"></div>
                    </div>
                  </div>
                </a>-->
              </div>
              <h1 class="title-routes title-destaques">
                #Top12<img
                  src="/src/assets/images/heart-image.png"
                  class="heart-title"
                />
                <div class="arrow arrow-3"></div>
                <div class="arrow arrow-4"></div>
              </h1>
              <div class="destaques">
                <div class="1-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://images.squarespace-cdn.com/content/v1/57762ed29f7456e1b6e8febd/1580403012581-RD72EGBP08TA7V50Z5WU/ke17ZwdGBToddI8pDm48kFJo1x-0SDSXZIbvHdtV7zB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyTk732yQxGFdJ5_SwaFk5-9rqZMSEJs3dyKz5eVslWaTA/2013+12+JIMI+Hendrix%2C+190x190cm%2C+Acrylic+on+Canvas.jpg?format=500w"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"El Hyomaro"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Gúsman Aretor
                          </h1>
                          <h1 class="top-obra-destaque">#1</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://images.squarespace-cdn.com/content/57b0ba972e69cf0f156abee2/1567426208977-TVWFZ3XGXKPPNNMYEZFK/Alea-Pinar-Du-Pre-celia-2-Ransom-Art-Gallery.jpg?format=1000w&content-type=image%2Fjpeg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"Woman C"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Dream
                          </h1>
                          <h1 class="top-obra-destaque">#2</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="3-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://i.ytimg.com/vi/cDotDayKH70/maxresdefault.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"ReReAdd"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Myra Buli
                          </h1>
                          <h1 class="top-obra-destaque">#3</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://st3.depositphotos.com/6367796/12918/v/950/depositphotos_129187834-stock-illustration-pop-art-woman-lips.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">"persistance"</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Luna Dias
                          </h1>
                          <h1 class="top-obra-destaque">#4</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="2-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://theartivity.com/wp-content/uploads/2019/08/elements-of-art-6.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">US</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Jennie Hotkins
                          </h1>
                          <h1 class="top-obra-destaque">#5</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://www.petitplat.fr/cust/wp-content/uploads/2019/10/Collab_MilesJohnston_August-2@2x.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">alter-Ego</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por John Amir
                          </h1>
                          <h1 class="top-obra-destaque">#6</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="4-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://2.bp.blogspot.com/-BWDCUbomGYM/W-7ZGyz8aDI/AAAAAAAAa20/iDxNOwpnDs0bJ1zAzmn5owZfD_1CjoVUgCLcBGAs/s1600/papel-de-parede-para-celular.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">Series 12</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Myra Buli
                          </h1>
                          <h1 class="top-obra-destaque">#7</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://i.pinimg.com/originals/41/cb/eb/41cbeb1f39398395118b243c8dc12470.png"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">Wallpaper X</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Luna Dias
                          </h1>
                          <h1 class="top-obra-destaque">#8</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="5-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://images.squarespace-cdn.com/content/v1/57762ed29f7456e1b6e8febd/1580403012581-RD72EGBP08TA7V50Z5WU/ke17ZwdGBToddI8pDm48kFJo1x-0SDSXZIbvHdtV7zB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyTk732yQxGFdJ5_SwaFk5-9rqZMSEJs3dyKz5eVslWaTA/2013+12+JIMI+Hendrix%2C+190x190cm%2C+Acrylic+on+Canvas.jpg?format=500w"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">Hanur Watch</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Myra Buli
                          </h1>
                          <h1 class="top-obra-destaque">#9</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://imaginetheworld.co/wp-content/uploads/Fluid-Art-Clock-Ocean-Clock-30cm-1.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">memory</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Luna Dias
                          </h1>
                          <h1 class="top-obra-destaque">#10</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="6-container-destaque container-destaque">
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">PhotoShoot</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Gemini
                          </h1>
                          <h1 class="top-obra-destaque">#11</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/#/detalhes" class="link-route">
                    <div class="destaque-content">
                      <div class="flex-image-destaque">
                        <img
                          src="https://i.pinimg.com/736x/b2/a1/ed/b2a1ed6d29acffafa9e398ab28d05d1f.jpg"
                          class="img-destaque"
                        />
                      </div>
                      <div class="info-obra-destaque">
                        <div class="inline-div">
                          <h1 class="title-obra-destaque">Flower Per</h1>
                        </div>
                        <div class="inline-div">
                          <h1 class="pessoa-obra-destaque">
                            por Claire Dingitz
                          </h1>
                          <h1 class="top-obra-destaque">#12</h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slider__slide slide-2" data-slide="2">
            <div class="bg"></div>
            <div class="container-obras-search" id="obra-res-wrapper">
              <!--<a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafesssss ssstán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosasdddd sdsdsdsdsdsd ddddddddddsd
                        sdsdsdsdsds
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <div class="arrow load-arrow arrow-obras-search"></div>-->
            </div>
          </div>
          <div class="slider__slide" data-slide="3">
            <div class="bg"></div>
            <div class="container-aulas-search" id="serv-res-wrapper">
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img
                      src="https://www.mokaclube.com.br/wp-content/uploads/2019/09/latteart.png"
                      class="img-destaque"
                    />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafe Making"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Luana Farias
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <!--<a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#/detalhes" class="link-route">
                <div class="destaque-content obra-user-service-post-content">
                  <div class="flex-image-destaque">
                    <img src="a" class="img-destaque" />
                  </div>
                  <div class="info-obra-destaque info-obra-post-service">
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="title-obra-destaque title-obra-post-service">
                        "El Cafetán"
                      </h1>
                    </div>
                    <div class="inline-div inline-div-obra-post-service">
                      <h1 class="pessoa-obra-destaque pessoa-obra-post-service">
                        por Célio Lima Barbosa
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
              <div class="arrow load-arrow arrow-aulas-search"></div>-->
            </div>
          </div>
          <div class="slider__slide" data-slide="4">
            <div class="bg"></div>
            <div class="container-aulas-search" id="post-res-wrapper">
              <div class="arrow load-arrow arrow-aulas-search"></div>
            </div>
          </div>
          <div class="slider__slide" data-slide="5">
            <div class="bg"></div>
            <div class="container-aulas-search" id="user-res-wrapper">
              <!--<div class="arrow load-arrow arrow-aulas-search"></div>-->
            </div>
          </div>
          <div class="slider__indicators"></div>
        </div>
      </section>

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
  data: function() {
    return {
      status: String
    };
  },
  methods: {
    searchRoutes(key) {
      var routes = [
        "Sobre",
        "Ajuda",
        "Perfil",
        "Sugestoes",
        "FeedBack",
        "Eventos",
        "Artes"
      ];
      $("#routes-wrapper").empty();
      $(".title-routes").css("display", "flex");
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].toLowerCase().includes(key.toLowerCase())) {
          var contDiv =
            '<a href="/#/' +
            routes[i] +
            '" class="link-route"><div class="5-route route"><h1 class="title-route">' +
            routes[i] +
            '</h1><div class="img-wp"><div class="arrow"></div></div></div></a>';
          $("#routes-wrapper").append(contDiv);
        }
      }
    },
    fillRoutes() {
      var routes = [
        "Sobre",
        "Ajuda",
        "Perfil",
        "Sugestoes",
        "FeedBack",
        "Eventos",
        "Artes"
      ];
      $(".title-routes").css("display", "flex");
      for (var i = 0; i < routes.length; i++) {
        var contDiv =
          '<a href="/#/' +
          routes[i] +
          '" class="link-route"><div class="5-route route"><h1 class="title-route">' +
          routes[i] +
          '</h1><div class="img-wp"><div class="arrow"></div></div></div></a>';
        $("#routes-wrapper").append(contDiv);
      }
    },
    pesquisar() {
      this.searchRoutes($("#search").val());
    },
    btnSearch() {
      switch (this.status) {
        case "obra":
          this.searchObras();
          break;
        case "serv":
          this.searchServ();
          break;
        case "user":
          this.searchUsers();
          break;
        case "post":
          this.searchPosts();
          break;
      }
    },
    searchObras() {
      this.status = "obra";
      var key = $("#search").val();
      if (key == "") return;
      $("#obra-res-wrapper").html("");
      $.ajax({
        type: "GET",
        url: "https://olympiaserver.ddns.net/api/obras/Search/" + key,
        contentType: "application/json",
        success: function(data) {
          console.log(data);
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="" class="img-destaque" id="repr-img-obra-' +
              index +
              '" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              item[2].split("+").join(" ") +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

            $("#obra-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url: "https://olympiaserver.ddns.net/api/usuarios/" + item[1],
              contentType: "application/json",
              success: function(res) {
                $("#by-person-identifier-" + index).text(
                  "por " + res.nome.split("+").join(" ")
                );
              },
              fail: function(error) {
                console.log(error);
                var erro =
                  '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
                $(".insp-post-cont").append(erro);
              },
              dataType: "json"
            });
            $.ajax({
              type: "GET",
              url: "https://olympiaserver.ddns.net/api/fotos/obra/" + item[0],
              contentType: "application/json",
              success: function(resFoto) {
                $("#repr-img-obra-" + index).attr("src", resFoto[0]);
              },
              fail: function(error) {
                console.log(error);
                var erro =
                  '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
                $(".insp-post-cont").append(erro);
              },
              dataType: "json"
            });
          });
        },
        fail: function(error) {
          console.log(error);
          var erro =
            '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
          $(".insp-post-cont").append(erro);
        },
        dataType: "json"
      });
    },
    searchServ() {
      this.status = "serv";
      var key = $("#search").val();
      if (key == "") return;

      $("#serv-res-wrapper").html("");
      $.ajax({
        type: "GET",
        url: "https://olympiaserver.ddns.net/api/servico/Search/" + key,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="" id="repr-img-serv-' +
              index +
              '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              item[2].split("+").join(" ") +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-serv-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

            $("#serv-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url: "https://olympiaserver.ddns.net/api/usuarios" + item[1],
              contentType: "application/json",
              success: function(res) {
                $("#by-person-serv-identifier-" + index).text(
                  "por " + res.nome.split("+").join(" ")
                );
              },
              fail: function(error) {
                console.log(error);
                var erro =
                  '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
                $(".insp-post-cont").append(erro);
              },
              dataType: "json"
            });
            $.ajax({
              type: "GET",
              url: "https://olympiaserver.ddns.net/api/fotos/Servico/" + item[0],
              contentType: "application/json",
              success: function(resFoto) {
                $("#repr-img-serv-" + index).attr("src", resFoto[0]);
              },
              fail: function(error) {
                console.log(error);
                var erro =
                  '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
                $(".insp-post-cont").append(erro);
              },
              dataType: "json"
            });
          });
        },
        fail: function(error) {
          console.log(error);
          var erro =
            '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
          $(".insp-post-cont").append(erro);
        },
        dataType: "json"
      });
    },
    searchUsers() {
      this.status = "user";
      var key = $("#search").val();
      if (key == "") return;
      $("#user-res-wrapper").html("");
      $.ajax({
        type: "GET",
        url: "https://olympiaserver.ddns.net/api/usuarios/Search/" + key,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            if (item[5].length > 20) {
              var contPost =
                '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="' +
                item[5] +
                '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
                item[1] +
                '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-user">' +
                item[7] +
                "</h1></div></div></div></a>";
            } else {
              var contPost =
                '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque" style="border-top-left-radius:16px; border-bottom-left-radius:16px; background-color: ' +
                item[5] +
                '"><img src="https://pngimg.com/uploads/letter_h/letter_h_PNG64.png" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
                item[1] +
                '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-user">' +
                item[7] +
                "</h1></div></div></div></a>";
            }

            $("#user-res-wrapper").append(contPost);
          });
        },
        fail: function(error) {
          console.log(error);
          var erro =
            '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
          $(".insp-post-cont").append(erro);
        },
        dataType: "json"
      });
    },
    searchPosts() {
      this.status = "post";
      var key = $("#search").val();
      if (key == "") return;
      $.ajax({
        type: "GET",
        url: "https://olympiaserver.ddns.net/api/publicacoes/search/" + key,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="' +
              item[4] +
              '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              item[2].substring(0, 20) +
              "..." +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

            $("#post-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url: "https://olympiaserver.ddns.net/api/usuarios/" + item[1],
              contentType: "application/json",
              success: function(res) {
                $("#by-person-identifier-" + index).text(
                  "por " + res.nome.split("+").join(" ")
                );
              },
              fail: function(error) {
                console.log(error);
                var erro =
                  '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
                $(".insp-post-cont").append(erro);
              },
              dataType: "json"
            });
          });
        },
        fail: function(error) {
          console.log(error);
          var erro =
            '<p class="error">Algo deu errado com sua postagem. Tente novamente mais tarde.</p>';
          $(".insp-post-cont").append(erro);
        },
        dataType: "json"
      });
    }
  },
  mounted() {
    this.fillRoutes();
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

<style scoped>
@font-face {
  font-family: "Calibre-Regular";
  src: url("/src/assets/fonts/calibri-7.ttf");
}

.container-obras-search,
.container-aulas-search,
.container-post-search,
.container-users-search{
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 30px;
  min-height: 300px;
}

.obra-user-service-post-content{
  width: 55vw!important;
  margin-bottom: 20px!important;
}

.title-obra-post-service{
  font-size: 2em!important;
  max-width: 100%!important;
}
.pessoa-obra-post-service{
  max-width: 100%!important;
  margin-left: 0!important;
}

@media only screen and (min-width:0px) and (max-width:500px){
  .title-obra-post-service{
    font-size: 1.2em!important;
  }
  .pessoa-obra-post-service{
    font-size: 0.7em!important;
  }
  .obra-user-service-post-content{
    width: 90vw!important;
  }
}

@media only screen and (min-width:500px) and (max-width:749px){
  .title-obra-post-service{
    font-size: 1.3em!important;
  }
  .pessoa-obra-post-service{
    font-size: 0.8em!important;
  }
  .obra-user-service-post-content{
    width: 90vw!important;
  }
}

@media only screen and (min-width:750px) and (max-width:1000px){
  .title-obra-post-service{
    font-size: 1.7em!important;
  }
  .pessoa-obra-post-service{
    font-size: 1em!important;
  }
}

.inline-div-obra-post-service{
  width: 90%!important;
  margin: 0 auto!important;
}

.info-obra-post-service{
  width: 80%!important;
}

.load-arrow{
  transform: rotate(90deg);
  transition: all 0.2s;
}

.load-arrow:hover{
  transform: rotate(90deg) translateX(5px);
  cursor: pointer;
}

.routes,
.destaques {
  display: inline-flex;
  width: 82vw;
  overflow-y: hidden;
  overflow-x: scroll;
  flex-wrap: nowrap;
  height: fit-content;
  margin: 20px;
  z-index: inherit;
  margin-left: 30px;
  margin-right: 30px;
}

@media only screen and (min-width:0px) and (max-width:500px){
  .title-routes{
    font-size: 1.8em!important;
    margin-left: 20px!important;
  }
  .arrow {
    width: 40px!important;
    height: 40px!important;
    margin-left: 10px!important;
    margin-right: 0!important;
  }
  .heart-title {
    width: 40px!important;
    margin-left: 15px!important;
  }
}

@media only screen and (min-height:0px) and (max-height:614px){
  .route{
    height: 150px!important;
  }
  .title-routes{
    margin-top: 35px!important;
    margin-bottom: 0!important;
  }
  .title-destaques{
    margin-top: 0px!important;
  }
}

@media only screen and (min-height:615px) and (max-height:750px){
  .title-routes{
    margin-top: 35px!important;
    margin-bottom: 0!important;
  }
  .title-destaques{
    margin-top: 8px!important;
  }
}

.destaques {
  margin-top: 0;
}

.routes::-webkit-scrollbar,
.destaques::-webkit-scrollbar {
  background-color: rgba(34, 34, 34, 0);
  border-radius: 20px;
}

.routes::-webkit-scrollbar-track,
.destaques::-webkit-scrollbar-track {
  box-shadow: none;
  border: none;
}

.routes::-webkit-scrollbar-thumb,
.destaques::-webkit-scrollbar-thumb {
  background-color: #40344d63;
  border-radius: 10px;
}

.routes::-webkit-scrollbar-thumb:hover,
.destaques::-webkit-scrollbar-thumb:hover {
  background-color: #4a375f85;
}

.container-content {
  height: fit-content;
}

.container-destaque {
  display: flex !important;
  flex-direction: column!important;
  border: none !important;
  box-shadow: none !important;
  background: none !important;
  height: fit-content !important;
  width: fit-content !important;
}

.destaque-content {
  display: flex;
  height: 150px;
  width: 400px;
  background-color: rgb(231, 231, 231);
  margin-top: 18px;
  margin-right: 11px;
  transition: all 0.3s;
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(49, 49, 49, 0.747);
}

.bg {
  background-image: url("/src/assets/images/circles.png");
  position: fixed;
  width: 99.2%;
  height: 100%;
  z-index: -10;
  animation-name: bg-circles;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  filter: blur(8px);
  opacity: 0.7;
}

@media only screen and (min-width: 2250px) {
  .routes {
    width: 98vw;
  }
}

.route,
.container-destaque {
  display: flex;
  flex-direction: row;
  height: 180px;
  justify-content: center;
  align-items: center;
  width: 320px;
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(48, 48, 48, 0.767);
  margin: 15px;
  background-color: rgb(238, 236, 231);
  transition: all 0.3s;
}

.destaque-content:hover{
  opacity: 0.75;
}

.route:hover{
  opacity: 0.75;
}

.title-route {
  font-family: "Calibre-Regular";
  font-size: 1.8em;
  color: rgb(78, 78, 78);
  margin-right: 20px;
}

.title-routes {
  font-family: "Calibre-Regular";
  font-size: 2.2em;
  color: rgb(235, 229, 229);
  margin-top: 80px;
  margin-left: 40px;
  display: flex;
  transition: all 0.3s;
}
.title-routes.title-destaques {
  display: flex !important;
}
.arrow-1 {
  transform: rotate(180deg);
  filter: invert(100%) brightness(130%);
  margin-left: 25px;
  margin-right: 15px;
}

.arrow-2:hover {
  transform: translateX(8px);
  cursor: pointer;
}

.arrow-1:hover {
  transform: rotate(180deg) translateX(8px);
  cursor: pointer;
}
.arrow-2 {
  filter: invert(100%) brightness(130%);
}

.arrow-3 {
  transform: rotate(180deg);
  filter: invert(100%) brightness(130%);
  margin-left: 25px;
  margin-right: 15px;
}

.arrow-4:hover {
  transform: translateX(8px);
  cursor: pointer;
}

.arrow-3:hover {
  transform: rotate(180deg) translateX(8px);
  cursor: pointer;
}
.arrow-4 {
  filter: invert(100%) brightness(130%);
}


.heart-title {
  width: 50px;
  filter: invert(100%) brightness(130%);
  margin-left: 25px;
}

.flex-image-destaque{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
}

.inline-div{
  display: flex;
  justify-content: space-around;
  width: 285px;
}

.pessoa-obra-destaque{
  margin-left: 12px;
}

.info-obra-destaque{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
    align-items: self-start;
}

.title-obra-destaque{
  font-family: 'Calibre-Regular';
  margin-left: 10px;
  margin-right: 10px;
  max-width: 150px;
  font-size: 1.7em;
  color: black!important;
}


.top-obra-destaque{
  font-family: 'Calibre-Regular';
  font-size: 2.3em;
  color: rgb(122, 109, 151)!important;
  margin-top: 13px;
  font-weight: bolder;
}

.pessoa-obra-destaque{
  font-family: 'Calibre-Regular';
  margin-top: -10px;
  margin-left: 20px;
  color: rgb(97, 97, 97)!important;
  font-size: 1.1em;
}

.img-destaque{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-bottom-left-radius: 18px;
  border-top-left-radius: 18px;
}

.img-wp {
  width: 120px;
  height: 120px;
  border-radius: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #bdbaba, #8b8b89);
}

@media only screen and (min-width: 0px) and (max-width: 550px) {
  .img-wp {
    width: 90px;
    height: 90px;
  }
  .title-route {
    font-size: 1.2em;
  }
  .route {
    height: 150px;
    width: 300px;
  }
}

.arrow {
  background-image: url("/src/assets/images/arrow-2.png");
  background-position: right;
  width: 50px;
  height: 50px;
  background-size: cover;
  transition: all 0.1s;
}

#tab-page {
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 66px;
  z-index: 10;
}
#page-name-on-tab {
  font-size: 2.5em;
  letter-spacing: 0.07em;
  text-indent: 1em;
  margin-top: 12px;
  margin-bottom: 8px;
  margin-left: 0;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  color: #222;
  width: 90%;
  float: left;
}
#tab-pages-cont {
  display: inline-flex;
  flex-wrap: wrap;
  width: 55%;
  margin-left: 1.55em;
}
.paginate-tab {
  font-size: 1.5em;
  padding: 6px 26px 14px 26px;
  font-family: "Poppins", sans-serif;
  color: #989898;
  transition: 0.2s all;
}
.paginate-tab:hover {
  color: #222;
  border-bottom: 3px solid #222;
  cursor: pointer;
}
.active-tab-p {
  color: #222;
  border-bottom: 3px solid #222;
}
.right-tab-control {
  float: right;
  width: calc(45% - 30px);
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  direction: rtl;
  justify-content: flex-start;
  color: #222;
  margin-bottom: 5px;
  transform: translateX(-5px);
}
.tab-page-ut {
  width: 30px;
  height: 30px;
  padding: 10px;
  position: relative;
  z-index: 10;
  border-radius: 12px;
}
.tab-page-ut:hover,
.tab-page-ut:focus {
  box-shadow: inset 0 -3.25em 0 0 var(--hover);
  cursor: pointer;
}
.tab-page-ut {
  --color: #e4cb58;
  --hover: #fc6cb5;
}
.tab-page-ut {
  color: var(--color);
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.tab-page-ut:hover,
.tab-page-ut:focus {
  border-color: var(--hover);
  color: #fff;
}
* {
  user-select: none;
}

*:focus {
  outline: none;
}

.brd {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

#info {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  color: #2d3667;
  font-size: 16px;
  text-align: center;
  padding: 14px;
  background-color: #f3f9f9;
}

#app-cover {
  display: none;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  width: 300px;
  height: 42px;
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.2s;
  animation-name: zoom;
  animation-duration: 0.2s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

#select-button {
  position: relative;
  height: 16px;
  padding: 12px 14px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid lightgray !important;
  cursor: pointer;
}

#options-view-button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

#selected-value {
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
}

.option i {
  width: 16px;
  height: 16px;
}

.option,
.label {
  color: #2d3667;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}

#chevrons {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 12px;
  padding: 9px 14px;
}

#chevrons i {
  display: block;
  height: 50%;
  color: #d1dede;
  font-size: 12px;
  text-align: right;
}

#options-view-button:checked + #select-button #chevrons i {
  color: #2d3667;
}

.options {
  position: absolute;
  left: 0;
  width: 250px;
  z-index: 100;
}

#options {
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
  width: 298px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 6px;
  z-index: 1000;
}
.selected-value-prop {
  font-size: 1.2em;
  font-family: "Poppins", sans-serif;
  color: #222;
}
#options-view-button:checked ~ #options {
  border: 1px solid #e2eded;
  border-color: #cbd1d1 #a3acac #98a5a5 #e4eded;
}

.option {
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
}

.option i {
  position: absolute;
  left: 14px;
  padding: 0;
  display: none;
}

#options-view-button:checked ~ #options .option i {
  display: block;
  padding: 12px 0;
}

.label {
  display: none;
  padding: 0;
  margin-left: 27px;
}

#options-view-button:checked ~ #options .label {
  display: block;
  padding: 12px 14px;
}

.s-c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
}

.s-c.top {
  top: 0;
}

.s-c.bottom {
  bottom: 0;
}

input[type="radio"] {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.s-c:hover ~ i {
  color: #fff;
  opacity: 0;
}

.s-c:hover {
  height: 100%;
  z-index: 1;
}

.s-c.bottom:hover + i {
  bottom: -25px;
  animation: moveup 0.3s ease 0.1s forwards;
}

.s-c.top:hover ~ i {
  top: -25px;
  animation: movedown 0.3s ease 0.1s forwards;
}

@keyframes moveup {
  0% {
    bottom: -25px;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes movedown {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.label {
  transition: 0.3s ease all;
}

.opt-val {
  position: absolute;
  left: 14px;
  width: 217px;
  height: 21px;
  opacity: 0;
  background-color: #fff;
  transform: scale(0);
}

.option input[type="radio"]:checked ~ .opt-val {
  opacity: 1;
  transform: scale(1);
}

.option input[type="radio"]:checked ~ i {
  top: 0;
  bottom: auto;
  opacity: 1;
  animation: unset;
}

.option input[type="radio"]:checked ~ i,
.option input[type="radio"]:checked ~ .label {
  color: #fff;
}

.option input[type="radio"]:checked ~ .label:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

#options-view-button:not(:checked)
  ~ #options
  .option
  input[type="radio"]:checked
  ~ .opt-val {
  top: -30px;
}

.option:nth-child(1) input[type="radio"]:checked ~ .label:before {
  background-color: #fc6c85;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(1) input[type="radio"]:checked ~ .opt-val {
  top: -31px;
}

.option:nth-child(2) input[type="radio"]:checked ~ .label:before {
  background-color: #fc6c85;
}

.option:nth-child(2) input[type="radio"]:checked ~ .opt-val {
  top: -71px;
}

.option:nth-child(3) input[type="radio"]:checked ~ .label:before {
  background-color: #fc6c6d;
}

.option:nth-child(3) input[type="radio"]:checked ~ .opt-val {
  top: -111px;
}

.option:nth-child(4) input[type="radio"]:checked ~ .label:before {
  background-color: #fc836c;
}

.option:nth-child(4) input[type="radio"]:checked ~ .opt-val {
  top: -151px;
}

.option:nth-child(5) input[type="radio"]:checked ~ .label:before {
  background-color: #fc9b6c;
}

.option:nth-child(5) input[type="radio"]:checked ~ .opt-val {
  top: -191px;
}

.option:nth-child(6) input[type="radio"]:checked ~ .label:before {
  background-color: #fc6cb5;
  border-radius: 0 0 4px 4px;
}

.option:nth-child(6) input[type="radio"]:checked ~ .opt-val {
  top: -231px;
}

.option .fa-codepen {
  color: #000;
}

.option .fa-dribbble {
  color: #ea4c89;
}

.option .fa-behance {
  color: #0057ff;
}

.option .fa-hackerrank {
  color: #32c766;
}

.option .fa-stack-overflow {
  color: #f48024;
}

.option .fa-free-code-camp {
  color: #006400;
}

#option-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  transition: 0.3s ease all;
  z-index: 1;
  display: none;
}

#options-view-button:checked ~ #options #option-bg {
  display: block;
}

.option:hover .label {
  color: #fff;
}

.option:nth-child(1):hover ~ #option-bg {
  top: 0;
  background-color: #fc6c85;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(2):hover ~ #option-bg {
  top: 40px;
  background-color: #fc6c6d;
}

.option:nth-child(3):hover ~ #option-bg {
  top: 80px;
  background-color: #fc836c;
}

.option:nth-child(4):hover ~ #option-bg {
  top: 120px;
  background-color: #fc9b6c;
}

.option:nth-child(5):hover ~ #option-bg {
  top: 160px;
  background-color: #f79a4d;
}

.option:nth-child(6):hover ~ #option-bg {
  top: 200px;
  background-color: #fd6eb6;
  border-radius: 0 0 4px 4px;
}
@media only screen and (max-width: 300px) {
  .paginate-tab {
    padding-left: 6px;
    padding-right: 6px;
    font-size: 1em;
  }
  #tab-pages-cont {
    width: 100%;
    margin-left: 0;
  }
  #page-name-on-tab {
    text-indent: 0;
    font-size: 2em;
  }
  .right-tab-control {
    width: 100% !important;
    justify-content: flex-end;
    margin-top: 5px;
    margin-left: 5px;
  }
  #app-cover {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
}
@media only screen and (min-width: 300px) and (max-width: 550px) {
  #tab-pages-cont {
    width: 100%;
    margin-left: 20px;
  }
  .paginate-tab {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2em;
  }
  #page-name-on-tab {
    text-indent: 0;
    font-size: 2em;
  }
  .right-tab-control {
    justify-content: flex-end;
    margin-top: 5px;
    margin-left: 5px;
  }
  #app-cover {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
}
@media only screen and (min-width: 550px) and (max-width: 860px) {
  #tab-pages-cont {
    width: 100%;
    margin-left: 20px;
  }
  .paginate-tab {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.4em;
  }
  #page-name-on-tab {
    font-size: 2.3em;
    text-indent: 12px;
  }
  .right-tab-control {
    margin-top: 5px;
    margin-left: 5px;
    justify-content: flex-end;
    margin-left: 12px;
  }
  #app-cover {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
}
@media only screen and (min-width: 774px) and (max-width: 1100px) {
  #tab-pages-cont {
    margin-left: 20px;
  }
  .paginate-tab {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.3em;
  }
  #page-name-on-tab {
    text-indent: 17px;
    font-size: 2.3em;
  }
  .search__container {
    margin-left: 23px !important;
  }
}
@media only screen and (min-width: 774px) and (max-width: 880px) {
  .paginate-tab {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2em !important;
  }
  #page-name-on-tab {
    font-size: 2.3em;
  }
}

/*-------------------------------------------------------*/

/*Search Input*/

/*-------------------------------------------------------*/

.search__container {
  margin-left: 40px;
  height: 50px;
  margin-top: 50px;
}

.search__input {
  width: 200px;
  padding: 12px 24px;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;

  color: #575756;
  background-color: transparent;

  /*background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;*/
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.search__input::placeholder {
  color: rgba(87, 87, 86, 0.8);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.search__input:hover,
.search__input:focus {
  padding: 12px 0;
  width: 320px;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
}
.search__input:hover ~ .center-position,
.search__input:focus ~ .center-position {
  margin-left: 350px;
}
.center-position {
  transform: translate(-50%, -50%);
  border-radius: 16px;
}

.search-button {
  width: 60px;
  height: 60px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-left: 300px;
  margin-top: -20px;
  position: relative;
  z-index: 10;
}

.search-button::before {
  content: "";
  position: absolute;
  top: 22.5%;
  right: 23.5%;
  width: 0;
  height: 4px;
  margin-top: -2px;
  background-color: #222;
  transform: rotate(-45deg);
  transform-origin: right top;
}

.search-button::after {
  content: "";
  position: absolute;
  bottom: 22%;
  right: 24%;
  width: 30%;
  height: 4px;
  margin-top: -2px;
  background-color: #222;
  transform: rotate(45deg);
  transform-origin: right bottom;
}

.search-icon {
  position: absolute;
  display: block;
  top: 20%;
  left: 20%;
  width: 35%;
  height: 35%;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: #222;
}

.search-button.active::before,
.search-button.active::after {
  width: 77.5%;
}

.search-button.active .search-icon {
  width: 0;
  height: 0;
  border-color: transparent;
}

.search-button::before,
.search-button::after,
.search-button .search-icon {
  transition: all 0.3s ease-in-out;
}
.search-button:hover,
.search-button:focus {
  box-shadow: inset 0 -3.8em 0 0 var(--hover);
  cursor: pointer;
}
.search-button {
  --color: #e4cb58;
  --hover: #fc6cb5;
}
.search-button {
  color: var(--color);
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
.search-button:hover,
.search-button:focus {
  border-color: var(--hover);
  color: #fff;
}
@media only screen and (min-width: 1101px) and (max-width: 1170px) {
  .paginate-tab {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.3em;
  }
}
@media only screen and (min-width: 1171px) and (max-width: 1300px) {
  .paginate-tab {
    font-size: 1.3em;
  }
}
/*-------------------------------------------------------*/

/*Search Result*/

/*-------------------------------------------------------*/
#search-result {
  height: fit-content;
  width: 150vw;
  z-index: 1;
}
.slider {
  position: relative;
  width: 100vw;
  background: rgb(88, 88, 88);
  overflow: hidden;
  z-index: 1;
}
.slider-1 {
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  height: 140vh;
  overflow: hidden;
}
.slide-2{
  height: fit-content!important;
}
.container-routes {
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
}
.slider__wrap {
  position: absolute;
  width: 100vw;
  height: 100vh;
  -webkit-transform: translateX(100vw);
  transform: translateX(100vw);
  top: 0%;
  left: 0;
  right: auto;
  overflow: hidden;
  -webkit-transition: -webkit-transform 450ms
    cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: -webkit-transform 450ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 450ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 450ms cubic-bezier(0.785, 0.135, 0.15, 0.86),
    -webkit-transform 450ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -webkit-transition-delay: 450ms;
  transition-delay: 450ms;
  opacity: 0;
}
.slider__wrap--hacked {
  opacity: 1;
}
.slider__slide {
  position: absolute;
  left: 0;
  bottom: 10px;
  top: 0;
  width: 100vw;
  z-index: 999;
  background: linear-gradient(to bottom, rgb(113, 54, 190), rgb(255, 245, 110));
  overflow-x: scroll;
}
.slider__slide::-webkit-scrollbar {
  display: none;
}

.slider__slide::-webkit-scrollbar-track {
  display: none;
}

.slider__slide::-webkit-scrollbar-thumb {
  display: none;
}
.slider__slide--active {
  -webkit-transform: translatex(0%);
  transform: translatex(0%);
  z-index: 9999;
}
.slider__slide--active .slider__wrap {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  opacity: 1;
  -webkit-animation: none;
  animation: none;
}
.link-route {
  text-decoration: none;
}

</style>