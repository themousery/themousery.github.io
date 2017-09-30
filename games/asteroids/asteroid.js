function Asteroid(){
  this.x = floor(random(width))
  this.y = -46
  this.img = random(asteroid_imgs)
  this.speed = floor(random(3,5))
  if (this.img == asteroid_imgs[0] || this.img == asteroid_imgs[1]){
    this.width = 46;
    this.height = 38;
  }
  else{
    this.width = 38
    this.height = 46
  }

  this.update = function(i){
    this.y+=this.speed;
    if (this.y >= height){
      asteroids.splice(i,1)
      // asteroids.push(new Asteroid())
    }
  }
  this.draw = function(){
    image(this.img, this.x, this.y)
  }
}
