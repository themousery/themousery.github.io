function setup(){
  createCanvas(700,500)
  setupBoard()
  tokens = []
  gravity = createVector(0,0.5)
  turn = 0
  ref = ["#C84630","#3943B7"]
}

function draw(){
  drawBoard()
  let w = checkWin()
  if(w>-1){print(w)}
  
  // indicator thing
  let x = floor(mouseX/(width/7))*(width/7)
  noStroke()
  let c = color(ref[turn])
  c._array[3] = 0.25
  fill(c)
  rect(x, 0, 100, height)
  
  // tokens
  for (token of tokens){
    noStroke()
    token.update()
    token.draw()
  }
}

function mouseReleased(){
  let x = floor(mouseX/(width/7))
  if (x>=0&&x<7){
    newToken(x, turn)
    turn = int(!turn)
  }
}