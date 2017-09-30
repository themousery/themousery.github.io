function collisions(){
  for (j=asteroids.length-1;j>=0;j--){
    asteroid = asteroids[j]
    if (collideRectRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height, player.x, player.y, 44, 70)){
      asteroids.splice(j,1)
    }
    for (k=lasers.length-1;k>=0;k--){
      laser = lasers[k]
      if (collideRectRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height, laser.x, laser.y, 3, 10)){
        asteroids.splice(j,1)
        lasers.splice(k,1)
        score++;
        explode_sound.play()
      }
    }
  }
}

collideRectRect=function(x,y,w,h,x2,y2,w2,h2){return(x+w>=x2&&x<=x2+w2&&y+h>=y2&&y<=y2+h2)}
