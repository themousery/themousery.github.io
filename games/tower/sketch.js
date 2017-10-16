var blockWidth = 200
var handicap = 7

function preload(){
  font = loadFont("/files/Connection.otf");
}

function setupBlocks(){
  startHue = floor(random(0,360))
  blocks = []
  currentBlock = 1
  blocks.push(new Block(startHue, height-50, blockWidth, (width-blockWidth)/2))
  blocks.push(new Block(startHue+10, height-100))
  score = 0
}

function setup(){
  cnv = createCanvas(700,600)
  gameover = false
  cam = 0
  zoomingUp = false
  colorMode(HSB)
  textFont(font)
  setupBlocks()
}

function draw(){
  translate(0, cam)
  background(22,22,29);
  blocks[currentBlock].update()
  for (i=blocks.length-1;i>=0;i--){
    blocks[i].draw(i)
  }
  if (!gameover){
    if (zoomingUp){
      if (cam<=0){
        cam+=50
      }
      else{
        zoomingUp=false
      }
    }
    textSize(50)
    textAlign(LEFT, TOP)
    fill(blocks[currentBlock].hue%360, 75, 85)
    text(score, 10, -cam+10)
    movingCam = (blocks[currentBlock].y < -cam+width/2-100)
    cam+=3*int(movingCam)
  }
  else{
    movingCamDown = (cam>=-height)
    cam-=int(movingCamDown)*50
    textAlign(CENTER, CENTER)

    textSize(100)
    text("Game Over", width/2, height+120)

    textSize(50)
    text("Final Score: "+score, width/2, height+320)

    textSize(30)
    text("click to restart", width/2, height+520)
  }
  stroke(252,251,227)
  strokeWeight(3)
  line(0,height,width,height)
}

function mousePressed(){
  if (gameover){
    setupBlocks()
    zoomingUp=true
    cam=0
  }
  else{
    blocks[currentBlock].doCutoff()
  }
}

function touchMoved(e){e.preventDefault()}
