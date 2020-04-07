<template>
<body>
    <link rel="stylesheet" href="/src/assets/css/event-detail.css">
    <link rel="shortcut icon" href="/src/assets/images/page-ico.png">

    <meu-menu-bar></meu-menu-bar>
    <meu-menu-items></meu-menu-items>
    <meus-contatos></meus-contatos> 
    <meu-dark-mode></meu-dark-mode>
    <meu-mouse></meu-mouse>

    <main id="page-container">
        <div class="event-header" >
            <div class="img-header">
                <div class="img-wrap">
                    <img src="https://www.moma.org/d/assets/W1siZiIsIjIwMTkvMTAvMTAvaGxleXY0b2E4X2luMjQyN18wNzc5LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/in2427_0779.jpg?sha=2b029d673aa33a2e"
                        class="img-header-proper">
                </div>
            </div>
            <div id="calendar-red">
                <p class="month">SET</p>
                <div id="calendar-white">
                    <p class="day">23</p>
                </div>
            </div>
            <div id="title">
                <p id="event-name">Mirrors by Fenjhki MoMA</p>
            </div>
        </div>
        <div id="page-rol" class="white-5">
            <ul id="page-grid">
                <li class="grid-item" id="grid-item-1">
                    <div id="event-info">
                        <div class="event-info-p">
                            <p id="event-info-nome" class="event-info-item">Mirrors by Fenjhki MoMA</p>
                            <p id="event-info-local" class="event-info-item">Endereço: 11 W 53rd St, New York, NY 10019,
                                Estados Unidos</p>
                            <p id="event-info-datas" class="event-info-item">Datas: De 23/09/2020 a 27/10/2020</p>
                            <p id="event-info-horarios" class="event-info-item">Horários: 9:00-16:00</p>
                            <p id="event-info-precominimo" class="event-info-item">Preço mínimo: USD $20</p>
                            <p id="event-info-website" class="event-info-item"><a href="wwww.moma.org"
                                    class="tickets-link detail-link-0">Compre Ingressos</a></p>
                        </div>
                    </div>
                </li>
                <li id="grid-item-2" class="grid-item">
                    <div class="card">

                        <div class="card_part card_part-one">
                        </div>

                        <!-- Photo 2 -->
                        <div class="card_part card_part-two">

                        </div>

                        <!-- Photo 3 -->
                        <div class="card_part card_part-three">
                        </div>

                        <!-- Photo 4 -->
                        <div class="card_part card_part-four">
                        </div>

                    </div>
                </li>
                <li class="grid-item">
                    <div id="map-container">
                        <iframe class="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.026733576006!2d-73.97981028509388!3d40.761436742527366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bdb102b%3A0xea9f8fc0b3ffff55!2sThe%20Museum%20of%20Modern%20Art!5e0!3m2!1spt-BR!2sbr!4v1584739212478!5m2!1spt-BR!2sbr"
                            width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""
                            aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </li>
                <li class="grid-item-last">
                    
                </li>
            </ul>
        </div>

    

    <meu-footer></meu-footer>
    </main>
</body>
</template>
<!--<script src="/src/assets/dist/aos.js"></script>
    <script>
        AOS.init({
            easing: 'ease-in-out-sine'
        });
    </script>-->
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
  }
</script>