function setup(){
  cnv = createCanvas(500,500) // canvas
  shooting = false // whether or not we are aiming the ball
  counter = 0 // counter to push all the rows down
  newBall() // make a new ball
  gameOver = false // fail condition
  
  setupMap() // see map.js
}

// new shooty ball
function newBall(){
  ball = {}
  ball.type = floor(random(0,5)) // type / color of ball
  ball.pos = createVector(width/2, height-50)
  ball.vel = createVector()
  ball.coords = [] // last available spot it can fit into
  
  counter++
}

function draw(){
  // update tweens
  TWEEN.update()
  
  //background
  fill(22,22,29)
  rect(-1,-1,width+2,height+2)
  
  // if the game is over, show the game over screen 
  if (gameOver){
    
  }
  
  // after 7 ball throws, push the rows down.
  if (counter>=7){
    new TWEEN.Tween()
      .delay(200)
      .onComplete(function(){
        newRow()
      })
      .start()
    counter = 0
  }
  
  if (!shooting){ // if we're aiming and stuff
    v = createVector(ball.pos.x-mouseX, ball.pos.y - mouseY)
    v.y = constrain(v.y, 25, height)
    // if (v.y==25) v.x = v.y
    v.setMag(100)
    
    stroke(255)
    line(ball.pos.x,ball.pos.y,ball.pos.x-v.x,ball.pos.y-v.y)
  }
  else{ // if that guy is moving
    // movement
    ball.pos = ball.pos.add(ball.vel)
    
    // wall collisions
    if (ball.pos.x > width-12.5){ // right wall
      ball.vel.x = -abs(ball.vel.x)
    }
    else if (ball.pos.x < 12.5){ //  left wall
      ball.vel.x = abs(ball.vel.x)
    }
    
    // other ball collisions
    var ballCoords = pxToMap(ball.pos.x, ball.pos.y)
    if (isAvailable(ballCoords[0], ballCoords[1])){
      ball.coords = ballCoords
    }
    
    if (ball.coords[1]==0){
      actuallyDoPops(ball.coords[0], ball.coords[1], ball.type)
      shooting = false
      newBall()
    }
    
    for (x=0;x<15;x++){
      for(y=0;y<15;y++){
        if (map[x][y] == -1) continue
        coords = mapToPx(x,y)
        let gridx = coords[0]
        let gridy = coords[1]
        
        if (collideCircleCircle(ball.pos.x, ball.pos.y, 30, gridx, gridy, 30)){
          actuallyDoPops(ball.coords[0], ball.coords[1], ball.type)
          shooting = false
          newBall()
        } // end if
      } // end for
    } // end for
  } // end if
  
  // draw the shooty ball
  noStroke()
  fill(colors[ball.type])
  ellipse(ball.pos.x, ball.pos.y, 25, 25)
  
  // check floaty bois
  checkIslands()
  
  // draw the map
  drawMap()
  
  // check game over
  if (isGameOver()){
    gameOver = true
  }
}

// shoot the ball on mouse press
function mouseReleased(){
  if (!shooting){
    shooting = true
    ball.vel = v.copy().setMag(10).mult(-1)
  }
}

// TEMP for debug
function keyPressed(){
  debug = true
  print(pxToMap(mouseX, mouseY))
}

// if there's any balls on the bottom row, game over
function isGameOver(){
  for (x=0;x<15;x++){
    if (map[x][13] != -1) return true
  }
  return false
}

// clone array
function clone(currentArray){
  return currentArray.map(function(arr){
    return arr.slice()
  })
}

// check if two circles are colliding
// from https://github.com/bmoren/p5.collide2D/blob/master/p5.collide2d.js
function collideCircleCircle(x, y, d, x2, y2, d2) {
  if( this.dist(x,y,x2,y2) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};

// makes canvas look good on all screen sizes. this code is in every game.
function windowResized(){
  let w = width/windowWidth
  let h = height/windowHeight
  if (w>h){
    cnv.style('width', '90%')
    cnv.style('height', 'auto')
  }else{
    cnv.style('height', '90%')
    cnv.style('width', 'auto')
  }
}