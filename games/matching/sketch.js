function preload() { //I am so ashamed of this
  images = [loadImage("images/mouse.png"),loadImage("images/atom.png"),loadImage("images/canada.png"),
  loadImage("images/circle.png"),loadImage("images/github.png"),loadImage("images/google.png"),
  loadImage("images/happy.png"),loadImage("images/home.png"),
  loadImage("images/html5.png"),loadImage("images/ireland.png"),loadImage("images/love.png"),
  loadImage("images/mexico.png"),loadImage("images/nuclear.png"), loadImage("images/ok.png"),
  loadImage("images/phone.png"),loadImage("images/power.png"),loadImage("images/rocket.png"),
  loadImage("images/sad.png"),loadImage("images/smiley.png"),loadImage("images/star.png"),
  loadImage("images/tool.png"),loadImage("images/usa.png"),loadImage("images/x.png"),
  loadImage("images/flag.png")] // why is this a thing
  font = loadFont("/files/fonts/Stellar.otf");
}

function setup() {
  textFont(font);
  textSize(113);
  done = [];
  for (i = 0; i < images.length; i++) {
    done.push(false)
  }
  cnv = createCanvas(512,384);
  windowResized();
  board = [];
  selected = [];
  for (x = 0; x < 8; x++) {
    board.push([]);
    selected.push([]);
    for (y = 0; y < 6; y++) {
      i = floor(random(images.length))
      board[x].push(images[i]);
      selected[x].push(false);
      if (done[i]) {
        images.splice(i,1);
        done.splice(i,1);
      }
      else {
        done[i] = true;
      }
    }
  }
  waiting = false;
  num_selected = [];
}
function draw(){
  background(255);
  drawBoard();
  fill(255,255,255,100);
  rect(floor(mouseX/64)*64,floor(mouseY/64)*64,64,64);
  if (waiting) {
    waited = frameCount-frameWait;
    if (waited == 30) {
      selected[num_selected[0][0]][num_selected[0][1]] = false;
      selected[num_selected[1][0]][num_selected[1][1]] = false;
      waiting = false;
      num_selected = [];
    }
  }
  detectWin();
}

function windowResized() {
  cnv.position((windowWidth-width)/2,(windowHeight-height)/2);
}

function mousePressed() {
  x = floor(mouseX/64);
  y = floor(mouseY/64);
  if (!waiting && selected[x][y] == false) {
    selected[x][y] = true;
    num_selected.push([x,y])

    if (num_selected.length == 2) {
      matching = (board[num_selected[0][0]][num_selected[0][1]] == board[num_selected[1][0]][num_selected[1][1]]);
      if (matching) {
        num_selected = [];
      }
      else {
        waiting = true;
        frameWait = frameCount;
      }
    }
  }
  return false;
}

function drawWin() {
  fill(255,255,255,200);
  rect(0,0,width,height);
  fill(0);
  textAlign(CENTER, CENTER);
  text("You Win!",width/2,height/2)
}

function detectWin() {
  winners = 0;
  for (x = 0; x < board.length; x++) {
    for (y = 0; y < board[0].length; y++) {
      winners += int(selected[x][y])
    }
  }
  if (winners == 48) {
    drawWin();
  }
}
