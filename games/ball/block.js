function Block(){
  // kind of a mess but makes it so they can't spawn on top of eachother
  this.x = available.splice(floor(random(available.length)),1)*60
  this.y = 0
  this.value = round
  let r = random()
  if (r<.10){
    // 10% change of being doubled
    this.value *= 2
  }
  
  this.move = function(){
    // so clean. so easy. tweening is amazing.
    new TWEEN.Tween(this)
        .to({y:this.y+60}, 500)
        .start()
  }
  this.move()
  
  this.draw = function(){
    // block
    colorMode(HSB)
    fill((this.value*5)%360, 75, 85)
    noStroke()
    rect(this.x, this.y, 60, 60)
    
    //text
    fill('rgb(0,0,0)')
    textSize(30)
    textAlign(CENTER,CENTER)
    text(this.value,this.x+30,this.y+30)
    
    if (this.y >= height-60){
      gameOver = true
    }
  }
}

function newBlock(){
  blocks.push(new Block())
}

function newRound(){
  firstBall = false
  counter = 0
  round++
  // move the existing blocks
  movingBlocks = true
  for (block of blocks){ block.move() }
  for (p of points){ p.move() }
  setTimeout(function(){movingBlocks=false},500)
  // create some new blocks
  for (i=0;i<floor(random(3,5));i++){ newBlock() }
  newPoint()
  available = [0,1,2,3,4,5,6]
  
  for(i=0;i<newBalls;i++){newBall(balls[0].pos.x,balls[0].pos.y)}
  newBalls=0
  return round
}

function resetBoard(){
  board = []
  for (x=0;x<7;x++){
    board[x]=[]
    for (y=0;y<10;y++){
      board[x][y]=0
    }
  }
}

function updateBlocks(){
  resetBoard()
  for (i=blocks.length-1;i>=0;i--){
    let block = blocks[i]
    if(block.value <= 0){blocks.splice(i, 1);continue}
    if(!movingBlocks){board[block.x/60][block.y/60] = 1}
    block.draw() 
  }
}