function setupPaddle(){
  paddle = {
    x:width/2,
    y:height-25,
    width:125,
    
    update:function(){
      paddle.x = mouseX-paddle.width/2
    },
    
    draw:function(){
      colorMode(HSB)
      fill(0, s, b)
      rect(paddle.x, paddle.y, paddle.width, 5)
    }
  }
}