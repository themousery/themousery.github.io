function preload() {
  font = loadFont("resources/SF Pixelate.ttf");
  music = loadSound("resources/Voice Over Under.mp3");
  beep = loadSound("resources/beep.wav");
}

function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
  score = 0;
  balls = [];
  textFont(font);
  music.play();
  player = new Player();
}

function checkWindow() {
  if (W != windowWidth || H != windowHeight) {
    W = windowWidth;
    H = windowHeight;
    player.y = H-70;
    resizeCanvas(W,H);
  }
}

function mousePressed() {
  balls.push(new Ball());
}

function draw() {
  checkWindow();
  background(0);
  player.update();
  player.show();
  for (var i = balls.length-1; i >= 0; i--)  {
    balls[i].update();
    balls[i].show();
    if (balls[i].y > H) {
      balls.splice(i, 1);
    }
  }
  if (balls.length === 0) {
    push();
    textSize(120);
    fill(255);
    text("no balls", 50, H/2);
    pop();
  }
  push();
  textSize(50);
  fill(255);
  text(score, 40, 80);
  pop();
}