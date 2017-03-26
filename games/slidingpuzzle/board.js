function drawBoard() {
  textAlign(LEFT, TOP);
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      if (board[i][j] !== 0) {
        fill(30,200,200)
        stroke(0);
        rect(i*150,j*150, 150, 150);
        fill(255);
        noStroke();
        textSize(131);
        text(board[i][j], i*150+25, j*150+50);
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
