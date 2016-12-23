function Alien() {
  this.img = ufoimg;
  this.speed = int(random(5,7));
  temp = [-182, W+90];
  this.x = temp[Math.floor(Math.random() * 2)];
  this.y = int(random(50, 200));
  this.laserfire = frameCount/60;
  this.born = frameCount
  this.hp = 3;
  
  this.update = function() {
    this.x += this.speed;
    
    if (this.x >= W-92) {
      this.speed = -abs(this.speed);
    }
    else if (this.x <= 0) {
      this.speed = abs(this.speed);
    }
    
    if (int(frameCount/60) !== this.laserfire) {
      this.laserfire = frameCount/60;
      alasers.push(new AlienLaser(this.x,this.y));
    }
  }
  
  this.show = function() {
    image(this.img, this.x, this.y);
  }
}