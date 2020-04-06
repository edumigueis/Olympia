<template>

   <div id="menu-items">
        <div class="menu-container"></div>
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
                    <div class="blur">
                        <div id="col-menu-1">
                            <div class="menu-item-1 row1">
                                <a href="/"><img class="ico" src="/src/assets/images/home.png"></a>
                                <a class="menu-link " href="/">H O M E</a>
                            </div>
                            <br><br><br><br><br><br><br><br><br><br>
                            <div class="menu-item row2">
                                <a href="/#/sobre"><img class="ico" src="/src/assets/images/users.png"></a>
                                <a class="menu-link " href="/#/sobre">S O B R E   N Ó S</a>
                            </div>
                        </div>
                    </div>
                    <div id="col-menu-2">
                        <div class="menu-item-1 row1">
                            <a href="/#/artes" id="menu-item-art"><img class="ico blur" src="/src/assets/images/art.png"></a>
                            <a class="menu-link menu-link-art" href="/#/artes">A R T E S</a>
                            <div class='js-menu-container-circle'></div>
                            <nav class="c-circle-menu js-menu">
                            <button class="c-circle-menu__toggle js-menu-toggle">
                                <span>Toggle</span>
                            </button>
                            <ul class="c-circle-menu__items">
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                    MÚSICA
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                    ESCULTURA
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                    CINEMA
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                    TEATRO 
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                   LITERATURA
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                   ARQUITETURA
                                </a>
                                </li>
                                <li class="c-circle-menu__item">
                                <a href="#" class="c-circle-menu__link">
                                   PINTURA
                                </a>
                                </li>
                            </ul>
                            <div class="c-circle-menu__mask js-menu-mask"></div>
                            </nav>
                        </div>
                        <div class="blur">
                        <br><br><br><br><br><br><br><br><br><br>
                        <div class="menu-item row2">
                            <a class='a-contact'><img class="ico" src="/src/assets/images/contact.png"></a>
                            <a class="menu-link a-contact">C O N T A T O</a>
                        </div>
                        </div>
                    </div>
                    <div id="col-menu-3" class="blur">
                        <div class="menu-item-1 row1">
                            <a href="/#/eventos"><img class="ico" src="/src/assets/images/buy.png" id='buy'></a>
                            <a class="menu-link " href="/#/eventos">E X P O</a>
                        </div>
                        <br><br><br><br><br><br><br><br><br><br>
                        <div class="menu-item row2">
                            <a href="/#/perfil"><img class="ico" src="/src/assets/images/user.png"></a>
                            <a class="menu-link " href="/#/sobre">P E R F I L</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
