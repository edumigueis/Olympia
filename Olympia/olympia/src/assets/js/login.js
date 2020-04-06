var w, h, ctx,
  minDist,
  maxDist,
  initialWidth,
  maxLines,
  initialLines,
  speed,
  lines,
  frame,
  timeSinceLast,
  dirs,
  starter;

  var opacity = '.03';

function init() {

  lines.length = 0;
  
  for (var i = 0; i < initialLines; ++i)
    lines.push(new Line(starter));

  ctx.fillStyle = '#DDD';
  ctx.fillRect(0, 0, w, h);

}


function getColor(x) {

  return 'hsl( hue, 80%, 50% )'.replace(
    'hue', x / w * 360 + frame
  );
}


function anim() {

  window.requestAnimationFrame(anim);
  ++frame;

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(250,250,250,' + opacity + ')';
  ctx.fillRect(0, 0, w, h);
  ctx.shadowBlur = .5;

  for (var i = 0; i < lines.length; ++i)

    if (lines[i].step()) { // if true it's dead

      lines.splice(i, 1);
      --i;

    }

  ++timeSinceLast

  if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5) {

    timeSinceLast = 0;

    lines.push(new Line(starter));

    // cover the middle;
    ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
    ctx.beginPath();
    ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
    ctx.fill();
  }
}


function Line(parent) {

  this.x = parent.x | 0;
  this.y = parent.y | 0;
  this.width = parent.width / 1.25;
  
  do {

    var dir = dirs[(Math.random() * dirs.length) | 0];
    this.vx = dir[0];
    this.vy = dir[1];

  } while (
    (this.vx === -parent.vx && this.vy === -parent.vy) || (this.vx === parent.vx && this.vy === parent.vy));
    
  this.vx *= speed;
  this.vy *= speed;

  this.dist = (Math.random() * (maxDist - minDist) + minDist);

}


Line.prototype.step = function () {
  var dead = false;

  var prevX = this.x,
    prevY = this.y;

  this.x += this.vx;
  this.y += this.vy;

  --this.dist;

  // kill if out of screen
  if (this.x < 0 || this.x > w || this.y < 0 || this.y > h)
    dead = true;

  // make children :D
  if (this.dist <= 0 && this.width > 1) {

    // keep yo self, sometimes
    this.dist = Math.random() * (maxDist - minDist) + minDist;

    // add 2 children
    if (lines.length < maxLines) lines.push(new Line(this));
    if (lines.length < maxLines && Math.random() < .5) lines.push(new Line(this));

    // kill the poor thing
    if (Math.random() < .2) dead = true;
  }

  ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
  ctx.beginPath();
  ctx.lineWidth = this.width;
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(prevX, prevY);
  ctx.stroke();

  if (dead) return true
}

//VARIÁVEIS AUXILIARES
var jaFoi = false;
var iniciouAnimacao = false;
var vez = 1;
var variavelAuxiliarDaAuxiliar = false;

setInterval(() => {  //REASTREADOR, VERIFICA TUDO A TODO MOMENTO

  if ($("#container-login").length && jaFoi == false) {

    jaFoi = true;
    variavelAuxiliarDaAuxiliar = false;

    $(function () {

      if (!iniciouAnimacao) { //SE NÃO INICIOU A ANIMAÇÃO
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
        ctx = c.getContext("2d");

        minDist = 5;
        maxDist = 50;
        maxLines = 100;
        initialLines = 4;

        if(vez == 1){
          speed = 5;
          initialWidth = 10;
        }
        else if (vez == 2){
          speed = 2.5;
          initialWidth = 12;
          opacity = '.025';
        }
        else if (vez == 3){
        speed = 1.7;
        initialWidth = 15;
        opacity = '.02';
        }
        else if (vez == 4){
          speed = 1.2;
          initialWidth = 18;
          opacity = '.018';
        }
        else if (vez == 5){
          speed = 1;
          initialWidth = 20;
          opacity = '.018';
          }
          else {
            speed = 1;
            initialWidth = 21;
            opacity = '.018';
          }

        lines = [];
        frame = 0;
        timeSinceLast = 0;

        dirs = [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
          [.7, .7],
          [.7, -.7],
          [-.7, .7],
          [-.7, -.7]
        ];
        starter = {
          x: w / 2,
          y: h / 2,
          vx: 0,
          vy: 0,
          width: initialWidth
        };

        window.addEventListener('resize', function () {

          w = c.width = window.innerWidth;
          h = c.height = window.innerHeight;
          starter.x = w / 2;
          starter.y = h / 2;

          init();
        })

        init();
        anim();

        iniciouAnimacao = true;
      }


      $('#email').on("focusout", function () {
        var email = $('#email').val();
        if (email == "") {
          return;
        }

        if (!validar(email)) {
          $(".error-modal").fadeIn(500);
          $(".ui-widget-overlay").fadeIn(500);
          $(".warn").html("O email deve ter um arroba(@) seguido pelo domínio");
          $('#email').val("");
        }
      })

      function validar(emailp) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailp);
      }

    });

  } else if (!$("#container-login").length) { //SE SAIU DA ROTA, TUDO VOLTA PARA O NORMAL
    jaFoi = false;
    iniciouAnimacao = false;
    if (variavelAuxiliarDaAuxiliar == false){
      vez++;
      variavelAuxiliarDaAuxiliar = true;
    }
  }
}, 100);