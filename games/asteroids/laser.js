function Laser(type, x, y){
  this.type = type
  this.x = x;
  this.y = y;

  this.update = function(){
    if (this.type == 0){
      this.y-=10;
    }
    else{
      this.y+=10;
    }
  }
  this.draw = function(){
    if (this.type==0){
      fill(100,75,255)
    }
    else{
      fill(255,100,75)
    }
    noStroke()
    rect(this.x,this.y,3,10)
  }
}
