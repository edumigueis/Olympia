var jaFoiPerfil = false;

setInterval(() => {
    if ($('#container-perfil').length && !jaFoiPerfil) {

        jaFoiPerfil = true;

        var rn = Math.floor((Math.random() * 150) + 60);
        var rs = Math.floor((Math.random() * 11) + 4);
        var t = new Trianglify({
            x_gradient: Trianglify.colorbrewer.Spectral[rs],
            noiseIntensity: 0,
            cellsize: rn
        });
        var pattern = t.generate(window.innerWidth, window.innerWidth + 200);
        $('.container-profile').css('background-image: ', pattern.dataUrl);
    }
    else if (!$('#container-perfil').length) {
        jaFoiPerfil = false;
    }
}, 100);
