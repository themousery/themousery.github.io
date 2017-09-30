function preload(){
  ship = loadImage("images/ship.png");
  asteroid_imgs = [loadImage("images/asteroid1.png"),
                   loadImage("images/asteroid2.png"),
                   loadImage("images/asteroid3.png"),
                   loadImage("images/asteroid4.png")]
  font = loadFont("Connection.otf")
  laser_sound = loadSound("sounds/laser.wav")
  hit_sound = loadSound("sounds/hit.wav")
  explode_sound = loadSound("sounds/explosion.wav")
  laser_sound.setVolume(0.5)
}

function setup(){
  cnv = createCanvas(windowWidth,windowHeight)
  cnv.parent('cnv')
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    style = "color:blue;text-align:center;padding-top:25%;font-size:35"
    document.body.style="background-color:lightblue"
    b = document.getElementById('cnv')
    b.innerHTML="<h1 style='"+style+"'>Sorry, this game is for desktop only</h1>"
    noLoop()
    laser_sound.disconnect()
  }
  textFont(font)
  stars = createGraphics(windowWidth,windowHeight)
  stars.background(0)
  stars.stroke(255)
  for (i=0;i<500;i++){
    stars.point(floor(random(windowWidth)),floor(random(windowHeight)))
  }
  asteroids = []
  lasers = []
  asteroid_num = 15
  asteroid_count = 20
  score = 0
}


function draw(){
  collisions()
  if (asteroids.length < asteroid_num){
    asteroid_count--;
    if (asteroid_count == 0){
      asteroids.push(new Asteroid())
      asteroid_count = 20;
    }
  }

  image(stars,0,0)
  player.update()
  player.draw()
  for (i=asteroids.length-1;i>=0;i--){
    asteroids[i].update(i)
    asteroids[i].draw()
  }
  for (i=lasers.length-1;i>=0;i--){
    lasers[i].update(i);
    lasers[i].draw();
  }
  fill(255)
  textSize(50)
  textAlign(LEFT, TOP)
  text(score, 10,10)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function mousePressed(){
  lasers.push(new Laser(0, player.x+22, player.y+35));
  laser_sound.play()
}
