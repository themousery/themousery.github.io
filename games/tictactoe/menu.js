var opts;

function initMenu() {
  opts = [[],[]];
  opts[0] = ["medium","hard","impossible"];
  opts[1] = [[600/2-80,300-13,160,26],[600/2-80,450-13,160,26],[600/2-80,600-13,160,26]];
}

function drawMenu() {
  textSize(20);
  for (i = 0; i < 2; i++) {
    if (collidePointRect(mouseX,mouseY, opts[1][i][0], opts[1][i][1], opts[1][i][2], opts[1][i][3])) {
      stroke(0);
      fill(165);
      rect(opts[1][i][0], opts[1][i][1], opts[1][i][2], opts[1][i][3]);
      stroke(255);
      fill(0);
      text(opts[0][i],300,opts[1][i][1]+13);
    }
    else {
      stroke(255);
      fill(90);
      rect(opts[1][i][0], opts[1][i][1], opts[1][i][2], opts[1][i][3]);
      stroke(0);
      fill(255);
      text(opts[0][i],300,opts[1][i][1]+13);
    }
  }
}
