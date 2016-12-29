function preload() {
  font = loadFont("/libraries/SF Pixelate.ttf");
}

function setup() {
  cnv = createCanvas(800,800);
  windowResized();
  initMenu()
  textFont(font);
  textSize(40);
  playing = false;
  over = false;
  msg = '';
  textAlign(CENTER,CENTER);
  board = [];
  turn = randint(1,2);
  for (i = 0; i < 3; i++) {
    board.push([]);
    for (j = 0; j <3; j++) {
      board[i].push(0);
    }
  }
}

function windowResized() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function mousePressed() {
  if (playing && turn === 1) {
    if (board[int(mouseX/275)][int(mouseY/275)] === 0) {
      board[int(mouseX/275)][int(mouseY/275)] = 1;
      turn = 2;
    }
  }
  else {
    if (collidePointRect(mouseX,mouseY,800/2-80,300-13,160,26)) {
      playing = true;
      mode = 0;
    }
    if (collidePointRect(mouseX,mouseY,800/2-80,450-13,160,26)) {
      playing = true;
      mode = 1;
    }
    if (collidePointRect(mouseX,mouseY,800/2-80,600-13,160,26)) {
      playing = true;
      mode = 2;
    }
  }
}

function keyPressed() {
  if (over) {
    over = false;
  }
}

function draw() {
  background(240);
  if (checkWin(board, 1)) {
    playing = false;
    over = true;
    msg = 'you win'
    resetBoard();
  }
  else if (checkWin(board, 2)) {
    playing = false;
    over = true;
    msg = 'you lose';
    resetBoard();
  }
  else if (legalMoves().length === 0) {
    playing = false;
    over = true;
    msg = 'draw';
    resetBoard();
  }
  if (playing) {
    if (turn === 2) {
      if (mode === 0) {
        move = mediumMove();
        board[move[0]][move[1]] = 2;
      }
      else if (mode === 1) {
        move = hardMove();
        board[move[0]][move[1]] = 2;
      }
      else if (mode === 2) {
        move = impossibleMove();
        board[move[0]][move[1]] = 2;
      }
      turn = 1;
    }
    else {
      fill(0, 0, 200, 50);
      rect(int(mouseX/275)*275, int(mouseY/275)*275, 250, 250);
    }
    drawBoard();
  }
  else if (!over){
    fill(0);
    textSize(40);
    noStroke();
    text("tic tac toe",400,100);
    drawMenu();
  }
  else if (over) {
    fill(0);
    textSize(40);
    text(msg,400,400);
    textSize(30);
    text('press any key to restart',400,700);
  }
}
