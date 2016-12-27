function preload() {
  font = loadFont("SF Pixelate.ttf");
}

function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
  cells = [];
  neighors = [];
  board = [int(W/10)+20,int(H/10)+20]
  for (i = 0; i < 200; i++) {
    cells.push([]);
    neighors.push([]);
    for (j = 0; j < 200; j++) {
      cells[i][j] = false;
      neighors[i][j] = 0;
    }
  }
  pause = true;
  fill(255);
  textFont(font);
  textSize(25);
  sel = createSelect();
  sel.position(W-100,5);
  sel.option("Single Cell");
  sel.option("Glider");
  sel.option("Blinker");
  sel.option("Toad");
  sel.option("Beacon");
  sel.option("Block");
  sel.option("Beehive");
  sel.option("Loaf");
  sel.option("Boat");
  sel.option("Tub");
  sel.changed(changer);
  colour = [randint(0,255),randint(0,255),randint(0,255)];
  cdir = [choice([-1,1]),choice([-1,1]),choice([-1,1])];
}

function checkWindow() {
  if (W !== windowWidth || H !== windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W,H);
    board = [int(W/10)+20,int(H/10)+20];
    sel.position(W-100,5);
  }
}

function mousePressed() {
  if (mouseX < 100 && mouseY < 25 && !pause) {
    pause = true;
  }
  else if (mouseX < 75 && mouseY < 25 && pause) {
    pause = false;
  }
  else if (!(mouseX > W-100 && mouseY < 20)){
    placer(int(mouseX/10)+10, int(mouseY/10)+10);
  }
}

function showPause() {
  if (mouseX < 100 && mouseY < 25 && !pause) {
    fill(colour);
  }
  else if (mouseX < 75 && mouseY < 25 && pause) {
    fill(colour);
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

function colours() {
  i = randint(0,3);
  if (colour[i] === 0) {
    cdir[i] = 1
  }
  else if (colour[i] === 255) {
    cdir[i] = -1
  }
  colour[i]+=cdir[i];
}

function draw() {
  checkWindow();
  background(0);
  fill(colour[0],colour[1],colour[2],60);
  rect(int(mouseX/10)*10, int(mouseY/10)*10, 10, 10);
  showPause();
  colours();
  if (!pause) {
    for (i = 0; i < board[0]; i++) {
      for (j = 0; j < board[1]; j++) {
        neighors[i][j]=0;
        if (i === 0 || j === 0) {
          cells[i][j]=false;
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
  fill(colour);
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
        rect((i-10)*10,(j-10)*10,10,10);
      }
    }
  }
}
