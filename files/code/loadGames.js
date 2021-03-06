window.onload = function(){
  // for each item in our array
  $.getJSON("/files/code/games.json", function(data) {
    $.each(data.data, function (i, item) {
      var a = $('<div class=game/>').attr("title", item.desc) // container
      var link = $("<a style=text-decoration:none/>").attr("href", "/games/"+item.id).appendTo(a) // link
      $("<img class='thumb'/>").attr("src", "thumbs/"+item.id+".png").appendTo(link) // thumbnail
      $("<div class='name'/>").append(item.name).appendTo(link) // name of game
      link.appendTo(a) // put the link in the container
      a.appendTo("#games") // put the container in the document
    });
  });
  // only show the container when the images have loaded
  a = $("<img/>")
    .on('load', function() {$("#games").removeClass("hidden");$("#skeleton").remove()})
    .on('error', function() { console.log("error loading image"); })
    .attr("src", 'thumbs/matching.png');
}