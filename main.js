function setup(){
    canvas=createCanvas(600,600);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,150,200,200);
fill("red");
circle(75,75,80);
circle(500,75,80);
circle(500,430,80);
circle(75,430,80);
fill("green");
rect(90,70,400,20);
rect(90,430,400,20);
rect(90,70,20,380);
rect(480,70,20,380);
}
function picture(){
    save("Picture.png");
}