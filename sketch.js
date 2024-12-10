let mm; // 1번 노래

let button; // 1번 플레이 버튼

let buttonPause; // 1번 pause
let buttonJump; // 1번 jump <<
let buttonJump2; // 1번 jump >>

let vol; // 볼륨 변수 선언
let jumpV;
let amp;

let slider; // 볼륨 슬라이드
let sliderPan; // lr 슬라이드
let sliderRate; // rae 슬라이드


function preload(){
  soundFormats('mp3');
  mm = loadSound('m1.mp3');
}

function setup() {
  img3 = loadImage("back.jpg");
  img = loadImage("i2.png");
  img2 = loadImage("i1.png");
  img4 = loadImage("i3.png");
  
  createCanvas(640, 640);
  
  
  amp = new p5.Amplitude();
  
  vol = 0.5;
  
  button = createButton('PLAY');
  button.mousePressed(playMusic);
  
  buttonPause = createButton('PAUSE');
  buttonPause.mousePressed(pauseMusic);
  
  buttonJump= createButton("<<");
  buttonJump.mousePressed(jumpSong2);
  
  buttonJump2 = createButton(">>");
  buttonJump2.mousePressed(jumpSong);
  
  slider = createSlider(0, 2, 0.5, 0.1);
  sliderPan = createSlider(-1, 1, 0, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);
  
  jumpV = 0;
  
}

function draw() {
  background(220);
  image(img3, 0, 0, 640, 640);
  
  mm.setVolume(vol);
  vol = slider.value();
  mm.pan(sliderPan.value());
  mm.rate(sliderRate.value());
  console.log(amp.getLevel()*1000);
  
  image(img, 290 + amp.getLevel() * 200, 65 + amp.getLevel() * 300, 100, 120);
  image(img2, 30 + amp.getLevel() * 200, 120 + amp.getLevel() * 200, 300, 200);
  image(img4, 450 - amp.getLevel() * 200, 400 - amp.getLevel() * 200, 150, 150);
  
}

  
function playMusic(){
  if(!mm.isPlaying()){
    mm.play();
    button.html('STOP');
  }else{
    mm.stop();
    button.html('PLAY');
  }
}

function minusVol(){
  vol = vol - 0.1;
}

function plusVol(){
  vol = vol + 0.1;
}

function pauseMusic(){
    if(!mm.isPlaying()){
    mm.play();
    button.html('STOP');
  }else{
    mm.pause();
    button.html('PLAY');
    mm.stop();
    button.html('PLAY');
  }
}

function jumpSong(){
  jumpV = jumpV+17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423;
  }
  mm.jump(jumpV);
}

function jumpSong2(){
  jumpV = jumpV - 17.3424;
  if(jumpV <= 17.3424){
    jumpV = 0;
  }
  mm.jump(jumpV);
}