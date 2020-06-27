for (var i = 0; i < 7; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHtml = this.innerHTML;

      judge(buttonInnerHtml);
      animationOnPress(buttonInnerHtml);
    }



  );

document.addEventListener("keydown", function(){

var kon = event.key;


judge(kon);
  animationOnPress(kon);

})

}




function judge(x){


        switch (x) {

          case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


          case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

          case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

          case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

          case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


          case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

          default: console.log(buttonInnerHtml);


        }

}


function animationOnPress(pressedKey){

  var activeButton = document.querySelector("." + pressedKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100 )


}
