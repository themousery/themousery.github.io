function preload(){
  font = loadFont("/files/fonts/Connection.otf")
  icon = loadImage("restart.png")
}

function setup(){
  cnv = createCanvas(420,600) // 7 x 10
  textFont(font)
  windowResized()
  round = 0
  counter = 0
  newBalls = 0
  moving = false
  available = [0,1,2,3,4,5,6]
  blocks = []
  balls = []
  points = []
  board = []
  gameOver = false
  movingBlocks = false
  newRound()
  newBall()
}

function draw(){
  fill('rgb(22,22,29)')
  rect(-1,-1,width+2,height+2)
  
  if (gameOver){
    colorMode(RGB)
    fill('rgb(247,239,153)')
    noStroke()
    textSize(50)
    text("Game Over", width/2, 100)
    image(icon, width/2-32, 400)
  }
  
  else{
    TWEEN.update()
    if(!moving){drawLine()}else{counter+=0.2}
    updateBlocks()
    for (i=points.length-1;i>=0;i--){points[i].draw(i)}
    doneBalls=0
    for ([i,ball] of balls.entries()){ ball.update(i); ball.draw() }
    if (doneBalls==balls.length){newRound();moving=false}
  }
}

function mouseReleased(){
  let y = balls[0].vel.copy().normalize().y
  if (y < 0 && !movingBlocks){
    moving = true
  }
  if (gameOver){
    setup()
  }
}

function windowResized(){
  let w = width/windowWidth
  let h = height/windowHeight
  if (w>h){
    cnv.style('width', '90%')
    cnv.style('height', 'auto')
  }else{
    cnv.style('height', '90%')
    cnv.style('width', 'auto')
  }
}

function touchMoved(e){
  e.preventDefault()
}
