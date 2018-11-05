function Point(){
  this.x = available.splice(floor(random(available.length)),1)*60+30
  this.y = 30
  this.d = 30
  
  this.move = function(){
    new TWEEN.Tween(this)
        .to({y:this.y+60}, 500)
        .start()
  }
  this.move()
  
  this.draw = function(i){
    colorMode(RGB)
    fill(204,204,255);
    noStroke();
    ellipse(this.x,this.y,this.d)
    
    for (ball of balls){
      if (dist(this.x,this.y,ball.pos.x,ball.pos.y)<this.d+ball.d){
        points.splice(i,1)
        newBalls++
      }
    }
  }
}

function newPoint(){
  points.push(new Point())
}