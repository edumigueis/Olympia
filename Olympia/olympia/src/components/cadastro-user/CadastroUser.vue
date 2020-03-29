<template>

<main id="page-container-cad-user">
    <div id="container-cad-user">
    <link rel="stylesheet" href="/src/assets/css/cadastro-user.css">
    <link rel="shortcut icon" href="/src/assets/images/page-ico.png">
    <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Cadastre-se</h2>
                    <form class="register-form" id="register-form">
                    <div class="form-group">
                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="name" id="name" placeholder="Seu Nome">
                    </div>
                    <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" id="email" placeholder="Seu Email">
                    </div>
                    <div class="form-group">
                    <label for="tel"><i class="zmdi zmdi-mail-send"></i></label>
                    <input type="text"  name="tel" id="tel" placeholder="Seu Telefone">
                    </div>
                    <div class="form-group">
                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="pass" id="pass" placeholder="Sua senha">
                    </div>
                    <div class="form-group">
                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                    <input type="password" name="re_pass" id="re_pass" placeholder="Confirme sua senha">
                    </div>
                    <div class="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term">
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>Eu concordo com os <a href="#" class="term-service">Termos de Serviço</a></label>
                    </div>
                    <div class="form-group form-button">
                    <input type="submit" name="signup" id="signup" class="form-submit" value="Registrar">
                    </div>
                    </form>
            </div>
            <div class="form-group hexcolor">
                    <label for="hexcolor" style="margin-top:-13px"><i class="zmdi zmdi-palette"></i></label>
                    <input type="text" name="hexcolor" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" id="hexcolor" placeholder="Selecione a Cor ex. #bada56">
                </div>
            <div class="signup-image">
                <figure class="default-prof-user"><img src="/src/assets/images/user-ico.png" alt="sing up image"></figure>
                <div id='user-let-img'></div>
                <p class="signup-image-link">Escolher Foto de Perfil</p>
            </div>
        </div>
    </div>
</section>

    <div class="error-box">

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
    </div>
</main>
</template>
