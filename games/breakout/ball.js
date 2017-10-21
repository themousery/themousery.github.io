function Ball(){
  this.w = width*0.015
  this.h = height*0.025
  this.x = (width-this.w)/2
  this.y = height/2
  this.speed = [1,1]

  this.update = function(){
    this.x+=this.speed[0]*(width/200)
    this.y+=this.speed[1]*(height/200)
    if (this.x+this.w>=width){
      this.speed[0]=-abs(this.speed[0])
    }
    if(this.x<=0){
      this.speed[0]=abs(this.speed[0])
    }
    if (this.y<=0){
      this.speed[1]=abs(this.speed[1])
    }
    if (this.x>=player.x && this.x+this.w<=player.x+player.w && this.y+this.h>=player.y && this.y<=height){
      this.speed[1]=-abs(this.speed[1])
      this.y = player.y-this.h
    }
    if (this.y>=height){
      gameover = true
    }
  }

  this.draw = function(){
    fill(45,75,85)
    rect(this.x,this.y,this.w,this.h)
  }
}
