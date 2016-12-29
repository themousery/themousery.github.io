function randint(a,b) {
  return int(random(a,b+1));
}

function choice(l) {
  return l[randint(0,l.length-1)];
}
