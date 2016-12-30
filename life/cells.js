var item;
item = "Single Cell";

function changer() {
  item = sel.value();
}

function glider(x,y) {
  cells[x-1][y-1] = true;
  cells[x][y-1] = true;
  cells[x+1][y-1] = true;
  cells[x-1][y] = true;
  cells[x][y+1] = true;
}

function blinker(x,y) {
  cells[x][y-1] = true;
  cells[x][y] = true;
  cells[x][y+1] = true;
}

function toad(x,y) {
  blinker(x,y);
  blinker(x+1,y+1);
}

function beacon(x,y) {
  block(x-1,y-1);
  block(x+1,y+1);
}

function block(x,y) {
  cells[x][y] = true;
  cells[x+1][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+1] = true;
}

function beehive(x,y) {
  cells[x][y-1] = true;
  cells[x+1][y-1] = true;
  cells[x-1][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+1] = true;
  cells[x+2][y] = true;
}

function loaf(x,y) {
  cells[x-1][y-1] = true;
  cells[x][y-1] = true;
  cells[x-2][y] = true;
  cells[x+1][y] = true;
  cells[x+1][y+1] = true;
  cells[x-1][y+1] = true;
  cells[x][y+2] = true;
}

function boat(x,y) {
  cells[x-1][y-1] = true;
  tub(x,y);
}

function tub(x,y) {
  cells[x-1][y] = true;
  cells[x][y-1] = true;
  cells[x+1][y] = true;
  cells[x][y+1] = true;
}

function pulsar(x,y) {
  beehive(x-1,y);
  beehive(x,y);
}

function glidergun(x,y) {
  block(x-17,y+1);
  blinker(x-7, y+2);
  cells[x-6][y] = true;
  cells[x-6][y+4] = true;
  cells[x-5][y-1] = true;
  cells[x-5][y+5] = true;
  cells[x-4][y-1] = true;
  cells[x-4][y+5] = true;
  cells[x-3][y+2] = true;
  cells[x-2][y] = true;
  cells[x-2][y+4] = true;
  blinker(x-1,y+2);
  cells[x][y+2] = true;
  blinker(x+3,y);
  blinker(x+4,y);
  cells[x+5][y-2] = true;
  cells[x+5][y+2] = true;
  cells[x+7][y-3] = true;
  cells[x+7][y-2] = true;
  cells[x+7][y+2] = true;
  cells[x+7][y+3] = true;
  block(x+17,y-1);
}

function pentadecathlon(x,y) {
  for (i = -5; i < 5; i++) {
    cells[x+i][y] = true;
  }
}

function spaceship(x,y) {
  cells[x-2][y-1] = true;
  cells[x-2][y+1] = true;
  cells[x+1][y+1] = true;
  for (i = -1; i <= 2; i++) {
    cells[x+i][y-2] = true;
  }
  cells[x+2][y-1] = true;
  cells[x+2][y] = true;
}

function placer(x,y) {
  if (item == "Single Cell") {
    cells[x][y] = !cells[x][y];
  }
  else if (item == "Glider") {
    glider(x,y);
  }
  else if (item == "Blinker") {
    blinker(x,y);
  }
  else if (item == "Toad") {
    toad(x, y);
  }
  else if (item == "Beacon") {
    beacon(x, y);
  }
  else if (item =="Block") {
    block(x,y);
  }
  else if (item == "Beehive") {
    beehive(x,y);
  }
  else if (item == "Loaf") {
    loaf(x,y);
  }
  else if (item == "Boat") {
    boat(x,y);
  }
  else if (item == "Tub") {
    tub(x,y);
  }
  else if (item == "Pulsar") {
    pulsar(x,y);
  }
  else if (item == "Glider Gun") {
    glidergun(x,y);
  }
  else if (item == "Pentadecathlon") {
    pentadecathlon(x,y);
  }
  else if (item == "Spaceship") {
    spaceship(x,y);
  }
}
