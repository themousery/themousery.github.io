function collisions() {
  for (var i = 0; i < asteroids.length; i++) {
    if (collideRectRect(player.x, player.y, 44, 70, asteroids[i].x, asteroids[i].y, 46, 38)) {
      player.hp -= 1;
      hit.play();
      asteroids.splice(i, 1);
      hud.bleed = true;
      break;
    }
    for (var j = 0; j < lasers.length; j++) {
      if (collideRectRect(asteroids[i].x, asteroids[i].y, 46, 38, lasers[j].x, lasers[j].y, 3, 10)) {
        score += 1;
        explosion.play();
        asteroids.splice(i, 1);
        lasers.splice(j, 1);
        break;
      }
    }
  }
  for (i = 0; i < powerups.length; i++) {
    if (collideRectRect(player.x, player.y, 44, 70, powerups[i].x, powerups[i].y, 16, 15)) {
      powerups.splice(i, 1);
      player.hp += 1;
      powerup.play();
      break;
    }
  }
  for (i = 0; i < aliens.length; i++) {
    for (j = 0; j < lasers.length; j++) {
      if (collideRectRect(aliens[i].x, aliens[i].y, 92, 48, lasers[j].x, lasers[j].y, 3, 10)) {
        aliens[i].hp -= 1;
        explosion.play();
        lasers.splice(j, 1);
        break;
      }
    }
  }
  for (i = 0; i < alasers.length; i++) {
    if (collideRectRect(player.x, player.y, 44, 70, alasers[i].x, alasers[i].y, 3, 10)) {
      player.hp -= 1;
      hit.play();
      alasers.splice(i, 1);
      hud.bleed = true;
      break;
    }
  }
}