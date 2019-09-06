function setupBoard(){
  blocks = []
  for (x=0;x<=20;x++){
    for (y=1;y<=7;y++){
      newBlock(x*30,y*30)
    }
  }
}