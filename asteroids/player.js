function Player() {
  this.img = loadImage("resources/images/ship.png");
  this.hp = 3
  
  this.update = function() {
    this.x = mouseX - this.img.width/2;
    this.y = mouseY - this.img.height/2;
  }
  
  this.show = function() {
    image(this.img, this.x, this.y)
  }
}