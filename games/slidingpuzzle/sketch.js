var board;

function preload() {
  font = loadFont("/index_files/Stellar.otf");
}

function setup() {
  cnv = createCanvas(601,601);
  windowResized();
  resetBoard();
  textFont(font);
  done = false;
  while (!done) {
    colour = [floor(random(255)),floor(random(255)),floor(random(255))];
    if (colour[0]+colour[1]+colour[2] < 600) {
      done = true;
    }
  }
  textAlign(CENTER,CENTER)
}

function windowResized() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function mousePressed() {
  x = int(mouseX/150);
  y = int(mouseY/150);
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      try {
        if (board[x+i][y+j] === 0 && i!==j && i!==-j) {
          middle = board[x][y];
          board[x][y] = board[x+i][y+j];
          board[x+i][y+j] = middle;
        }
      }
      catch(err){}
    }
  }
}

function keyPressed() {
  if (detectWin()) {
    resetBoard();
  }
}

function detectWin() {
  return (JSON.stringify(board[0].concat(board[1], board[2], board[3])) == '[1,5,9,13,2,6,10,14,3,7,11,15,4,8,12,0]')
}

function winScreen() {
  background(255,255,255,200);
  textAlign(CENTER, CENTER);
  fill(100);
  textSize(113);
  text("You Win!", 300, 300);
}

function draw() {
  background(240);
  drawBoard();
  fill(255, 255, 255, 70);
  noStroke();
  rect(int(mouseX/150)*150, int(mouseY/150)*150, 150, 150);
  if (detectWin()) {
    winScreen();
  }
}
