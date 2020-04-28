var jaFoiArtes = false;
setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-artes").length && jaFoiArtes == false) {

    jaFoiArtes = true;

  }
  else if (!$("#container-artes").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoiArtes = false;
  }
}, 100);