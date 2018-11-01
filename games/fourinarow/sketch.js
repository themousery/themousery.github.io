function preload(){
  font = loadFont("/files/Stellar.otf")
}

function setup(){
  cnv = createCanvas(700,500)
  setupBoard()
  tokens = []
  gravity = createVector(0,2)
  turn = 0
  ref = ["#C84630","#3943B7"]
  names = ["Red", "Blue"]
  won = -1
  textFont(font)
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  windowResized()
  selection = -1
  canPlace = true
}

function draw(){
  drawBoard()
  won = checkWin()
  
  // indicator thing
  let x = floor(mouseX/(width/7))*(width/7)
  noStroke()
  let c = color(ref[turn])
  c._array[3] = 0.25
  fill(c)
  if (!isMobile){rect(x, 0, 100, height)}
  else{rect(selection*100, 0, 100, height)}
  
  // tokens
  for (token of tokens){
    noStroke()
    token.update()
    token.draw()
  }
  
  if (won>-1){
    push()
    fill(0)
    translate(width/2,height/2)
    rect(-90,-25,180,50)
    pop()
    
    fill(ref[won])
    textSize(40)
    textAlign(CENTER, CENTER)
    text(names[won]+" wins.", width/2, height/2)
  }
}

function mouseReleased(){
  let x = floor(mouseX/(width/7))
  if (won==-1 && x>=0&&x<7 && board[x][0] == -1 && !isMobile && canPlace){
    newToken(x, turn)
    turn = int(!turn)
    canPlace = false
    setTimeout(function(){canPlace=true}, 750)
  }
  
  // restart the game
  if (won>-1){
    setup()
  }
}


// touchMoved = touch
// touchStarted = touch
function touchMoved(){
  if (isMobile){
    selection = floor(mouseX/(width/7))*(width/7)/100
  }
}

function touchStarted(){
  print("touch!!")
  if (isMobile){
    let x = floor(mouseX/(width/7))*(width/7)/100
    if (selection == x && canPlace){
      // place that dude!
      newToken(x, turn)
      turn = int(!turn)
      selection = -1
      canPlace = false
      setTimeout(function(){canPlace=true}, 750)
    }
    selection = x
  }
  // the function fires twice if i don't return false....
  return false
}

function windowResized(){
  // guys im so fucking happy right now that this works hahahaha
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