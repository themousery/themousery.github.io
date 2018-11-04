var cnv;

function preload() {
  font = loadFont("/files/fonts/Stellar.otf");
}

function setup() {
  cnv = createCanvas(575,575);
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
  if (over) {
    over = false;
  }
  else if (playing && turn === 1) {
    if (board[int(mouseX/200)][int(mouseY/200)] === 0) {
      board[int(mouseX/200)][int(mouseY/200)] = 1;
      turn = 2;
    }
  }
  else {
    if (collidePointRect(mouseX,mouseY,600/2-80,300-13,160,26)) {
      playing = true;
      mode = 0;
    }
    if (collidePointRect(mouseX,mouseY,600/2-80,450-13,160,26)) {
      playing = true;
      mode = 1;
    }
    // if (collidePointRect(mouseX,mouseY,600/2-80,600-13,160,26)) {
    //   playing = true;
    //   mode = 2;
    // }
  }
  return false;
}

function draw() {
  background(240);
  if (checkWin(board, 1)) {
    playing = false;
    over = true;
    msg = 'you win';
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
      // else if (mode === 2) {
      //   move = impossibleMove();
      //   board[move[0]][move[1]] = 2;
      // }
      turn = 1;
    }
    else {
      fill(0, 0, 200, 50);
      rect(int(mouseX/200)*200, int(mouseY/200)*200, 200, 200);
    }
    drawBoard();
  }
  else if (!over){
    fill(0);
    textSize(40);
    noStroke();
    text("tic tac toe",300,100);
    drawMenu();
  }
  else if (over) {
    fill(0);
    textSize(40);
    text(msg,287,287);
    textSize(30);
    text('click anywhere to restart',287,500);
  }
}


function randint(a,b) {
  return int(random(a,b+1));
}

function choice(l) {
  return l[randint(0,l.length-1)];
}

collidePointRect=function(pointX,pointY,x,y,xW,yW){return(pointX>=x&&pointX<=x+xW&&pointY>=y&&pointY<=y+yW)}
