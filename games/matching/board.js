function drawBoard() {
  fill(16);
  stroke(127);
  for (x = 0; x < board.length; x++) {
    for (y = 0; y < board[0].length; y++) {
      if (selected[x][y]) {
        push()
        image(board[x][y],x*64,y*64);
        noFill()
        rect(x*64,y*64,64,64)
        pop()
      }
      else {
        rect(x*64,y*64,64,64);
      }
    }
  }
}
