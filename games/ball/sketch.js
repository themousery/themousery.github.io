function preload(){
  font = loadFont("Connection.otf")
}

function setup(){
  createCanvas(420,600);
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

}

function draw(){
  background(22,22,29);
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
      console.log("doot")
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
  for (i=0;i<blocks.length;i++){
    blocks[i].draw();
    blocks[i].update(i);
  }
  for (i=0;i<balls.length;i++){
    balls[i].draw()
    balls[i].update(i)
  }
  for (i=0;i<points.length;i++){
    points[i].draw()
    points[i].update(i)
  }
  if (gameOver){
    background(22,22,29);
    textSize(60);
    text("Game Over",width/2,120);
  }

}

function mouseReleased(){
  if (!moving){
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