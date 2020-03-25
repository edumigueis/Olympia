<template>

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
</template>

<script>
export default {
  data() { 
      return;
    }
};
</script>