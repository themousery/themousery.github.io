window.onload = function(){
  $.getJSON("//www.reddit.com/r/perfectloops/.json?jsonp=?", function(data) {
    console.log(data.data.children)
    going = true;
    while (going){
      randompost = data.data.children[Math.floor(Math.random()*data.data.children.length)];
      console.log(randompost)
      if (randompost.data.domain == "i.redd.it"){
        $("<img/>").attr("src",randompost.data.url).appendTo("#loop")
        going = false
      }
      if (randompost.data.domain == "i.imgur.com"){
        if (randompost.data.url.endsWith(".gif")){
          url = randompost.data.url.slice(0, -4) + ".mp4"
        }
        if (randompost.data.url.endsWith(".gifv")){
          url = randompost.data.url.slice(0,-5) + ".mp4"
        }

        $("<video autoplay=\"autoplay\" loop/ id=\"tag\">").appendTo("#loop")
        $("<source/>").attr("src",url).appendTo("#tag")
        going = false
      }
    }

  });
}
