function Player(){
  this.w = width*0.25
  this.x = (width-this.w)/2
  this.y = height-20

  this.update = function(){
    this.x = mouseX-(this.w/2)
  }

  this.draw = function(){
    fill(230,75,85);
    noStroke()
    rect(this.x, this.y, this.w, 10)
  }
}
