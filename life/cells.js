var item;
item = "Single Cell";

function changer() {
  item = sel.value();
}

function glider(x,y) {
  cells[x][y] = true;
  cells[x+1][y] = true;
  cells[x+2][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+2] = true;
}

function blinker(x,y) {
  cells[x][y] = true;
  cells[x][y+1] = true;
  cells[x][y+2] = true;
}

function toad(x,y) {
  cells[x+1][y] = true;
  cells[x+2][y] = true;
  cells[x+3][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+1] = true;
  cells[x+2][y+1] = true;
}

function beacon(x,y) {
  cells[x][y] = true;
  cells[x+1][y] = true;
  cells[x][y+1] = true;
  cells[x+2][y+3] = true;
  cells[x+3][y+2] = true;
  cells[x+3][y+3] = true;
}

function block(x,y) {
  cells[x][y] = true;
  cells[x+1][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+1] = true;
}

function beehive(x,y) {
  cells[x+1][y] = true;
  cells[x+2][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y+2] = true;
  cells[x+2][y+2] = true;
  cells[x+3][y+1] = true;
}

function loaf(x,y) {
  cells[x+1][y] = true;
  cells[x+2][y] = true;
  cells[x][y+1] = true;
  cells[x+3][y+1] = true;
  cells[x+3][y+2] = true;
  cells[x+1][y+2] = true;
  cells[x+2][y+3] = true;
}

function boat(x,y) {
  cells[x][y] = true;
  cells[x][y+1] = true;
  cells[x+1][y] = true;
  cells[x+2][y+1] = true;
  cells[x+1][y+2] = true;
}

function tub(x,y) {
  cells[x][y+1] = true;
  cells[x+1][y] = true;
  cells[x+2][y+1] = true;
  cells[x+1][y+2] = true;
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
}
