function setup() {
  W = windowWidth;
  H = windowHeight;
  createCanvas(W,H);
}

function checkWindow() {
  if (W !== windowWidth || H !== windowHeight) {
    W = windowWidth;
    H = windowHeight;
    resizeCanvas(W,H);
  }
}

function draw() {
  checkWindow();
  background(114);
}