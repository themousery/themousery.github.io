function setupBoard() {
  board = [];
  for (x=0;x<8;x++) {
    board.push([]);
    for (y=0;y<7;y++) {
      board[x].push(floor(random(colours.length)));
    }
  }
}

function drawBoard() {
  noStroke();
  for (x=0;x<8;x++) {
    for (y=0;y<7;y++) {
      fill(colours[board[x][y]]);
      rect(x*70,y*70,70,70);
    }
  }
  strokeWeight(1)
  stroke(0)
  for (i=0;i<6;i++){
    fill(colours[i]);
    rect((i*60)+(i*40),height-61,60,60)
  }
}
