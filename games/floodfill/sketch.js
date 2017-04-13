function setup() {
  c = createCanvas(560+1,490+70+1);
  windowResized();
  colours = [[0,153,51],[153,0,153],[255, 102, 0],[204,0,0],[51,51,255],[255,255,0]];
  setupBoard();
}


function draw() {
  drawBoard();
}

function windowResized() {
  c.position((windowWidth-width)/2,(windowHeight-height)/2);
}


function mouseReleased() {
  if (mouseY>height-60) {
    for(i=0;i<6;i++) {
      if(mouseX>i*70+i*30 && mouseX<i*70+i*30+60) {
        flood([0,board[0].length-1],board[0][board[0].length-1],i);
        return
      }
    }
  }
}

function flood(node, target, replacement) {
  if (board[node[0]][node[1]] === i) {
    return
  }
  if (board[node[0]][node[1]] !== target){
    return
  }
  board[node[0]][node[1]] = replacement;
  try{
  flood([node[0]+1,node[1]],target,replacement);
  }catch(err){}
  try{
  flood([node[0]-1,node[1]],target,replacement);
  }catch(err){}
  try{
  flood([node[0],node[1]+1],target,replacement);
  }catch(err){}
  try{
  flood([node[0],node[1]-1],target,replacement);
  }catch(err){}
  return
}
