function Ball(x=width/2,y=height-9){
  this.r = 9
  this.d = 18
  this.pos = createVector(x,y)
  this.vel = createVector()
  
  this.update = function(i){
    if (moving && counter>i){
      this.move()
    }else if (!moving){
      this.doIMove=true
      this.vel.set(mouseX-this.pos.x, mouseY-this.pos.y).setMag(10)
    }
  }
  
  this.move = function(){
    // there is only one library i found which does exactly this but it's 
    // specifically designed for pixi.js and doesn't work with anything else...
    // i apologize for the horrible code.
    let newX = this.pos.x + this.vel.x
    let newY = this.pos.y + this.vel.y
    
    // walls...
    if (newX+this.r >= width){
      this.vel.x = -abs(this.vel.x)
      newX = width-this.r
    }else if (newX < this.r){
      this.vel.x = abs(this.vel.x)
      newX = this.r+newX
    }
    if (newY <= this.r){
      this.vel.y = abs(this.vel.y)
      newY = this.r+newY
    }
    if (newY >= height-this.r){
      if(!firstBall){firstBall=this}else{this.pos.set(firstBall.pos.x, firstBall.pos.y)}
      doneBalls++
      newY = height - this.r
      return
    }
    
    // blocks.....
    // yes. it's bad.
    for (block of blocks){
      let b = board
      let x = block.x/60
      let y = block.y/60
      if (newY+this.r > block.y && newY-this.r < block.y+60 && newX-this.r < block.x+60 && newX-this.r > block.x+50 && !b[x+1][y]){
        this.vel.x = abs(this.vel.x)
        newX = block.x+60+this.r
        block.value--;
      }
      if (newY+this.r > block.y && newY-this.r < block.y+60 && newX+this.r > block.x && newX+this.r<block.x+10 && !b[x-1][y]){
        this.vel.x = -abs(this.vel.x)
        newX = block.x - this.r
        block.value--;
      }
      if (newX+this.r > block.x && newX-this.r < block.x+60 && newY-this.r < block.y+60 && newY-this.r > block.y+50 && !b[x][y+1]){
        this.vel.y = abs(this.vel.y)
        newY = block.y+60+this.r
        block.value--;
      }
      if (newX+this.r > block.x && newX-this.r < block.x+60 && newY+this.r > block.y && newY+this.r < block.y+10 && !b[x][y-1]){
        this.vel.y = -abs(this.vel.y)
        newY = block.y - this.r
        block.value--;
      }
    }
    
    this.pos.x = newX
    this.pos.y = newY
  }
  
  this.draw = function(){
    fill('rgb(247,239,153)')
    ellipse(this.pos.x, this.pos.y, this.r*2)
  }
}

function newBall(x,y){
  balls.push(new Ball(x,y))
}

function drawLine(){
  let line = balls[0].pos.copy()
  let vel = balls[0].vel.copy().setMag(10)
  stroke('rgb(247,239,153)')
  strokeWeight(2)
  for (i=0;i<70;i++){
    line.add(vel)
    point(line.x, line.y)
  }
}