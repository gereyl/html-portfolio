var numberOfButtons = document.querySelector(".drum").lenght;
for (var i = 0; i < numberOfButtons; i++){
    document.querySelector(".drum")[i].addEventListener("click", function () {
        console.log(this);
    });
}

        //var audio = new Audio("sounds/tom-1.mp3");
        //audio.play();







