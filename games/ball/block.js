function Block(){
  this.x = remaining.splice(floor(random(remaining.length)),1)*60;
  this.y = 60;
  this.destination = 120
  this.score = round;
  mutate = random([0,0,0,0,0,0,0,1]);
  if (mutate){
    this.score *= 2;
  }

  this.draw = function(i){
    if (this.score > 0){
      strokeWeight(0)
      colorMode(HSB)
      fill((this.score*5)%360,75,85)
      stroke(22,22,29)
      rect(this.x,this.y,60,60)
      colorMode(RGB)
      fill(0)
      textSize(30)
      textAlign(CENTER,CENTER)
      text(this.score,this.x+30,this.y+30)
      if (this.y>=height-60){
        gameOver=true
      }
    }
  }
  this.update = function(i){

    if (movingBlocks){
      this.y+=2;
      // if (this.y == this.destination && i == 0){
      //   movingBlocks = false;
      //   this.destination = this.y + 60
      //   round++
      //   nextRound()
      //   moving = false
      //   onGround = false
      // }
    }

  }
}
