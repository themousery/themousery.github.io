function drawMenu(){
  fill(22,22,29)
  textAlign(CENTER, CENTER)
  textSize(30)
  noStroke()
  text("Dots and Boxes", width/2, 75)
  buttonOn = -1
  for (i=0;i<2;i++){
    stroke(22,22,29)
    image(img[i], i*250+50, (width-100)/2)
    if (collidePointRect(mouseX,mouseY, i*250+50, (width-100)/2, 100,100)){
      m = true
      buttonOn = i
      noFill()
      stroke(22,22,29)
      strokeWeight(2)
      rect(i*250+50, (width-100)/2, 100,100)
      
      noStroke()
      fill(22,22,29)
      textAlign(CENTER, CENTER)
      textSize(20)
      text(msg[i], width/2, 350)
    }
  }
  if (buttonOn == -1){
    noStroke()
    fill(22,22,29)
    textAlign(CENTER, CENTER)
    textSize(20)
    text("...", width/2, 350)
  }
}