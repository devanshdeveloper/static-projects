window.onload = function() {
    canv = document.getElementById(
     "gc");
    ctx = canv.getContext("2d");
    gs = Math.floor(canv.width / 17);
    tc = Math.floor(canv.height / 17);
    setInterval(game, 1000 / 5);
   }
   px = py = 10;
   nb = 17; // no of blocks
   ax = ay = 10;
   xv = yv = 0;
   trail = [];
   tail = 5;
   yv = -1;
   
   function game() {
   
    px += xv;
    py += yv;
    if (px < 0) {
     px = nb - 1;
    }
    if (px > nb - 1) {
     px = 0;
    }
    if (py < 0) {
     py = nb - 1;
    }
    if (py > nb - 1) {
     py = 0;
    }
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canv.width, canv
     .height);
   
   
    for (var i = 0; i < trail
     .length; i++) {
     if (i == trail.length - 1) {
      ctx.fillStyle = "#99ffff";
     } else {
      ctx.fillStyle = "white";
     }
   
     ctx.fillRect(trail[i].x * gs,
      trail[i].y * tc, gs - 1, tc - 1);
     if (trail[i].x == px && trail[i]
      .y == py) {
      tail = 5;
      alert("GAME OVER");
     }
    }
    trail.push({
     x: px,
     y: py
    });
    while (trail.length > tail) {
     trail.shift();
    }
   
    if (ax == px && ay == py) {
     tail++;
     ax = Math.floor(Math.random() *
      nb);
     ay = Math.floor(Math.random() *
      nb);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * tc, gs -
     1, tc - 1);
   }
   
   function dirChange(b) {
    if (b == 'l' && xv != 1) {
     xv = -1;
     yv = 0;
    } else if (b == 'r' && xv != -1) {
     xv = 1;
     yv = 0;
    } else if (b == 'u' && yv != 1) {
     xv = 0;
     yv = -1;
    } else if (b == 'd' && yv != -1) {
     xv = 0;
     yv = 1;
    }
   }
   
   function show() {
     document.getElementById("show")
     .innerHTML = tail;
   }