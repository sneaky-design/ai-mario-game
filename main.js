function preload(){
    mario_gameover = loadsound("gameover.wav")
    mario_jump = loadsound("jump.wav")
    mario_coin = loadsound("coin.wav")
    mario_kick = loadsound("kick.wav")
    mario_die = loadsound("mariodie.wav")
    mario_start = loadsound("world_start.wav")
    setSprites();
    MarioAnimation();
}

function setup(){
    canvas.createCanvas(1240,336);
    canvas.parent("canvas");

    instializeInSetup(mario);

    video= createCapture(VIDEO);
    video.size(800,400);
    video.parent("game_console");

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("model Loaded.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.X
        noseY=results[0].pose.nose.Y
    }
}

function draw(){
    game();
}