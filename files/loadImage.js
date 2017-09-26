window.onload = function(){
  $.getJSON("//www.reddit.com/r/loadingicon/.json?jsonp=?", function(data) {
    going = true;
    while (going){
      randompost = data.data.children[Math.floor(Math.random()*data.data.children.length)];
      if (randompost.data.domain == "i.redd.it"){
        $("<img id='gif'/>").attr("src",randompost.data.url).appendTo("#loop")
        going = false
      }
      if (randompost.data.domain == "i.imgur.com"){
        if (randompost.data.url.endsWith(".gif")){
          url = randompost.data.url.slice(0,-4) + ".mp4"
        }
        if (randompost.data.url.endsWith(".gifv")){
          url = randompost.data.url.slice(0,-5) + ".mp4"
        }

        $("<video autoplay=\"autoplay\" loop/ id=\"gif\">").appendTo("#loop")
        $("<source/>").attr("src",url).appendTo("#gif")
        going = false
      }
    }
  });
}

window.onresize = function(){
  gif = document.getElementById("gif");
  if (gif.scrollWidth>window.innerWidth*0.74){
    newWidth = window.innerWidth*0.74
    gif.style.width = newWidth.toString();
    gif.style.height = "auto"
  }
}
