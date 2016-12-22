function spritecollide(sprite, group, kill) {
  output = [];
  for (var i = 0; i < group.length; i++){
    if (group[i].left < sprite.right < group[i].right || group[i].right > sprite.left > group[i].left || group[i].top < sprite.bottom < group[i].bottom || group[i].bottom > sprite.top > group[i].top){
      output.push(i);
      if (kill) {
        group.splice(i, 1);
      }
    }
  }
  return output
  
}
function groupcollide(groupa, groupb, killa, killb) {
  output = [];
  for (var i = 0; i < groupa.length; i++){
    collides = spritecollide(groupa[i], groupb);
    if (collides.length > 0) {
      output.push(i);
      if (killa) {
        groupa.splice(i, 1);
      }
      if (killb) {
        for (var j = 0; j < collides.length; j++) {
          groupb.splice(j, 1);
        }
      }
    }
  }
  return output
}