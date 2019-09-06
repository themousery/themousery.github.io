function setup(){
  cnv = createCanvas(600,500)
  s = 90
  b = 85
  setupBoard()
  setupBall()
  setupPaddle()
  windowResized()
}

function draw(){
  colorMode(RGB)
  fill(22,22,29)
  rect(-2,-2,width+4,height+4)
  
  for (block of blocks){
    block.update()
    block.draw()
  }
  
  paddle.update(); paddle.draw()
  ball.update(); ball.draw()
}

collide=function(x,y,w,h,x2,y2,w2,h2){return(x+w>=x2&&x<=x2+w2&&y+h>=y2&&y<=y2+h2)}