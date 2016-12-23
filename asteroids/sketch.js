function preload() {
  music = loadSound("resources/sounds/Latin Industries.mp3");
  font = loadFont("resources/SF Pixelate.ttf");
  laser = loadSound("resources/sounds/laser.wav");
  laser.setVolume(.5);
  hit = loadSound("resources/sounds/hit.wav");
  explosion = loadSound("resources/sounds/explosion.wav");
  powerup = loadSound("resources/sounds/powerup.wav");
  ufoimg = loadImage("resources/images/ufo.png");
  asteroidimg = loadImage("resources/images/asteroid.png");
  heartimg = loadImage("resources/images/heart.png");
  heartimg1 = loadImage("resources/images/heart2.png");
  
}

function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
  stars = createGraphics(W,H);
  stars.background(0);
  stars.stroke(255);
  for (var i = 0; i < 350; i++){
    stars.point(int(random(0,W)), int(random(0,H)));
  }
  music.setVolume(.3);
  music.play();
  music.loop(duration=200);
  player = new Player();
  hud = new Hud();
  lasers = [];
  asteroids = [];
  powerups = [];
  aliens = [];
  alasers = [];
  score = 0;
  gameover = false;
  textFont(font);
  noStroke();
  noCursor();
}

function checkWindow() {
  if (W != windowWidth || H != windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W, H);
    stars = createGraphics(W,H);
    stars.background(0);
    stars.stroke(255);
    for (var i = 0; i < 350; i++){
      stars.point(int(random(0,W)), int(random(0,H)));
  }
  }
}

function mousePressed() {
  lasers.push(new Laser());
  laser.play();
}

function keyPressed() {
  if (gameover) {
    gameover = false;
    score = 0;
    frameCount = 0;
  }
}
function draw() {
  checkWindow();
  collisions();
  image(stars, 0, 0);
  
  if (!gameover) {
  
  if (int(random(0,1000)) === 1) {
    powerups.push(new Powerup());
  }
  
  if (int(random(0,1000)) <= 4) {
    aliens.push(new Alien());
  }
  
  if (asteroids.length < 20 && frameCount/60 > asteroids.length/2) {
    asteroids.push(new Asteroid());
  }
  }
  
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();
    
    if (lasers[i].y <= -10) {
      lasers.splice(i, 1);
    }
  }
  
  for (i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    asteroids[i].show();
    
    if (asteroids[i].y >= H) {
      asteroids.splice(i, 1);
    }
  }
  
  for (i = 0; i < powerups.length; i++) {
    powerups[i].update();
    powerups[i].show();
    
    if (powerups[i].y >= H) {
      powerups.splice(i, 1);
    }
  }
  
  for (i = 0; i < alasers.length; i++) {
    alasers[i].update();
    alasers[i].show();
    
    if (alasers[i].y > H) {
      alasers.splice(i, 1);
    }
  }
  
  for (i = 0; i < aliens.length; i++) {
    aliens[i].update();
    aliens[i].show();
    
    if (aliens[i].hp <= 0) {
      aliens.splice(i, 1);
      score += 10;
    }
  }
  
  if (!gameover) {
    player.update();
    player.show();
  }
  else {
    fill(255);
    textSize(120);
    text("You Died!", W/2-324, 400);
    textSize(50);
    text("press any key to continue", W/2-400, 700)
    
  }
  
  if (player.hp <= 0) {
    explosion.play();
    gameover = true;
    asteroids = [];
    powerups = [];
    lasers = [];
    aliens = [];
    alasers = [];
    player.hp = 3;
    
    //isHigh = [];
    //for (i = 0; i < highdat; i++) {
    //  if (max([highdat[i], score]) === score) {
    //    ishigh.push(i);
    //  }
    //}
   // if (isHigh.length > 0) {
    //  isHigh = min(isHigh)+1;
    //  entering = true;
    //}
  }
  
  hud.update();
}