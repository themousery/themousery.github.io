function preload() {
  font = loadFont("SF Pixelate.ttf");
}

function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
  cells = [];
  neighors = [];
  board = [int(W/10),int(H/10)];
  for (i = 0; i < board[0]; i++) {
    cells.push([]);
    neighors.push([]);
    for (j = 0; j < board[1]; j++) {
      cells[i][j] = false;
      neighors[i][j]=0;
    }
  }
  pause = false;
  fill(255);
  textFont(font);
  textSize(25);
}

function checkWindow() {
  if (W !== windowWidth || H !== windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W,H);
  }
}

function mousePressed() {
  if (mouseX < 100 && mouseY < 25 && !pause) {
    pause = true;
  }
  else if (mouseX < 75 && mouseY < 25 && pause) {
    pause = false;
  }
  else {
    cells[int(mouseX/10)][int(mouseY/10)] = !cells[int(mouseX/10)][int(mouseY/10)];
  }
}

function showPause() {
  if (mouseX < 100 && mouseY < 25 && !pause) {
    fill(175,110,200);
  }
  else if (mouseX < 75 && mouseY < 25 && pause) {
    fill(175,110,200);
  }
  else {
    fill(255);
  }
  if (!pause) {
    text("pause", 0,20);
  }
  else {
    text("play", 0,20);
  }
}

function draw() {
  checkWindow();
  background(0);
  fill(255,255,255,50);
  rect(int(mouseX/10)*10, int(mouseY/10)*10,10,10);
  showPause();
  if (!pause) {
    for (i = 0; i < board[0]; i++) {
      for (j = 0; j < board[1]; j++) {
        neighors[i][j]=0;
        if (i === 0 || i === board[0]-1 || j === 0 || j === board[1]-1) {
          cells[i][j] = false;
        }
        else {
          temp = [0,-1,1]
          for (a = 0; a < 3; a++) {
            for (b = 0; b < 3; b++) {
              if (cells[i+temp[a]][j+temp[b]] && !(a === 0 && b === 0)) {
                neighors[i][j]++
              }
            }
          }
        }
      }
    }
  }
  fill(255);
  for (i = 0; i < board[0]; i++) {
    for (j = 0; j < board[1]; j++) {
      if (!pause) {
        if (neighors[i][j] > 3 || neighors[i][j] < 2) {
          cells[i][j] = false;
        }
        if (!cells[i][j] && neighors[i][j] === 3) {
          cells[i][j] = true;
        }
      }
      if (cells[i][j]) {
        rect(i*10,j*10,10,10);
      }
    }
  }
}
