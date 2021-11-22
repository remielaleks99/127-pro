harry = 0;
EdSheeran = 0;
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function preload()
function play(){
   harry.play("Harry potter Theme song.mp3");
   EdSheeran.play("Ed Sheeran - Bad Habits [Official].mp3");
}