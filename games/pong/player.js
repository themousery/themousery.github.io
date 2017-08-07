function Player() {
  this.colour = [int(random(0,255)), int(random(0,255)), int(random(0,255))];
  this.cdir = [];
  temp = [-1,1];
  for (var i = 0; i < 3; i++) {
    this.cdir.push(temp[Math.floor(Math.random() * 2)]);
  }
  this.y = H-70;
  this.x = 0;
  
  this.update = function() {
    this.x = mouseX - 150;
    i = int(random(0,2));
    if (this.colour[i] === 0 || this.colour[i] === 255) {
      this.cdir[i] = -this.cdir[i];
    }
    this.colour[i] += this.cdir[i];
    
  this.show = function() {
    push();
    noStroke();
    fill(this.colour);
    rect(this.x, this.y, 300, 35);
    pop();
  }
  }
}