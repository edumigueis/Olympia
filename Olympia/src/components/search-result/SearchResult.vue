<template>
  <main>
    <div id="container-search-result">
      <title>P E S Q U I S A</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/searchResult.css" />
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
            v-on:keyup="pesquisar()"
            v-on:keyup.enter="btnSearch()"
          />
          <div class="search-button center-position dark-search-icon" v-on:click="btnSearch()">
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
                        <img src="https://images.squarespace-cdn.com/content/v1/57762ed29f7456e1b6e8febd/1580403012581-RD72EGBP08TA7V50Z5WU/ke17ZwdGBToddI8pDm48kFJo1x-0SDSXZIbvHdtV7zB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyTk732yQxGFdJ5_SwaFk5-9rqZMSEJs3dyKz5eVslWaTA/2013+12+JIMI+Hendrix%2C+190x190cm%2C+Acrylic+on+Canvas.jpg?format=500w" class="img-destaque" />
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
                        <img src="https://images.squarespace-cdn.com/content/57b0ba972e69cf0f156abee2/1567426208977-TVWFZ3XGXKPPNNMYEZFK/Alea-Pinar-Du-Pre-celia-2-Ransom-Art-Gallery.jpg?format=1000w&content-type=image%2Fjpeg" class="img-destaque" />
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
                        <img src="https://i.ytimg.com/vi/cDotDayKH70/maxresdefault.jpg" class="img-destaque" />
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
                        <img src="https://st3.depositphotos.com/6367796/12918/v/950/depositphotos_129187834-stock-illustration-pop-art-woman-lips.jpg" class="img-destaque" />
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
                        <img src="https://theartivity.com/wp-content/uploads/2019/08/elements-of-art-6.jpg" class="img-destaque" />
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
                        <img src="https://www.petitplat.fr/cust/wp-content/uploads/2019/10/Collab_MilesJohnston_August-2@2x.jpg" class="img-destaque" />
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
                        <img src="https://2.bp.blogspot.com/-BWDCUbomGYM/W-7ZGyz8aDI/AAAAAAAAa20/iDxNOwpnDs0bJ1zAzmn5owZfD_1CjoVUgCLcBGAs/s1600/papel-de-parede-para-celular.jpg" class="img-destaque" />
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
                        <img src="https://i.pinimg.com/originals/41/cb/eb/41cbeb1f39398395118b243c8dc12470.png" class="img-destaque" />
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
                        <img src="https://images.squarespace-cdn.com/content/v1/57762ed29f7456e1b6e8febd/1580403012581-RD72EGBP08TA7V50Z5WU/ke17ZwdGBToddI8pDm48kFJo1x-0SDSXZIbvHdtV7zB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyTk732yQxGFdJ5_SwaFk5-9rqZMSEJs3dyKz5eVslWaTA/2013+12+JIMI+Hendrix%2C+190x190cm%2C+Acrylic+on+Canvas.jpg?format=500w" class="img-destaque" />
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
                        <img src="https://imaginetheworld.co/wp-content/uploads/Fluid-Art-Clock-Ocean-Clock-30cm-1.jpg" class="img-destaque" />
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
                        <img src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png" class="img-destaque" />
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
                        <img src="https://i.pinimg.com/736x/b2/a1/ed/b2a1ed6d29acffafa9e398ab28d05d1f.jpg" class="img-destaque" />
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
              </a>-->
              <div class="arrow load-arrow arrow-obras-search"></div>
            </div>
          </div>
          <div class="slider__slide" data-slide="3">
            <div class="bg"></div>
            <div class="container-aulas-search" id="serv-res-wrapper">
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
              </a>-->
              <div class="arrow load-arrow arrow-aulas-search"></div>
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
              <div class="arrow load-arrow arrow-aulas-search"></div>
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

      $.ajax({
        type: "GET",
        url: "https://localhost:5001/api/pesquisaObra/" + key,
        contentType: "application/json",
        success: function(data) {
          console.log(data);
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="" class="img-destaque" id="repr-img-obra-' +
              index +
              '" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              data.nome +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

              $("#obra-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url:
                "https://localhost:5001/api/redirect/usuario/" + data.idUsuario,
              data: jsonInput,
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
              url:
                "https://localhost:5001/api/redirect/FotosDaObra/" +
                data.idObra,
              data: jsonInput,
              contentType: "application/json",
              success: function(resFoto) {
                $("repr-img-obra-" + index).attr("src", resFoto[0]);
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
      $.ajax({
        type: "GET",
        url: "https://localhost:5001/api/pesquisaServ/" + key,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="' +
              data.foto +
              '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              data.nome +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

              $("#serv-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url:
                "https://localhost:5001/api/redirect/usuario/" + data.idUsuario,
              data: jsonInput,
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
              url:
                "https://localhost:5001/api/redirect/FotosDoServico" +
                data.idServico,
              data: jsonInput,
              contentType: "application/json",
              success: function(resFoto) {
                $("repr-img-obra-" + index).attr("src", resFoto[0]);
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

      $.ajax({
        type: "GET",
        url: "https://localhost:5001/api/pesquisaUser/" + key,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="' +
              data.foto +
              '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              data.nome +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-user">' +
              data.bio +
              "</h1></div></div></div></a>";

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
        url: "https://localhost:5001/api/redirect/pesquisaPost/" + key,
        data: jsonInput,
        contentType: "application/json",
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var contPost =
              '<a href="/#/detalhes" class="link-route"><div class="destaque-content obra-user-service-post-content"><div class="flex-image-destaque"><img src="' +
              data.foto +
              '" class="img-destaque" /></div><div class="info-obra-destaque info-obra-post-service"><div class="inline-div inline-div-obra-post-service"><h1 class="title-obra-destaque title-obra-post-service">' +
              data.nome +
              '</h1></div><div class="inline-div inline-div-obra-post-service"><h1 class="pessoa-obra-destaque pessoa-obra-post-service" id="by-person-identifier-' +
              index +
              '">por space</h1></div></div></div></a>';

              $("#post-res-wrapper").append(contPost);
            $.ajax({
              type: "GET",
              url:
                "https://localhost:5001/api/redirect/usuario/" + data.idUsuario,
              data: jsonInput,
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
  beforeCreate() {
    if (window.$cookies.isKey("user_cadastro")) {
      document.location.href = "/#/categorias";
    } else if (!window.$cookies.isKey("user_session")) {
      document.location.href = "/#/login";
    }
  }
};
</script>
