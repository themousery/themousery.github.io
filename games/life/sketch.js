function preload() {
  font = loadFont("/index_files/Stellar.otf");
}

function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
  cells = [];
  neighors = [];
  board = [int(W/10)+40,int(H/10)+40]
  for (i = 0; i < 200; i++) {
    cells.push([]);
    neighors.push([]);
    for (j = 0; j < 200; j++) {
      cells[i][j] = false;
      neighors[i][j] = 0;
    }
  }
  pause = true;
  textFont(font);
  textSize(25);
  sel = createSelect();
  sel.position(W-120,5);
  sel.option("Single Cell");
  sel.option("Pulsar");
  sel.option("Pentadecathlon");
  sel.option("Spaceship");
  sel.option("Glider");
  sel.option("Glider Gun");
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

function windowResized() {
  if (W !== windowWidth || H !== windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W,H);
    board = [int(W/10)+40,int(H/10)+40];
    sel.position(W-120,5);
  }
}

function mousePressed() {
  if (mouseX < 100 && mouseY < 25 && !pause) {
    pause = true;
  }
  else if (mouseX < 75 && mouseY < 25 && pause) {
    pause = false;
  }
  else if (mouseX > 75 && mouseX < 150 && mouseY < 25) {
    if (confirm("Are you sure you want to clear the board?")) {
      cells = [];
      neighors = [];
      board = [int(W/10)+40,int(H/10)+40]
      for (i = 0; i < 200; i++) {
        cells.push([]);
        neighors.push([]);
        for (j = 0; j < 200; j++) {
          cells[i][j] = false;
          neighors[i][j] = 0;
        }
      }
    }
  }
  else if (!(mouseX > W-130 && mouseY < 30)){
    placer(int(mouseX/10)+20, int(mouseY/10)+20);
  }
}

function mouseDragged(){
  return false;
}

function showPause() {
  if (mouseX < 75 && mouseY < 25 && !pause) {
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

function showClear() {
  if (mouseX > 75 && mouseX < 150 && mouseY < 25) {
    fill(colour);
  }
  else {
    fill(255);
  }
  text("clear",100,20);
}

function colours() {
  i = randint(0,2);
  if (colour[i] === 0 || colour[i] === 255) {
    cdir[i] = -cdir[i]
  }
  colour[i]+=cdir[i];
}

function draw() {
  background(0);
  fill(colour[0],colour[1],colour[2],60);
  rect(int(mouseX/10)*10, int(mouseY/10)*10, 10, 10);
  colours();
  if (!pause) {
    for (i = 0; i < board[0]; i++) {
      for (j = 0; j < board[1]; j++) {
        neighors[i][j]=0;
        if (i === 0 || j === 0) {
          cells[i][j]=false;
        }
        else {
          for (a = -1; a <= 1; a++) {
            for (b = -1; b <= 1; b++) {
              if (cells[i+a][j+b] && !(a === 0 && b === 0)) {
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
        rect((i-20)*10,(j-20)*10,10,10);
      }
    }
  }
  showPause();
  showClear();
}
