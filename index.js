function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(key);
  }
}
// Detecing Button Press
function playSound() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", playSound);
}
// Detecting Keyboard Press
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);

})
// Adding Animation
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey); // Making it look like class
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed")
},100);
}
