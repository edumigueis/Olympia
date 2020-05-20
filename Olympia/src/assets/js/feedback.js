
var jaFoiFB = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO
  if ($("#container-feedback").length && jaFoiFB == false) {

    jaFoiFB = true;
    
  }
  else if (!$("#container-feedback").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiFB = false;
  }
}, 100);