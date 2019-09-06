function Block(x,y){
  this.x = x
  this.y = y
  
  this.update = function(){
    
  }
  
  this.draw = function(){
    colorMode(HSB)
    fill(this.y%360, s, b)
    noStroke()
    rect(this.x, this.y, 30, 30)
  }
}

function newBlock(x,y){
  blocks.push(new Block(x,y))
}