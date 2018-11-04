var blockWidth
var blockHeight

function preload(){
  font = loadFont("/files/fonts/Stellar.otf")
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
  blocks = []
  blockWidth = floor(width/12)
  blockHeight = floor(height*0.1)
  player = new Player()
  ball = new Ball()
  gameover = false
  textFont(font)
  started = false
  colorMode(HSB)
  isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  for(x=0;x<12;x++){
    blocks[x] = []
    for(y=0;y<4;y++){
      blocks[x][y] = new Block(x*blockWidth,y*blockHeight+blockHeight)
    }
  }
}

function draw(){
  background(22,22,29)
  if (!gameover){
    player.update()
    player.draw()
    if(started){
      ball.update()
    }
    else{
      textAlign(CENTER, CENTER)
      textSize(30)
      text("click to start", width/2, height/2+100)
    }
    ball.draw()
    for(x=0;x<blocks.length;x++){
      for(y=0;y<blocks[x].length;y++){
        blocks[x][y].update(x,y)
        if (blocks[x][y]){
          blocks[x][y].draw()
        }
      }
    }

  }
  else{
    textAlign(CENTER, CENTER)
    text("game over", width/2, height/2);
    text("click to restart", width/2, height/2+100)
  }
}

function mousePressed(){
  if (gameover){
    setup()
  }
  if (!started){
    started = true
  }
}

function windowResized(){
  player.w = width*0.25
  player.y = height-20
  var ballPercent = [ball.x/width, ball.y/height]
  console.log(ballPercent)
  resizeCanvas(windowWidth, windowHeight)
  ball.x = width*ballPercent[0]
  ball.y = height*ballPercent[1]
  ball.w = width*0.015
  ball.h = height*0.025
  old_blockWidth = blockWidth
  old_blockHeight = blockHeight;
  blockWidth = floor(width/12)
  blockHeight = floor(height*0.1)
  for(x=0;x<blocks.length;x++){
    for(y=0;y<blocks[x].length;y++){
      blocks[x][y].x = (blocks[x][y].x/old_blockWidth)*blockWidth;
      blocks[x][y].y = ((blocks[x][y].y-old_blockHeight)/old_blockHeight)*blockHeight+blockHeight;
      blocks[x][y].w = blockWidth;
      blocks[x][y].h = blockHeight;
      blocks[x][y].fixSide()
    }
  }
}
