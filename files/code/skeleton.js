// basic skeleton css
for(i=0;i<10;i++){
  let a = $('<div class=game/>')
  $('<div class=thumb-skeleton/>').appendTo(a)
  $('<div class=name-skeleton/>').appendTo(a)
  a.appendTo($("#skeleton"))
}