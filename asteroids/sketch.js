var W;
var H;
var asteroids;
var character;
var gameover;
var score;

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
  asteroids = [];
  character = new Char();
  gameover = false;
  score = 0
  noCursor();
}

function checkWindow() {
  if (W != windowWidth || H != windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W,H);
    stars.background(0);
    stars.stroke(255);
    for (var i = 0; i < 350; i++){
      stars.point(int(random(0,W)), int(random(0,H)));
    }
  }
}

function draw() {
  checkWindow();
  image(stars, 0,0, W,H);
  
  if (spritecollide(character, asteroids, false).length > 0) {
    character.hp -= 1;
    //console.log("OUCH");
  }
  
  if (groupcollide(character.lasers, asteroids, true, true).length > 0) {
    score += 1;
    //console.log("BOOM");
  }
  
  if (asteroids.length < 25 && frameCount/60 > asteroids.length/2) {
    asteroids.push(new Asteroid());
  }
  
  for (i = 0; i < character.lasers.length; i++) {
    character.lasers[i].update();
    fill(75, 10, 200);
    noStroke();
    rect(character.lasers[i].x, character.lasers[i].y, 3, 10);
    
    if (character.lasers[i].y < 0) {
      character.lasers.splice(i,1);
    }
  }
  
  character.update()
  image(character.img, character.x, character.y, character.img.width, character.img.height);
  
  for (i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    image(asteroids[i].img, asteroids[i].x, asteroids[i].y, asteroids[i].img.width, asteroids[i].img.height);
    
    if (asteroids[i].y > H) {
      asteroids.splice(i,1);
    }
    
  }
}

function mousePressed() {
    character.lasers.push(new Laser());
}