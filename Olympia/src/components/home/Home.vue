<template>
  <main>
      <div id="container-home">
        <link rel="stylesheet" href="/src/assets/css/home.css" />
        <link rel="stylesheet" href="/src/assets/css/palaces.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        />
        <title>H O M E</title>

        <meu-menu-bar></meu-menu-bar>
        <meu-menu-items></meu-menu-items>
        <meus-contatos></meus-contatos>
        <meu-dark-mode></meu-dark-mode>

        <div id="margin"></div>
        <!--slider-->
        <div class="demo-cont">
          <img src="/src/assets/images/page-ico.png" class="logo-ico" />
          <!-- slider start -->
          <div class="fnc-slider example-slider">
            <div class="fnc-slider__slides">
              <!-- slide start -->
              <div class="fnc-slide m--blend-green m--active-slide">
                <div class="fnc-slide__inner">
                  <div class="fnc-slide__mask">
                    <div class="fnc-slide__mask-inner"></div>
                  </div>
                  <div class="fnc-slide__content">
                    <h2 class="fnc-slide__heading">
                      <div class="fnc-slide__heading-line">
                        <span>Daily</span>
                      </div>
                      <div class="fnc-slide__heading-line">
                        <span>Art</span>
                      </div>
                    </h2>
                    <button type="button" class="fnc-slide__action-btn">
                      Detalhes
                      <span data-text="Detalhes">Detalhes</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- slide end -->
              <!-- slide start -->
              <div class="fnc-slide m--blend-dark">
                <div class="fnc-slide__inner">
                  <div class="fnc-slide__mask">
                    <div class="fnc-slide__mask-inner"></div>
                  </div>
                  <div class="fnc-slide__content">
                    <h2 class="fnc-slide__heading">
                      <div class="fnc-slide__heading-line">
                        <span>Pequenas</span>
                      </div>
                      <div class="fnc-slide__heading-line">
                        <span> ideias</span>
                      </div>
                    </h2>
                    <button type="button" class="fnc-slide__action-btn">
                      Detalhes
                      <span data-text="Detalhes">Detalhes</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- slide end -->
              <!-- slide start -->
              <div class="fnc-slide m--blend-red">
                <div class="fnc-slide__inner">
                  <div class="fnc-slide__mask">
                    <div class="fnc-slide__mask-inner"></div>
                  </div>
                  <div class="fnc-slide__content">
                    <h2 class="fnc-slide__heading">
                      <div class="fnc-slide__heading-line">
                        <span>Daily</span>
                      </div>
                      <div class="fnc-slide__heading-line">
                        <span>Gradient</span>
                      </div>
                    </h2>
                    <button type="button" class="fnc-slide__action-btn">
                      Detalhes
                      <span data-text="Detalhes">Detalhes</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- slide end -->
              <!-- slide start -->
              <div class="fnc-slide m--blend-blue">
                <div class="fnc-slide__inner">
                  <div class="fnc-slide__mask">
                    <div class="fnc-slide__mask-inner"></div>
                  </div>
                  <div class="fnc-slide__content">
                    <h2 class="fnc-slide__heading">
                      <div class="fnc-slide__heading-line">
                        <span>art</span>
                      </div>
                      <div class="fnc-slide__heading-line">
                        <span>news</span>
                      </div>
                    </h2>
                    <button type="button" class="fnc-slide__action-btn">
                      Detalhes
                      <span data-text="Detalhes">Detalhes</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- slide end -->
            </div>
            <nav class="fnc-nav">
              <div class="fnc-nav__bgs">
                <div class="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
                <div class="fnc-nav__bg m--navbg-dark"></div>
                <div class="fnc-nav__bg m--navbg-red"></div>
                <div class="fnc-nav__bg m--navbg-blue"></div>
              </div>
              <div class="fnc-nav__controls">
                <button class="fnc-nav__control">
                  Daily Art
                  <span class="fnc-nav__control-progress"></span>
                </button>
                <button class="fnc-nav__control">
                  Ideias
                  <span class="fnc-nav__control-progress"></span>
                </button>
                <button class="fnc-nav__control">
                  Gradient
                  <span class="fnc-nav__control-progress"></span>
                </button>
                <button class="fnc-nav__control">
                  Art news
                  <span class="fnc-nav__control-progress"></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div class="modal-slider">
          <div class="modal-container">
            <div class="slider-modal-content" id="content">
              <table id="table-modal" class="table-modal-1">
                <tr>
                  <td id="td1-modal">
                    <h1 id="title-modal">Daily Art 1</h1>
                    <h2 id="subtitle-modal">
                      "Mona Lisa", por Fernando Botero
                    </h2>
                    <h3 id="pretext-modal">Por que?</h3>
                    <p id="text-modal">
                      Percebemos, de cara, as formas arredondadas que o artista
                      usou para representar a forma humana; com a intenção de
                      destacar principalmente sua ganância. Botero nunca pintava
                      personagens negras, pois justamente queria criticar a
                      desigualdade social, que promove tal soberba.
                    </p>
                  </td>
                  <td id="td2-modal">
                    <div id="container-img-modal">
                      <img
                        id="image-modal"
                        src="/src/assets/images/daily-art.jpg"
                      />
                    </div>
                  </td>
                </tr>
              </table>

              <table id="table-modal" class="table-modal-2">
                <tr>
                  <td id="td1-modal">
                    <h1 id="title-modal">Pequenas Ideias</h1>
                    <h2 id="subtitle-modal">
                      Passos simples; belos resultados!
                    </h2>
                    <h3 id="pretext-modal" class="pretext-2">
                      Vasinho de Rolha
                    </h3>
                    <p id="text-modal">
                      Aproveite aquela rolha de um bom vinho ou aquelas
                      plantinhas danadas que crescem no chão e faça esse belo
                      jardim:<br />
                      1º) Com uma chave de fenda e com cuidado, faça um buraco
                      do topo até a metade de uma rolha; <br />
                      2º) Coloque um pouquinho de terra e uma folhinha de
                      suculenta, um trevo ou outra planta de sua escolha; <br />
                      3º) Regue de vez em quando (mas só uma gotinha!); <br />
                      Viu só?? Esses vasinhos são belos ornamentos para seu
                      quarto, cozinha, banheiro... ou para dar de presente a
                      alguém!
                    </p>
                  </td>
                  <td id="td2-modal">
                    <div id="container-img-modal">
                      <img
                        id="image-modal"
                        src="/src/assets/images/ideias.jpg"
                        class="img-ideias"
                      />
                    </div>
                  </td>
                </tr>
              </table>

              <table id="table-modal" class="table-modal-3">
                <tr>
                  <td id="td1-modal">
                    <h1 id="title-modal" class="title-3">Daily Gradient</h1>
                    <h2 id="subtitle-modal">
                      Riacho verde - #7B89C7 --> #5DCEB9
                    </h2>
                    <h3 id="pretext-modal" class="pretext-3">Por que?</h3>
                    <p id="text-modal">
                      O gradiente "Riacho Verde" é composto for duas cores frias
                      e calmantes. foi batizado assim para remeter a um bonito
                      campo com um riacho de águas cristalinas. É comprovado que
                      essas cores acalmam a mente, reduzindo a pressão arterial
                      e aumentando a consciência.
                    </p>
                  </td>
                  <td id="td2-modal">
                    <div id="container-color">
                      <div id="color-btn-container">
                        <button
                          id="button"
                          class="BT-OH-BR-R6-NF-FH-FP-TU-PT"
                          data-clipboard-text="background-color: #9eabe4;
    background-image: linear-gradient(315deg, #7b89c7 0%, #5dceb9 74%);"
                        >
                          <canvas id="canvas"></canvas>
                          <span id="text-color">COPIAR CSS</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              <table id="table-modal" class="table-modal-4">
                <tr>
                  <td id="td1-modal">
                    <h1 id="title-modal">Art News</h1>
                    <h2 id="subtitle-modal">Notícias do mundo da arte!</h2>
                    <h3 id="pretext-modal">
                      Durante a quarentena, que tal cursos em casa?
                    </h3>
                    <p id="text-modal" class="text-4">
                      "Usar o tempo dentro de casa para aprender algo novo é um
                      dos artifícios para deixar a quarentena, por assim dizer,
                      mais produtiva. Algumas celebridades e instituições
                      culturais entraram na onda." - Você, amante da arte, não
                      pode deixar de conferir essa notícia na íntegra clicando
                      <a
                        id="link-4"
                        target="_blank"
                        href="https://veja.abril.com.br/entretenimento/artistas-e-museus-levam-cursos-para-dentro-das-casas-confira-dicas/"
                      >
                        AQUI!</a
                      ><br /><br />
                      Por Amanda Capuano - Atualizado em 20 abr 2020 - Acessado
                      em 02 mai 2020 - VEJA
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!---->

        <!--////////////////////////////////////////////////////////////-->

        <!--tab page control-->
        <section id="tab-page" class="white-7 border-bottom-0">
          <h1 id="page-name-on-tab" class="black-to-white">Explorar</h1>
          <div id="tab-pages-cont">
            <div
              class="paginate-tab active-tab-p text-gray border-bottom-wh"
              id="to-slide-0"
            >
              Explorar
            </div>
            <div
              class="paginate-tab text-gray border-bottom-wh"
              id="to-slide-1"
            >
              Aprender
            </div>
            <div
              class="paginate-tab text-gray border-bottom-wh"
              id="to-slide-2"
            >
              Inspirar-se
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
            <a href="/#/post">
              <img
                id="post-tab-ut"
                class="tab-page-ut white-icon"
                src="/src/assets/images/plus-sign.png"
              />
            </a>
            <img
              id="search-tab-ut"
              class="tab-page-ut white-icon"
              src="/src/assets/images/search-small.png"
            /><img
              id="list-tab-ut"
              class="tab-page-ut white-icon"
              src="/src/assets/images/list-ico.png"
            />
          </div>
        </section>
        <!-- feed -->
        <section id="home-feed">
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
          <ul class="slider-pagi"></ul>
          <div class="slider-container">
            <div class="slider-control left inactive"></div>
            <div class="slider-control right"></div>
            <div class="slider">
              <div class="slide slide-0 active activo">
                <div class="slide__bg"></div>
                <div class="slide__content" id="content-1">
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
                          <figure class="snip1321" id="0post">
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
                                <div class="cat-on-feed paint">
                                  Arte Moderna
                                </div>
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
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >Justin Alberman</a
                        >
                        <div class="prof-bio-det text-gray">
                          Music inspires us to be who we are xd
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="1post">
                            <div class="after"></div>
                            <img
                              src="https://www.tickpick.com/blog/wp-content/uploads/2019/02/audience-1835431_1280.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
                              <i class="fas fa-arrow-right"></i>
                              <div class="name-of-prof">
                                <a href="/#/perfil" class="name-of-prof-link"
                                  >Luna Dias</a
                                >
                              </div>
                              <h2>The Dawn</h2>
                              <div class="categories-cont-on-feed">
                                <div class="cat-on-feed music">Music</div>
                                <div class="cat-on-feed pers">Young Artist</div>
                                <div class="cat-on-feed music">Show</div>
                                <div class="cat-on-feed music">
                                  Comtemporary
                                </div>
                                <div class="cat-on-feed pers">Indie</div>
                              </div>
                            </figcaption>
                          </figure>
                        </a>
                        <div class="interact-container">
                          <div class="stage stage-btn">
                            <button class="trigger">ver mais...</button>
                          </div>
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                      <!--<div class="post-det-cont">
                    <div class="name-of-post">The Dawn Project</div>
                    <div class="name-of-prof">
                      <a class="name-of-prof-link">Justin Alberman</a>
                    </div>
                    <div class="desc-of-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ut facilisis justo. In hac habitasse platea
                      dictumst. Fusce vestibulum imperdiet felis sed ultrices.
                      Curabitur ullamcorper molestie nunc in pharetra. Curabitur
                      at cursus nunc. Curabitur porta, orci sed eleifend mollis,
                      justo elit ullamcorper erat, sed vehicula nisl turpis a
                      nibh. Pellentesque id odio a purus bibendum congue. Nunc
                      ut viverra tellus. Donec volutpat posuere nisi, sed
                      efficitur augue pretium sit amet. Curabitur congue, erat a
                      mattis imperdiet, lectus ligula lacinia dolor, in
                      tincidunt augue sem nec est.
                    </div>
                    
                    
                  </div>-->
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://66.media.tumblr.com/fa3132fa612a71b96c8e56f072a93f0e/tumblr_p7lsesJBkX1x6djmko5_250.jpg"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >Lisa Kosh</a
                        >
                        <div class="prof-bio-det text-gray">
                          Inspied to make the world a better place...
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="2post">
                            <div class="after"></div>
                            <img
                              src="https://paintingvalley.com/image/watercolor-art-pinterest-22.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
                              <i class="fas fa-arrow-right"></i>
                              <div class="name-of-prof">
                                <a href="/#/perfil" class="name-of-prof-link"
                                  >Lisa Kosh</a
                                >
                              </div>
                              <h2>Woman in Flower Aura</h2>
                              <div class="categories-cont-on-feed">
                                <div class="cat-on-feed paint">Pintura</div>
                                <div class="cat-on-feed paint">Aquarela</div>
                                <div class="cat-on-feed pers">Watercolor</div>
                                <div class="cat-on-feed pers">Azul</div>
                                <div class="cat-on-feed paint">Modern Art</div>
                                <div class="cat-on-feed pers">
                                  Fantasy Bodies
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </a>
                        <div class="interact-container">
                          <div class="stage stage-btn">
                            <button class="trigger">ver mais...</button>
                          </div>
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >Luna Dias</a
                        >
                        <div class="prof-bio-det text-gray">
                          What would our lives be without art?
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="3post">
                            <div class="after"></div>
                            <img
                              src="https://i.pinimg.com/originals/bd/1b/82/bd1b82378029dfc8c235015aba800cd5.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
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
                                <div class="cat-on-feed paint">
                                  Arte Moderna
                                </div>
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
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://66.media.tumblr.com/be7afcb38d3b2e94a3fc4c644c9a83fa/tumblr_nvo1c55Jci1uwfie2o1_400.jpg"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >John Birman</a
                        >
                        <div class="prof-bio-det text-gray">
                          We 've come far.
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="4post">
                            <div class="after"></div>
                            <img
                              src="https://i.pinimg.com/originals/73/b5/ce/73b5cec7a94cfdf5bcb62e27309d521b.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
                              <i class="fas fa-arrow-right"></i>
                              <div class="name-of-prof">
                                <a href="/#/perfil" class="name-of-prof-link"
                                  >John Birman</a
                                >
                              </div>
                              <h2>Cigarrette</h2>
                              <div class="categories-cont-on-feed">
                                <div class="cat-on-feed paint">Stencil</div>
                                <div class="cat-on-feed paint">Grafite</div>
                                <div class="cat-on-feed paint">
                                  Arte Moderna
                                </div>
                                <div class="cat-on-feed pers">Homem</div>
                                <div class="cat-on-feed pers">Colorful</div>
                                <div class="cat-on-feed paint">Brushed</div>
                                <div class="cat-on-feed pers">
                                  Flair Avant Gard
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </a>
                        <div class="interact-container">
                          <div class="stage stage-btn">
                            <button class="trigger">ver mais...</button>
                          </div>
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >Maria Herman</a
                        >
                        <div class="prof-bio-det text-gray">
                          We all adore something.
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="5post">
                            <div class="after"></div>
                            <img
                              src="https://i.pinimg.com/736x/b2/a1/ed/b2a1ed6d29acffafa9e398ab28d05d1f.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
                              <i class="fas fa-arrow-right"></i>
                              <div class="name-of-prof">
                                <a href="/#/perfil" class="name-of-prof-link"
                                  >Maria Herman</a
                                >
                              </div>
                              <h2>Outter Seas</h2>
                              <div class="categories-cont-on-feed">
                                <div class="cat-on-feed paint">Pintura</div>
                                <div class="cat-on-feed paint">Tinta Óleo</div>
                                <div class="cat-on-feed paint">
                                  Arte Moderna
                                </div>
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
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <div class="prof-cont-feed white-7">
                        <div class="prof-img-cont">
                          <img
                            class="prof-img-prop"
                            src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                          />
                        </div>
                        <a
                          href="/#/profile"
                          class="prof-name-det black-to-white"
                          >Luna Dias</a
                        >
                        <div class="prof-bio-det text-gray">
                          What would our lives be without art?
                        </div>
                      </div>
                      <div class="post-img-cont">
                        <a href="/#/detalhes">
                          <figure class="snip1321" id="6post">
                            <div class="after"></div>
                            <img
                              src="https://i.pinimg.com/originals/bd/1b/82/bd1b82378029dfc8c235015aba800cd5.jpg"
                              alt="sq-sample26"
                            />
                            <figcaption>
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
                                <div class="cat-on-feed paint">
                                  Arte Moderna
                                </div>
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
                          <div class="stage">
                            <a class="magic">
                              <i class="fas fa-star"></i>
                            </a>
                          </div>
                          <div class="stage">
                            <div class="heart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide slide-1">
                <div class="slide__bg"></div>
                <div class="slide__content" id="content-2">
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/325?image=100"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Nesciunt aspernatur eaque similique laudantium a
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda modi inventore, totam vero consequuntur,
                        aut animi veritatis tempora nulla facere placeat velit
                        illum explicabo dicta enim ipsum. Vitae ducimus,
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/450?image=200"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Consequatur adipisci neque possimus quod ut quidem omnis
                        numquam dolorum
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Consectetur adipisicing elit. Sit enim ipsam mollitia
                        repellat nemo, accusantium? Fugit id ipsam libero vitae
                        quas perferendis, delectus a amet perspiciatis iusto.
                        Quia, quam, culpa.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/280?image=300"
                          class="img-serv"
                        />
                      </a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Adipisci alias ullam est accusamus
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Adipisci repellendus ratione laudantium nisi eaque
                        voluptatem fuga quod hic, explicabo amet at laborum
                        maiores ducimus et a vel quidem dolorem modi.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/540?image=400"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Dolor sit amet, consectetur adipisicing elit
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Vitae est numquam, dolore, ipsum tempora molestiae. Ut
                        optio natus velit eaque tempora commodi dolor doloremque
                        error quidem labore, incidunt odit est nobis numquam.
                        Ullam quas minima, neque modi reiciendis consequuntur
                        inventore!
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/380?image=500"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Veritatis aut repellendus, quidem nesciunt consequatur
                        nulla sed itaque
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Expedita voluptate similique ad harum dolorem nam ipsa
                        repellat quos, autem eius magni minima, asperiores nobis
                        repudiandae ut quibusdam atque! Delectus atque veniam
                        labore suscipit ullam, consequuntur dicta, tenetur est
                        nulla, quod obcaecati similique?
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/300?image=600"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Culpa quo animi ut temporibus, et distinctio facere
                        perspiciatis saepe sunt unde
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Iusto magni quasi recusandae autem ipsum asperiores
                        consequatur explicabo, vero nam iste quas sequi
                        reiciendis quod, quos!
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/400?image=700"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Molestiae quod consectetur enim modi unde expedita dicta
                        placeat?
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Aliquam laudantium mollitia quo sint maxime omnis
                        repellendus beatae. Consequuntur molestias odio
                        sapiente. Officia minima, nisi! Tempora vero, architecto
                        ducimus animi nostrum nobis aliquid eligendi illo,
                        facilis temporibus.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/300?image=800"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Sit amet, consectetur adipisicing elit. Incidunt,
                        commodi!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Accusamus culpa maxime harum minus ipsa ea qui,
                        blanditiis sequi debitis. Temporibus quisquam
                        consequatur dolor, aliquid odio nulla dolorum animi
                        quasi et! Reiciendis ipsum repellendus quaerat
                        explicabo, laboriosam amet, temporibus at sed
                        voluptatibus, minima quia.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/280?image=900"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Inventore ducimus, voluptate a nostrum molestiae non
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Similique officia recusandae, at labore quae, minus
                        aspernatur cupiditate repellendus optio nesciunt iure
                        aliquid praesentium, omnis, quas est natus temporibus
                        aliquam vero.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/480?image=925"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Voluptatum nisi, nostrum eaque consequatur officiis
                        similique!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Soluta eius itaque, molestiae laborum! Facere velit
                        reiciendis quis architecto vel minima consequuntur
                        voluptates temporibus consequatur, aperiam maiores!
                        Perferendis quos architecto quaerat, aliquid earum culpa
                        labore.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/550?image=950"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Perspiciatis non voluptatibus quo ab doloremque
                        accusantium
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Eligendi similique excepturi cumque nemo modi voluptates
                        mollitia atque doloribus, laborum magnam itaque a!
                        Dignissimos expedita vel minus impedit laudantium.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/600?image=1000"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Quam id laudantium debitis perferendis neque
                        perspiciatis!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Deleniti blanditiis iste cupiditate ea obcaecati
                        corporis, quas nobis possimus molestiae. Sed, minima.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/325?image=25"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Nesciunt aspernatur eaque similique laudantium a
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda modi inventore, totam vero consequuntur,
                        aut animi veritatis tempora nulla facere placeat velit
                        illum explicabo dicta enim ipsum. Vitae ducimus,
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/450?image=50"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Consequatur adipisci neque possimus quod ut quidem omnis
                        numquam dolorum
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Consectetur adipisicing elit. Sit enim ipsam mollitia
                        repellat nemo, accusantium? Fugit id ipsam libero vitae
                        quas perferendis, delectus a amet perspiciatis iusto.
                        Quia, quam, culpa.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/280?image=75"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Adipisci alias ullam est accusamus
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Adipisci repellendus ratione laudantium nisi eaque
                        voluptatem fuga quod hic, explicabo amet at laborum
                        maiores ducimus et a vel quidem dolorem modi.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/540?image=100"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Dolor sit amet, consectetur adipisicing elit
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Vitae est numquam, dolore, ipsum tempora molestiae. Ut
                        optio natus velit eaque tempora commodi dolor doloremque
                        error quidem labore, incidunt odit est nobis numquam.
                        Ullam quas minima, neque modi reiciendis consequuntur
                        inventore!
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/380?image=125"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Veritatis aut repellendus, quidem nesciunt consequatur
                        nulla sed itaque
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Expedita voluptate similique ad harum dolorem nam ipsa
                        repellat quos, autem eius magni minima, asperiores nobis
                        repudiandae ut quibusdam atque! Delectus atque veniam
                        labore suscipit ullam, consequuntur dicta, tenetur est
                        nulla, quod obcaecati similique?
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/300?image=161"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Culpa quo animi ut temporibus, et distinctio facere
                        perspiciatis saepe sunt unde
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Iusto magni quasi recusandae autem ipsum asperiores
                        consequatur explicabo, vero nam iste quas sequi
                        reiciendis quod, quos!
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/400?image=175"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Molestiae quod consectetur enim modi unde expedita dicta
                        placeat?
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Aliquam laudantium mollitia quo sint maxime omnis
                        repellendus beatae. Consequuntur molestias odio
                        sapiente. Officia minima, nisi! Tempora vero, architecto
                        ducimus animi nostrum nobis aliquid eligendi illo,
                        facilis temporibus.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/300?image=200"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Sit amet, consectetur adipisicing elit. Incidunt,
                        commodi!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Accusamus culpa maxime harum minus ipsa ea qui,
                        blanditiis sequi debitis. Temporibus quisquam
                        consequatur dolor, aliquid odio nulla dolorum animi
                        quasi et! Reiciendis ipsum repellendus quaerat
                        explicabo, laboriosam amet, temporibus at sed
                        voluptatibus, minima quia.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/280?image=225"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Inventore ducimus, voluptate a nostrum molestiae non
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Similique officia recusandae, at labore quae, minus
                        aspernatur cupiditate repellendus optio nesciunt iure
                        aliquid praesentium, omnis, quas est natus temporibus
                        aliquam vero.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/480?image=250"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Voluptatum nisi, nostrum eaque consequatur officiis
                        similique!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Soluta eius itaque, molestiae laborum! Facere velit
                        reiciendis quis architecto vel minima consequuntur
                        voluptates temporibus consequatur, aperiam maiores!
                        Perferendis quos architecto quaerat, aliquid earum culpa
                        labore.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/550?image=275"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Perspiciatis non voluptatibus quo ab doloremque
                        accusantium
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Eligendi similique excepturi cumque nemo modi voluptates
                        mollitia atque doloribus, laborum magnam itaque a!
                        Dignissimos expedita vel minus impedit laudantium.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/600?image=300"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Quam id laudantium debitis perferendis neque
                        perspiciatis!
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Deleniti blanditiis iste cupiditate ea obcaecati
                        corporis, quas nobis possimus molestiae. Sed, minima.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/325?image=13"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Nesciunt aspernatur eaque similique laudantium a
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda modi inventore, totam vero consequuntur,
                        aut animi veritatis tempora nulla facere placeat velit
                        illum explicabo dicta enim ipsum. Vitae ducimus,
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/450?image=26"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Consequatur adipisci neque possimus quod ut quidem omnis
                        numquam dolorum
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Consectetur adipisicing elit. Sit enim ipsam mollitia
                        repellat nemo, accusantium? Fugit id ipsam libero vitae
                        quas perferendis, delectus a amet perspiciatis iusto.
                        Quia, quam, culpa.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/280?image=39"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Adipisci alias ullam est accusamus
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Adipisci repellendus ratione laudantium nisi eaque
                        voluptatem fuga quod hic, explicabo amet at laborum
                        maiores ducimus et a vel quidem dolorem modi.
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/540?image=52"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Dolor sit amet, consectetur adipisicing elit
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Vitae est numquam, dolore, ipsum tempora molestiae. Ut
                        optio natus velit eaque tempora commodi dolor doloremque
                        error quidem labore, incidunt odit est nobis numquam.
                        Ullam quas minima, neque modi reiciendis consequuntur
                        inventore!
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/380?image=65"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Veritatis aut repellendus, quidem nesciunt consequatur
                        nulla sed itaque
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Expedita voluptate similique ad harum dolorem nam ipsa
                        repellat quos, autem eius magni minima, asperiores nobis
                        repudiandae ut quibusdam atque! Delectus atque veniam
                        labore suscipit ullam, consequuntur dicta, tenetur est
                        nulla, quod obcaecati similique?
                      </p>
                    </div>
                  </div>
                  <div class="masonry-item">
                    <div class="masonry-content">
                      <a class="link-to-serv" href="/#/detalhes"
                        ><img
                          src="https://picsum.photos/450/300?image=78"
                          class="img-serv"
                          alt="Dummy Image"
                      /></a>
                      <div class="interact-container on-serv">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                      <h3 class="masonry-title">
                        Culpa quo animi ut temporibus, et distinctio facere
                        perspiciatis saepe sunt unde
                      </h3>
                      <a href="/#/perfil" class="name-of-prof-link on-2-link"
                        >Luna Dias</a
                      >
                      <p class="masonry-description">
                        Iusto magni quasi recusandae autem ipsum asperiores
                        consequatur explicabo, vero nam iste quas sequi
                        reiciendis quod, quos!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide slide-2">
                <div class="slide__bg"></div>
                <div class="slide__content" id="content-3">
                  <div class="insp-item">
                    <div class="inner-insp-item white-7">
                      <div class="prof-cont-feed white-7 prof-insp">
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
                      <div class="insp-post-cont black-to-white">
                        Iusto magni quasi recusandae autem ipsum asperiores
                        consequatur explicabo, vero nam iste quas sequi
                        reiciendis quod, quos!
                      </div>
                      <img
                        src="https://cristinapicteaza.com/wp-content/uploads/2019/01/fcbk.jpg?v=1575196524"
                        class="img-insp"
                        alt="Dummy Image"
                      />
                      <div class="interact-container insp-inte">
                        <div class="stage insp-stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="insp-item">
                    <div class="inner-insp-item white-7">
                      <div class="prof-cont-feed white-7 prof-insp">
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
                      <div class="insp-post-cont black-to-white">
                        Iusto magni quasi recusandae autem ipsum asperiores
                        consequatur explicabo, vero nam iste quas sequi
                        reiciendis quod, quos!
                      </div>
                      <img
                        src="https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171401288_2.jpg"
                        class="img-insp"
                        alt="Dummy Image"
                      />
                      <div class="interact-container insp-inte">
                        <div class="stage insp-stage">
                          <div class="heart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="myModal" class="modal">
          <span class="close-mod">&times;</span>
          <img class="modal-content" id="img01" />
          <div id="caption"></div>
          <meu-mouse></meu-mouse>
        </div>
        <meu-footer></meu-footer>
        <meu-loading></meu-loading>
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
import Loading from "../shared/loading/Loading.vue";
import Vue from "vue";

export default {
  components: {
    "meu-menu-bar": MenuBar,
    "meu-menu-items": MenuItems,
    "meus-contatos": Contatos,
    "meu-mouse": Mouse,
    "meu-footer": Footer,
    "meu-dark-mode": DarkMode,
    "meu-loading": Loading
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    getMarkers() {
      $.ajax({
        url: "https://localhost:5001/api/redirect/Publicacoes",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
        },
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var conteudoDiv =
              '<div class="insp-item"><div class="inner-insp-item white-7"><div class="prof-cont-feed white-7 prof-insp"><div class="prof-img-cont"><img class="prof-img-prop" id="prof-inner-prop-img-' +
              index +
              '" src="" /></div><a id="prof-name-link-' +
              index +
              '" href="/#/perfil" class="prof-name-det black-to-white">Luna Dias</a><div id="prof-bio-det-' +
              index +
              '" class="prof-bio-det text-gray"> What would our lives be without art?</div></div>';
            conteudoDiv +=
              '<div class="insp-post-cont black-to-white">' +
              item.texto +
              '</div> <img src="' +
              item.foto +
              '" class="img-insp"/>';
            conteudoDiv +=
              '<div class="interact-container insp-inte"><div class="stage insp-stage"><div class="heart"></div></div> </div></div></div>';
            $("#content-3").append(conteudoDiv);

            $.ajax({
              url:
                "https://localhost:5001/api/redirect/Usuario/" + item.idUsuario,
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              success: function(result) {
                $("#prof-inner-prop-img-" + index).attr(
                  "src",
                  result.foto + ""
                );
                $("#prof-name-link-" + index).attr(
                  "href",
                  "/#/perfil/" + result.idUsuario
                );
                $("#prof-name-link-" + index).text(result.nome + "");
                $("#prof-bio-det-" + index).text(result.bio + "");
                $("#load-modal").fadeOut();
              }
            });
          });
        },
        error: function(thrownError) {
          $("body").removeClass("loading");
          $("#load-modal").fadeOut();
        }
      });
    },
    getServicos() {
      $.ajax({
        url: "https://localhost:5001/api/redirect/Servicos",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
        },
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var thereismore;
            if (item.descricao.length > 320) {
              thereismore = "...";
            } else {
              thereismore = "";
            }
            var conteudoDiv =
              '<div class="masonry-item"><div class="masonry-content">';
            conteudoDiv +=
              '<a class="link-to-serv" href="' +
              "/#/servico/" +
              item.idServico +
              '"><img id="img-serv-' +
              index +
              '" src="a" class="img-serv"/></a>';
            conteudoDiv +=
              '<div class="interact-container on-serv"><div class="stage"><a class="magic"><i class="fas fa-star"></i></a></div><div class="stage"><div class="heart"></div></div></div>';
            conteudoDiv +=
              '<h3 class="masonry-title">' +
              item.nome +
              '</h3><a href="#" id="name-prof-link-on-serv-' +
              index +
              '" class="name-of-prof-link on-2-link"></a>';
            conteudoDiv +=
              '<p class="masonry-description">' +
              item.descricao.substring(0, 320) +
              thereismore +
              "</p></div></div>";
            var idUser = item.idUsuario;
            $("#content-2").append(conteudoDiv);
            $.ajax({
              url:
                "https://localhost:5001/api/redirect/Usuario/" + item.idUsuario,
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              success: function(result) {
                if (result.idUsuario != 0) {
                  $("#name-prof-link-on-serv-" + index).text(result.nome);
                  $("#name-prof-link-on-serv-" + index).attr(
                    "href",
                    "/#/perfil/" + result.userName
                  );
                  $("body").removeClass("loading");
                  $("#load-modal").fadeOut();
                }
              },
              error: function() {
                $("body").removeClass("loading");
                $("#load-modal").fadeOut();
              }
            });
            $.ajax({
              url:
                "https://localhost:5001/api/redirect/FotosDoServico/" +
                item.idServico,
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              beforeSend: function() {
                $("#load-modal").addClass("loading");
              },
              success: function(fotos) {
                $("#load-modal").fadeOut();
                $("#img-serv-" + index).attr("src", fotos[0] + "");
              }
            });
          });
        },
        error: function() {
          $("body").removeClass("loading");
          $("#load-modal").fadeOut();
        }
      });
    },
    getObras() {
      $.ajax({
        url: "https://localhost:5001/api/redirect/Obras",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
          $("body").addClass("loading");
        },
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
            $("#content-1").append(conteudoDiv);
            $.ajax({
              url:
                "https://localhost:5001/api/redirect/Usuario/" + item.idUsuario,
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
                    error: function(thrownError) {

                    }
                  });
                }
              }
            });
          });
        },
        error: function(thrownError) {
          $("body").removeClass("loading");
          $("#load-modal").fadeOut();
        }
      });
    }
  },
  mounted() {
    this.getMarkers();
    this.getServicos();
    this.getObras();
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/login')
    }
  }
};
</script>
