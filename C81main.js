canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "red";


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(250,210, 50 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(450,210, 50 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(350,210, 50 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=4;
ctx.arc(300,250, 50 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(400,250, 50 , 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , mymouse_down);

function mymouse_down(e){
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;

    circle(mouse_x , mouse_y)

}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(mouse_x, mouse_y, 50 , 0, 2*Math.PI);
ctx.stroke();
}