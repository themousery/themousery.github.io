function Point(){
  this.x=remaining.splice(random(remaining),1)*60;
  this.y=60;
  this.destination = 120;

  this.update = function(i){
    for (j=0;j<balls.length;j++){
      ball=balls[j]
      if (collideRectCircle(this.x,this.y,60,60,ball.pos.x,ball.pos.y,ball.r*2)){
        newBalls++
        points.splice(i,1);
      }
    }
    if (movingBlocks){
      this.y+=2;
    }
  }

  this.draw = function(i){
    fill(255);
    rect(this.x,this.y,60,60)
  }
}
