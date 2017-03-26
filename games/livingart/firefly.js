function Firefly(x, y) {
  this.x = x;
  this.y = y;
  this.hu = 0;

  this.update = function() {
      r = floor(random(4));
      switch (r) {
        case 0:
          this.y-=1;
          break;
        case 1:
          this.x+=1;
          break;
        case 2:
          this.y+=1;
          break;
        case 3:
          this.x-=1;
          break;
      }
    this.hu++;
    if (this.hu >= 360) {
      this.hu = 0;
    }
  }

  this.show = function() {
    colorMode(HSB);
    stroke(this.hu, 100, 100);
    point(this.x, this.y);
  }
}
