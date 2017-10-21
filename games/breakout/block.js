function Block(x,y){
  this.x = x;
  this.y = y
  if (this.x/blockWidth==11){
    this.w = width-this.x
  }
  else{
    this.w = blockWidth
  }
  this.h = blockHeight

  this.update = function(x,y){
    // if (collideRectRect(this.x, this.y, this.w, this.h, ball.x, ball.y, ball.w, ball.h)){
    //   blocks[x].splice(y,1)
    //   ball.speed[1] = abs(ball.speed[1])
    // }

    if (collideRectRect(this.x, this.y, this.w, this.h, ball.x, ball.y, ball.w, ball.h)){
      if (ball.x <= this.x){
        ball.speed[0] = -abs(ball.speed[0])
        ball.x = this.x-ball.w
      }
      if (ball.x >= this.x+60){
        ball.speed[0] = abs(ball.speed[0])
        ball.x = this.x+60+ball.w
      }
      if (ball.y <= this.y){
        ball.speed[1] = -abs(ball.speed[1])
        ball.y = this.y-ball.h
      }
      if (ball.y>= this.y+60){
        ball.speed[1] = abs(ball.speed[1])
        ball.y = this.y+60+ball.h
      }
      blocks[x].splice(y,1)
    }
  }
  this.draw = function(){
    fill(this.y, 75, 85)
    rect(this.x,this.y,this.w,this.h)
  }

  this.fixSide = function(){
    if (this.x/blockWidth==11){
      this.w = width-this.x
    }
    else{
      this.w = blockWidth
    }
  }
}
