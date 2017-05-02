function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  fireflies = [];
  background(0);
  pause = false;
  sel = createSelect();
  sel.option('free-draw');
  sel.option('colonies');
  sel.position(width-180, 5);
}

function draw() {
  for (i = 0; i < fireflies.length; i++) {
    if (!pause) {
      fireflies[i].update();
    }
    fireflies[i].show();
    // if (fireflies[i].x < 0 || fireflies[i].y < 0 || fireflies[i].x > width || fireflies[i].y > height) {
    //   fireflies.splice(i, 1);
    // }
  }
}

function windowResized() {
  temp = createGraphics(width, height);
  temp.image(cnv);
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  image(temp);
  sel.position(width-90, 5);
}

function diff(v1, v2) {
  return (v1>v2) ? v1-v2 : v2-v1;
}

function mousePressed() {
  if (sel.value() === ('colonies') && !(mouseX>width-90 && mouseY<20)) {
    for (i = 0; i < 100; i++) {
      fireflies.push(new Firefly(mouseX, mouseY));
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    pause = !pause;
  }
}

function mouseDragged() {
  if (sel.value() === 'free-draw' && !(mouseX>width-90 && mouseY<20)) {
    fireflies.push(new Firefly(mouseX, mouseY));
  }
}


//prevent scrolling on mobile
document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);
function touchstart(e) {
    e.preventDefault()
}
function touchmove(e) {
    e.preventDefault()
}
