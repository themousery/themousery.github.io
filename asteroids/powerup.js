function Powerup() {
  this.speed = int(random(7,10));
  this.img = heartimg;
  this.y = -20;
  this.x = int(random(0,W));
  
  this.update = function() {
    this.y += this.speed;
  }
  this.show = function() {
    image(this.img, this.x, this.y);
  }
}