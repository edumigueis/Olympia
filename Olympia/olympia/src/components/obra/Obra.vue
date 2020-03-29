<template>
<main style="overflow:hidden;" class="white-4">

    <link rel="stylesheet" href="/src/assets/css/detalhe.css">


    <meu-menu-bar></meu-menu-bar>
    <meu-menu-items></meu-menu-items>
    <meus-contatos></meus-contatos> 
    <meu-dark-mode></meu-dark-mode>
    <meu-mouse></meu-mouse>
    
    <div id="col-container">

        <div id="img-col-d" class="white-4">
            <div class="bg"></div>
            <table id="table-img" width="100%" data-aos="fade-down" data-aos-duration="1000" class="white-4">
                <colgroup>
                <col width="33.3333333%">
                <col width="33.3333333%">
                <col width="33.3333333%">
                </colgroup>
                <tr class="line-img-container-detail">
                    <td class="detail-img-container" id="detail-img-1" colspan=2 >
                        <div class="detail-mask white-4">
                        <img src="https://http2.mlstatic.com/pintura-abstrata-17a-pintor-jackson-pollock-em-tela-55cm-x-42cm-D_NQ_NP_892308-MLB31892097848_082019-F.webp" class="img-col white-4">
                            </div>
                    </td>
                    <td class="detail-img-container" id="detail-img-2" >
                        <div class="detail-mask  white-4" >
                        <img src="https://zoomoncontemporaryart.files.wordpress.com/2017/11/jackson-pollock-getty-56898334.jpg?w=840"class="img-col white-4" >
                            </div>
                    </td>
                </tr>
                <tr class="line-img-container-detail">
                    <td class="detail-img-container" id="detail-img-3">
                        <div class="detail-mask  white-4">
                        <img src="https://s2.glbimg.com/XWhdTZNcD4q3aftXoFdt44vGobQ=/560x560/e.glbimg.com/og/ed/f/original/2018/04/05/73154573_sc---mostras-no-mam---jackson-pollock.jpg" class="img-col white-4" >
                            </div>
                    </td>
                    <td class="detail-img-container" id="detail-img-4" colspan=2>
                        <div class="detail-mask  white-4">
                        <img src="https://ep00.epimg.net/cultura/imagenes/2016/02/18/actualidad/1455830675_596061_1455873497_noticia_fotograma.jpg" class="img-col white-4">
                            </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="info-col-d" class="white-4">
            <ul id="info-list" class=" white-4">
                <li class="info-item white-4" id="info-1">
                    <div class="inner-list white-4">
                        <div id="simple-art-info">
                            <p id="art-name">N. 17a</p>
                            <p id="art-detail-p">
                                <span id="art-local">Nova York,</span>
                                <span id="art-year">1948.</span>
                                <span id="art-dim">1,38 m x 1,38 m.</span>
                                <span id="art-mat">Tela, Tinta a óleo.</span>
                            </p>
                        </div>
                        <div class="fine-line white"></div>
                        <div id="art-data">
                            O Retrato de Adele Bloch-Bauer I é uma pintura de Gustav Klimt completada em 1907. Foi
                            vendida em junho de 2006, a Ronald Lauder, proprietário da Neue Galerie em Nova Iorque, por
                            135 milhões de dólares, tendo sido, na época, a segunda pintura mais cara do mundo. A obra
                            encontra-se em exibição permanente na dita galeria, desde julho de 2006.
                            Klimt empregou três anos em completar este retrato, medindo 138cm x 138 cm, executado em
                            óleo e ouro sobre tela, com uma ornamentação elaborada e complexa, tal e qual se vê nos
                            trabalhos do Jugendstil. Klimt foi membro da Secessão Vienense, um grupo de artistas que
                            cortaram com a forma tradicional de pintar. A obra foi realizada em Viena, por encomenda de
                            Ferdinand Bloch-Bauer, que fizera fortuna com a indústria açucareira.
                        </div>
                    </div>
                </li>
                <li class="info-item white-4" id="info-2">
                    <div class="inner-list">

                        <div id="simple-artist-info">
                            <p id="artist-user"><b>User: <a id="user-link" href="/user/pollock">@pollock</a></b></p>
                            <p id="artist-name"><b>Nome:</b> Jakson Pollock</p>
                            <p id="artist-nac"><b>Nacionalidade:</b> Americano </p>
                        </div>
                        <div id="artist-pic">
                            <img src="https://static.todamateria.com.br/upload/po/ll/pollockarte-cke.jpg"
                                alt="" class="art-icon">
                        </div>
                        <p id="artist-profile"><a href="/profile/klimt" class="link">Visitar o perfil</a></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="myModal" class="modal">
        <span class="close-mod">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption"></div>
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