song1="";
song2="";
rightWristx=0;
rightWristy=0;
leftWristx=0;
leftWristy=0;
rightWristscore=0;
leftWristscore=0;
song1status="";
song2status="";
function preload(){
    song1=loadSound("P1.mp3");
    song2=loadSound("P2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    d=createCapture(VIDEO);
    d.hide();
    y=ml5.poseNet(d,loaded);
    y.on('pose',poseparts);
}
function loaded(){
    console.log("poseNet is initilized");
}
function poseparts(answer){
if(answer.length>0){
    console.log(answer);
leftWristx=answer[0].pose.leftWrist.x;
leftWristy=answer[0].pose.leftWrist.y;
rightWristx=answer[0].pose.rightWrist.x;
rightWristy=answer[0].pose.rightWrist.y;
rightWristscore=answer[0].pose.keypoints[10].score;
leftWristscore=answer[0].pose.keypoints[9].score;
console.log("left Wrist x is :"+leftWristx);
console.log("left Wrist y is :"+leftWristy);
console.log("right Wrist x is :"+rightWristx);
console.log("right Wrist y is:"+rightWristy);
console.log("right Wrist score is :"+rightWristscore);
console.log("left Wrist score is:"+leftWristscore);
}
}

function draw(){
    image(d,0,0,600,500);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();

    fill("green");
    stroke("red");
    if(rightWristscore>0.2){
        circle(rightWristx,rightWristy,30);
        
        song2.stop();
        if(song1status == false){
song1.play();
document.getElementsById("j").innerHTML="playing paro song";        
    }
    if(leftWristscore>0.2){
    circle(leftWristx,leftWristy,30);
    song1.stop();
        if(song2status == false){
song2.play();
document.getElementsById("j").innerHTML="playing pasoori song";
        }
    }
}
}
function y(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}