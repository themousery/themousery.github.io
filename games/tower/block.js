function Block(colorHue, y, w=blockWidth, x=0, faller=false){
  this.hue = colorHue;
  this.y = y
  this.w = w
  this.x = x
  if (this.x == 0){
    this.x = random([-this.w, width])
  }
  this.dir = 1
  this.faller = faller

  this.update = function(){
    if (!gameover){
      this.x += this.dir*5
      if (this.x>=width-this.w){
        this.dir = -abs(this.dir)
      }
      else if (this.x<=0){
        this.dir = abs(this.dir)
      }
    }
  }
  this.draw = function(i){
    if (this.faller){
      this.y+=10;
      if (this.y>=-cam+height){
        blocks.splice(i, 1)
        currentBlock--;
      }
    }
    fill(this.hue%360,75,85)
    noStroke()
    rect(this.x, this.y, this.w, 50)
  }
  this.doCutoff = function(){
    blockDown = blocks[currentBlock-1]
    if (this.x+this.w < blockDown.x || this.x > blockDown.x+blockDown.w){
      this.faller = true
      gameover = true
    }
    else if (this.x < blockDown.x-handicap){
      newWidth = (this.x+this.w)-blockDown.x
      blocks.push(new Block(this.hue, this.y, newWidth, blockDown.x))
      blocks.push(new Block(this.hue, this.y, this.w-newWidth, this.x, true))
      blocks.push(new Block(this.hue+10, this.y-50, newWidth))
      blocks.splice(currentBlock, 1)
      currentBlock+=2
      score++
    }
    else if (this.x > blockDown.x+handicap){
      newWidth = (blockDown.x+blockDown.w)-this.x;
      blocks.push(new Block(this.hue, this.y, newWidth, this.x));
      blocks.push(new Block(this.hue, this.y, this.w-newWidth, blockDown.x+blockDown.w, true))
      blocks.push(new Block(this.hue+10, this.y-50, newWidth));
      blocks.splice(currentBlock, 1)
      currentBlock+=2
      score++
    }
    else if (this.x >= blockDown.x-handicap && this.x <= blockDown.x+handicap){
      blocks[currentBlock].x = blockDown.x
      blocks.push(new Block(this.hue+10, this.y-50, this.w))
      currentBlock++
      score++
    }
  }
}
