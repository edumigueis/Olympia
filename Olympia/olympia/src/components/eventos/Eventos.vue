
<template>
  <main class="main-content white-4">
  <link rel="stylesheet" type="text/css" href="/src/assets/css/events-slider.css">
  <link rel="shortcut icon" href="/src/assets/images/page-ico.png">
  <link rel="stylesheet" href="/src/assets/css/events.css">

  <meu-menu-bar></meu-menu-bar>
    <meu-menu-items></meu-menu-items>
    <meus-contatos></meus-contatos>
    <meu-mouse></meu-mouse>


    <section class="slideshow">
      <div class="slideshow-inner">
        <div class="slides">
          <div class="slide is-active ">
            <div class="slide-content">
              <div class="caption">
                <div class="title">Slide title 1</div>
                <div class="text">
                  <p>Slide description 1</p>
                </div>
                <a href="#" class="btn">
                  <span class="btn-inner">Learn More</span>
                </a>
              </div>
            </div>
            <div class="image-container">
              <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg" alt=""
                class="image" />
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="caption">
                <div class="title">Slide title 2</div>
                <div class="text">
                  <p>Slide description 2</p>
                </div>
                <a href="#" class="btn">
                  <span class="btn-inner">Learn More</span>
                </a>
              </div>
            </div>
            <div class="image-container">
              <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg" alt=""
                class="image" />
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="caption">
                <div class="title">Slide title 3</div>
                <div class="text">
                  <p>Slide description 3</p>
                </div>
                <a href="#" class="btn">
                  <span class="btn-inner">Learn More</span>
                </a>
              </div>
            </div>
            <div class="image-container">
              <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg" alt="" class="image" />
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="caption">
                <div class="title">Slide title 4</div>
                <div class="text">
                  <p>Slide description 4</p>
                </div>
                <a href="#" class="btn">
                  <span class="btn-inner">Learn More</span>
                </a>
              </div>
            </div>
            <div class="image-container">
              <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg" alt=""
                class="image" />
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
              <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                <path
                  d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
              </svg>
              <span class="alt sr-only"></span>
            </span>
          </div>
          <div class="arrow next">
            <span class="svg svg-arrow-right">
              <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                <path
                  d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
              </svg>
              <span class="alt sr-only"></span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <div id="filter-container" class="white-4" data-aos="fade-down" data-aos-duration="1000">
      <ul id="radio-tab" class="white-4">
        <li class="radio-item">
          <label class="container">Todos
            <input type="radio" checked="checked" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Pintura
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Música
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Teatro
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Arquiteura
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Dança
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Literatura
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
        <li class="radio-item">
          <label class="container">Escultura
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </li>
      </ul>
    </div>

    <div id="events-container" class="white-4">
      <div class="event-card-container" id="filter-container">
        <ul class="card-table  white" >
          <li class="card-item white" data-aos="fade-up" data-aos-duration="1000">
            <div class="event-image-container">
              <div class="image-mask-event">
                <img class="event-image"
                  src="https://d2jv9003bew7ag.cloudfront.net/uploads/Vancouver-Art-Gallery-via-Tourism-Vancouver.jpg">
              </div>
            </div>
          </li>
          <div class="btn-wrap ">
            <a href="#" class="know-more-btn"><span class="know-more-btn-inner">Saber Mais</span></a>
          </div>
          <li class="card-item-2 white">
            <div class="event-date-container">
              <p class="expo-name">Tarsila no MASP</p>
              <p class="date">16/08/2020, DOM</p>
            </div>
          </li>
          <li class="card-item-last white" data-aos="fade-up" data-aos-duration="1000">
            <div class="event-location-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1958340837805!2d-46.65807058538399!3d-23.56140906747839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1spt-BR!2sbr!4v1584722338674!5m2!1spt-BR!2sbr"
                width="400" height="260" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
          </li>
        </ul>
      </div>
      <div class="event-card-container" >
        <ul class="card-table white">
          <li class="card-item white">
            <div class="event-image-container">
              <div class="image-mask-event">
                <img class="event-image"
                  src="https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832373639323734">
              </div>
            </div>
          </li>
          <div class="btn-wrap">
            <a href="#" class="know-more-btn"><span class="know-more-btn-inner">Saber Mais</span></a>
          </div>
          <li class="card-item-2  white" data-aos="fade-up" data-aos-duration="1000">
            <div class="event-date-container">
              <p class="expo-name">Picasso no MP</p>
              <p class="date">12/07/2020, SAB</p>
            </div>
          </li>
          <li class="card-item-last  white">
            <div class="event-location-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.48741836628!2d2.1787040149271406!3d41.38522000409329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fe99bce26b%3A0x27011e710700cc63!2sMuseu%20Picasso!5e0!3m2!1spt-BR!2sbr!4v1584723142970!5m2!1spt-BR!2sbr"
                width="400" height="260" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
          </li>
        </ul>
      </div>
      <div class="event-card-container">
        <ul class="card-table white">
          <li class="card-item" data-aos="fade-up" data-aos-duration="1000">
            <div class="event-image-container">
              <div class="image-mask-event">
                <img class="event-image"
                  src="https://abrilviagemeturismo.files.wordpress.com/2016/10/museu-van-gogh-em-amsterda-holanda.jpeg?quality=70&strip=info&w=920">
              </div>
            </div>
          </li>
          <div class="btn-wrap">
            <a href="#" class="know-more-btn"><span class="know-more-btn-inner">Saber Mais</span></a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.661787563492!2d4.878886915343618!3d52.35841915594437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef96d35a5f%3A0xc22828aef97cc51a!2sMuseu%20Van%20Gogh!5e0!3m2!1spt-BR!2sbr!4v1584723696099!5m2!1spt-BR!2sbr"
                width="400" height="260" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
          </li>
        </ul>
      </div>
      </div>
  <meu-footer></meu-footer>
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
    mounted(){
      let aos = document.createElement('script')
      aos.setAttribute('src', '../../../assets/dist/aos.js')
      document.head.appendChild(aos)
    }
  }
</script>
