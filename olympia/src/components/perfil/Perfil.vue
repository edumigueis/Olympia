<template>
  <main>
    <div id="container-perfil">
      <title>P E R F I L</title>
      <link rel="shortcut icon" importance="high" href="/src/assets/images/page-ico.png" />
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
        <div class="profile">
          <div class="title-content">
            <h1 class="title">Seu <br />Perfil</h1>
          </div>
          <div class="info-profile white-2 black-to-white">
            <div class="user-pic">
              <img
                src="/src/assets/images/perfil.jpeg"
                alt
                class="img-profile"
              />
            </div>
            <div class="info-user">
              <div class="info-1">
                <h1 class="name-user">José Marques Costa</h1>
                <h2 class="user">@jose.costa</h2>
                <div class="info-estatisticas">
                  <p class="seguindo">1.2k seguindo</p>
                  <p class="seguidores">53.9k seguidores</p>
                  <p class="publicacoes">13 publicações</p>
                </div>
              </div>
              <div class="info-2">
                <a class="link-ico"
                  ><img src="/src/assets/images/edit.png" class="img-ico"
                /></a>
              </div>
            </div>
          </div>
          <main ontouchstart class="tab-bar">
            <nav class="tab-link">
              <a class="tab-link-a sobre-mim">Sobre mim</a>
              <a class="tab-link-a curtidas">Curtidas</a>
              <a class="tab-link-a salvos">Salvos</a>
              <a class="tab-link-a configuracoes">Configurações</a>
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
              <p class="bio black-to-white">Oi tudo bem?? Meu nome e jose marques costa</p>
              <p class="biografia black-to-white">
                My name is Karl Kristiansen. I was born in Connecticut. I spent
                most of my childhood in Stonington, a small, seaside town on the
                Connecticut-Rhode Island border. My father was a commercial
                fisherman and since he was from Norway, life on the sea was a
                natural for him. My mother was a housewife. We were the typical
                '50's family. Much of my childhood was spent around the docks
                and fishing boats of Stonington. In 1954, my father and a few of
                the other fishermen decided to try their luck at shrimping in
                Brownsville, Texas. After a few months, and very little success,
                we returned to Stonington. Most of the Stonington boats were
                selling their catches in New Bedford, MA, so it was no surprise
                that in 1959, we packed up and moved.New Bedford remained my
                home through my secondary school years. I graduated from New
                Bedford High School in 1965. I had the opportunity to go to
                college, but I opted for a hitch in the Navy. If you recall, at
                that time, you only had a few choices: go to college, wait to be
                drafted, enlist or After an exciting ten weeks at NTCkes and a
                couple of weeks leave, I flew to Subic Bay in the Philippines,
                to catch my ship, the USS Mansfield DD-728. Our main mission was
                p
              </p>
              <button class="alterar btnPerfil">Alterar biografia</button>
            </div>
            <h1 class="title-content-config black-to-white">
              Suas publicações...
            </h1>
            <div class="div-scroll div-scroll-sobre">
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
                        <figure class="snip1321">
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
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Justin Alberman</a
                      >
                      <div class="prof-bio-det text-gray">
                        Music inspires us to be who we are xd
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed music">Comtemporary</div>
                              <div class="cat-on-feed pers">Indie</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/fa3132fa612a71b96c8e56f072a93f0e/tumblr_p7lsesJBkX1x6djmko5_250.jpg"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Lisa Kosh</a
                      >
                      <div class="prof-bio-det text-gray">
                        Inspied to make the world a better place...
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed pers">Fantasy Bodies</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/be7afcb38d3b2e94a3fc4c644c9a83fa/tumblr_nvo1c55Jci1uwfie2o1_400.jpg"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >John Birman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We 've come far.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed paint">Arte Moderna</div>
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
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Maria Herman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We all adore something.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                        <div class="stage">
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
                        <figure class="snip1321">
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
                        <div class="stage">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Justin Alberman</a
                      >
                      <div class="prof-bio-det text-gray">
                        Music inspires us to be who we are xd
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed music">Comtemporary</div>
                              <div class="cat-on-feed pers">Indie</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
                        <div class="stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage heart-stage">
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
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Lisa Kosh</a
                      >
                      <div class="prof-bio-det text-gray">
                        Inspied to make the world a better place...
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed pers">Fantasy Bodies</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/be7afcb38d3b2e94a3fc4c644c9a83fa/tumblr_nvo1c55Jci1uwfie2o1_400.jpg"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >John Birman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We 've come far.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed paint">Arte Moderna</div>
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/08/fotos-tumblr.png"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Maria Herman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We all adore something.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                        <figure class="snip1321">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/8ca7ae9aef947480f0530429044bee3d/tumblr_phqvwbIT9p1xhllc7o5_250.png"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Justin Alberman</a
                      >
                      <div class="prof-bio-det text-gray">
                        Music inspires us to be who we are xd
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed music">Comtemporary</div>
                              <div class="cat-on-feed pers">Indie</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
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
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Lisa Kosh</a
                      >
                      <div class="prof-bio-det text-gray">
                        Inspied to make the world a better place...
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed pers">Fantasy Bodies</div>
                            </div>
                          </figcaption>
                        </figure>
                      </a>
                      <div class="interact-container">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://66.media.tumblr.com/be7afcb38d3b2e94a3fc4c644c9a83fa/tumblr_nvo1c55Jci1uwfie2o1_400.jpg"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >John Birman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We 've come far.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                              <div class="cat-on-feed paint">Arte Moderna</div>
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
                        <div class="stage star-stage">
                          <a class="magic">
                            <i class="fas fa-star"></i>
                          </a>
                        </div>
                        <div class="stage star-stage">
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
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Maria Herman</a
                      >
                      <div class="prof-bio-det text-gray">
                        We all adore something.
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
                <div class="masonry-item">
                  <div class="masonry-content">
                    <div class="prof-cont-feed white-7">
                      <div class="prof-img-cont">
                        <img
                          class="prof-img-prop"
                          src="https://imgix.bustle.com/uploads/image/2019/5/13/7eb4f03e-92c1-43e6-99ca-19a59dcc5b49-2t4a9501.JPG"
                        />
                      </div>
                      <a href="/#/profile" class="prof-name-det black-to-white"
                        >Luna Dias</a
                      >
                      <div class="prof-bio-det text-gray">
                        What would our lives be without art?
                      </div>
                    </div>
                    <div class="post-img-cont">
                      <a href="/#/detalhes">
                        <figure class="snip1321">
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
              <button class="apagar btnPerfil">Apagar conta</button>
              <button class="sair btnPerfil">Sair</button>
            </div>
          </div>
          <div class="modal-form">
            <div class="close-modal">
              <img
                class="close-img close-image close-img-modal"
                src="/src/assets/images/x.png"
              />
            </div>

            <section class="signup">
              <div class="container dark-register-div">
                <div class="signup-content">
                  <div class="signup-form">
                    <h2 class="form-title black-to-white">Alterar dados</h2>
                    <form class="register-form" id="register-form">
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
                          required
                        />
                      </div>
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
                          required
                        />
                      </div>
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
                          placeholder="Sua nova senha"
                        />
                      </div>
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
                          placeholder="Confirme sua nova senha"
                        />
                      </div>
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
                          required
                        />
                      </div>
                      <div class="form-group form-button">
                        <input
                          type="submit"
                          name="signup"
                          id="signup"
                          class="form-submit"
                          value="Registrar"
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
                  ></div>
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
                    <label for="file" class="file-label">Escolher Imagem</label>
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
  }
};
</script>
