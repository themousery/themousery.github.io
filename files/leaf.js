function setup(){
  frameRate(30)
  canvas = createCanvas(document.body.scrollWidth, document.body.scrollHeight)
  canvas.position(0,0)
  canvas.style('pointer-events', 'none')
  sized = 0
  leafImg = loadImage("/files/leaf.png")
  leaves = []
  colors = [[236,117,5],[244,43,3],[231,14,2],[232,144,5],[216,74,5]]
  t = 0
}

function draw(){
  t++
  if(t>60){
    t = 0;
    newLeaf()
  }
  if(document.body.scrollWidth!=width){windowResized()}
  clear()
  for(let i=leaves.length-1;i>=0;i--){
    let leaf = leaves[i]
    leaf.update()
    leaf.draw()
    if(leaf.y>height){leaves.splice(i,1)}
  }
}

function windowResized(){
  resizeCanvas(document.body.scrollWidth, document.body.scrollHeight)
}


function Leaf(){
  this.color = random(colors)
  this.x = random(width)
  this.ox = this.x
  this.y = -30
  this.dir = 1
  this.update = function(){
    this.y+=2;
    this.x+=this.dir
    if(this.x>this.ox+20){this.dir=-this.dir}
    if(this.x<this.ox-20){this.dir=-this.dir}
  }
  this.draw = function(){
    tint(this.color)
    image(leafImg, this.x, this.y)
  }
}

function newLeaf(){leaves.push(new Leaf())}