function mouseBoard(){
  mouseOn = false

  for (x=0;x<3;x++){
    for (y=0;y<4;y++){
      if (collidePointRect(mouseX, mouseY, x*100+75, y*100+55, 100, 40)){
        fill(colors2[player])
        noStroke()
        rect(x*100+75, y*100+74, 100, 2)
        mouseOn = [x,y,0]
        return
      }
    }
  }

  for (x=0;x<4;x++){
    for (y=0;y<3;y++){
      if (collidePointRect(mouseX, mouseY, x*100+55, y*100+75, 40, 100)){
        fill(colors2[player])
        noStroke()
        rect(x*100+74, y*100+75, 2, 100)
        mouseOn = [x,y,1]
        return
      }
    }
  }
}

function getAvailable(){
  ah = []
  av = []
  for (x=0;x<horz.length;x++){
    for (y=0;y<horz[1].length;y++){
      if (horz[x][y] == -1){
        ah.push([x,y])
      }
    }
  }
  
  for (x=0;x<vert.length;x++){
    for (y=0;y<vert[1].length;y++){
      if (vert[x][y] == -1){
        av.push([x,y])
      }
    }
  }
  
  r = [ah,av]
  return r
}

function botPlace(){
  av = getAvailable()
  listNum = floor(random(2))
  if (av[listNum].length == 0){listNum = int(!boolean(listNum))}
  choice = random(av[listNum])
  temp = [horz,vert]
  temp[listNum][choice[0]][choice[1]] = 1
  
  checkComplete()
  getScores()
  if (wonbox){
    wonbox = false
    placed = frameCount
  }
  else{
    player = 0
  }
}

function getScores(){
  scores = [0,0]
  freeSpaces = 0
  for (x=0;x<3;x++){
    for (y=0;y<3;y++){
      if (complete[x][y] == -1){
        freeSpaces++
      }
      else{
        scores[complete[x][y]]++
      }
    }
  }
  
  if (freeSpaces == 0){
    over = true
    if (scores[0] > scores[1]){won = 0}
    if (scores[1] > scores[0]){won = 1}
    end = frameCount
  }
}

function checkComplete(){
  for (x=0;x<3;x++){
    for (y=0;y<3;y++){
      if (!(complete[x][y]>-1) && (horz[x][y]>-1 && horz[x][y+1]>-1 && vert[x][y]>-1 && vert[x+1][y]>-1)){
        complete[x][y] = player
        wonbox = true
      }
    }
  }
}

function drawBoard(){
  for (x=0;x<complete.length;x++){
    for(y=0;y<complete[1].length;y++){
      if (complete[x][y]>-1){
        fill(colors2[complete[x][y]])
        noStroke()
        rect(x*100+75, y*100+75, 100, 100)
      }
    }
  }
  
  for (x=0;x<horz.length;x++){
    for (y=0;y<horz[1].length;y++){
      if (horz[x][y] > -1){
        fill(colors[horz[x][y]])
        noStroke()
        rect(x*100+75, y*100+74, 100, 2)
      }
    }
  }
  
  for (x=0;x<vert.length;x++){
    for (y=0;y<vert[1].length;y++){
      if (vert[x][y] > -1){
        fill(colors[vert[x][y]])
        noStroke()
        rect(x*100+74, y*100+75, 2, 100)
      }
    }
  }

  for (x=0;x<4;x++){
    for (y=0;y<4;y++){
      stroke(255,255,255);
      strokeWeight(5)
      point(x*100+75, y*100+75);
    }
  }
}
