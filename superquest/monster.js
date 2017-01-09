function Monster() {
  this.max = 3;
  this.hp = this.max;
  this.atk = randint(level-1,level);
  this.def = randint(level-1,level);
  if (this.atk <= 0) {
    this.atk = 1;
  }
  if (this.def < 0) {
    this.def = 0
  }
  this.colour = [];
  for (c = 0; c < 3; c++) {
    this.colour.push(randint(0,255));
  }
}
