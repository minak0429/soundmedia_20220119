let mm; // 1번 노래
let mm2; // 2번 노래

let button; // 1번 플레이 버튼
let button2; // 2번 플레이 버튼

let buttonPause; // 1번 pause
let buttonJump; // 1번 jump <<
let buttonJump2; // 1번 jump >>

let buttonPause2; // 2번 pause
let buttonJump3; // 2번 jump <<
let buttonJump4; // 2번 jump >>

let vol; // 볼륨 변수 선언
let vol2;

let jumpV;
let amp;

let slider; // 1번 볼륨 슬라이드
let sliderPan; // 1번 lr 슬라이드
let sliderRate; // 1번 rate 슬라이드

let slider2; // 2번 볼륨 슬라이드
let sliderPan2; // 2번 lr 슬라이드
let sliderRate2; // 2번 rate 슬라이드


function preload(){
  soundFormats('mp3');
  mm = loadSound('m1.mp3');
  mm2 = loadSound('m2.mp3');
}

function setup() {
  img3 = loadImage("back.jpg");
  img = loadImage("i2.png");
  img2 = loadImage("i1.png");
  img4 = loadImage("i3.png");
  
  createCanvas(640, 640);
  
  
  amp = new p5.Amplitude();
  
  vol = 0.5;
  vol2 = 0.5;
  
  button = createButton('PLAY'); // 1번
  button.mousePressed(playMusic);
  
  buttonPause = createButton('PAUSE'); // 1번
  buttonPause.mousePressed(pauseMusic);
  
  buttonJump= createButton("<<"); // 1번
  buttonJump.mousePressed(jumpSong2);
  buttonJump2 = createButton(">>");
  buttonJump2.mousePressed(jumpSong);
  
  slider = createSlider(0, 2, 0.5, 0.1); // 1번
  sliderPan = createSlider(-1, 1, 0, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);
  
  button2 = createButton('PLAY'); // 2번
  button2.mousePressed(playMusic2);
  
  buttonPause2 = createButton('PAUSE'); // 2번
  buttonPause2.mousePressed(pauseMusic2);
  
  buttonJump3= createButton("<<"); // 2번
  buttonJump3.mousePressed(jumpSong4);
  buttonJump4 = createButton(">>");
  buttonJump4.mousePressed(jumpSong3);
  
  slider2 = createSlider(0, 2, 0.5, 0.1); // 2번
  sliderPan2 = createSlider(-1, 1, 0, 0.1);
  sliderRate2 = createSlider(0, 2, 1, 0.1);
  
  jumpV = 0;
  
}

function draw() {
  background(220);
  image(img3, 0, 0, 640, 640);
  
  mm.setVolume(vol); // 1번
  vol = slider.value();
  mm.pan(sliderPan.value());
  mm.rate(sliderRate.value());
  // console.log(amp.getLevel()*1000);
  
  mm2.setVolume(vol2); // 2번
  vol2 = slider2.value();
  mm2.pan(sliderPan2.value());
  mm2.rate(sliderRate2.value());
  // console.log(amp.getLevel()*1000);
  
  image(img, 290 + amp.getLevel() * 200, 65 + amp.getLevel() * 300, 100, 120); // 이미지
  image(img2, 30 + amp.getLevel() * 200, 120 + amp.getLevel() * 200, 300, 200); 
  image(img4, 450 - amp.getLevel() * 200, 400 - amp.getLevel() * 200, 150, 150);
  
}

  
function playMusic(){ // 1번
  if(!mm.isPlaying()){
    mm.play();
    button.html('STOP');
  }else{
    mm.stop();
    button.html('PLAY');
  }
}

function playMusic2(){ // 2번
  if(!mm2.isPlaying()){
    mm2.play();
    button2.html('STOP');
  }else{
    mm2.stop();
    button2.html('PLAY');
  }
}


function pauseMusic(){ // 1번
    if(!mm.isPlaying()){
      
  }else{
    mm.pause();
    button.html('PLAY');
  }
}

function pauseMusic2(){ // 2번
    if(!mm2.isPlaying()){
   
  }else{
    mm2.pause();
    button2.html('PLAY');
  }
}

function jumpSong(){ // 1번
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

function jumpSong3(){ // 2번
  jumpV = jumpV+17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423;
  }
  mm2.jump(jumpV);
}

function jumpSong4(){
  jumpV = jumpV - 17.3424;
  if(jumpV <= 17.3424){
    jumpV = 0;
  }
  mm2.jump(jumpV);
}