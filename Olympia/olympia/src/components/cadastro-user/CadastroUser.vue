<template>

<main id="page-container-cad-user">
    <div id="container-cad-user">
    <link rel="stylesheet" href="/src/assets/css/cadastro-user.css">
    <link rel="shortcut icon" href="/src/assets/images/page-ico.png">

    <meu-dark-mode></meu-dark-mode>

    <section class="signup ">
        <div class="container dark-register-div">
            <div class="signup-content ">
                <div class="signup-form">
                    <h2 class="form-title black-to-white">Cadastre-se</h2>
                    <form class="register-form" id="register-form">
                    <div class="form-group">
                    <label for="name"><i class=" zmdi dark-register-ico zmdi-account material-icons-name"></i></label>
                    <input class="dark-register-input"  type="text" name="name" id="name" placeholder="Seu Nome" required>
                    </div>
                    <div class="form-group">
                    <label for="email"><i class=" zmdi dark-register-ico zmdi-email"></i></label>
                    <input class="dark-register-input"  type="email" name="email" id="email" placeholder="Seu Email" required> 
                    </div>
                    <div class="form-group">
                    <label for="tel"><i class=" zmdi dark-register-ico zmdi-mail-send"></i></label>
                    <input class="dark-register-input"  type="text"  name="tel" id="tel" placeholder="Seu Telefone" required>
                    </div>
                    <div class="form-group">
                    <label for="pass"><i class=" zmdi dark-register-ico zmdi-lock"></i></label>
                    <input class="dark-register-input"  type="password" name="pass" id="pass" placeholder="Sua senha" required>
                    </div>
                    <div class="form-group">
                    <label for="re-pass"><i class=" zmdi dark-register-ico zmdi-lock-outline"></i></label>
                    <input class="dark-register-input"  type="password" name="re_pass" id="re_pass" placeholder="Confirme sua senha" required>
                    </div>
                    <div class="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term dark-register-input">
                    <label for="agree-term" class="label-agree-term black-to-white"><span><span></span></span>Eu concordo com os <a href="#" class="term-service">Termos de Serviço</a></label>
                    </div>
                    <div class="form-group form-button">
                    <input type="submit" name="signup" id="signup" class="form-submit" value="Registrar">
                    </div>
                    </form>
            </div>
            <div class="form-group hexcolor">
                    <label for="hexcolor" style="margin-top:-13px"><i class=" zmdi dark-register-ico zmdi-palette"></i></label>
                    <input type="text" name="custom_color" placeholder="#FFFFFF" id="hexcolor" class="call-picker">
            </div>
                    <div class="color-holder call-picker" style="display: none"></div>
                    <div class="color-picker" id="color-picker" style="display: none"></div>
                
            <div class="signup-image">
                <figure class="default-prof-user"><img src="/src/assets/images/user-ico.png" alt="sing up image"></figure>
                <div id='user-let-img'></div>
                <p class="signup-image-link">Escolher Foto de Perfil</p>
            </div>
        </div>
    </div>
</section>


    <div id="img-pick-modal">
        
    </div>
    
    <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
        <div class="bubble x11"></div>
        <div class="bubble x12"></div>
        <div class="bubble x13"></div>
        <div class="bubble x14"></div>
        <div class="bubble x15"></div>
        <div class="bubble x16"></div>
        <div class="bubble x17"></div>
        <div class="bubble x18"></div>
        <div class="bubble x19"></div>
        <div class="bubble x20"></div>
    </div>
    <a id="dark-mode-link">Modo Noturno</a>
    </div>
</main>
</template>

<script>

import DarkMode from "../shared/dark-mode/Dark-mode.vue";

export default {
  components: {
    "meu-dark-mode": DarkMode
  }
};
</script>
