function drawui() {
  fill(monsters[on].colour);
  rect(50,300,200,200);

  textSize(20);
  fill(0);
  line(400,0,400,800);

  text("atk: " + monsters[on].atk,  30, 560);
  text("def: " + monsters[on].def, 120, 560);
  text("hp:  " + monsters[on].hp + "/" + monsters[on].max,  210, 560);

  text("monster # " + (on+1), 20, 30);
  text("lvl: " + level, 300, 30)

  text("> attack <", 650, 400);
}
