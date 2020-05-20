<template>
  <main>
    <div id="container-feedback">
      <title>F E E D B A C K</title>
      <link rel="shortcut icon" href="/src/assets/images/page-ico.png" />
      <link rel="stylesheet" href="/src/assets/css/feedback.css" />

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-dark-mode></meu-dark-mode>

        <div class="wrapper-sec">
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
            <div class="module"><div class="flex-part"><div class="img-wp"><img src="https://i.pinimg.com/originals/fb/45/06/fb45063579e1fc6873bffbd8192889cf.png"></div></div><div class="flex-part"><h2 class="title">Camera</h2></div><div class="flex-part"><div class="arrow"></div></div></div>
        </div>
        <div class="wrapper-form">

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