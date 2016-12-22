function Asteroid() {
  this.speed = int(random(7,10));
  this.img = loadImage("images/asteroid.png");
  //i = [0,90,180,270][random(0,3)];
  //this.img.rotate(i);
  this.x = int(random(0,W));
  this.y = -50;
  
  this.update = function() {
    this.left = this.x
    this.right = this.x + this.img.width
    this.top = this.y
    this.bottom = this.y + this.img.height
    this.y += this.speed;
  }
}