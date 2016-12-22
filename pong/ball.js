function Ball() {
  this.speed = [int(random(-6,6)), int(random(10,15))];
  this.x = W/2-5;
  this.y = 100;
  this.colour = [int(random(0,255)), int(random(0,255)), int(random(0,255))];
  this.cdir = [];
  temp = [-1,1];
  for (var i = 0; i < 3; i++) {
    this.cdir.push(temp[Math.floor(Math.random() * 2)]);
  }
  
  this.update = function() {
    this.x += this.speed[0];
    this.y += this.speed[1];
    
    if (this.x < 0) {
      this.speed[0] = abs(this.speed[0]) + int(random(-1,1));
    }
    else if (this.x+10 > W) {
      this.speed[0] = -abs(this.speed[0]) + int(random(-1,1));
    }
    else if (this.y < 0) {
      score += 1
      this.speed[1] = abs(this.speed[1]) + int(random(-1,1));
    }
    
    i = int(random(0,2));
    if (this.colour[i] === 0 || this.colour[i] === 255) {
      this.cdir[i] = -this.cdir[i];
    }
    this.colour[i] += this.cdir[i];

    if (((player.y < this.y && this.y < player.y+35) || (player.y < this.y+10 && this.y+10 < player.y+35)) && ((player.x < this.x  && this.x < player.x+300) || (player.x < this.x+10 && this.x+10 < player.x+300))) {
      this.speed[1] = -abs(this.speed[1]) + int(random(-1,1));
      beep.play();
    }
    if (this.speed[0] === 0) {
      this.speed[0] = 2;
    }
  }
  
  this.show = function() {
    push();
    noStroke();
    fill(this.colour);
    rect(this.x, this.y, 10, 10);
    pop();
  }
}