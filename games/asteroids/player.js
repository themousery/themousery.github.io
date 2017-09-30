player = {}

player.update = function(){
  this.x = mouseX-22
  this.y = mouseY-35
}
player.draw = function(){
  image(ship,this.x,this.y)
}
