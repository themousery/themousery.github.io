function setupBoard(){
  board = []
  for (x=0;x<7;x++){
    board[x] = []
    for (y=0;y<6;y++){
      board[x][y] = -1
    }
  }
  b = createGraphics(width, height)
}

function drawBoard(){
  b.fill("#003049")
  b.noStroke()
  b.rect(0,0,width,height)
  b.fill(255)
  b.blendMode(DIFFERENCE)
  var w = width/7
  var h = height/6
  for (x=0;x<7;x++){
    for (y=0;y<6;y++){
      b.ellipse(x*w+w/2, y*h+h/2, 55)
    }
  }
  b.blendMode(BLEND)
  image(b,0,0)
}

function checkWin(){
  // horizontal cases
  for (y=0;y<6;y++){
    let bcount = 0
    let rcount = 0
    for (x=0;x<7;x++){
      let c = board[x][y]
      if(c==1){bcount++}
      else{bcount=0}
      if(c==0){rcount++}
      else{rcount=0}
      if (rcount>=4){return 0}
      if (bcount>=4){return 1}
    }
  }
  
  // vertical cases
  for (x=0;x<7;x++){
    let rcount=0
    let bcount=0
    for (y=0;y<6;y++){
      let c = board[x][y]
      if (c==1){bcount++}
      else{bcount=0}
      if (c==0){rcount++}
      else{rcount=0}
      if(bcount>=4){return 1}
      if(rcount>=4){return 0}
    }
  }
  
  // diagonal cases
  
  return -1
}