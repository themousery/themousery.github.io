function setup(){
  speech = new p5.Speech()
  mic = new p5.SpeechRec()
  mic.onResult = showResult
  mic.continuous = true
  mic.start()
  
  customColors = {
    "scion":"cyan",
    "peach":"#FFDAB9"
  }
  
  commands = {}
}

function showResult(){
  let string = mic.resultString.toLowerCase()
  console.log(mic.resultString)
  document.body.style.backgroundColor = string
  if (string in customColors){
    document.body.style.backgroundColor = customColors[string]
  }
}