function Firefly(x, y, type) {
  this.x = x;
  this.y = y;
  this.type = type
  this.hu = 0;

  this.gorand = function() {
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
  }

  this.update = function() {
    if (this.type=="random") {
      this.gorand();
    }
    else if (this.type=="left"){
      go = floor(random(2));
      if (go){
        this.x-=1
      }
      else{
        this.gorand();
      }
    }
    else if (this.type=="right"){
      go = floor(random(2));
      if (go){
        this.x+=1
      }
      else{
        this.gorand();
      }
    }
    else if (this.type=="up"){
      go = floor(random(2));
      if (go){
        this.y-=1
      }
      else{
        this.gorand();
      }
    }
    else if (this.type=="down"){
      go = floor(random(2));
      if (go){
        this.y+=1
      }
      else{
        this.gorand();
      }
    }
    else if (this.type=="follower"){
      diffx = mouseX-this.x
      diffy = mouseY-this.y
      if (diffx == 0) {
        diffx = 1;
      }
      if (diffy == 0){
        diffy = 1;
      }
      r = ceil(random( abs(diffx) + abs(diffy) ));
      if (r <= abs(diffx)){
        this.x += diffx / abs(diffx)
      }
      else{
        this.y += diffy / abs(diffy)
      }
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
