function Token(x, c){
  // init
  this.d = 56
  this.pos = createVector(x,-this.d)
  this.vel = createVector()
  this.acc = createVector()
  
  this.c = c
  this.ref = ["#C84630","#3943B7"]
  
  this.update = function(){
    this.applyForce(gravity)
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
    this.doCollisions()
    
    this.x = this.pos.x
    this.y = this.pos.y
    
    if (this.vel.y == 0){
      var h = height/6
      board[this.x][floor(this.y/h)] = this.c
    }
  }
  
  this.applyForce = function(f){
    this.acc.add(f)
  }
  
  this.doCollisions = function(){
    var h = height/6
    if (this.pos.y >= 458.3){
      this.pos.y = 458.3
      this.vel.y = 0
    }
    var x = this.pos.x
    var y = floor((this.pos.y-this.d/2)/h)+1
    if (this.v){print(x,y)}
    if (board[x][y] > -1){
      this.pos.y = (y-1)*h+h/2
      this.vel.y = 0
    }
  }
  
  this.draw = function(){
    var w = width/7
    fill(this.ref[this.c])
    ellipse(this.pos.x*w+w/2, this.pos.y, this.d)
  }
}

function newToken(x,c){
  let t = new Token(x,c)
  tokens.push(t)
  return t
}