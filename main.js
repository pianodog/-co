function preload(){
    img = loadImage('picture1.jpg');
    img = loadImage('picture2.png');
    img = loadImage('picture3.png');
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
