function Hud() {
  this.bleed = false;
  this.read = 0;
  this.back = false;
  this.hp = heartimg1;
  
  this.update = function() {
    if (this.bleed) {
      if(this.back) {
        this.read -= 2;
      }
      else {
        this.read += 2
      }
      background(255,0,0, this.read);
      if (this.read >= 50) {
        this.back = true
      }
      if (this.read <= 0 && this.back) {
        this.bleed = false;
        this.back = false;
        this.read = 0
      }
    }
    textSize(50);
    fill(255);
    text(score, 40, 80);
    for (var i = 0; i < player.hp; i++) {
      image(this.hp, i*50+W-player.hp*50, 15);
    }
  }
}