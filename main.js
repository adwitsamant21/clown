nosex=0;
nosey=0;
function preload(){
    clownose=loadImage("https://i.postimg.cc/L5ZcBdrw/clown-removebg-preview.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is initialized');
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    nosex=results[0].pose.nose.x - 10;
    nosey=results[0].pose.nose.y - 10;
    console.log("nose x= "+ nosex);
    console.log("nose y= "+ nosey);
}


}
function draw(){
image(video, 0,0,300,300);
image(clownose,nosex,nosey,20,20)
}
function take_snapshot(){
    Save('myimage_png');
}
