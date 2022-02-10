var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C8E2C3";
    ctx.fillRect(0,22,150,75);

    var canvas2 = document.getElementById("myCanvas2");
    var ctx2 = canvas2.getContext("2d");
    ctx2.moveTo(0,0);
    ctx2.lineTo(200,100);
    ctx2.stroke();
    
var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");
ctx3.beginPath();
ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
ctx3.stroke();