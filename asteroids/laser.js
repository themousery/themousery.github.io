function Laser() {
  this.x = character.x + character.img.width/2 - 2
  this.y = character.y + character.img.height/2 
  
  this.update = function() {
    this.left = this.x
    this.right = this.x + 3
    this.top = this.y
    this.bottom = this.y + 10
    this.y -= 9
  }
}