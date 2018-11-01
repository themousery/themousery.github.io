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

p = function(i, j, k){
  switch(k){
    case 0:
      return [j,j+i]
    case 1:
      return [j,6-j+i]
    case 2:
      return [j,5-j-i]
    case 3:
      return [j,j-i-1]
  }
}
function checkWin(){
  // horizontal cases
  for (y=0;y<6;y++){
    let cur = -2
    for (x=0;x<7;x++){
      let c = board[x][y]
      if(cur!=c){cur=c;count=0}
      if(c>-1){count++}
      if(count>=4){return cur}
    }
  }
  
  // vertical cases
  for (x=0;x<7;x++){
    let cur = -2
    for (y=0;y<6;y++){
      let c = board[x][y]
      if(cur!=c){cur=c;count=0}
      if(c>-1){count++}
      if(count>=4){return cur}
    }
  }
  
  // diagonal cases (for your own safety, please don't look at this code!)
  for (k=0;k<4;k++){
    for (i=0;i<3;i++){
      let cur = -2
      for (j=0;j<7;j++){
        let u = p(i, j, k)
        let c = board[u[0]][u[1]]
        if(c==undefined){continue}
        if(cur!=c){cur=c;count=0}
        if(c>-1){count++}
        if(count>=4){return cur}
      }
    }
  }
  
  return -1
}