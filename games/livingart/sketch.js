function preload() {
  font = loadFont("/files/fonts/Stellar.otf");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  off = createGraphics(displayWidth, displayHeight);
  off.background(0)
  fireflies = [];
  background(0);
  pause = false;
  sel = createSelect().position(width-90, 5);
  sel.option('random')
  sel.option('left')
  sel.option('right')
  sel.option('up')
  sel.option('down')
  sel.option('follower')
  sel.option('ant')
  textFont(font);
  textSize(25);
}

function showPause() {
  noStroke();
  if (mouseX < 85 && mouseY < 75) {
    fill(0,0,255);
  }
  else {
    fill(255);
  }
  if (!pause) {
    text("pause", 20,40);
  }
  else {
    text("play", 20,40);
  }
}

function showClear() {
  if (mouseX > 85 && mouseX < 175 && mouseY < 75) {
    fill(0,0,255);
  }
  else {
    fill(255);
  }
  text("clear",100,40);
}

function draw() {
  // background(0)
  image(off,0,0)
  fill(0)
  rect(0,0,175,75)
  for (i = 0; i < fireflies.length; i++) {
    if (!pause) {
      fireflies[i].update(i);
      if(fireflies[i].dead){fireflies.splice(i,1);continue}
    }
    fireflies[i].draw();
  }
  showPause();
  showClear();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
  background(0)
  sel.position(width-90, 5);
}

function diff(v1, v2) {
  return (v1>v2) ? v1-v2 : v2-v1;
}

function mouseReleased() {
  if (mouseX < 85 && mouseY < 75) {
    pause = !pause;
  }
  else if (mouseX > 85 && mouseX < 175 && mouseY < 75) {
    if (confirm("Are you sure you want to clear the screen?")) {
      off.background(0);
      fireflies = [];
    }

  }
}

function keyPressed() {
  if (keyCode === 32) {
    pause = !pause;
  }
}

function mouseDragged() {
  if (!(mouseX>width-90 && mouseY<20) && !(mouseX < 175 && mouseY < 75) && sel.value() != "(nothing)") {
    fireflies.push(new Firefly(mouseX, mouseY, sel.value()));
  }
  return false
}
