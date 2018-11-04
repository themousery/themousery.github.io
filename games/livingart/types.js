func = {
  "follower":function(i){
    let v = createVector(mouseX-this.pos.x, mouseY-this.pos.y).normalize()
    this.pos.add(v)
  }
}