<template>
  <main class="main-content white-6">
    <div id="container-eventos" class="white-6">
      <title>E V E N T O S</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/css/events-slider.css"
      />
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/events.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-mouse></meu-mouse>
      <meu-dark-mode></meu-dark-mode>

      <section class="slideshow">
        <div class="slideshow-inner">
          <div class="slides">
            <div class="slide is-active">
              <div class="slide-content">
                <div class="caption">
                  <div class="title">Hilma af Klint</div>
                  <div class="text">
                    <p class="text-in-itself">
                      Visual, colorido, esplêndido: Pinturas Para O Futuro
                    </p>
                  </div>
                  <a href="#" class="btn">
                    <span class="btn-inner">Saber Mais</span>
                  </a>
                </div>
              </div>
              <div class="image-container">
                <img
                  src="https://i2.wp.com/www.guggenheim.org/wp-content/uploads/2019/04/installation-srgm-hilma-2480x1396.jpg"
                  alt
                  class="image"
                />
              </div>
            </div>
            <div class="slide">
              <div class="slide-content">
                <div class="caption">
                  <div class="title">Sydney Rock Festival</div>
                  <div class="text">
                    <p class="text-in-itself">
                      Amando Sydney? Só espere até ver esse festival.
                    </p>
                  </div>
                  <a href="#" class="btn">
                    <span class="btn-inner">Saber Mais</span>
                  </a>
                </div>
              </div>
              <div class="image-container">
                <img
                  src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/10/How-to-organise-music-concert.jpg"
                  alt
                  class="image"
                />
              </div>
            </div>
            <div class="slide">
              <div class="slide-content">
                <div class="caption">
                  <div class="title">Bienal Do Livro 2020</div>
                  <div class="text">
                    <p class="text-in-itself">
                      Aproveite a bienal do livro: Um paraíso literário.
                    </p>
                  </div>
                  <a href="#" class="btn">
                    <span class="btn-inner">Saber Mais</span>
                  </a>
                </div>
              </div>
              <div class="image-container">
                <img
                  src="https://cdn-images.sentimentodeleitor.com.br/2019/09/bienaldolivro2019.jpg"
                  alt
                  class="image"
                />
              </div>
            </div>
            <div class="slide">
              <div class="slide-content">
                <div class="caption">
                  <div class="title">World Expo 2020</div>
                  <div class="text">
                    <p class="text-in-itself">
                      Arquitetura em sua melhor forma: em comunidade.
                    </p>
                  </div>
                  <a href="#" class="btn">
                    <span class="btn-inner">Saber Mais</span>
                  </a>
                </div>
              </div>
              <div class="image-container">
                <img
                  src="https://images.wallpaperscraft.com/image/building_facade_architecture_144501_1920x1080.jpg"
                  alt
                  class="image"
                />
              </div>
            </div>
          </div>
          <div class="pagination">
            <div class="item is-active">
              <span class="icon">1</span>
            </div>
            <div class="item">
              <span class="icon">2</span>
            </div>
            <div class="item">
              <span class="icon">3</span>
            </div>
            <div class="item">
              <span class="icon">4</span>
            </div>
          </div>
          <div class="arrows">
            <div class="arrow prev">
              <span class="svg svg-arrow-left">
                <svg
                  version="1.1"
                  id="svg4-Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="14px"
                  height="26px"
                  viewBox="0 0 14 26"
                  enable-background="new 0 0 14 26"
                  xml:space="preserve"
                >
                  <path
                    d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"
                  />
                </svg>
                <span class="alt sr-only"></span>
              </span>
            </div>
            <div class="arrow next">
              <span class="svg svg-arrow-right">
                <svg
                  version="1.1"
                  id="svg5-Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="14px"
                  height="26px"
                  viewBox="0 0 14 26"
                  enable-background="new 0 0 14 26"
                  xml:space="preserve"
                >
                  <path
                    d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"
                  />
                </svg>
                <span class="alt sr-only"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div id="filter-container" class="white-6">
        <section class="hero-section white-6">
          <div class="card-grid">
            <button class="card" v-on:click="filterArt('all')">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/all-btn.jfif)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Todos</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('pin')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/paint-btn.png)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Pintura</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('arq')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/arq-btn.jfif)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">
                  Arqui tetura
                </h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('lit')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/lit-btn.jfif)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">
                  Litera tura
                </h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('artes-cen')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/dnc-btn.jpg)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Artes Cênicas</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('cin')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/cin-btn.jpg)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Cinema</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('esc')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/sc-btn.jfif)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">
                  Escul tura
                </h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('music')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/msc-btn.jpg)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Música</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('foto')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/photo-art.jpg)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Fotogra fia</h3>
              </div>
            </button>
            <button class="card" v-on:click="filterArt('arte-dig')" href="#">
              <div
                class="card__background"
                style="background-image: url(/src/assets/images/digital-art-2.jpg)"
              ></div>
              <div class="card__content">
                <p class="card__category">Categoria</p>
                <h3 class="card__heading">Arte Digital</h3>
              </div>
            </button>
          </div>
        </section>
        <!--
        <ul id="radio-tab" class="white-6">
          <li class="radio-item">
            <label class="container black-to-white">
              Todos
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Pintura
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Música
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Teatro
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Arquiteura
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Dança
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Literatura
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li class="radio-item">
            <label class="container black-to-white">
              Escultura
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
        -->
      </div>

      <div id="events-container" class="white-6">
        <div
          class="event-card-container border-black"
          id="first-card-container"
        >
          <ul class="card-table white">
            <li class="card-item white">
              <div class="event-image-container">
                <div class="image-mask-event">
                  <img
                    class="event-image"
                    src="https://d2jv9003bew7ag.cloudfront.net/uploads/Vancouver-Art-Gallery-via-Tourism-Vancouver.jpg"
                  />
                </div>
              </div>
            </li>
            <div class="btn-wrap">
              <a href="#" class="know-more-btn">
                <span class="know-more-btn-inner">Saber Mais</span>
              </a>
            </div>
            <li class="card-item-2 white">
              <div class="event-date-container">
                <p class="expo-name">Tarsila no MASP</p>
                <p class="date">16/08/2020, DOM</p>
              </div>
            </li>
            <li class="card-item-last white">
              <div class="event-location-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1958340837805!2d-46.65807058538399!3d-23.56140906747839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1spt-BR!2sbr!4v1584722338674!5m2!1spt-BR!2sbr"
                  width="400"
                  height="264"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
        <div class="event-card-container border-black">
          <ul class="card-table white">
            <li class="card-item white">
              <div class="event-image-container">
                <div class="image-mask-event">
                  <img
                    class="event-image"
                    src="https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832373639323734"
                  />
                </div>
              </div>
            </li>
            <div class="btn-wrap">
              <a href="#" class="know-more-btn">
                <span class="know-more-btn-inner">Saber Mais</span>
              </a>
            </div>
            <li class="card-item-2 white">
              <div class="event-date-container">
                <p class="expo-name">Picasso no MP</p>
                <p class="date">12/07/2020, SAB</p>
              </div>
            </li>
            <li class="card-item-last white">
              <div class="event-location-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.48741836628!2d2.1787040149271406!3d41.38522000409329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fe99bce26b%3A0x27011e710700cc63!2sMuseu%20Picasso!5e0!3m2!1spt-BR!2sbr!4v1584723142970!5m2!1spt-BR!2sbr"
                  width="400"
                  height="264"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
        <div class="event-card-container border-black">
          <ul class="card-table white">
            <li class="card-item">
              <div class="event-image-container">
                <div class="image-mask-event">
                  <img
                    class="event-image"
                    src="https://abrilviagemeturismo.files.wordpress.com/2016/10/museu-van-gogh-em-amsterda-holanda.jpeg?quality=70&strip=info&w=920"
                  />
                </div>
              </div>
            </li>
            <div class="btn-wrap">
              <a href="#" class="know-more-btn">
                <span class="know-more-btn-inner">Saber Mais</span>
              </a>
            </div>
            <li class="card-item-2 white">
              <div class="event-date-container">
                <p class="expo-name">Van Gogh Memory Expo</p>
                <p class="date">12/07/2020, SAB</p>
              </div>
            </li>
            <li class="card-item-last white">
              <div class="event-location-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.661787563492!2d4.878886915343618!3d52.35841915594437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef96d35a5f%3A0xc22828aef97cc51a!2sMuseu%20Van%20Gogh!5e0!3m2!1spt-BR!2sbr!4v1584723696099!5m2!1spt-BR!2sbr"
                  width="400"
                  height="264"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
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
        url: "https://localhost:5001/api/redirect/Eventos",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        beforeSend: function() {
          $("#load-modal").addClass("loading");
        },
        success: function(data) {
          jQuery.each(data, function(index, item) {
            var conteudoDiv =
              '<div id="event-on-feed-' +
              index +
              '" class="event-card-container border-black arte-' +
              item.idArte +
              '"><ul class="card-table white"><li class="card-item white"><div class="event-image-container"><div class="image-mask-event"><img class="event-image" id="event-image-feed-' +
              item.idEvento +
              '" src=""/></div></div></li>';
            conteudoDiv +=
              '<div class="btn-wrap"><a href="#" class="know-more-btn"><span class="know-more-btn-inner">Saber Mais</span></a></div><li class="card-item-2 white"><div class="event-date-container"><p class="expo-name">' +
              item.nome +
              '</p><p class="date">' +
              item.dataEvento.substring(0, 10) +
              '</p></div></li><li class="card-item-last white"><div class="event-location-container">';
            conteudoDiv +=
              '<iframe src="' +
              item.localizacaoCoord +
              '" width="400" height="264" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false" tabindex="0"></iframe></div></li></ul></div>';
            $("#events-container").append(conteudoDiv);

            $.ajax({
              url:
                "https://localhost:5001/api/redirect/FotosDoEvento/" +
                item.idEvento,
              type: "GET",
              dataType: "json",
              contentType: "application/json",
              beforeSend: function() {
                $("#load-modal").addClass("loading");
              },
              success: function(data) {
                var foiImg = false;
                $("#event-image-feed-" + item.idEvento).attr("src", data[0]);

                $("body").removeClass("loading");
                $("#load-modal").fadeOut();
              },
              error: function() {
                $("body").removeClass("loading");
                $("#load-modal").fadeOut();
                alert("ops2");
              }
            });
          });
        },
        error: function() {
          $("body").removeClass("loading");
          $("#load-modal").fadeOut();
          alert("ops");
        }
      });
    },
    filterArt: function(selArt) {
      switch (selArt) {
        case "all":
          $(".event-card-container").css("display", "block");
          break;
        case "cin":
          $(".event-card-container").css("display", "none");
          $(".arte-1").css("display", "block");
          break;
        case "artes-dig":
          $(".event-card-container").css("display", "none");
          $(".arte-2").css("display", "block");
          break;
        case "artes-cen":
          $(".event-card-container").css("display", "none");
          $(".arte-3").css("display", "block");
          break;
        case "esc":
          $(".event-card-container").css("display", "none");
          $(".arte-4").css("display", "block");
          break;
        case "arq":
          $(".event-card-container").css("display", "none");
          $(".arte-5").css("display", "block");
          break;
        case "lit":
          $(".event-card-container").css("display", "none");
          $(".arte-6").css("display", "block");
          break;
        case "music":
          $(".event-card-container").css("display", "none");
          $(".arte-7").css("display", "block");
          break;
        case "pin":
          $(".event-card-container").css("display", "none");
          $(".arte-8").css("display", "block");
          break;
        case "foto":
          $(".event-card-container").css("display", "none");
          $(".arte-9").css("display", "block");
          break;
      }
    }
  },
  mounted() {
    this.getMarkers();
  }
};
</script>
