function Ball(){
  this.r = 10
  this.pos = createVector(width/2,height-this.r-1)
  if (balls.length>0){
    this.pos.x = balls[0].pos.x
  }
  this.vel = createVector()

  this.update = function(i){
    if (moving && cur>=i*5){
      this.pos.add(this.vel)

      if (this.pos.x >= width-this.r){
        this.pos.x = width-this.r
        this.vel.x = -abs(this.vel.x)
      }
      else if (this.pos.x <= this.r){
        this.pos.x = this.r
        this.vel.x = abs(this.vel.x)
      }
      if (this.pos.y <= this.r){
        this.pos.y = this.r;
        this.vel.y = abs(this.vel.y)
      }
      if (this.pos.y >= height-this.r-1){
        if (onGround){
          this.pos.x = onGround
        }
        else {
          onGround = this.pos.x
        }
        this.pos.y = height-this.r-1;
        this.vel.set(0,0)
        delete ballsout[i.toString()]
      }

      for (j=0;j<blocks.length;j++){
        block = blocks[j]
        if (collideRectCircle(block.x, block.y, 60, 60, this.pos.x, this.pos.y, this.r*2)){
          if (this.pos.x <= block.x){
            this.vel.x = -abs(this.vel.x)
          }
          if (this.pos.x >= block.x+60){
            this.vel.x = abs(this.vel.x)
          }
          if (this.pos.y <= block.y){
            this.vel.y = -abs(this.vel.y)
          }
          if (this.pos.y>= block.y+60){
            this.vel.y = abs(this.vel.y)
          }
          block.score--;
        }
      }

    }
    if (!moving){
      // if (i==0){
        this.vel.set(mouseX-this.pos.x,mouseY-this.pos.y)
        this.vel.setMag(10)
      // }
      // else{
      //   this.vel = balls[0].vel
      // }
    }
  }

  this.draw = function(){
    // if (i!=0){
      fill(255,239,213)
      ellipse(this.pos.x,this.pos.y,this.r*2)
    // }
  }
}
