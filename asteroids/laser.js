function Laser() {
  this.x = mouseX - 2;
  this.y = mouseY;
  
  this.update = function() {
    this.y -= 9;
  }
  this.show = function() {
    fill(75, 10, 200);
    rect(this.x, this.y, 3, 10);
  }
}

function AlienLaser(x, y) {
  this.x = x + 46;
  this.y = y + 4;
  
  this.update = function() {
    this.y += 9;
  }
  
  this.show = function() {
    fill(10,200,75);
    rect(this.x, this.y, 3, 10);
  }
}