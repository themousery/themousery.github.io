// stuff relating to the grid of balls (which will hereby be referred to as the "map")

colors = ["#7F16F7", "#F71735", "#F78616", "#168EF7", "#16F738"]

// run once to setup the map with random values
function setupMap(){
  // this function is a MESS
  map = []
  // set up the x dimension
  for (x=0;x<15;x++){
    map[x] = []
    // fill the first seven y rows with balls
    for (y=0;y<7;y++){
      map[x][y] = floor(random(0,5))
    }
    // fill more y rows with blank spots
    for (y=7;y<15;y++){
      map[x][y] = -1
    } // end for
    
    // fill 
    map[x][-1] = -1
  } // end for
  
  // empty padding on the sides to avoid errors (this is very hacky)
  for (x=-1;x<=16;x+=16){
    map[x] = []
    for (y=-1;y<15;y++){
      map[x][y] = -1
    } // end for
  } // end for

  props = []
  for (x=map.length-2;x>=0;x--){
    props[x] = []
    for (y=map[0].length-2;y>=0;y--){
      props[x][y] = {diam:25,dying:false}
    } // end for
  } // end for
} // end function

// runs every frame to render the map
function drawMap(){
  var s = width / (map.length-1 + 0.5) - 0.5 // spacing
  var pad = s // x padding (for hexagon effect)
  
  // loop through every spot on the map
  for (x=map.length-1;x>=0;x--){
    for (y=map[0].length-1;y>=0;y--){
      if (map[x][y]!=-1){
        // offset the rows to make that psuedo-hexagon effect:
        if (y % 2 == 0) pad = s/2+5
        else pad = s +5
        
        // draw the dang thing
        fill(colors[map[x][y]])
        ellipse(x*s+pad,y*s+s/2+5, props[x][y].diam,props[x][y].diam)
      } // end if
    } // end for y
  } // end for x
} // end function

// function to push everything down
function newRow(){
  // push the existing rows down
  for (x=0;x<15;x++){
    for (y=13;y>=1;y--){
      map[x][y] = map[x][y-1] // FIXME
    } // end for
  } // end for
  
  // create a new row at the top
  for (x=0;x<15;x++){
    map[x][0] = floor(random(0,5))
  } // end for
} // end func

// function to convert pixel x,y to x,y on map
function pxToMap(x,y){
  var s = width / (map.length-1 + 0.5) - 0.5 // spacing
  
  var newY = floor((y-(s/2-5)/2)/s) // map y
  newY = constrain(newY, 0,14)
  
  if (newY % 2 == 0) pad = s/2+5
  else pad = s + 5                  // x padding
  
  var newX = floor((x-pad/2)/s) // map x
  newX = constrain(newX, 0, 14)
  
  return [newX, newY]
} // end func

// function to convert map x,y to pixel x,y 
function mapToPx(x,y){
  var s = width / (map.length-1 + 0.5) - 0.5 // spacing
  
  // offset the rows to make that psuedo-hexagon effect:
  if (y % 2 == 0) pad = s/2+5
  else pad = s +5
  
  return [x*s+pad, y*s+s/2+5]
} // end func

// function to check if a given x/y (in the map) is availble for shooty ball to snap to
function isAvailable(x,y){
  // check the eligible neighors
  // we need different checks based on the y value, because of the offset.
  // it's maddening
  if (y==0 && map[x][y] == -1){
    return true
  }
  else if (y%2==0){ // y is even
    return (map[x][y-1]!=-1 || map[x-1][y-1]!=-1 // top neighors
      || map[x-1][y]!=-1 || map[x+1][y]  !=-1) // side neighors
      && map[x][y] == -1 // has to be empty
  }
  else{ // y is odd
    return (map[x][y-1]!=-1 || map[x+1][y-1]!=-1 // top neighors
      || map[x-1][y]!=-1 || map[x+1][y]  !=-1) // side neighors
      && map[x][y] == -1 // has to be empty
  }
} // end function

// function to check if any balls are seperate from the pack - and kill them.
function checkIslands(){
  // make a copy of the map
  map2 = clone(map)
  
  toKill = []
  i = 0
  
  // loop through all the balls to see if they need to be removed
  for (var y=1;y<15;y++){
    for(var x=0;x<15;x++){
      var c = [x,y]
      // if that guy isn't supposed to be there
      
      if (map[x][y] != -1 && !floodIslands(x,y) && props[x][y].dying == false) {
        i++
        props[x][y].dying = true
        let x2 = x
        let y2 = y
        // kill slowly
        new TWEEN.Tween(props[x][y])
          .to({diam:0}, 200)
          .easing(TWEEN.Easing.Quadratic.In)
          .onComplete(function(){
            map[x2][y2] = -1
            props[x2][y2].dying = false
            props[x2][y2].diam = 25
          })
          .delay(100+50*i)
          .start()
      }
    }
  }
}

// algorithm to check islands - see above function
function floodIslands(x,y){
  // if it's not on the map, goodbye
  if (x>14||x<0 || y>14||y<0) return false
  // if the guy we're looking at is empty, do a thing:
  if (map2[x][y] == -1) return false
  
  // if we don't have any cells above us
  if ((y%2==0 && map2[x][y-1]==-1 && (x==0  || map2[x-1][y-1]==-1)) || // even cases
      (y%2==1 && map2[x][y-1]==-1 && (x==14 || map2[x+1][y-1]==-1))){ // odd cases
    map2[x][y] = -1
    if (floodIslands(x-1,y) || floodIslands(x+1,y)){
      map2[x][y] = map[x][y]
      return true
    }
    else return false
  } // end if
  else return true
} // end func

// poppa function for doPops
function actuallyDoPops(x,y, check){
  map[x][y] = check
  
  // give ball little 'bounce' effect when it lands
  props[x][y].diam = 25
  new TWEEN.Tween(props[x][y])
    .to({diam:20}, 100)
    .easing(TWEEN.Easing.Quadratic.In)
    .chain(new TWEEN.Tween(props[x][y])
      .to({diam:25}, 100)
      .easing(TWEEN.Easing.Quadratic.In)
    )
    .start() 
  
  count = 0 // number of matching colors
  toKill = [] // (x,y) of colors that match
  
  // make a clone of the map
  map2 = clone(map) 
  
  // flood fill algorithm
  doPops(x,y,check)
  
  // if there's three matches,
  if (count>=3){
    // loop through all the matches,
    for (i=0;i<count;i++){
      let x = toKill[i][0] // x
      let y = toKill[i][1] // y
      
      // shronk them down then kill them.
      new TWEEN.Tween(props[x][y])
        .to({diam:0}, 200)
        .easing(TWEEN.Easing.Quadratic.In)
        .onComplete(function(){
          map[x][y] = -1
          props[x][y].diam = 25
        })
        .delay(100+50*i)
        .start()
    }
  }
}

// function to check neighors of new landing ball and pop them if same color
function doPops(x,y, check){
  // if it's blank, just move on.
  if (map2[x][y] == -1) return 
  // if it's not our guy, move on.
  if (map2[x][y] != check) return
  // delete itself
  map2[x][y] = -1
  append(toKill, [x,y])
  count++
  
  // check the neighors for same color, go through the same process with them
  try{ doPops(x-1,y, check)}catch(err){} // left neighor
  try{ doPops(x+1,y, check)}catch(err){} // right neighor
  try{ doPops(x,y-1, check)}catch(err){} // one of the top neighors
  try{ doPops(x,y+1, check)}catch(err){} // of the bottom neighors
  
  // even and odd rows have different checks
  if (y%2==0){ // even rows
    try{ doPops(x-1,y-1, check)}catch(err){} // one of the top neighors
    try{ doPops(x-1,y+1, check)}catch(err){} // one of the bottom neighors
  }
  else{ // odd rows
    try{ doPops(x+1,y-1, check)}catch(err){} // one of the top neighors
    try{ doPops(x+1,y+1, check)}catch(err){} // one of the bottom neighors
  }
} // end function