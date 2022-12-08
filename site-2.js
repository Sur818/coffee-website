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

document.getElementById("morbid").innerHTML = "";
let incr = 0;
function appearText() {
  console.log("call ho rha");
  document.getElementById("morbid").style.color = "black";
  document.getElementById("morbid").innerHTML += myText[incr++] + " ";

  if(incr == myText.length)
    clearInterval(stopId);
}

let stopId = setInterval(appearText, 200);


  


// const words = ["CSS3.", "HTML5.", "javascript."];
// let i = 0;
// let timer;

// function typingEffect() {
// 	let word = words[i].split("");
// 	var loopTyping = function() {
// 		if (word.length > 0) {
// 			document.getElementById('word').innerHTML += word.shift();
// 		} else {
// 			deletingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopTyping, 500);
// 	};
// 	loopTyping();
// };

// function deletingEffect() {
// 	let word = words[i].split("");
// 	var loopDeleting = function() {
// 		if (word.length > 0) {
// 			word.pop();
// 			document.getElementById('word').innerHTML = word.join("");
// 		} else {
// 			if (words.length > (i + 1)) {
// 				i++;
// 			} else {
// 				i = 0;
// 			};
// 			typingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopDeleting, 200);
// 	};
// 	loopDeleting();
// };

// typingEffect();


let cartItem=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick =() =>{
  cartItem.classList.toggle('active');
  console.log('hello cart');
}





