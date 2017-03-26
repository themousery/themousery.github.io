function drawBoard() {
  textAlign(LEFT, TOP);
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      if (board[i][j] !== 0) {
        fill(30,200,200)
        stroke(0);
        rect(i*200,j*200, 200, 200);
        fill(255);
        noStroke();
        textSize(175);
        text(board[i][j], i*200+25, j*200+50);
      }
    }
  }
}

function resetBoard() {
  board = [];
  aval = range(16);
  for (i = 0; i < 4; i++) {
    board.push([]);
    for (j = 0; j < 4; j++) {
      board[i][j] = aval.splice(randint(0,aval.length-1), 1)[0];
    }
  }
}
