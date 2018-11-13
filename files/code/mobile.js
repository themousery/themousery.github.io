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

function touchMoved(e){
  e.preventDefault()
}