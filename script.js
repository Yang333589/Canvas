let canvas =  document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = "blue";
// ctx.fillRect(10,10,200,100);
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,100,100);

// let width = [200,180,160,140,120];
// let height = [100,80,60,40,20];
// let margin = [10,20,30,40,50];
// let color = ["red", "orange", "yellow", "green", "blue"];
// for (i = 0 ; i < 5; i++){
//     ctx.fillStyle = color[i];
//     ctx.fillRect (margin[i],margin[i],width[i],height[i]);
// }

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(150,15);
// ctx.lineTo(200,100);
// ctx.lineTo(100,100);
// ctx.fill()

// ctx.beginPath();
// ctx.arc(250,250,50,0,Math.PI*2,false);
// ctx.fill();

let width = canvas.width;
let height = canvas.height;
let opacity = 1;
let color = "black";

function drawCircle(x, y){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2,false);
    ctx.fill();
}

canvas.addEventListener("click", e => {
    drawCircle(e.offsetX, e.offsetY);
});

document.querySelector("#clear").addEventListener("click", () =>{
    ctx.clearRect(0,0,width,height);
});

document.querySelector("#opacity").addEventListener("change", e =>{
    opacity = e.target.value;
});

document.querySelector("#color").addEventListener("change", e =>{
    color = e.target.value;
});