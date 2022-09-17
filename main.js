canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
array1=["mars2.jpg" , "mars3.jpg" , "mars4.jpg", "mars5.jpg", "mars6.jpg"];
random_number=Math.floor(Math.random()*5)
background_img=array1[random_number]

function add() {
    background_imgTag= new Image();
    background_imgTag.onload = uploadbg;
    background_imgTag.src = background_img;

rover_imgTag= new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = "rover.png";

}
function uploadbg() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown", my_keydown);

function my_keydown (e)  {
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(keyPressed='38');
{
    up();
    console.log("up");
}
if(keyPressed='40');
{
    down();
    console.log("down");
}
if(keyPressed='37');
{
    left();
    console.log("left");
}
if(keyPressed='39');
{
    right();
    console.log("right");
}

}

function up() {
    if(rovery>=0) {
    rovery= rovery-10;
    console.log("when key is pressed , x=" + roverx + "| y = "+ rovery);
    uploadbg();
    uploadrover();
}
}
function down() {
    if(rovery<=500) {
    rovery= rovery+10;
    console.log("when key is pressed , x=" + roverx + "| y = "+ rovery);
    uploadbg();
    uploadrover();
}
}
function left() {
    if(roverx>=0) {
    roverx= roverx-10;
    console.log("when key is pressed , x=" + roverx + "| y = "+ rovery);
    uploadbg();
    uploadrover();
}
}
function right() {
    if(roverx<=700) {
    roverx= roverx+10;
    console.log("when key is pressed , x=" + roverx + "| y = "+ rovery);
    uploadbg();
    uploadrover();
}
}
