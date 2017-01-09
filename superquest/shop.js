function drawShop() {
  opts = ["Sword Upgrade - 10",
          "Shield Upgrade - 10",
          "Health Potion - 5",
          "Health Pendant - 30",
          "Quit Shop",]

  textSize(20);

  image(keeper, 120, 500);

  fill(77,11,0);
  rect(0,700,400,190);

  fill(102, 51, 0);
  rect(0,0,400,50);
  fill(255);
  text("Joe's General Store", 70,35);

  fill(0);
  line(400,0,400,800);

push()
textAlign(CENTER, CENTER);
  for (i = 0; i < opts.length; i++) {
    if (selshop === i) {
      text("> " + opts[i] + " <", 700, i*100+200);
    }
    else {
      text(opts[i], 700, i*100+200)
    }
  }
pop();
}
