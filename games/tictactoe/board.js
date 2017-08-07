function drawBoard() {
  fill(200);
  noStroke();
  for (i = 0; i < 2; i++) {
    rect(i*200+175, 0, 25, 600);
    rect(0, i*200+175, 600, 25);
  }
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (board[i][j] === 1) {
        fill(0, 0, 200, 200);
        rect(i*200, j*200, 175, 175);
      }
      else if (board[i][j] === 2) {
        fill(200, 0, 0, 200);
        rect(i*200, j*200, 175, 175);
      }
    }
  }
}

function resetBoard() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      board[i][j] = 0;
    }
  }
  turn = randint(1,2);
}
