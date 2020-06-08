<template>
  <main style="overflow:hidden;" class="white-6">
    <div id="container-categorias">
      <link rel="stylesheet" href="/src/assets/css/categories.css" />
      <title>T A G S</title>
      <meu-dark-mode></meu-dark-mode>
      <meu-mouse></meu-mouse>

        <section id="titles">
            <h1 class="main-title">Escolha 5 ou mais categorias:</h1>
            <h2 class="sub-title black-to-white">Assim, construiremos um lindo feed pra você</h2>
        </section>
        <section id="categories">
            <div id="cat-list-container">
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/paintbrush-with-oil-paint-on-a-classical-palette-picture-id157721385?k=6&m=157721385&s=612x612&w=0&h=edxAznE_doAHuNT6H0s7HYm_fjogCNuTH_QaQFuTM2E=">
                    <div class="checked-img"></div><h3>Pintura</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/caryatid-in-acropolis-athens-picture-id168523303?k=6&m=168523303&s=612x612&w=0&h=ckzcSYmv-D2XjIWoBHbXx2fVlMgA_o2feck1_gMTkd8=">
                    <div class="checked-img"></div><h3>Escultura</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/full-frame-shot-of-colorful-graffiti-wall-picture-id566410435?k=6&m=566410435&s=612x612&w=0&h=Y4bb0xACYBVqbFi1UIAmfmr90GiIdyNlMOiFkIu52OY=">
                    <div class="checked-img"></div><h3>Grafite</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/young-woman-with-green-headset-listening-music-picture-id517685574?k=6&m=517685574&s=612x612&w=0&h=79Z0U1KWgYR0TE5_oRKtUB2qXbV63FjPY9tC71Xqj6E=">
                    <div class="checked-img"></div><h3>Música</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/painter-picture-id937528304?k=6&m=937528304&s=612x612&w=0&h=CR_MzDpT2BQ1H5l0UMbKiONhRZwbwz9DtHMrX5Ysrv8=">
                    <div class="checked-img"></div><h3>Desenho</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/acrobat-doing-movement-training-in-front-of-a-yellow-wall-picture-id1023301594?k=6&m=1023301594&s=612x612&w=0&h=Xr8YRhOdu5itbZzNG9y7AqGbploV4OUCssrxqt72lao=">
                    <div class="checked-img"></div><h3>Dança</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/book-shelves-picture-id942494908?k=6&m=942494908&s=612x612&w=0&h=WKUGzhTA5TQK0JHXsy6X71ShEY1yhtgkdpzRQ5U3svU=">
                    <div class="checked-img"></div><h3>Literatura</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/illustrations/movie-projector-illustration-id152404488?k=6&m=152404488&s=612x612&w=0&h=DV6nrCZam8jLWcOdo10SfFi5cqsjb8OLCm16b4to4SI=">
                    <div class="checked-img"></div><h3>Cinema</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/dance-theater-picture-id182147359?k=6&m=182147359&s=612x612&w=0&h=VB5TFwosDjHjZnPniiqdLzSSUin2CSFNdlJkfNfOW1U=">
                    <div class="checked-img"></div><h3>Teatro</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/graffiti-artist-holds-stencil-on-ladder-creating-art-in-wynwood-picture-id506103790?k=6&m=506103790&s=612x612&w=0&h=3WbGFzDgXmEl82eq82lHnFPmuGsy2e44DVN_whI7Wuc=">
                    <div class="checked-img"></div><h3>Stencil</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/young-male-reading-aloud-from-book-at-the-beach-picture-id107907400?k=6&m=107907400&s=612x612&w=0&h=V2oiVpUALNNwZMVrCVdwc7ZSksdR4J5QJBQdWzZe3Eg=">
                    <div class="checked-img"></div><h3>Poesia</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/multicolored-glass-wall-picture-id157675600?k=6&m=157675600&s=612x612&w=0&h=eZIiZ1gG5A158HUHrSdt1B9cfyvFnFOvGDT0FBeL-wc=">
                    <div class="checked-img"></div><h3>Arquitetura</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/new-york-city-aerial-view-of-the-downtown-picture-id598224046?k=6&m=598224046&s=612x612&w=0&h=ZsvLP-iQPdRBSBsExv2mPKIDJc78Q8eKtZ2BQUp1ctc=">
                    <div class="checked-img"></div><h3>Urbanismo</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/high-fashion-model-woman-in-colorful-bright-lights-posing-in-studio-picture-id926617828?k=6&m=926617828&s=612x612&w=0&h=FY3AXWcS1uqHmE7vmmJUHxgzebbwXyW9y0dc2RjjU1U=">
                    <div class="checked-img"></div><h3>Body Art</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/vectors/summer-design-elements-vector-id488280055?k=6&m=488280055&s=612x612&w=0&h=SwIcyL_Mm4Y-3yL4fye8fbLgcph724EA_hbMXJAFVxk=">
                    <div class="checked-img"></div><h3>Photoshop</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/young-woman-holding-polaroid-photos-with-mum-on-summer-holidays-picture-id803599652?k=6&m=803599652&s=612x612&w=0&h=7OD05aolKxZ1JqeEu3csMPSuGTI-3-Tm0dhlyqYB6cM=">
                    <div class="checked-img"></div><h3>Fotografia</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/gamer-hands-picture-id1036204436?k=6&m=1036204436&s=612x612&w=0&h=jzhi8tgMvUQxquuC7GJ-jpMZv4y0ZovdIckylIYo-7k=">
                    <div class="checked-img"></div><h3>Game Art</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/young-beautiful-woman-picture-id605769382?k=6&m=605769382&s=612x612&w=0&h=1sJoJ_27kOvUEFBO5IG46SOVoX0Fn6OmDzLvrl7ebvc=">
                    <div class="checked-img"></div><h3>Fotografia P&B</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/magazine-editors-at-work-picture-id1006534216?k=6&m=1006534216&s=612x612&w=0&h=RqrymR1Plqvw-WacowfoE5xuHR-FnUbSvqwM4IatlBM=">
                    <div class="checked-img"></div><h3>Edição de Fotos</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://i.pinimg.com/originals/f4/2e/01/f42e010998b834551c66b18b6113b379.png">
                    <div class="checked-img"></div><h3>Editorial Art</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/breakdance-tricks-picture-id1044820998?k=6&m=1044820998&s=612x612&w=0&h=8Sov9_nObfURt4GLjUXDnXLkG5TySFzZVssmENRYj4A=">
                    <div class="checked-img"></div><h3>Street Dance</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/beautiful-ballerina-dancing-on-dark-stage-with-ghosts-picture-id472085847?k=6&m=472085847&s=612x612&w=0&h=ngt4HHIH5WaXbLps9LYreZu4a7kxeuS5rwmOVkFTf_E=">
                    <div class="checked-img"></div><h3>Classical Dance</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/illustrations/watercolour-panting-of-abstract-landscape-with-different-plants-and-illustration-id467685044?k=6&m=467685044&s=612x612&w=0&h=hitcgZB3cjYiiWD5wVXjoG8JPSsmTyerm-QLMOnjf8U=">
                    <div class="checked-img"></div><h3>Aquarela</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/abstract-painted-red-and-green-art-backgrounds-picture-id649249402?k=6&m=649249402&s=612x612&w=0&h=moBgcjpWX5dna9FgpHaP4ZJcoU1ADYymIz0GoJPnu2M=">
                    <div class="checked-img"></div><h3>Arte Moderna</h3>
                </div>
                <div class="cat-card">
                    <img class="cat-img" src="https://media.gettyimages.com/photos/imitation-david-bust-picture-id123925899?k=6&m=123925899&s=612x612&w=0&h=eYJrfjy0YXsRlvv7Wi4ocT7VRDP244OV4Ipa483lC0g=">
                    <div class="checked-img"></div><h3>Arte Clássica</h3>
                </div>
            </div>
        </section>
        <section id="go-btn">
            <div class="btn-wrap">
                <a href="/#/home" class="know-more-btn">
                    <span class="know-more-btn-inner black-to-white">COMEÇAR</span>
                </a>
            </div>
        </section>
        <div id="how-many-cat"><span id="cat-number">0</span>/5</div>
      <meu-small-footer></meu-small-footer>
    </div>
  </main>
</template>
<script>
import Mouse from "../shared/mouse/Mouse.vue";
import DarkMode from "../shared/dark-mode/Dark-mode.vue";
import SmallFooter from "../shared/small-footer/SmallFooter.vue";

export default {
  components: {
    "meu-mouse": Mouse,
    "meu-small-footer": SmallFooter,
    "meu-dark-mode": DarkMode
  },
   beforeCreate(){
    if(window.$cookies.isKey('user_session')){
      document.location.href = "/#/home";
    }
  } 
};
</script>
