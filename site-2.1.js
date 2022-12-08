var i = 0;
var txtEffect = "Atarra banda UP-East pin-210201 ";
var speed = 50;
var text = document.getElementById("web-location");
function typeWriter() {
  if (i < txtEffect.length) {
    text.innerHTML += txtEffect.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();







let myText = document.getElementById("morbid").innerHTML;
let totalSpace = myText.length;
myText = myText.split(" ");
console.log(myText);

let incr = 0;
function appearText() {
  document.getElementById("morbid").innerHTML = "";                                                     
  let newText = giveMeUpdatedText();
  let updatedText = "<span style='color: red;'>" + newText  +"</span>"

  updateCoffe(updatedText);
  
  if(incr == myText.length)
    clearInterval(stopId);
}


function giveMeUpdatedText()
{
    let text = "";
    for(let i=0; i<=incr; i++) {
        text += myText[i] + " ";
    }
    return text;
}


function updateCoffe(text)
{
    document.getElementById("morbid").innerHTML = text;
    for(let i=incr+1; i<myText.length; i++) {
        document.getElementById("morbid").innerHTML += myText[i] + " ";
    }

    incr += 1;
}

let stopId = setInterval(appearText, 200);




