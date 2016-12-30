function Alien() {
  this.img = ufoimg;
  this.speed = int(random(5,7));
  this.x = choice([-182, W+90]);
  this.y = randint(50, 200);
  this.laserfire = counter/60;
  this.hp = 3;

  this.update = function() {
    this.x += this.speed;

    if (this.x >= W-92) {
      this.speed = -abs(this.speed);
    }
    else if (this.x <= 0) {
      this.speed = abs(this.speed);
    }
  }

  this.show = function() {
    image(this.img, this.x, this.y);
  }
}
