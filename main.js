color="black";
width=1;
radius=50;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var lastPosition_X, lastPosition_Y;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent="mousedown";
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    circle(mouse_x, mouse_y);
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    color=document.getElementById("colourInput").value;
    width=document.getElementById("widthInput").value;
    radius=document.getElementById("radiusInput").value;
    var currentPosition_X=e.clientX-canvas.offsetLeft;
    var currentPosition_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentPosition_X,currentPosition_Y, radius, 0, 360);
        ctx.stroke();
    }
    lastPosition_X=currentPosition_X;
    lastPosition_Y=currentPosition_Y;
}
function clearCanvas () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}