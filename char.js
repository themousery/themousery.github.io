function Char() {
  this.img = loadImage("images/ship.png");
  this.x = 0;
  this.y = 0;
  this.hp = 3;
  this.lasers = [];
  
  this.update = function() {
    this.left = this.x
    this.right = this.x + this.img.width
    this.top = this.y
    this.bottom = this.y + this.img.height
    this.x = mouseX - this.img.width/2
    this.y = mouseY - this.img.height/2
  }
}