function Asteroid() {
  this.speed = int(random(7,10));
  this.img = asteroidimg;
  this.x = int(random(0, W));
  this.y = -50
  
  this.update = function() {
    this.y += this.speed;
  }
  
  this.show = function() {
    image(this.img, this.x, this.y);
  }
}