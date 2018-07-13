function preload() {
  font = loadFont("/files/Stellar.otf");
  human = loadImage("img/human.png")
  robot = loadImage("img/robot.png")
}

function setup(){
  createCanvas(450,450);
  horz = new2dArray(3,4)
  vert = new2dArray(4,3)
  player = 0
  colors = [[100,75,255],[255,100,75]]
  colors2 = [[100,75,255,75],[255,100,75,75]]
  colors3 = [[100,75,255,10],[255,100,75,10]]
  colorString = ["Blue", "Red"]
  mouseOn = false // x, y, isVertical (0 or 1), player (0 or 1)
  complete = new2dArray(3,3)
  wonbox = false
  scores = [0,0]
  freeSpaces = 9
  menu = true
  textFont(font)
  img = [human, robot]
  msg = ["Play with someone in the same room.", "Play with a robot."]
  buttonOn = -1
  playstyle = 0
  over = false
  won = false
}

function draw(){
  if (menu){
    background(255)
    drawMenu()
  }
  else{
    background(22,22,29)
    background(colors3[player]);
    stroke(colors[player])
    strokeWeight(6)
    noFill()
    rect(0,0,width,height)
    
    mouseBoard()
    drawBoard()
    
    if (playstyle == 1 && player == 1 && frameCount-placed>=60){
      botPlace()
    }
    
    if (over){
      noStroke()
      fill(0)
      rect(width/2-85, height/2-25, 170, 50)
      
      fill(colors[player])
      textSize(40)
      text(colorString[won] + " wins", width/2, height/2)
    }
  }
}

function mousePressed(){
  if (!menu && !over && mouseOn && [horz,vert][mouseOn[2]][mouseOn[0]][mouseOn[1]] == -1){
    [horz,vert][mouseOn[2]][mouseOn[0]][mouseOn[1]] = player
    if (playstyle != 0 && player == 1){
      [horz,vert][mouseOn[2]][mouseOn[0]][mouseOn[1]] = -1
      return
    }
    if (playstyle == 1 && player == 0){
      placed = frameCount
    }
    checkComplete()
    getScores()
    if (wonbox){
      wonbox = false
    }
    else{
      if (player == 0){player=1} else{player=0}
    }
  }
  
  if (menu && buttonOn>-1){
    playstyle = buttonOn
    menu = false
  }
  
  if (over && frameCount>end){
    setup()
  }
}
