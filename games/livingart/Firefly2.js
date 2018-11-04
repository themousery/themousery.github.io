function Firefly(x, y, type){
  this.pos = createVector(x,y)
  this.type = type
  this.hue = 0
  
  this.update = func[this.type]
  
  this.draw = function(){
    this.hue++
    off.colorMode(HSB)
    off.stroke(this.hue%360, 100, 100)
    off.point(this.pos.x, this.pos.y)
  }
}

func = {
  "random":function(){
    this.pos.add(p5.Vector.random2D())
  },
  "left":function(){
    this.pos.add(-1,0)
    if(this.pos.x<0){this.dead=true}
  },
  "right":function(){
    this.pos.add(1,0)
    if(this.pos.x>width){this.dead=true}
  },
  "up":function(){
    this.pos.add(0,-1)
    if(this.pos.y<0){this.dead=true}
  },
  "down":function(){
    this.pos.add(0,1)
    if(this.pos.y>height){this.dead=true}
  },
  "follower":function(){
    if (this.hue > 60 && this.pos.dist(createVector(mouseX, mouseY))<2){
      this.dead = true
    }
    let v = createVector(mouseX-this.pos.x, mouseY-this.pos.y).normalize()
    this.pos.add(v)
  },
  "ant":function(){
    let v = createVector(cos(this.pos.x), sin(this.pos.y)).setMag(7)
    this.pos.add(v)
    if(this.pos.y>displayHeight||this.pos.y<0||this.pos.x<0||this.pos.x>displayWidth){
      this.dead = true
    }
  }
}