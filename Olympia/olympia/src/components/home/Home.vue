<template>
  <main>
    <div id='container-home'>
      <link rel="stylesheet" href="/src/assets/css/home.css">
      <link rel="stylesheet" href="/src/assets/css/stars.css">
      <link rel="stylesheet" href="/src/assets/css/palaces.css">

      <meu-menu-bar></meu-menu-bar>
      <meu-menu-items></meu-menu-items>
      <meus-contatos></meus-contatos>
      <meu-mouse></meu-mouse>
      <meu-dark-mode></meu-dark-mode>

      <div id="palaces-container">
          <svg class="intro" viewbox="0 0 200 86">
              <text text-anchor="start" x="50" y="90" class="text text-stroke">All the</text>
              <text text-anchor="start" x="500" y="110" class="text text-stroke">PALACES</text>
              <text text-anchor="start" x="1000" y="130" class="text text-stroke">for art.</text>
              <text text-anchor="start" x="50" y="90" class="text text-stroke text-stroke-2">All the</text>
              <text text-anchor="start" x="500" y="110" class="text text-stroke text-stroke-2">PALACES</text>
              <text text-anchor="start" x="1000" y="130" class="text text-stroke text-stroke-2">for art.</text>
              <defs>
                  <clipPath id="text1">
                  <text text-anchor="start" x="50" y="90" class="text">All the</text>
                  </clipPath>
                  <clipPath id="text2">
                  <text text-anchor="start" x="500" y="40" class="text">PALACES</text>
                  </clipPath>
                  <clipPath id="text3">
                  <text text-anchor="start" x="1000" y="50" class="text">for art.</text>
                  </clipPath>
              </defs>
          </svg>
      </div>

      <div id="black-div">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <img id="palaces-img" src="src/assets/images/palaces.png">
      </div>

      <svg viewBox="0 0 120 70" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle 0"></circle>
        <circle class="circle 1"></circle>
        <circle class="circle 2"></circle>
        <circle class="circle 3"></circle>
        <circle class="circle 4"></circle>
        <circle class="circle 5"></circle>
        <circle class="circle 6"></circle>
        <circle class="circle 7"></circle>
        <circle class="circle 8"></circle>
        <circle class="circle 9"></circle>
        <circle class="circle 10"></circle>
        <circle class="circle 11"></circle>
        <circle class="circle 12"></circle>
        <circle class="circle 13"></circle>
        <circle class="circle 14"></circle>
        <circle class="circle 15"></circle>
        <circle class="circle 16"></circle>
        <circle class="circle 17"></circle>
        <circle class="circle 18"></circle>
        <circle class="circle 19"></circle>
        <circle class="circle 20"></circle>
        <circle class="circle 21"></circle>
        <circle class="circle 22"></circle>
        <circle class="circle 23"></circle>
        <circle class="circle 24"></circle>
        <circle class="circle 25"></circle>
        <circle class="circle 26"></circle>
        <circle class="circle 27"></circle>
        <circle class="circle 28"></circle>
        <circle class="circle 29"></circle>
        <circle class="circle 30"></circle>
        <circle class="circle 31"></circle>
        <circle class="circle 32"></circle>
        <circle class="circle 33"></circle>
        <circle class="circle 34"></circle>
        <circle class="circle 35"></circle>
        <circle class="circle 36"></circle>
        <circle class="circle 37"></circle>
        <circle class="circle 38"></circle>
        <circle class="circle 39"></circle>
        <circle class="circle 40"></circle>
        <circle class="circle 41"></circle>
        <circle class="circle 42"></circle>
        <circle class="circle 43"></circle>
        <circle class="circle 44"></circle>
        <circle class="circle 45"></circle>
        <circle class="circle 46"></circle>
        <circle class="circle 47"></circle>
        <circle class="circle 48"></circle>
        <circle class="circle 49"></circle>
        <circle class="circle 50"></circle>
        <circle class="circle 51"></circle>
        <circle class="circle 52"></circle>
        <circle class="circle 53"></circle>
        <circle class="circle 54"></circle>
        <circle class="circle 55"></circle>
        <circle class="circle 56"></circle>
        <circle class="circle 57"></circle>
        <circle class="circle 58"></circle>
        <circle class="circle 59"></circle>
        <circle class="circle 60"></circle>
        <circle class="circle 61"></circle>
        <circle class="circle 62"></circle>
        <circle class="circle 63"></circle>
        <circle class="circle 64"></circle>
        <circle class="circle 65"></circle>
        <circle class="circle 66"></circle>
        <circle class="circle 67"></circle>
        <circle class="circle 68"></circle>
        <circle class="circle 69"></circle>
        <circle class="circle 70"></circle>
        <!--<circle class="circle 71"></circle>
        <circle class="circle 72"></circle>
        <circle class="circle 73"></circle>
        <circle class="circle 74"></circle>
        <circle class="circle 75"></circle>
        <circle class="circle 76"></circle>
        <circle class="circle 77"></circle>
        <circle class="circle 78"></circle>
        <circle class="circle 79"></circle>
        <circle class="circle 80"></circle>
        <circle class="circle 81"></circle>
        <circle class="circle 82"></circle>
        <circle class="circle 83"></circle>-->
      </svg>
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
