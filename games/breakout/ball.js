function setupBall(){
  ball = {
    pos:createVector(width/2,height-200),
    vel:createVector(random(-1,1),1).setMag(5),
    move:false,
    hue:0,
    
    update:function(){
      ball.hue+=2;
      if(ball.move){ball.pos.add(ball.vel)}
      if(collide(ball.pos.x,ball.pos.y,5,5,paddle.x,paddle.y,paddle.width,5)){
        // if collide with paddle
        ball.vel.y = -abs(ball.vel.y)
        ball.pos.y = paddle.y-5
      }
      if(ball.pos.x>=width){ball.vel.x=-abs(ball.vel.x);ball.pos.x=width-5}
      if(ball.pos.x<=0){ball.vel.x=abs(ball.vel.x);ball.pos.x=0}
      if(ball.pos.y<=0){ball.vel.y=abs(ball.vel.y)}
      if(ball.pos.y>=height){} // gameover
    },
    
    draw:function(){
      colorMode(HSB)
      fill(ball.hue%360, s, b)
      rect(ball.pos.x, ball.pos.y, 7, 7)
    }
  }
  setTimeout(function(){ball.move=true}, 1000)
}