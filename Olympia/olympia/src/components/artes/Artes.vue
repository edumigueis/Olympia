<template>

<main>
    <link rel="stylesheet" href="/src/assets/css/arte.css">
    <link rel="shortcut icon" href="/src/assets/images/page-ico.png">
    <div class="gradient"></div>

    <!--Dark Mode
    <div id="bg-dark-mode">
        <div class="wrapper">
            <div class="toggle">
                <input class="toggle-input" type="checkbox"/>
                <div class="toggle-bg"></div>
                <div class="toggle-switch">
                    <div class="toggle-switch-figure"></div>
                    <div class="toggle-switch-figureAlt"></div>
                </div>  
            </div>
        </div>
    </div>
    <!--Fim do Dark Mode-->

    <!--Área de menus-->
    <div id="menu-bar" class="white">
        <div id="bar">
            <div id="nav-bars"></div>
            <div id="logo"><a href="/" class="hover-line"><span><span class="moving-up">O</span> <span class="moving-up">L</span> <span class="moving-up">Y</span> <span class="moving-up">M</span> <span class="moving-up">P</span> <span class="moving-up">I</span> <span class="moving-left">A</span></span></a>
            </div>
            <div id="search-ico"></div>
        </div>
    </div>

    <div id="menu-items">

        <div class="gradient"></div>

        <div id="container-menu">
            <div class="close-1 close">
                <img class="close-img" src="/src/assets/images/x.png">
            </div>
            <table class="seta">
                <tr>
                    <td>
                        <a id="leftClick">
                            <img src="/src/assets/images/left.png" id="left">
                        </a>

                        <a id="rightClick">
                            <img src="/src/assets/images/right.png" id="right">
                        </a>
                    </td>
                </tr>
            </table>
            <div id="menu-list">

                <div id="col-menu-1">
                    <div class="menu-item-1 row1">
                        <a href="/"><img class="ico" src="/src/assets/images/home.png"></a>
                        <a class="menu-link " href="/">H O M E</a>
                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                    <div class="menu-item row2">
                        <a href="/#/sobre"><img class="ico" src="/src/assets/images/users.png"></a>
                        <a class="menu-link " href="/#/sobre">S O B R E N Ó S</a>
                    </div>
                </div>
                <div id="col-menu-2">
                    <div class="menu-item-1 row1">
                        <a href="/#/artes"><img class="ico" src="/src/assets/images/art.png"></a>
                        <a class="menu-link" href="/#/artes">A R T E S</a>
                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                    <div class="menu-item row2">
                        <a class='a-contact'><img class="ico" src="/src/assets/images/contact.png"></a>
                        <a class="menu-link a-contact">C O N T A T O</a>
                    </div>
                </div>
                <div id="col-menu-3">
                    <div class="menu-item-1 row1">
                        <a href="/#/eventos"><img class="ico" src="/src/assets/images/buy.png" id='buy'></a>
                        <a class="menu-link " href="/#/eventos">E X P O</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Fim dos menus-->

    <!--Contatos-->
    <table class="table-contato">
        <tr>
            <td>
                <div id='container-contatos'>
                    <div class="close-2 close">
                        <img class="close-2-img" src="/src/assets/images/x.png">
                    </div>
                    <div id="contato-1" class="white-2">
                        <p id='titulo'>C O N T A T O S</p>
                        <p class='subtitulo text-gray'>DEP. ARTES PLÁSTICAS</p>
                        <p class='texto text-gray-2'>Email: seuemail@celio.com<br>
                            Telefone: sempaciencia</p>
                    </div>
                    <div id="contato-2" class="white-2">Departamento artedc platicas emial:ddddddddddddddd tel :Dddddddddddd dpartamento
                        teatro
                        emaisl : teeeeeeeeeeeeeeeeeeeeeeeee tel sddsdsd</div>
                    <div id='contato-3' class="white-2">Departamento artedc platicas emial:ddddddddddddddd tel :Dddddddddddd dpartamento
                        teatro
                        emaisl : teeeeeeeeeeeeeeeeeeeeeeeee tel sddsdsd</div>
                </div>
            </td>
        </tr>
    </table>
    <!--Fim dos contatos-->

    <div class="bg"></div>

    <!--Inicio do grid-->

    <div id="line-containers">
        <div class="line">
            <div class="line-img-left" data-aos="fade-left" data-aos-duration="1000">
                <img src="https://www.virtuosodancephotography.com/v/ui/8180004/p98067404_101.jpg?1539638288" alt=""
                    class="line-img">
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-center-1 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-right-1 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>

        <div class="line">
            <div class="line-img-right" data-aos="fade-left" data-aos-duration="1000">
                <img src="https://www.artmuseum.org/wp-content/uploads/6.jpg" alt="" class="line-img">
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-center gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-left gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
        <div class="line">
            <div class="line-img-left" data-aos="fade-right" data-aos-duration="1000">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Victoire_de_Samothrace_-_vue_de_trois-quart_gauche%2C_gros_plan_de_la_statue_%282%29.JPG"
                    alt="" class="line-img">
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-center-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-right-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
        <div class="line">
            <div class="line-img-right" data-aos="fade-left" data-aos-duration="1000">
                <img src="https://www.virtuosodancephotography.com/v/ui/8180004/p98067404_101.jpg?1539638288" alt=""
                    class="line-img">
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-center gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-left gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
        <div class="line">
            <div class="line-img-left" data-aos="fade-right" data-aos-duration="1000">
                <img src="https://www.virtuosodancephotography.com/v/ui/8180004/p98067404_101.jpg?1539638288" alt=""
                    class="line-img">
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-center-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-right-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
        <div class="line">
            <div class="line-img-right" data-aos="fade-left" data-aos-duration="1000">
                <img src="/src/assets/images/music.jpg" alt="" class="line-img">
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-center gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" class="card-left gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
        <div class="line">
            <div class="line-img-left" data-aos="fade-right" data-aos-duration="1000">
                <img src="https://img.elo7.com.br/product/original/137BE5B/poster-cinema-retro-movie.jpg" alt=""
                    class="line-img"><br><br>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-center-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="card-right-2 gray">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante sagittis, feugiat leo
                    interdum, mollis lorem. Cras elementum ipsum magna, quis pellentesque mauris ornare a. Donec turpis
                    est, tempus ac consequat quis, sagittis et lacus. Duis vitae dolor enim. Ut vitae tellus feugiat,
                    cursus tellus malesuada, feugiat dolor.</p>
            </div>
        </div>
    </div>
    <!--Fim do grid-->


    <!--Início do footer-->
    <div id="footer" class="white" style="margin-top: -10px;">
        <div id="copyright" class="wfont">© OLYMPIA INC. All Rights Reserved.</div>
        <div id="lower-footer"><a class="footer-link">Back To Top</a><span class="span-bar">|</span><a
                class="footer-link">Modo Noturno</a><span class="span-bar">|</span><a class="footer-link">Termos De
                Uso</a></div>
    </div>
    <!--Fim do footer-->

    <div id="invisible">
        <span id="mouse"></span>
    </div>
</main>
</template>
    <style>
    </style>
    