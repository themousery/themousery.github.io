var shop;

function preload() {
  font = loadFont('/libraries/SF Pixelate.ttf');
  keeper = loadImage('shopkeeper.png');
}

function setup() {
  cnv = createCanvas(1000,800);
  windowResized();
  level = 0;
  on = 0;
  shop = true;
  over = false;
  selshop = 0;
  monsters = [];
  player = new Player();
  textFont(font);
}

function windowResized() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function keyPressed() {
  if (over) {
    over = false;
    level = 0;
    player = new Player();
    shop = true;
  }
  if (keyCode === 32) {
    if (shop) {
      if (selshop === 0 && player.coins >= 10) {
        player.coins -= 10;
        player.atk += 1;
      }
      if (selshop === 1 && player.coins >= 10) {
        player.coins -= 10;
        player.def += 1;
      }
      if (selshop === 2 && player.coins >= 5 && player.hp < player.max) {
        player.coins -= 5;
        player.hp += 10;
        if (player.hp > player.max) {
          player.hp = player.max;
        }
      }

      if (selshop === 3 && player.coins >= 30) {
        player.coins -= 30;
        player.max += 5;
      }

      if (selshop === 4) {
        shop = false;
        level++;
        monsters = [new Monster(), new Monster(), new Monster()];
        selshop = 0;
        on = 0;
      }
    }
    else {
      if (!(player.atk < monsters[on].def)) {
        monsters[on].hp -= player.atk - monsters[on].def;
      }
      if (!(monsters[on].atk < player.def)) {
        player.hp -= monsters[on].atk - player.def;
      }
    }
  }
  if (keyCode === 46) {
    shop = !shop;
  }
  if (keyCode === 38 && shop && selshop > 0) {
    selshop--;
  }
  if (keyCode === 40 && shop && selshop < 4) {
    selshop++;
  }
}

function draw() {
  background(200);
  text("atk: " + player.atk, 840, 30);
  text("def: " + player.def, 920, 30);
  text("hp:  " + player.hp + "/" + player.max,  700, 30);
  text("coins: " + player.coins, 410, 30);
  if (shop) {
    drawShop();
  }
  else if (shop == false){
    if (monsters[on].hp <= 0) {
      if (on < 2) {
        player.coins += 5;
        on++;
      }
      else {
        player.coins += 5;
        shop = true;
      }
    }
    if (player.hp <= 0) {
      over = true;
      shop = null;
    }
    drawui();
  }
  if (over) {
    push();
    textAlign(CENTER, CENTER);
    textSize(60);
    text("GAME OVER", 500,400);
    textSize(20);
    text("press any key to restart", 500, 600);
    pop();
  }
}
