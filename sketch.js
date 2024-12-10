let mm;
// let mm2;
let button;

let button2;
let button3;

// let button4;

let buttonPause;

let buttonJump;

let vol;
let slider;
let sliderPan;
let sliderRate;

let jumpV;

let amp;

function preload(){
  soundFormats('mp3', 'ogg');
  mm = loadSound('leest.mp3');
  // mm2 = loadSound('svtlo.mp3');
}

function setup() {
  createCanvas(400, 500);
  
  amp = new p5.Amplitude();
  
  vol = 0.5;
  // mm.play();
  
  button = createButton('PLAY');
  buttonPause = createButton('PAUSE');
  button.mousePressed(playMusic);
  
  buttonPause.mousePressed(pauseMusic);
  
  buttonJump = createButton("<<");
  buttonJump.mousePressed(jumpSong2);
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong);
  
  // button2 = createButton('-');
  // button2.mousePressed(minusVol);
  // button3 = createButton('+');
  // button3.mousePressed(plusVol);
  slider = createSlider(0, 2, 0.5, 0.1);
  sliderPan = createSlider(-1, 1, 0, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);
  
  // button4 = createButton('PLAY2');
  // button4.mousePressed(playMusic2);
  
}

function draw() {
  background(100,100,200);
  mm.setVolume(vol);
  vol = slider.value();
  mm.pan(sliderPan.value());
  mm.rate(sliderRate.value());
  console.log(amp.getLevel()*1000);
  
  fill(255,255,255);
  ellipse(100,100,100,50);
  ellipse(300,100,100,50);
  
  fill(0,0,0);
  ellipse(100+amp.getLevel()*100,100,25,25);
  ellipse(300+amp.getLevel()*100,100,25,25);
  
  fill(255,100,0);
  ellipse(200,300,amp.getLevel()*1000, amp.getLevel()*1000);
  
  if(jumpV>173.424){
    mm.stop();
    button.html("PLAY");
  }
  // console.log(vol);
  // console.log(mm.duration());
  // mm2.setVolume(vol);
}

function playMusic(){
  if(!mm.isPlaying()){
    mm.play();
    button.html('STOP');
  }else{
    // mm.pause
    mm.stop();
    button.html('PLAY');
  }
}

// function playMusic2(){
//   if(!mm2.isPlaying()){
//     mm2.play();
//     button4.html('STOP');
//   }else{
//     mm2.stop();
//     button4.html('PLAY');
//   }
// }

function minusVol(){
  vol = vol - 0.1;
}

function plusVol(){
  vol = vol + 0.1;
}

function pauseMusic(){
    if(!mm.isPlaying()){
    // mm.play();
    // button.html('STOP');
  }else{
    mm.pause
    button.html('PLAY');
    // mm.stop();
    // button.html('PLAY');
  }
}

function jumpSong(){
  jumpV = jumpV + 17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423
  }
  mm.jump(jumpV);
  // var t = random(mm.duration());
  // // mm.jump(t);
  // mm.jump(32.5); // mm.duration():100 = 현위치:퍼센트
}

function jumpSong2(){
  jumpV = jumpV - 17.3424;
  if(jumpV + 17.3424 <= 173.424){
    jumpV = 173.423
  }
  mm.jump(jumpV);
}