function preload(){
  font = loadFont("Connection.otf")
}

function setup(){
  c = createCanvas(420,600);
  points=[];
  blocks = [];
  round = 1
  remaining = [0,1,2,3,4,5,6]
  nextRound()
  textFont(font)
  balls = [];
  balls.push(new Ball());
  ballsout=[];
  moving = false
  onGround = false
  movingBlocks = false
  cur = 0
  gameOver=false
  newBalls=0;
  blockDone = 0;
  windowResized()
}

function draw(){
  // background(22,22,29);
  fill(22,22,29)
  rect(0,0,width,height)
  if (!moving){
    stroke(255)
    strokeWeight(2)
    temp = createVector()
    temp.set(balls[0].pos.x,balls[0].pos.y)
    for (i=0;i<70;i++){
      temp.add(balls[0].vel)
      point(temp.x,temp.y)
    }
  }
  else{
    cur++;
    if (Object.keys(ballsout).length==0){
      movingBlocks = true
      cur=0;
      onGround=false;
      moving=false;
      for(j=0;j<newBalls;j++){
        balls.push(new Ball())
      }
      newBalls=0;
    }
  }
  for (i=points.length-1;i>=0;i--){
    points[i].draw()
    points[i].update(i)
  }
  for (i=blocks.length-1;i>=0;i--){
    blocks[i].draw();
    blocks[i].update(i);
    if (blocks[i].score<=0){
      blocks.splice(i,1)
    }
    if (blocks[i] != undefined && blocks[i].y==blocks[i].destination && movingBlocks){
      blockDone++;
      if (blockDone==blocks.length){
        for (j=blocks.length-1;j>=0;j--){
          blocks[j].destination+=60
        }
        movingBlocks=false
        moving = false
        round++
        nextRound()
        onGround = false
        blockDone=false
      }
    }
  }
  if (blocks.length==0){
    movingBlocks=false
    moving = false
    round++
    nextRound()
    onGround = false
    blockDone=false
  }
  for (i=0;i<balls.length;i++){
    balls[i].draw()
    balls[i].update(i)
  }
  if (gameOver){
    background(22,22,29);
    textSize(60);
    text("Game Over",width/2,120);
  }

}

function mouseReleased(){
  if (!movingBlocks){
    moving = true
    ballsout={}
    for (i=0;i<balls.length;i++){
      ballsout[i.toString()]=i
    }
    // ballsout=balls.splice();
  }
}


collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
  var testX = cx;
  var testY = cy;
  if (cx < rx){
    testX = rx
  }
  else if (cx > rx+rw){
    testX = rx+rw
  }
  if (cy < ry){         testY = ry
  }else if (cy > ry+rh){ testY = ry+rh }
  var distance = dist(cx,cy,testX,testY)
  return (distance <= diameter/2)
};
collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};

function keyPressed(){
  if (keyCode==81){
    for(i=0;i<10;i++){
      balls.push(new Ball())
    }
  }
}

function windowResized(){
  let w = width/windowWidth
  let h = height/windowHeight
  if (w>h){
    c.style('width', '90%')
    c.style('height', 'auto')
  }else{
    c.style('height', '90%')
    c.style('width', 'auto')
  }
}