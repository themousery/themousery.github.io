function Point(){
  this.x = remaining.splice(floor(random(remaining.length)),1)*60;
  this.y=60;

  this.update = function(i){
    for (j=0;j<balls.length;j++){
      ball=balls[j]
      if(dist(ball.pos.x,ball.pos.y,this.x,this.y) <= (30)+(ball.r)){
        newBalls++
        points.splice(i,1);
      }
    }
    if (movingBlocks){
      this.y+=2;
    }
  }

  this.draw = function(i){
    fill(204,204,255);
    noStroke();
    ellipse(this.x+30,this.y+30,30)
  }
}
